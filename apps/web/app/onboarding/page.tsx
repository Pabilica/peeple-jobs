"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { VISA_TYPES } from "@/lib/mock";
import {
    FaGlobe,
    FaUser,
    FaPassport,
    FaBriefcase,
    FaArrowRight,
    FaArrowLeft,
    FaCheckCircle
} from "react-icons/fa";

type Step = "language" | "personal" | "visa" | "work";

export default function OnboardingPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [formData, setFormData] = useState({
        language: "en",
        fullName: "",
        phone: "",
        visaType: "",
        workTypes: [] as string[],
    });

    const steps = [
        { id: "language", title: "Language", icon: <FaGlobe /> },
        { id: "personal", title: "Personal Info", icon: <FaUser /> },
        { id: "visa", title: "Visa Status", icon: <FaPassport /> },
        { id: "work", title: "Work Type", icon: <FaBriefcase /> },
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Submit form
            console.log("Submitting:", formData);
            router.push("/dashboard");
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const updateFormData = (key: string, value: any) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const toggleWorkType = (type: string) => {
        setFormData((prev) => {
            const types = prev.workTypes.includes(type)
                ? prev.workTypes.filter((t) => t !== type)
                : [...prev.workTypes, type];
            return { ...prev, workTypes: types };
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">Peeple Jobs</span>
                    <div className="text-sm text-gray-500">
                        Step {currentStep + 1} of {steps.length}
                    </div>
                </div>
            </header>

            <main className="flex-grow flex flex-col items-center py-10 px-4">
                <div className="w-full max-w-3xl space-y-8">

                    {/* Progress Bar */}
                    <div className="relative">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                            <div
                                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                            {steps[currentStep].title}
                        </h2>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-h-[400px]">
                        {/* Step 1: Language */}
                        {currentStep === 0 && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-medium text-gray-900">Select your preferred language</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        { code: "en", label: "English", native: "English" },
                                        { code: "ko", label: "Korean", native: "한국어" },
                                        { code: "zh", label: "Chinese", native: "中文" }
                                    ].map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => updateFormData("language", lang.code)}
                                            className={`p-6 rounded-xl border-2 text-left transition-all ${formData.language === lang.code
                                                    ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
                                                    : "border-gray-200 hover:border-blue-300"
                                                }`}
                                        >
                                            <div className="text-lg font-bold text-gray-900">{lang.native}</div>
                                            <div className="text-gray-500">{lang.label}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Step 2: Personal Info */}
                        {currentStep === 1 && (
                            <div className="space-y-6 max-w-lg mx-auto">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        value={formData.fullName}
                                        onChange={(e) => updateFormData("fullName", e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => updateFormData("phone", e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                                        placeholder="+82 10-1234-5678"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 3: Visa */}
                        {currentStep === 2 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto">
                                {VISA_TYPES.map((visa) => (
                                    <div
                                        key={visa.id}
                                        onClick={() => updateFormData("visaType", visa.id)}
                                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.visaType === visa.id
                                                ? "border-blue-500 bg-blue-50"
                                                : "border-gray-200 hover:border-blue-200"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="material-symbols-outlined text-2xl text-gray-600">{visa.icon}</span>
                                            <span className="font-bold text-lg">{visa.code}</span>
                                        </div>
                                        <div className="text-gray-900 font-medium">{visa.name}</div>
                                        <p className="text-sm text-gray-500 mt-1">{visa.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Step 4: Work Type */}
                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <h3 className="text-lg font-medium text-gray-900">What kind of work are you looking for?</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Full-time", "Part-time", "Internship", "Freelance", "Contract"].map((type) => (
                                        <div
                                            key={type}
                                            onClick={() => toggleWorkType(type)}
                                            className={`cursor-pointer p-4 rounded-xl border-2 flex items-center justify-between transition-all ${formData.workTypes.includes(type)
                                                    ? "border-blue-500 bg-blue-50"
                                                    : "border-gray-200 hover:border-blue-200"
                                                }`}
                                        >
                                            <span className="font-medium text-gray-900">{type}</span>
                                            {formData.workTypes.includes(type) && (
                                                <FaCheckCircle className="text-blue-600" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-4">
                        <button
                            onClick={handleBack}
                            disabled={currentStep === 0}
                            className={`flex items-center px-6 py-3 rounded-lg font-medium ${currentStep === 0
                                    ? "text-gray-400 cursor-not-allowed"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            <FaArrowLeft className="mr-2" /> Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-bold shadow-lg hover:bg-blue-700 transition-colors"
                        >
                            {currentStep === steps.length - 1 ? "Complete" : "Continue"}
                            {currentStep !== steps.length - 1 && <FaArrowRight className="ml-2" />}
                        </button>
                    </div>

                </div>
            </main>
        </div>
    );
}
