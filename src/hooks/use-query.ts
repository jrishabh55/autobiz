import { type Customer, customerSchema, type Message, messageSchema } from '@/lib/db/zodSchema';
import { useQuery } from '@tanstack/react-query';

export const useFetchCustomers = () => {
  return useQuery({
    queryKey: ['customers'],
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
    queryFn: () => fetch('/api/customers').then((res) => res.json()),
    select: (data: { customers: Customer[] }) =>
      data.customers.map((customer: Customer) => customerSchema.parse(customer)),
  });
};

export const useFetchCustomer = (customerId: string) => {
  return useQuery({
    enabled: !!customerId,
    queryKey: ['customer', customerId],
    queryFn: () => fetch(`/api/customers/${customerId}`).then((res) => res.json()),
    select: (data: { customer: Customer }) => customerSchema.parse(data.customer),
  });
};

export const useFetchMessages = (customerId?: string) => {
  return useQuery({
    enabled: !!customerId,
    queryKey: ['messages', customerId],
    queryFn: () => fetch(`/api/customers/${customerId}/messages`).then((res) => res.json()),
    select: (data) => data.messages.map((message: Message) => messageSchema.parse(message)),
  });
};
