"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup = require("yup");
exports.nameNotLongEnough = 'Name should be at least 3 characters';
exports.sizeNotInEnum = "Size should be one of the following values: 'small', 'medium', 'big'";
exports.validHotDogSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, exports.nameNotLongEnough)
        .max(255)
        .required(),
    price: yup.number().required(),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'big'])
        .required()
});
//# sourceMappingURL=hotDog.js.map