import * as yup from 'yup';
export declare const nameNotLongEnough = "Name should be at least 3 characters";
export declare const sizeNotInEnum = "Size should be one of the following values: 'small', 'medium', 'big'";
export declare const validHotDogSchema: yup.ObjectSchema<yup.Shape<object, {
    name: string;
    price: number;
    size: string;
}>>;
