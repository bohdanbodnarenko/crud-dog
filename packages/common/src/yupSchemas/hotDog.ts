import * as yup from 'yup';

export const nameNotLongEnough = 'Name should be at least 3 characters';
export const sizeNotInEnum =
  "Size should be one of the following values: 'small', 'medium', 'big'";

export const validHotDogSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, nameNotLongEnough)
    .max(255)
    .required(),

  price: yup.number().required(),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'big'])
    .required()
});
