// ==========================================
// Peeple Jobs - Mock Data
// ==========================================

import type {
    Company,
    Industry,
    JobPosting,
    User,
    Application,
    Resume,
} from "@repo/types";

// Mock Industries
export const industries: Industry[] = [
    {
        id: "1",
        name: "IT/소프트웨어",
        nameEn: "IT/Software",
        icon: "💻",
        jobCount: 128,
    },
    {
        id: "2",
        name: "제조/생산",
        nameEn: "Manufacturing",
        icon: "🏭",
        jobCount: 89,
    },
    {
        id: "3",
        name: "서비스업",
        nameEn: "Service",
        icon: "🛎️",
        jobCount: 156,
    },
    {
        id: "4",
        name: "교육",
        nameEn: "Education",
        icon: "📚",
        jobCount: 45,
    },
    {
        id: "5",
        name: "건설",
        nameEn: "Construction",
        icon: "🏗️",
        jobCount: 67,
    },
    {
        id: "6",
        name: "물류/운송",
        nameEn: "Logistics",
        icon: "🚚",
        jobCount: 78,
    },
    {
        id: "7",
        name: "식품/요식업",
        nameEn: "Food & Restaurant",
        icon: "🍽️",
        jobCount: 112,
    },
    {
        id: "8",
        name: "무역/수출입",
        nameEn: "Trade/Import-Export",
        icon: "🌐",
        jobCount: 34,
    },
];

// Mock Companies
export const companies: Company[] = [
    {
        id: "c1",
        businessNumber: "123-45-67890",
        companyName: "테크스타트 주식회사",
        companyNameEn: "TechStart Inc.",
        logoUrl: "/images/companies/techstart.png",
        coverImageUrl: "/images/companies/techstart-cover.png",
        description:
            "혁신적인 IT 솔루션을 제공하는 스타트업입니다. 외국인 인재와 함께 글로벌 시장을 선도합니다.",
        descriptionEn:
            "An innovative startup providing IT solutions. Leading the global market with international talents.",
        industry: "IT/소프트웨어",
        employeeCount: "50-100",
        website: "https://techstart.kr",
        benefits: ["4대보험", "주 5일 근무", "점심 제공", "재택근무 가능"],
        address: { city: "서울", district: "강남구" },
        status: "approved",
        createdAt: "2024-01-15T00:00:00Z",
        updatedAt: "2024-01-15T00:00:00Z",
    },
    {
        id: "c2",
        businessNumber: "234-56-78901",
        companyName: "글로벌푸드 코리아",
        companyNameEn: "Global Food Korea",
        logoUrl: "/images/companies/globalfood.png",
        coverImageUrl: "/images/companies/globalfood-cover.png",
        description:
            "다양한 나라의 음식을 제공하는 외식 프랜차이즈입니다. 다문화 인재를 환영합니다.",
        descriptionEn:
            "A restaurant franchise offering cuisine from various countries. We welcome multicultural talents.",
        industry: "식품/요식업",
        employeeCount: "100-300",
        website: "https://globalfood.kr",
        benefits: ["4대보험", "식사 제공", "교통비 지원", "직원 할인"],
        address: { city: "서울", district: "마포구" },
        status: "approved",
        createdAt: "2024-02-01T00:00:00Z",
        updatedAt: "2024-02-01T00:00:00Z",
    },
    {
        id: "c3",
        businessNumber: "345-67-89012",
        companyName: "한글로벌 무역",
        companyNameEn: "HanGlobal Trade",
        logoUrl: "/images/companies/hanglobal.png",
        coverImageUrl: "/images/companies/hanglobal-cover.png",
        description:
            "아시아 전역과 무역을 하는 종합 무역회사입니다. 다국어 능통자 우대.",
        descriptionEn:
            "A comprehensive trading company with trade across Asia. Multilingual speakers preferred.",
        industry: "무역/수출입",
        employeeCount: "30-50",
        website: "https://hanglobal.kr",
        benefits: ["4대보험", "해외 출장", "성과급", "자기계발비 지원"],
        address: { city: "인천", district: "중구" },
        status: "approved",
        createdAt: "2024-01-20T00:00:00Z",
        updatedAt: "2024-01-20T00:00:00Z",
    },
];

// Mock Job Postings
export const jobPostings: JobPosting[] = [
    {
        id: "j1",
        companyId: "c1",
        company: companies[0],
        title: "프론트엔드 개발자 (외국인 가능)",
        titleEn: "Frontend Developer (Foreigners Welcome)",
        description:
            "React, TypeScript를 활용한 웹 애플리케이션 개발. 외국인 지원자 환영합니다. E-7 비자 발급 가능.",
        descriptionEn:
            "Web application development using React and TypeScript. Foreign applicants are welcome. E-7 visa sponsorship available.",
        jobType: "full_time",
        location: "서울 강남구",
        salaryMin: 3500000,
        salaryMax: 5000000,
        salaryNegotiable: true,
        visaRequirements: ["E-7", "F-2", "F-4", "F-5"],
        requiredLanguages: ["en"],
        experienceYears: 2,
        skills: ["React", "TypeScript", "Next.js", "CSS"],
        benefits: ["4대보험", "점심 제공", "재택근무", "교육지원"],
        deadline: "2026-02-28T23:59:59Z",
        status: "published",
        viewCount: 234,
        applicationCount: 18,
        createdAt: "2026-01-10T00:00:00Z",
        updatedAt: "2026-01-10T00:00:00Z",
    },
    {
        id: "j2",
        companyId: "c2",
        company: companies[1],
        title: "외국어 가능 매장 매니저",
        titleEn: "Store Manager (Bilingual)",
        description:
            "서울 시내 매장을 운영할 매니저를 모집합니다. 외국어 능통자 우대, 서비스 경험 필요.",
        descriptionEn:
            "Looking for a manager to run our store in Seoul. Bilingual preferred, service experience required.",
        jobType: "full_time",
        location: "서울 마포구",
        salaryMin: 2800000,
        salaryMax: 3500000,
        salaryNegotiable: false,
        visaRequirements: ["E-7", "F-2", "F-4", "F-5", "F-6"],
        requiredLanguages: ["ko", "en"],
        experienceYears: 1,
        skills: ["고객서비스", "매장관리", "팀리더십"],
        benefits: ["4대보험", "식사 제공", "인센티브"],
        deadline: "2026-02-15T23:59:59Z",
        status: "published",
        viewCount: 156,
        applicationCount: 12,
        createdAt: "2026-01-08T00:00:00Z",
        updatedAt: "2026-01-08T00:00:00Z",
    },
    {
        id: "j3",
        companyId: "c3",
        company: companies[2],
        title: "무역 사무직 (중국어/영어)",
        titleEn: "Trade Specialist (Chinese/English)",
        description:
            "중국 및 동남아시아 거래처 관리 및 수출입 업무. 중국어 또는 영어 필수.",
        descriptionEn:
            "Managing clients in China and Southeast Asia. Import/export duties. Chinese or English required.",
        jobType: "full_time",
        location: "인천 중구",
        salaryMin: 3000000,
        salaryMax: 4000000,
        salaryNegotiable: true,
        visaRequirements: ["E-7", "F-2", "F-4", "F-5"],
        requiredLanguages: ["zh", "en"],
        experienceYears: 0,
        skills: ["무역실무", "엑셀", "의사소통"],
        benefits: ["4대보험", "해외출장", "성과급"],
        deadline: "2026-02-20T23:59:59Z",
        status: "published",
        viewCount: 98,
        applicationCount: 8,
        createdAt: "2026-01-12T00:00:00Z",
        updatedAt: "2026-01-12T00:00:00Z",
    },
    {
        id: "j4",
        companyId: "c1",
        company: companies[0],
        title: "백엔드 개발자 (Node.js)",
        titleEn: "Backend Developer (Node.js)",
        description:
            "Node.js, PostgreSQL을 활용한 서버 개발. 글로벌 프로젝트 참여 기회.",
        descriptionEn:
            "Server development using Node.js and PostgreSQL. Opportunity to join global projects.",
        jobType: "full_time",
        location: "서울 강남구",
        salaryMin: 4000000,
        salaryMax: 6000000,
        salaryNegotiable: true,
        visaRequirements: ["E-7", "F-2", "F-4", "F-5"],
        requiredLanguages: ["en"],
        experienceYears: 3,
        skills: ["Node.js", "PostgreSQL", "AWS", "Docker"],
        benefits: ["4대보험", "점심 제공", "재택근무", "스톡옵션"],
        deadline: "2026-03-15T23:59:59Z",
        status: "published",
        viewCount: 312,
        applicationCount: 25,
        createdAt: "2026-01-15T00:00:00Z",
        updatedAt: "2026-01-15T00:00:00Z",
    },
    {
        id: "j5",
        companyId: "c2",
        company: companies[1],
        title: "주방 보조 (파트타임)",
        titleEn: "Kitchen Assistant (Part-time)",
        description:
            "주방 보조 업무, 주 3-4일 근무 가능. 경험 불문, 친절하신 분 환영.",
        descriptionEn:
            "Kitchen assistant work, 3-4 days a week possible. No experience needed, friendly person welcome.",
        jobType: "part_time",
        location: "서울 마포구",
        salaryMin: 12000,
        salaryMax: 12000,
        salaryNegotiable: false,
        visaRequirements: ["E-9", "F-2", "F-4", "F-5", "F-6", "H-1"],
        requiredLanguages: [],
        experienceYears: 0,
        skills: ["요리", "청소"],
        benefits: ["식사 제공", "교통비 지원"],
        deadline: "2026-01-31T23:59:59Z",
        status: "published",
        viewCount: 89,
        applicationCount: 15,
        createdAt: "2026-01-05T00:00:00Z",
        updatedAt: "2026-01-05T00:00:00Z",
    },
    {
        id: "j6",
        companyId: "c3",
        company: companies[2],
        title: "물류 창고 관리자",
        titleEn: "Warehouse Manager",
        description:
            "물류 창고 재고 관리 및 출하 업무 총괄. 운전면허 소지자 우대.",
        descriptionEn:
            "Overall inventory management and shipment duties at the logistics warehouse. Driver's license preferred.",
        jobType: "full_time",
        location: "인천 중구",
        salaryMin: 3200000,
        salaryMax: 3800000,
        salaryNegotiable: true,
        visaRequirements: ["E-9", "F-2", "F-4", "F-5"],
        requiredLanguages: ["ko"],
        experienceYears: 1,
        skills: ["재고관리", "운전", "엑셀"],
        benefits: ["4대보험", "통근버스", "점심 제공"],
        deadline: "2026-02-10T23:59:59Z",
        status: "published",
        viewCount: 145,
        applicationCount: 11,
        createdAt: "2026-01-07T00:00:00Z",
        updatedAt: "2026-01-07T00:00:00Z",
    },
];

// Mock User
export const currentUser: User = {
    id: "u1",
    email: "john.doe@email.com",
    phone: "010-1234-5678",
    name: "John Doe",
    profileImageUrl: "/images/users/john.png",
    visaType: "E-7",
    nationality: "USA",
    preferredLanguage: "en",
    address: { city: "서울", district: "강남구" },
    role: "job_seeker",
    createdAt: "2025-06-01T00:00:00Z",
    updatedAt: "2026-01-15T00:00:00Z",
};

// Mock Resume
export const mockResume: Resume = {
    id: "r1",
    userId: "u1",
    title: "소프트웨어 개발자 이력서",
    isPrimary: true,
    profileImageUrl: "/images/users/john.png",
    summary:
        "3년 경력의 풀스택 개발자로, React와 Node.js 전문. 한국에서 IT 커리어를 쌓고 싶습니다.",
    education: [
        {
            id: "e1",
            institution: "University of California",
            degree: "Bachelor",
            field: "Computer Science",
            startDate: "2018-09-01",
            endDate: "2022-06-15",
            isCurrent: false,
        },
    ],
    experience: [
        {
            id: "ex1",
            company: "Tech Solutions Inc.",
            position: "Frontend Developer",
            description:
                "Developed responsive web applications using React and TypeScript.",
            startDate: "2022-07-01",
            endDate: "2025-05-31",
            isCurrent: false,
        },
    ],
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    certifications: [
        {
            id: "cert1",
            name: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            issueDate: "2024-03-15",
        },
    ],
    portfolioUrl: "https://johndoe.dev",
    createdAt: "2025-06-15T00:00:00Z",
    updatedAt: "2026-01-10T00:00:00Z",
};

// Mock Applications
export const mockApplications: Application[] = [
    {
        id: "a1",
        userId: "u1",
        jobPostingId: "j1",
        jobPosting: jobPostings[0],
        resumeId: "r1",
        coverLetter: "저는 이 포지션에 큰 관심이 있습니다...",
        status: "reviewing",
        appliedAt: "2026-01-12T10:30:00Z",
        updatedAt: "2026-01-15T14:00:00Z",
    },
    {
        id: "a2",
        userId: "u1",
        jobPostingId: "j4",
        jobPosting: jobPostings[3],
        resumeId: "r1",
        coverLetter: "백엔드 개발에 열정이 있습니다...",
        status: "pending",
        appliedAt: "2026-01-16T09:00:00Z",
        updatedAt: "2026-01-16T09:00:00Z",
    },
];

// Helper functions
export function getJobPostingById(id: string): JobPosting | undefined {
    return jobPostings.find((job) => job.id === id);
}

export function getCompanyById(id: string): Company | undefined {
    return companies.find((company) => company.id === id);
}

export function getJobsByIndustry(industry: string): JobPosting[] {
    return jobPostings.filter((job) => job.company?.industry === industry);
}

export function searchJobs(query: string): JobPosting[] {
    const lowerQuery = query.toLowerCase();
    return jobPostings.filter(
        (job) =>
            job.title.toLowerCase().includes(lowerQuery) ||
            job.titleEn?.toLowerCase().includes(lowerQuery) ||
            job.company?.companyName.toLowerCase().includes(lowerQuery) ||
            job.company?.companyNameEn?.toLowerCase().includes(lowerQuery)
    );
}
