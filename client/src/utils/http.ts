// AXIOS
import axios, { AxiosRequestConfig } from 'axios';
// TYPES
import type { AuthResponseType } from '../types';

// axios configuration
export const http = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL, // http://server_url/api
});

http.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

http.interceptors.response.use((config) => config, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get<AuthResponseType>(`${process.env.REACT_APP_API_URL}/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      return http.request(originalRequest);
    } catch (e) {
      console.log('Not Authorized');
    }
  }
  throw error;
});
