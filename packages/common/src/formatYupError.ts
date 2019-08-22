import { ValidationError } from 'yup';

export const formatYupError = (err: ValidationError) => {
  const errors: Array<{ message: string }> = [];
  err.inner.forEach(({ message }) => {
    errors.push({
      message
    });
  });

  return errors;
};
