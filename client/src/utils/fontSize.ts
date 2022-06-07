export const fontSize = (size: string) => {
  switch (size) {
    case 's':
      return '16px';
    case 'n':
      return '20px';
    default:
      return size.includes('px') ? size : `${size}px`;
  }
};
