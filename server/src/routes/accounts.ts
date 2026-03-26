import express from 'express';
import { db, resetDB } from '../db/db';
import { Account } from '../types/types';

const router = express.Router();

router.get('/', async (req, res) => {
  await db.read();
  res.json(db.data?.accounts || []);
});



router.put('/:id', async (req, res) => {
  await db.read();
  const account = db.data?.accounts.find((a: Account) => String(a.id) === (req.params.id));
  if (!account) return res.status(404).json({ message: 'Account not found' });

  account.settings = {
    ...(account.settings || {}),
    ...req.body,
  };

  await db.write();
  res.json(account);
});

export default router;
