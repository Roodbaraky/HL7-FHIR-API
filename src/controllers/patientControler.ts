import { Request, Response } from 'express';
import { fetchPatients, savePatients } from '../models/patient';
import { createFhirClient } from '../utils/fhirClient';
import dotenv from 'dotenv'
dotenv.config()

const fhirClient = createFhirClient({ baseUrl:process.env.FHIR_SERVER_URL!, debug: true });


export const syncPatientsController = async (req: Request, res: Response) => {
    const { page = 1, limit = 5 } = req.query;

    try {

        const response = await fhirClient.get(`/Person?_count=${limit}&_page=${page}`);
        const patients = response.data.entry || [];
        console.log(patients, '<--- patients')


        await savePatients(patients.map((patient: { resource: any; }) => patient.resource));

        res.status(200).json({ message: 'Patients synchronized successfully', data: patients });
    } catch (error) {
        const err = error as Error
        res.status(500).json({ error: `Failed to synchronize patients: ${err?.message}` });
    }
};
