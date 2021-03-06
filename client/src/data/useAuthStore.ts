// ZUSTAND
import create from 'zustand';
// TYPES
import axios, { AxiosError } from 'axios';
import { AuthResponseType } from '../types';
// SERVICE
import { AuthService } from '../service';

export const useAuthStore = create((set: any, get: any) => ({
  user: null,
  isAuth: false,
  tasks: [],
  isUsernameExists: false,
  isLoaded: true,
  error: null,

  registration: async (username: string, password: string) => {
    try {
      const response = await AuthService.registration(username, password);
      localStorage.setItem('token', response.data.accessToken);
      set({ user: response.data.user });
      set({ isAuth: true });
    } catch (e) {
      const err = e as AxiosError | Error;
      set({ error: err.message });
    }
  },

  checkTheUsername: async (username: string): Promise<boolean | undefined> => {
    set({ isLoaded: false });
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/check_username`, { username });
      const { isFree } = response.data;
      set({ isUsernameExists: !isFree });
      return !isFree;
    } catch (e) {
      const err = e as AxiosError | Error;
      set({ error: err.message });
      return true;
    } finally {
      set({ isLoaded: true });
    }
  },

  login: async (username: string, password: string) => {
    try {
      const response = await AuthService.login(username, password);
      localStorage.setItem('token', response.data.accessToken);
      set({ user: response.data.user });
      set({ isAuth: true });
    } catch (e) {
      const err = e as AxiosError | Error;
      set({ error: err.message });
    }
  },

  logout: async () => {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      set({ user: {} });
      set({ isAuth: false });
    } catch (e) {
      const err = e as AxiosError | Error;
      set({ error: err.message });
    }
  },

  checkAuth: async () => {
    set({ isLoaded: false });
    try {
      const response = await axios.get<AuthResponseType>(
        `${process.env.REACT_APP_API_URL}/refresh`,
        { withCredentials: true },
      );
      localStorage.setItem('token', response.data.accessToken);
      set({ user: response.data.user });
      set({ isAuth: true });
    } catch (e) {
      const err = e as AxiosError | Error;
      set({ error: err.message });
    } finally {
      set({ isLoaded: true });
    }
  },
}));
