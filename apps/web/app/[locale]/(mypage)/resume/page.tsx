"use client";

import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Navbar } from "@/app/components/Navbar";
import { ResumeForm } from "./components/ResumeForm";
import { ResumePreview, ResumeData } from "./components/ResumePreview";
import { FaPrint, FaSave } from "react-icons/fa";

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
    portfolioUrl: "",
};

export default function ResumeBuilderPage() {
    const [data, setData] = useState<ResumeData>(INITIAL_DATA);
    const previewRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef: previewRef, // Assign the ref directly
        documentTitle: `Resume_${data.fullNameEn}`,
    });

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
            <Navbar />

            {/* Action Bar */}
            <div className="bg-white border-b px-6 py-3 flex justify-between items-center sticky top-0 z-10">
                <h1 className="text-xl font-bold text-gray-800">Resume Builder</h1>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium">
                        <FaSave /> Save Draft
                    </button>
                    <button
                        onClick={() => handlePrint && handlePrint()}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium"
                    >
                        <FaPrint /> Download PDF
                    </button>
                </div>
            </div>

            <main className="flex-grow flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
                {/* Left Panel: Form Input */}
                <div className="w-full lg:w-1/2 xl:w-5/12 overflow-y-auto p-6 border-r border-gray-200 bg-white">
                    <div className="max-w-xl mx-auto">
                        <ResumeForm data={data} onChange={setData} />
                    </div>
                </div>

                {/* Right Panel: Live Preview */}
                <div className="hidden lg:flex lg:w-1/2 xl:w-7/12 bg-gray-100 items-start justify-center p-8 overflow-y-auto">
                    <div className="scale-[0.8] xl:scale-[0.9] origin-top">
                        <ResumePreview data={data} forwardedRef={previewRef} />
                    </div>
                </div>
            </main>
        </div>
    );
}
