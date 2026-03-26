import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node'

export interface Account {
  id: number;
  name: string;
  settings: Record<string, any>;
}

export interface Data {
  accounts: Account[];
}

const adapter = new JSONFile<Data>('db.json');
export const db = new Low<Data>(adapter, {
  accounts: [],
});

export async function initDB() {
  await db.read();
  db.data ||= { accounts: [] };
  await db.write();
}
export async function resetDB() {
  await db.read();

  db.data = {
    accounts: structuredClone([]),
  };

  await db.write();
}
