export type JobStatus = 'active' | 'pending' | 'rejected' | 'closed';

export interface JobPosting {
    id: string;
    title: string;
    companyName: string;
    companyId: string;
    status: JobStatus;
    postedDate: string;
    reports: number;
    description: string;
    location: string;
    salary: string;
}

export const MOCK_JOBS_MODERATION: JobPosting[] = [
    {
        id: '1',
        title: 'Senior React Developer',
        companyName: 'TechCorp',
        companyId: '2',
        status: 'active',
        postedDate: '2026-01-19T09:00:00Z',
        reports: 0,
        description: 'Looking for an experienced React developer...',
        location: 'Seoul (Remote)',
        salary: '₩60M - ₩80M',
    },
    {
        id: '2',
        title: 'Marketing Intern (Unpaid)',
        companyName: 'Suspicious Startup',
        companyId: '5',
        status: 'pending',
        postedDate: '2026-01-19T10:30:00Z',
        reports: 2,
        description: 'Great exposure! No pay but equity...',
        location: 'Busan',
        salary: 'Unpaid',
    },
    {
        id: '3',
        title: 'Data Analyst',
        companyName: 'Global Systems Inc.',
        companyId: '6',
        status: 'active',
        postedDate: '2026-01-18T14:15:00Z',
        reports: 1,
        description: 'Analyze user data for insights...',
        location: 'Pangyo',
        salary: '₩50M - ₩70M',
    },
    {
        id: '4',
        title: 'Easy Money Online',
        companyName: 'Unknown',
        companyId: '99',
        status: 'rejected',
        postedDate: '2026-01-17T08:00:00Z',
        reports: 15,
        description: 'Make $5000/day from home!',
        location: 'Remote',
        salary: '$5000/day',
    },
];
