import HotDog from '../../../models/HotDog';
import { validHotDogSchema, formatYupError } from '@crud-dog/common';

export const resolvers = {
  Mutation: {
    createHotDog: async (_, { hotDog }) => {
      try {
        await validHotDogSchema.validate(hotDog, { abortEarly: false });
      } catch (errors) {
        return { errors: formatYupError(errors) };
      }

      try {
        const newHotDog = new HotDog(hotDog);

        await newHotDog.save();
        return { hotDog: newHotDog };
      } catch (error) {
        if (error.code && error.code === 11000) {
          return {
            errors: [
              {
                message: 'Hot dog with this name already exists'
              }
            ]
          };
        }
        console.log(error);
        return {
          errors: [
            {
              message: error.message
            }
          ]
        };
      }
    }
  }
};
