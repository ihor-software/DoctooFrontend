import axios from 'axios';
import { User } from 'src/types/user.types';
import { Patient } from '../slices/auth';

export const fetchPatient = async (id: User['id'] | undefined) => {
  return axios.get<Patient>(`${process.env.API_BASE_URL}/api/v1/patients/${id}`);
};

export const updatePatient = async (id: number, dto: Partial<Patient>) => {
  return axios.patch<Patient>(`${process.env.API_BASE_URL}/api/v1/patients/${id}`, dto);
};

export const createPatient = async (user_id: number) => {
  return axios.post<Patient>(`${process.env.API_BASE_URL}/api/v1/patients`, { user_id });
};
