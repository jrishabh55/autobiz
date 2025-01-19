import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}

const connection = mysql.createPool(process.env.DATABASE_URL!);

declare global {
  // eslint-disable-next-line no-var
  var _db: ReturnType<typeof drizzle<typeof schema, typeof connection>> | undefined;
}

const db = globalThis._db || drizzle(connection, { schema, mode: 'default' });

if (process.env.NODE_ENV !== 'production') {
  globalThis._db = db;
}

export { db };

export * from './zodSchema';
