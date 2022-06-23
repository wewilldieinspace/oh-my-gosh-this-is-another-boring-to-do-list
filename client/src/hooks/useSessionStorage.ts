// REACT
import { useState } from 'react';

type valueType = number | string | string[] | number[];

export const useSessionStorage = (keyName: string, defaultValue: valueType) => {
  const [storageValue, setValue] = useState(() => {
    try {
      const value = window.sessionStorage.getItem(keyName);

      if (value) {
        return JSON.parse(value);
      }
      window.sessionStorage.setItem(keyName, JSON.stringify(defaultValue));
      return defaultValue;
    } catch (e) {
      return defaultValue;
    }
  });

  const setStorageValue = <T>(value: T) => {
    try {
      window.sessionStorage.setItem(keyName, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
    setValue(value);
  };

  const removeStorageItem = () => {
    try {
      window.sessionStorage.removeItem(keyName);
    } catch (e) {
      console.log(e);
    }
    setValue('');
  };

  return { storageValue, setStorageValue, removeStorageItem };
};
