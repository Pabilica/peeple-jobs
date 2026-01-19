export interface Applicant {
    id: string;
    jobId: string;
    userId: string;
    name: string;
    email: string;
    appliedJobTitle: string;
    appliedDate: string;
    status: 'pending' | 'reviewing' | 'interview' | 'rejected' | 'accepted';
    matchScore: number;
    profileImageUrl?: string;
}

export const MOCK_APPLICANTS: Applicant[] = [
    {
        id: 'app-1',
        jobId: 'job-1', // Senior Frontend Developer
        userId: 'user-1',
        name: 'Kim Min-jun',
        email: 'minjun.kim@example.com',
        appliedJobTitle: 'Senior Frontend Developer',
        appliedDate: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
        status: 'pending',
        matchScore: 85,
    },
    {
        id: 'app-2',
        jobId: 'job-1',
        userId: 'user-2',
        name: 'Sarah Connor',
        email: 'sarah.c@example.com',
        appliedJobTitle: 'Senior Frontend Developer',
        appliedDate: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
        status: 'reviewing',
        matchScore: 92,
    },
    {
        id: 'app-3',
        jobId: 'job-2',
        userId: 'user-3',
        name: 'Nguyen Van A',
        email: 'nguyen.v@example.com',
        appliedJobTitle: 'Overseas Sales Manager',
        appliedDate: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
        status: 'interview',
        matchScore: 78,
    },
];
