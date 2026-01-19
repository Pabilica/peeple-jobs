export interface AdminStats {
    totalUsers: number;
    activeCompanies: number;
    totalJobPostings: number;
    pendingReviews: number;
    revenue: number;
    recentActivity: {
        id: string;
        type: 'user_signup' | 'job_post' | 'report' | 'system';
        message: string;
        createdAt: string;
    }[];
}

export const MOCK_ADMIN_STATS: AdminStats = {
    totalUsers: 1250,
    activeCompanies: 85,
    totalJobPostings: 342,
    pendingReviews: 12,
    revenue: 15400000, // KRW
    recentActivity: [
        {
            id: '1',
            type: 'job_post',
            message: 'New job posted: "Senior React Dev" by TechCorp',
            createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 mins ago
        },
        {
            id: '2',
            type: 'user_signup',
            message: 'New company registration: "Global Systems Inc."',
            createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
        },
        {
            id: '3',
            type: 'report',
            message: 'User report filed against job #1234',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
        },
    ]
};
