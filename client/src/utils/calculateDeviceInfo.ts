export const calculateDeviceInfo = (width: number) => {
  if (width <= 768) {
    return {
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    };
  }

  if (width <= 1024) {
    return {
      isMobile: false,
      isTablet: true,
      isDesktop: false,
    };
  }

  return {
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  };
};
