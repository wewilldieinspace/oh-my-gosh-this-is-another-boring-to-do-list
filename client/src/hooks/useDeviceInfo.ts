// REACT
import { useEffect, useCallback, useState } from 'react';
// UTILS
import { calculateDeviceInfo } from '../utils';
// TYPES
import { DeviceInfoType } from '../types';

export const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfoType>(
    calculateDeviceInfo(window.innerWidth),
  );

  const resizeHandler = useCallback(() => {
    const newDeviceInfo = calculateDeviceInfo(window.innerWidth);

    if (deviceInfo !== newDeviceInfo) {
      setDeviceInfo(newDeviceInfo);
    }
  }, [deviceInfo]);

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [deviceInfo, resizeHandler]);

  return { deviceInfo };
};
