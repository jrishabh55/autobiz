import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { customers, messages, organizations, users } from './schema';
import { z } from 'zod';

export const messageSchema = createSelectSchema(messages, {
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export const newMessageSchema = createInsertSchema(messages, {
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export const customerSchema = createSelectSchema(customers, {
  dob: z.coerce.date(),
  gender: z.enum(['male', 'female', 'other']),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export const newCustomerSchema = createInsertSchema(customers, {
  dob: z.coerce.date(),
  gender: z.enum(['male', 'female', 'other']),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});
export const organizationSchema = createSelectSchema(organizations, {
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export const newOrganizationSchema = createInsertSchema(organizations, {
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export const userSchema = createSelectSchema(users, {
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});
export const newUserSchema = createInsertSchema(users, {
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Message = z.infer<typeof messageSchema>;
export type Customer = z.infer<typeof customerSchema>;
export type Organization = z.infer<typeof organizationSchema>;
export type User = z.infer<typeof userSchema>;

export type NewMessage = z.infer<typeof newMessageSchema>;
export type NewCustomer = z.infer<typeof newCustomerSchema>;
export type NewOrganization = z.infer<typeof newOrganizationSchema>;
export type NewUser = z.infer<typeof newUserSchema>;
