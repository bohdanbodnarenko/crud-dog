require('dotenv').config();

import { GraphQLServer } from 'graphql-yoga';
import { connect } from 'mongoose';
import { MongoError } from 'mongodb';

import { genSchema } from './utils/genSchema';

const server = new GraphQLServer({
  schema: genSchema() as any,
  context: ({ request }) => ({
    req: request
  })
});

const cors = {
  credentials: true,
  origin: '*'
};

connect(
  process.env.MONGODB_CONN as string,
  { useNewUrlParser: true },
  (err: MongoError) => {
    if (err) {
      console.error(err);
    }
  }
);
const port = 4000;
const app = server
  .start({
    cors,
    port
  })
  .then(() => {
    console.log(`Server is running on http://localhost:${port}`);
  });
