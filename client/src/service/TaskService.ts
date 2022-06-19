// AXIOS
import { AxiosResponse } from 'axios';
// UTILS
import { http } from '../utils';
// TYPES
import { AuthResponseType } from '../types';

export class TaskService {
  static async create(title: string, body: string, finishDate: string):
  Promise<AxiosResponse<any>> {
    return http.post<AuthResponseType>('/create_task', { title, body, finishDate });
  }

  static async getUnfinished():
  Promise<AxiosResponse<AuthResponseType>> {
    return http.post<AuthResponseType>('/login');
  }

  static async registration(username: string, password: string):
    Promise<AxiosResponse<AuthResponseType>> {
    return http.post<AuthResponseType>('/registration', { username, password });
  }

  static async logout(): Promise<void> {
    return http.post('/logout');
  }

  static async refresh(): Promise<void> {
    return http.post('/refresh');
  }
}
