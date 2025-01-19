import { clerkClient } from '@clerk/nextjs/server';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { SearchUsers } from './SearchUsers';

export default async function AdminDashboard({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const { search } = await searchParams;
  const client = await clerkClient();
  const users = search ? (await client.users.getUserList({ query: search })).data : [];

  return (
    <div className="space-y-6">
      <p className="text-lg font-semibold">
        This is the protected admin dashboard restricted to users with the `admin` role.
      </p>

      <SearchUsers />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <Card key={user.id} className="shadow-md">
            <CardHeader>
              <CardTitle>
                {user.firstName} {user.lastName}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                {user.emailAddresses.find((email) => email.id === user.primaryEmailAddressId)?.emailAddress}
              </div>
              <div className="mt-2 text-sm font-medium">{user.publicMetadata.role as string}</div>

              <div className="mt-4 space-y-2">
                <form>
                  <input name="id" type="hidden" value={user.id} />
                  <input name="role" type="hidden" value="admin" />
                  <Button className="w-full" type="submit" variant="default">
                    Make Admin
                  </Button>
                </form>

                <form>
                  <input name="id" type="hidden" value={user.id} />
                  <input name="role" type="hidden" value="moderator" />
                  <Button className="w-full" type="submit" variant="secondary">
                    Make Moderator
                  </Button>
                </form>

                <form>
                  <input name="id" type="hidden" value={user.id} />
                  <Button className="w-full" type="submit" variant="destructive">
                    Remove Role
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
