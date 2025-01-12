import CustomerList from '@/components/customer-list';

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex grow flex-row">
      {/* <div className="flex max-w-md">
        <CustomerList />
      </div> */}
      {children}
    </div>
  );
}
