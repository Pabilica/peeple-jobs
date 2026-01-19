export interface CompanyStats {
    activeJobs: number;
    totalApplicants: number;
    totalViews: number;
    recentActivity: {
        id: string;
        type: 'application' | 'view' | 'system';
        message: string;
        createdAt: string;
    }[];
}

export const MOCK_COMPANY_STATS: CompanyStats = {
    activeJobs: 3,
    totalApplicants: 42,
    totalViews: 1250,
    recentActivity: [
        {
            id: '1',
            type: 'application',
            message: 'New application for "Senior Frontend Developer"',
            createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
        },
        {
            id: '2',
            type: 'view',
            message: 'Your job "Overseas Sales Manager" is trending',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
        },
        {
            id: '3',
            type: 'system',
            message: 'Your company profile was verified',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
        },
    ]
};
