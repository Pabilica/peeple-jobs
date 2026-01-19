import { getUsers } from "@/lib/api/users";
import { UsersTable } from "@/components/users/users-table";
import { Button } from "@/components/ui/button";
import { requireAdmin } from "@/lib/auth";

export default async function UsersPage() {
    await requireAdmin();
    const users = await getUsers();

    return (
        <div className="container py-8 px-4 md:px-6 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
                    <p className="text-muted-foreground">
                        Manage user accounts, roles, and access.
                    </p>
                </div>
                {/* Add User button - functionality to be added later */}
                <div className="flex items-center gap-2">
                    <Button disabled>Add User</Button>
                </div>
            </div>

            <UsersTable initialUsers={users} />
        </div>
    );
}
