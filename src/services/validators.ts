export const validateName = (name: string) => {
  const nombreRegex =
    /^[a-zA-ZÁÉÍÓÚáéíóúÑñ]{2,}(\s+[a-zA-ZÁÉÍÓÚáéíóúÑñ]{2,})+$/;
  return nombreRegex.test(name);
};

export const validateEmail = (email: string) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};
