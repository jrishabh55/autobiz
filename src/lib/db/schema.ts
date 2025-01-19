import { relations } from 'drizzle-orm';
import { boolean, date, mysqlTable, text, timestamp, varchar } from 'drizzle-orm/mysql-core';

// Organizations table
export const organizations = mysqlTable('organizations', {
  id: varchar('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  clerkId: varchar('clerk_id', { length: 255 }).notNull().unique(),
  name: text('name').notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Users table
export const users = mysqlTable('users', {
  id: varchar('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  clerkId: varchar('clerk_id', { length: 255 }).notNull().unique(),
  organizationId: varchar('organization_id', { length: 36 })
    .references(() => organizations.id, { onDelete: 'cascade' })
    .notNull(),
  clerkOrgId: varchar('clerk_org_id', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Customers table
export const customers = mysqlTable('customers', {
  id: varchar('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: varchar('user_id', { length: 36 })
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
  organizationId: varchar('organization_id', { length: 36 })
    .references(() => organizations.id, { onDelete: 'cascade' })
    .notNull(),
  avatar: varchar('avatar', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  mobile: varchar('mobile', { length: 20 }).notNull(),
  gender: varchar('gender', { length: 10 }).$type<'male' | 'female' | 'other'>().notNull(),
  dob: date('dob').notNull(),
  address: text('address').notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Relations
export const organizationsRelations = relations(organizations, ({ many }) => ({
  customers: many(customers),
}));

export const usersRelations = relations(users, ({ many, one }) => ({
  customers: many(customers),
  organization: one(organizations, {
    fields: [users.organizationId],
    references: [organizations.id],
  }),
}));

export const customersRelations = relations(customers, ({ one }) => ({
  organization: one(organizations, {
    fields: [customers.organizationId],
    references: [organizations.id],
  }),
  user: one(users, {
    fields: [customers.userId],
    references: [users.id],
  }),
}));

export const messages = mysqlTable('messages', {
  id: varchar('id', { length: 255 }).primaryKey(),
  organizationId: varchar('organization_id', { length: 255 })
    .notNull()
    .references(() => organizations.id),
  userId: varchar('user_id', { length: 255 })
    .notNull()
    .references(() => users.id),
  customerId: varchar('customer_id', { length: 255 })
    .notNull()
    .references(() => customers.id),
  content: text('content').notNull(),
  direction: varchar('direction', {
    length: 50,
    enum: ['incoming', 'outgoing'],
  }).notNull(),
  status: varchar('status', {
    length: 50,
    enum: ['sent', 'delivered', 'read', 'failed'],
  }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const messagesRelations = relations(messages, ({ one }) => ({
  organization: one(organizations, {
    fields: [messages.organizationId],
    references: [organizations.id],
  }),
  user: one(users, {
    fields: [messages.userId],
    references: [users.id],
  }),
  customer: one(customers, {
    fields: [messages.customerId],
    references: [customers.id],
  }),
}));
