// ZUSTAND
import create from 'zustand';
// TYPES
import axios, { AxiosError } from 'axios';
// SERVICE
import { TaskService } from '../service';

export const useTaskStore = create((set: any, get: any) => ({
  todoList: [],
  unfinishedList: [],
  doneList: [],

  isLoaded: true,
  error: null,

  createTask: async (title: string, body: string, finishDate: string) => {
    set({ isLoaded: false });
    try {
      const response = await TaskService.create(title, body, finishDate);
      set({ items: response.data.tasks });
    } catch (e) {
      const err = e as AxiosError | Error;
      set({ error: err.message });
    } finally {
      set({ isLoaded: true });
    }
  },

  getTodoList: async () => {
    set({ isLoaded: false });
    try {
      const response = await axios('./test.json');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      set({ todoList: response.data.todoList });
    } catch (e) {
      const err = e as AxiosError | Error;
      set({ error: err.message });
    } finally {
      set({ isLoaded: true });
    }
  },

  getUnfinishedTasks: async () => {
    set({ isLoaded: false });
    try {
      const response = await axios('./test.json');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      set({ unfinishedList: response.data.inProcess });
    } catch (e) {
      const err = e as AxiosError | Error;
      set({ error: err.message });
    } finally {
      set({ isLoaded: true });
    }
  },

  getDoneTaskList: async () => {
    set({ isLoaded: false });
    try {
      const response = await axios('./test.json');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      set({ doneList: response.data.done });
    } catch (e) {
      const err = e as AxiosError | Error;
      set({ error: err.message });
    } finally {
      set({ isLoaded: true });
    }
  },

}));
