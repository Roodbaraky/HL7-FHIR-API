import { supabase } from '../config/supabaseClient';

export const fetchPatients = async (page: number, limit: number) => {
  const { data, error } = await supabase
    .from('patients')
    .select('*')
    .range((page - 1) * limit, page * limit - 1);

  if (error) {
    throw new Error(`Error fetching patients: ${error.message}`);
  }

  return data;
};


export const savePatients = async (patients: any[]) => {
  const { error } = await supabase
    .from('patients')
    .upsert(patients);

  if (error) {
    throw new Error(`Error saving patients: ${error.message}`);
  }
};
