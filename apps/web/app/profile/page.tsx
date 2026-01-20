"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { ResumeForm } from "../resume/components/ResumeForm";
import { ResumeData } from "../resume/components/ResumePreview";
import { FaSave } from "react-icons/fa";

const INITIAL_DATA: ResumeData = {
    fullNameEn: "John Doe",
    fullNameKo: "홍길동",
    dob: "1995. 05. 20",
    gender: "Male",
    phone: "010-1234-5678",
    email: "john@example.com",
    address: "Seoul, Gangnam-gu, Teheran-ro 123",
    education: [],
    experience: [],
    skills: [],
    languages: [],
    portfolioUrl: "https://john.portfolio.com",
};

export default function ProfilePage() {
    const [data, setData] = useState<ResumeData>(INITIAL_DATA);

    const handleSave = () => {
        console.log("Saving profile:", data);
        alert("Profile saved successfully!");
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-sm"
                        >
                            <FaSave /> Save Changes
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <p className="text-gray-500 mb-8">
                            Update your personal information and portfolio here. This information will be used to generate your resume.
                        </p>
                        <ResumeForm data={data} onChange={setData} />
                    </div>
                </div>
            </main>
        </div>
    );
}
