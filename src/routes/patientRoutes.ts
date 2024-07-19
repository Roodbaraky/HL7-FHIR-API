import { Router } from 'express';
import { syncPatientsController } from '../controllers/patientControler';

const patientRoutes = Router();

patientRoutes.get('/sync-patients', syncPatientsController);

export default patientRoutes;
