import express from 'express';
import { initDB } from './db/db';
import accountsRouter from './routes/accounts';
import cors from 'cors';

async function main() {
  await initDB();

  const app = express();
  app.use(express.json());

  app.use(cors());

  app.use('/accounts', accountsRouter);

  app.listen(5000, () => console.log('Server run on http://localhost:5000'));
}

main();
