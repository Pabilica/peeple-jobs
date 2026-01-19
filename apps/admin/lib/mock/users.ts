import { User } from "@repo/types";

export const MOCK_USERS: User[] = [
    {
        id: "user-1",
        email: "john.doe@example.com",
        name: "John Doe",
        profileImageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
        visaType: "E-7",
        nationality: "USA",
        preferredLanguage: "en",
        address: {
            city: "Seoul",
            district: "Gangnam-gu",
        },
        role: "job_seeker",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: "user-2",
        email: "jane.smith@example.com",
        name: "Jane Smith",
        profileImageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
        visaType: "F-5",
        nationality: "Canada",
        preferredLanguage: "ko",
        address: {
            city: "Busan",
            district: "Haeundae-gu",
        },
        role: "job_seeker",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];
