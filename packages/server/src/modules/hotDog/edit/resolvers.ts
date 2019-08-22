import HotDog from '../../../models/HotDog';

export const resolvers = {
  Mutation: {
    editHotDot: async (_, args) => {
      const { _id } = args;
      try {
        await HotDog.updateOne({ _id }, args);
        return null;
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
