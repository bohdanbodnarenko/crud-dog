"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatYupError = (err) => {
    const errors = [];
    err.inner.forEach(({ message }) => {
        errors.push({
            message
        });
    });
    return errors;
};
//# sourceMappingURL=formatYupError.js.map