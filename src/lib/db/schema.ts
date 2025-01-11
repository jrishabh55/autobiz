import { mysqlTable, text, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const customers = mysqlTable('customers', {
  id: varchar('id', { length: 255 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  phoneNumber: varchar('phone_number', { length: 255 }).notNull().unique(),
  email: varchar('email', { length: 255 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const messages = mysqlTable('messages', {
  id: varchar('id', { length: 255 }).primaryKey(),
  customerId: varchar('customer_id', { length: 255 }).notNull().references(() => customers.id),
  content: text('content').notNull(),
  direction: varchar('direction', { length: 50, enum: ['incoming', 'outgoing'] }).notNull(),
  status: varchar('status', { length: 50, enum: ['sent', 'delivered', 'read', 'failed'] }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
}); 