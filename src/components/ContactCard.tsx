import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Customer } from '@/lib/db';
import { cn } from '@/lib/utils';
import { MessageCircle, Phone } from 'lucide-react';

interface ContactCardProps {
  contact: Customer;
  onSend?: (contact: Customer) => void;
  sending?: boolean;
}

export function ContactCard({ contact, onSend, sending = false }: ContactCardProps) {
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
      {onSend && (
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onSend(contact)}
          disabled={sending}
          className={cn(
            'transition-colors',
            contact.gender === 'male' &&
              'hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-950 dark:hover:text-blue-300',
            contact.gender === 'female' &&
              'hover:bg-pink-100 hover:text-pink-700 dark:hover:bg-pink-950 dark:hover:text-pink-300'
          )}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          {sending ? 'Sending...' : 'Send Message'}
        </Button>
      )}
    </div>
  );
}
