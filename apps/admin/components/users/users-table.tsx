"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Search, Shield, ShieldAlert, UserCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { createClient } from "@/lib/supabase/client";

type User = {
    id: string;
    fullName: string;
    email: string;
    role: string;
    status: string;
    joinDate: string;
    companyName?: string;
};

interface UsersTableProps {
    initialUsers: User[];
}

export function UsersTable({ initialUsers }: UsersTableProps) {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [search, setSearch] = useState("");

    const filteredUsers = users.filter(user =>
        user.fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    const handleUpdateStatus = async (userId: string, newStatus: 'active' | 'suspended') => {
        // Optimistic update
        setUsers(prev => prev.map(u => u.id === userId ? { ...u, status: newStatus } : u));

        try {
            const supabase = createClient();
            const { error } = await supabase.from('users').update({ status: newStatus }).eq('id', userId);
            if (error) throw error;
        } catch (error) {
            console.error("Failed to update status", error);
            // Revert on error
            setUsers(prev => prev.map(u => u.id === userId ? { ...u, status: newStatus === 'active' ? 'suspended' : 'active' } : u));
            alert("Failed to update status");
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 max-w-sm">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[250px]">User</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredUsers.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-9 w-9">
                                            <AvatarFallback>
                                                {user.fullName ? user.fullName.substring(0, 2).toUpperCase() : 'U'}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-semibold">{user.fullName}</div>
                                            <div className="text-xs text-muted-foreground">{user.email}</div>
                                            {user.companyName && (
                                                <div className="text-xs text-primary font-medium">{user.companyName}</div>
                                            )}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="capitalize flex items-center gap-1">
                                        {user.role === 'admin' && <Shield className="h-3 w-3" />}
                                        {user.role}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={
                                        user.status === 'active' ? 'default' :
                                            user.status === 'suspended' ? 'destructive' : 'secondary'
                                    }>
                                        {user.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    {new Date(user.joinDate).toLocaleDateString()}
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem onClick={() => { }}>View details</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            {user.status !== 'active' && (
                                                <DropdownMenuItem onClick={() => handleUpdateStatus(user.id, 'active')}>
                                                    <UserCheck className="mr-2 h-4 w-4" />
                                                    Activate
                                                </DropdownMenuItem>
                                            )}
                                            {user.status !== 'suspended' && (
                                                <DropdownMenuItem className="text-destructive" onClick={() => handleUpdateStatus(user.id, 'suspended')}>
                                                    <ShieldAlert className="mr-2 h-4 w-4" />
                                                    Suspend
                                                </DropdownMenuItem>
                                            )}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
