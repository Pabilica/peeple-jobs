export type UserRole = 'seeker' | 'company' | 'admin';
export type UserStatus = 'active' | 'suspended' | 'pending';

export interface User {
    id: string;
    email: string;
    fullName: string;
    role: UserRole;
    status: UserStatus;
    joinDate: string;
    companyName?: string;
    avatarUrl?: string;
}

export const MOCK_USERS: User[] = [
    {
        id: '1',
        email: 'john.doe@example.com',
        fullName: 'John Doe',
        role: 'seeker',
        status: 'active',
        joinDate: '2025-10-15T10:00:00Z',
    },
    {
        id: '2',
        email: 'jane.smith@techcorp.com',
        fullName: 'Jane Smith',
        companyName: 'TechCorp',
        role: 'company',
        status: 'active',
        joinDate: '2025-11-20T14:30:00Z',
    },
    {
        id: '3',
        email: 'admin@peeple.com',
        fullName: 'Super Admin',
        role: 'admin',
        status: 'active',
        joinDate: '2025-01-01T00:00:00Z',
    },
    {
        id: '4',
        email: 'scammer@fake.com',
        fullName: 'Fake User',
        role: 'seeker',
        status: 'suspended',
        joinDate: '2025-12-01T09:15:00Z',
    },
    {
        id: '5',
        email: 'startup@founder.com',
        fullName: 'Alex Founder',
        companyName: 'NextGen AI',
        role: 'company',
        status: 'pending',
        joinDate: '2026-01-18T16:00:00Z',
    },
];
