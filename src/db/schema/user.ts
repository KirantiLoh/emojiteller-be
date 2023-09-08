import { sql } from 'drizzle-orm';
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  created_at: timestamp('created_at')
    .notNull()
    .default(sql`now()`),
});
