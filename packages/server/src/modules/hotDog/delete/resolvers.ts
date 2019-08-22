import { Types } from 'mongoose';

import HotDog from '../../../models/HotDog';

export const resolvers = {
  Mutation: {
    deleteHotDog: async (_, { _id }) => {
      try {
        if (!Types.ObjectId.isValid(_id)) {
          return {
            errors: [
              {
                message: 'Not a valid hot dog id'
              }
            ]
          };
        }
        await HotDog.remove({ _id });
        return { _id };
      } catch (error) {
        return {
          errors: [
            {
              message: error.message
            }
          ]
        };
      }

      return null;
    }
  }
};
