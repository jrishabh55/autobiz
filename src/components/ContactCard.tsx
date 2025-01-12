import { Badge } from '@/components/ui/badge';
import { Customer } from '@/lib/db';
import { cn } from '@/lib/utils';
import { Phone } from 'lucide-react';

interface ContactCardProps {
  contact: Customer;
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-card hover:shadow-md transition-shadow">
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <h3 className="font-medium">{contact.name}</h3>
          <Badge
            variant="outline"
            className={cn(
              'capitalize',
              contact.gender === 'male' &&
                'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800',
              contact.gender === 'female' &&
                'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800'
            )}
          >
            {contact.gender}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Phone className="h-3 w-3 mr-1" />
          {contact.mobile}
        </div>
        {contact.address && <p className="text-sm text-muted-foreground italic">&quot;{contact.address}&quot;</p>}
      </div>
    </div>
  );
}
