export default (value: string): string => {
  return value.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).toUpperCase();
};
