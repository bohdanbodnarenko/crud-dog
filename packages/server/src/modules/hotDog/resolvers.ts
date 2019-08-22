import { Types } from 'mongoose';
import HotDog from '../../models/HotDog';

export const resolvers = {
  Query: {
    findHotDogs: async (_, { ids, limit, offset }) => {
      try {
        if (!ids) {
          return HotDog.find()
            .skip(offset)
            .limit(limit);
        }
        ids = ids.filter((id: string) => Types.ObjectId.isValid(id));
        const hotDogs = await HotDog.find({ _id: { $in: ids } })
          .skip(offset)
          .limit(limit);
        return hotDogs;
      } catch (error) {
        console.error(error);
        return [
          {
            message: 'server error'
          }
        ];
      }
    }
  }
};
