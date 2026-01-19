export type VisaType = {
    id: string;
    code: string;
    name: string;
    description: string;
    icon: string;
    colorClass: string;
};

export const VISA_TYPES: VisaType[] = [
    {
        id: 'e7',
        code: 'E-7',
        name: 'Specific Activity',
        description: 'Professional work & office jobs. Requires sponsorship.',
        icon: 'business_center',
        colorClass: 'text-primary bg-primary/10',
    },
    {
        id: 'd2',
        code: 'D-2',
        name: 'Student',
        description: 'Study & part-time work allowed (with permission).',
        icon: 'school',
        colorClass: 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-900/20',
    },
    {
        id: 'd10',
        code: 'D-10',
        name: 'Job Seeker',
        description: 'Looking for employment or internship opportunities.',
        icon: 'person_search',
        colorClass: 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20',
    },
    {
        id: 'f_series',
        code: 'F-Series',
        name: 'Resident / Marriage',
        description: 'Long-term residency (F-2, F-5, F-6) with fewer work restrictions.',
        icon: 'family_restroom',
        colorClass: 'text-pink-600 bg-pink-50 dark:text-pink-400 dark:bg-pink-900/20',
    },
    {
        id: 'e9',
        code: 'E-9',
        name: 'Non-professional',
        description: 'Manufacturing, agriculture, and industrial labor.',
        icon: 'factory',
        colorClass: 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20',
    },
    {
        id: 'h1',
        code: 'H-1',
        name: 'Working Holiday',
        description: 'Temporary stay for holiday and short-term work.',
        icon: 'flight_takeoff',
        colorClass: 'text-teal-600 bg-teal-50 dark:text-teal-400 dark:bg-teal-900/20',
    },
];

export const MOCK_USER_STATS = {
    profileViews: 124,
    searchAppearances: 45,
    applications: 12,
    interviews: 3,
};

export const RECOMMENDED_JOBS = [
    {
        id: '1',
        title: 'Senior Product Designer',
        company: 'Samsung Electronics',
        location: 'Seoul, Gangnam',
        type: 'Full-time',
        postedTime: '2h ago',
        logo: 'S',
        logoColor: 'text-blue-600',
        visaSupport: true,
        salary: '₩60M - ₩80M',
        tags: ['E-7 Visa Sponsored', 'English Native', 'Korean Level 3+'],
        isNew: true,
    },
    {
        id: '2',
        title: 'Global Marketing Lead',
        company: 'LG CNS',
        location: 'Seoul, Magok',
        type: 'Contract',
        postedTime: '5h ago',
        logo: 'L',
        logoColor: 'text-red-600',
        visaSupport: true,
        salary: '₩50M - ₩70M',
        tags: ['F-Series Preferred', 'Urgent Hiring', 'No Korean Req'],
    },
    {
        id: '3',
        title: 'Hospitality Manager',
        company: 'Hyatt Regency',
        location: 'Incheon Airport',
        type: 'Shift Work',
        postedTime: '1d ago',
        logo: 'H',
        logoColor: 'text-emerald-600',
        visaSupport: true,
        salary: 'Negotiable',
        tags: ['Visa Support', 'Service Industry', 'Shift Work'],
        isNew: true,
    },
    {
        id: '4',
        title: 'English Content Writer',
        company: 'Naver Corp',
        location: 'Seongnam, Bundang',
        type: 'Freelance',
        postedTime: '3d ago',
        logo: 'N',
        logoColor: 'text-green-500',
        visaSupport: false,
        salary: '₩40M - ₩50M',
        tags: ['Remote', 'Writing', 'Content'],
    },
    {
        id: '5',
        title: 'Frontend Developer',
        company: 'Toss',
        location: 'Seoul, Gangnam',
        type: 'Full-time',
        postedTime: '1w ago',
        logo: 'T',
        logoColor: 'text-blue-500',
        visaSupport: true,
        salary: '₩70M - ₩100M',
        tags: ['E-7 Sponsored', 'React', 'TypeScript'],
    },
];
