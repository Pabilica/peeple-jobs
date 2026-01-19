// ==========================================
// Peeple Jobs - Type Definitions
// ==========================================

// User Types
export type UserRole = "job_seeker" | "company" | "admin";

export type VisaType =
    | "E-7"
    | "E-9"
    | "F-2"
    | "F-4"
    | "F-5"
    | "F-6"
    | "D-10"
    | "H-1"
    | "other";

export type Language = "ko" | "en" | "zh" | "vi" | "th";

export type JobType =
    | "full_time"
    | "part_time"
    | "contract"
    | "internship"
    | "freelance";

export type ApplicationStatus =
    | "pending"
    | "reviewing"
    | "interview"
    | "accepted"
    | "rejected";

// User
export interface User {
    id: string;
    email: string;
    phone?: string;
    name: string;
    profileImageUrl?: string;
    visaType?: VisaType;
    nationality?: string;
    preferredLanguage: Language;
    address?: Address;
    role: UserRole;
    createdAt: string;
    updatedAt: string;
}

export interface Address {
    city: string;
    district?: string;
    detail?: string;
}

// Company
export interface Company {
    id: string;
    businessNumber: string;
    companyName: string;
    companyNameEn?: string;
    logoUrl?: string;
    coverImageUrl?: string;
    description?: string;
    descriptionEn?: string;
    industry: string;
    employeeCount?: string;
    website?: string;
    benefits?: string[];
    address?: Address;
    status: "pending" | "approved" | "rejected";
    createdAt: string;
    updatedAt: string;
}

// Job Posting
export interface JobPosting {
    id: string;
    companyId: string;
    company?: Company;
    title: string;
    titleEn?: string;
    description: string;
    descriptionEn?: string;
    jobType: JobType;
    location: string;
    salaryMin?: number;
    salaryMax?: number;
    salaryNegotiable: boolean;
    visaRequirements: VisaType[];
    requiredLanguages?: Language[];
    experienceYears?: number;
    skills?: string[];
    benefits?: string[];
    deadline?: string;
    status: "draft" | "published" | "closed";
    viewCount: number;
    applicationCount: number;
    createdAt: string;
    updatedAt: string;
}

// Resume
export interface Resume {
    id: string;
    userId: string;
    title: string;
    isPrimary: boolean;
    profileImageUrl?: string;
    summary?: string;
    education: Education[];
    experience: Experience[];
    skills: string[];
    certifications: Certification[];
    portfolioUrl?: string;
    portfolioFiles?: string[];
    createdAt: string;
    updatedAt: string;
}

export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    description?: string;
    startDate: string;
    endDate?: string;
    isCurrent: boolean;
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    issueDate: string;
    expiryDate?: string;
}

// Application
export interface Application {
    id: string;
    userId: string;
    user?: User;
    jobPostingId: string;
    jobPosting?: JobPosting;
    resumeId: string;
    resume?: Resume;
    coverLetter?: string;
    status: ApplicationStatus;
    appliedAt: string;
    updatedAt: string;
}

// Bookmark
export interface Bookmark {
    id: string;
    userId: string;
    jobPostingId: string;
    jobPosting?: JobPosting;
    createdAt: string;
}

// Industry Category
export interface Industry {
    id: string;
    name: string;
    nameEn: string;
    icon: string;
    jobCount: number;
}

// Notification
export interface Notification {
    id: string;
    userId: string;
    title: string;
    message: string;
    type: "application" | "message" | "system";
    isRead: boolean;
    createdAt: string;
}
