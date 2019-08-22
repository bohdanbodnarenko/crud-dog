import { ValidationError } from 'yup';
export declare const formatYupError: (err: ValidationError) => {
    message: string;
}[];
