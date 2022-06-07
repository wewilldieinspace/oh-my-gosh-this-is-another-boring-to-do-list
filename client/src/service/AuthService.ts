// AXIOS
import { AxiosResponse } from 'axios';
// UTILS
import { http } from '../utils';
// TYPES
import { AuthResponseType } from '../types';

export class AuthService {
  static async login(username: string, password: string):
  Promise<AxiosResponse<AuthResponseType>> {
    return http.post<AuthResponseType>('/login', { username, password });
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
