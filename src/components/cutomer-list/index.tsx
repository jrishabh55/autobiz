import { ContactCard } from '../ContactCard';
import { getCustomers } from './customer-list.action';

const CustomerList = async () => {
  const customers = await getCustomers();
  return (
    <div className="grid grid-cols-2 gap-4">
      {customers.map((customer) => (
        <ContactCard key={customer.id} contact={customer} />
      ))}
    </div>
  );
};

export default CustomerList;
