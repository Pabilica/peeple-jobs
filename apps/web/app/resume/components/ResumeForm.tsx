"use client";

import React from "react";
import { ResumeData } from "./ResumePreview";

interface ResumeFormProps {
    data: ResumeData;
    onChange: (data: ResumeData) => void;
}

export const ResumeForm = ({ data, onChange }: ResumeFormProps) => {
    const updateField = (field: keyof ResumeData, value: any) => {
        onChange({ ...data, [field]: value });
    };

    const handleEducationChange = (index: number, field: string, value: string) => {
        const newEdu = [...data.education];
        newEdu[index] = { ...newEdu[index], [field]: value };
        updateField("education", newEdu);
    };

    const addEducation = () => {
        updateField("education", [...data.education, { period: "", school: "", major: "" }]);
    };

    const removeEducation = (index: number) => {
        const newEdu = data.education.filter((_, i) => i !== index);
        updateField("education", newEdu);
    };

    // Similar helpers for experience...
    const handleExperienceChange = (index: number, field: string, value: string) => {
        const newExp = [...data.experience];
        newExp[index] = { ...newExp[index], [field]: value };
        updateField("experience", newExp);
    };

    const addExperience = () => {
        updateField("experience", [...data.experience, { period: "", company: "", role: "", duty: "" }]);
    };

    const removeExperience = (index: number) => {
        const newExp = data.experience.filter((_, i) => i !== index);
        updateField("experience", newExp);
    };

    const handleSkillAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const val = e.currentTarget.value.trim();
            if (val && !data.skills.includes(val)) {
                updateField("skills", [...data.skills, val]);
                e.currentTarget.value = "";
            }
        }
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Personal Info */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 border-b pb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold mb-1">Full Name (En)</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            value={data.fullNameEn}
                            onChange={(e) => updateField("fullNameEn", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-1">Full Name (Kr)</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            value={data.fullNameKo}
                            onChange={(e) => updateField("fullNameKo", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-1">Date of Birth</label>
                        <input
                            type="text"
                            placeholder="YYYY. MM. DD"
                            className="w-full p-2 border rounded-lg"
                            value={data.dob}
                            onChange={(e) => updateField("dob", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-1">Gender</label>
                        <select
                            className="w-full p-2 border rounded-lg"
                            value={data.gender}
                            onChange={(e) => updateField("gender", e.target.value)}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-1">Phone</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            value={data.phone}
                            onChange={(e) => updateField("phone", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-1">Email</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            value={data.email}
                            onChange={(e) => updateField("email", e.target.value)}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-bold mb-1">Address</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded-lg"
                            value={data.address}
                            onChange={(e) => updateField("address", e.target.value)}
                        />
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h3 className="text-lg font-bold">Education</h3>
                    <button onClick={addEducation} className="text-sm text-blue-600 font-bold">+ Add</button>
                </div>
                <div className="space-y-4">
                    {data.education.map((edu, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end bg-gray-50 p-3 rounded-lg relative group">
                            <div>
                                <label className="text-xs text-gray-500">Period</label>
                                <input type="text" className="w-full p-2 border rounded text-sm" value={edu.period} onChange={(e) => handleEducationChange(idx, "period", e.target.value)} placeholder="2010.03 ~ 2014.02" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500">School</label>
                                <input type="text" className="w-full p-2 border rounded text-sm" value={edu.school} onChange={(e) => handleEducationChange(idx, "school", e.target.value)} placeholder="University Name" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500">Major</label>
                                <input type="text" className="w-full p-2 border rounded text-sm" value={edu.major} onChange={(e) => handleEducationChange(idx, "major", e.target.value)} placeholder="Computer Science" />
                            </div>
                            <button onClick={() => removeEducation(idx)} className="absolute -top-2 -right-2 bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">x</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h3 className="text-lg font-bold">Experience</h3>
                    <button onClick={addExperience} className="text-sm text-blue-600 font-bold">+ Add</button>
                </div>
                <div className="space-y-4">
                    {data.experience.map((exp, idx) => (
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-gray-50 p-3 rounded-lg relative group">
                            <div>
                                <label className="text-xs text-gray-500">Period</label>
                                <input type="text" className="w-full p-2 border rounded text-sm" value={exp.period} onChange={(e) => handleExperienceChange(idx, "period", e.target.value)} placeholder="2015.01 ~ Present" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500">Company</label>
                                <input type="text" className="w-full p-2 border rounded text-sm" value={exp.company} onChange={(e) => handleExperienceChange(idx, "company", e.target.value)} placeholder="Company Name" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500">Role</label>
                                <input type="text" className="w-full p-2 border rounded text-sm" value={exp.role} onChange={(e) => handleExperienceChange(idx, "role", e.target.value)} placeholder="Developer" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500">Duty</label>
                                <input type="text" className="w-full p-2 border rounded text-sm" value={exp.duty} onChange={(e) => handleExperienceChange(idx, "duty", e.target.value)} placeholder="Description" />
                            </div>
                            <button onClick={() => removeExperience(idx)} className="absolute -top-2 -right-2 bg-red-100 text-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">x</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills & Portfolio */}
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 border-b pb-2">Skills & Additional Info</h3>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">Skills (Press Enter to add)</label>
                    <input type="text" className="w-full p-2 border rounded-lg" onKeyDown={handleSkillAdd} placeholder="e.g. React, Python" />
                    <div className="flex flex-wrap gap-2 mt-2">
                        {data.skills.map(skill => (
                            <span key={skill} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm flex items-center gap-1">
                                {skill}
                                <button onClick={() => updateField("skills", data.skills.filter(s => s !== skill))} className="hover:text-red-500">x</button>
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold mb-1">Portfolio Display URL</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded-lg"
                        value={data.portfolioUrl || ""}
                        onChange={(e) => updateField("portfolioUrl", e.target.value)}
                        placeholder="https://myportfolio.com"
                    />
                </div>
            </section>

        </div>
    );
};
