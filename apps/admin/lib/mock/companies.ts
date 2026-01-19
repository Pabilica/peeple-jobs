import { Company } from "@repo/types";

export const MOCK_COMPANIES: Company[] = [
    {
        id: "company-1",
        businessNumber: "123-45-67890",
        companyName: "Global Tech Korea",
        companyNameEn: "Global Tech Korea",
        logoUrl: "https://api.dicebear.com/7.x/initials/svg?seed=GT",
        description: "Leading tech company in Korea.",
        industry: "IT",
        address: {
            city: "Seoul",
            district: "Mapo-gu",
        },
        status: "approved",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
    {
        id: "company-2",
        businessNumber: "987-65-43210",
        companyName: "K-Food Exports",
        companyNameEn: "K-Food Exports",
        logoUrl: "https://api.dicebear.com/7.x/initials/svg?seed=KF",
        description: "Exporting Korean food to the world.",
        industry: "Trade",
        address: {
            city: "Incheon",
            district: "Yeonsu-gu",
        },
        status: "approved",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    },
];
