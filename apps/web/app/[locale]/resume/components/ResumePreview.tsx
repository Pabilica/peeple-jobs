import React from "react";

export type ResumeData = {
    fullNameEn: string;
    fullNameKo: string;
    dob: string;
    gender: string;
    address: string;
    phone: string;
    email: string;
    education: { period: string; school: string; major: string }[];
    experience: { period: string; company: string; role: string; duty: string }[];
    skills: string[];
    languages: { name: string; level: string }[];
    portfolioUrl?: string;
    photoUrl?: string; // Currently not handling actual file upload in preview for simplicity, or could use object URL
};

interface ResumePreviewProps {
    data: ResumeData;
    forwardedRef: React.Ref<HTMLDivElement>;
}

export const ResumePreview = ({ data, forwardedRef }: ResumePreviewProps) => {
    return (
        <div className="w-full bg-gray-100 dark:bg-gray-900 flex justify-center p-4 overflow-auto">
            <div
                ref={forwardedRef}
                className="bg-white text-black shadow-2xl p-[40px] w-[210mm] min-h-[297mm] relative box-border"
                style={{ fontFamily: "'Times New Roman', serif" }}
            >
                {/* Paper Texture Effect (Optional, might affect print quality so keeping it subtle or removing for print) */}

                <h1 className="text-3xl font-serif text-center tracking-[0.5em] font-bold border-b-2 border-black pb-4 mb-6">
                    이 력 서
                </h1>

                <table className="w-full border-collapse border border-black text-[11pt]">
                    <tbody>
                        <tr>
                            <td rowSpan={4} className="w-[30mm] h-[40mm] border border-black p-0 text-center align-middle bg-gray-50">
                                {data.photoUrl ? (
                                    <img src={data.photoUrl} alt="Photo" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-gray-300 text-sm">Photo<br />3x4cm</span>
                                )}
                            </td>
                            <th className="w-[25mm] bg-gray-100 border border-black p-1 text-center font-bold">성 명<br />(Name)</th>
                            <td colSpan={3} className="border border-black p-2 font-bold text-lg">
                                {data.fullNameEn} <span className="text-sm font-normal text-gray-500 ml-2">({data.fullNameKo})</span>
                            </td>
                        </tr>
                        <tr>
                            <th className="bg-gray-100 border border-black p-1 text-center font-bold">생년월일<br />(DOB)</th>
                            <td colSpan={3} className="border border-black p-2">{data.dob} ({data.gender})</td>
                        </tr>
                        <tr>
                            <th className="bg-gray-100 border border-black p-1 text-center font-bold">이 메 일<br />(Email)</th>
                            <td colSpan={3} className="border border-black p-2">{data.email}</td>
                        </tr>
                        <tr>
                            <th className="bg-gray-100 border border-black p-1 text-center font-bold">연 락 처<br />(Tel)</th>
                            <td colSpan={3} className="border border-black p-2">{data.phone}</td>
                        </tr>
                        <tr>
                            <th className="bg-gray-100 border border-black p-1 text-center font-bold">주 소<br />(Address)</th>
                            <td colSpan={4} className="border border-black p-2">{data.address}</td>
                        </tr>
                    </tbody>
                </table>

                {/* Education */}
                <div className="mt-6">
                    <h4 className="text-sm font-bold border-b border-black mb-1 pb-1">학력사항 (Education)</h4>
                    <table className="w-full border-collapse border border-black text-[10pt]">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-black p-1 w-[35%]">기간 (Period)</th>
                                <th className="border border-black p-1 w-[35%]">학교명 (School Name)</th>
                                <th className="border border-black p-1 w-[30%]">전공 (Major)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.education.length > 0 ? (
                                data.education.map((edu, idx) => (
                                    <tr key={idx}>
                                        <td className="border border-black p-1 text-center">{edu.period}</td>
                                        <td className="border border-black p-1 text-center">{edu.school}</td>
                                        <td className="border border-black p-1 text-center">{edu.major}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="h-8"><td className="border border-black"></td><td className="border border-black"></td><td className="border border-black"></td></tr>
                            )}
                            {[...Array(Math.max(0, 3 - data.education.length))].map((_, i) => (
                                <tr key={`empty-edu-${i}`} className="h-8"><td className="border border-black"></td><td className="border border-black"></td><td className="border border-black"></td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Experience */}
                <div className="mt-6">
                    <h4 className="text-sm font-bold border-b border-black mb-1 pb-1">경력사항 (Experience)</h4>
                    <table className="w-full border-collapse border border-black text-[10pt]">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-black p-1 w-[25%]">기간 (Period)</th>
                                <th className="border border-black p-1 w-[25%]">회사명 (Company)</th>
                                <th className="border border-black p-1 w-[20%]">직위 (Role)</th>
                                <th className="border border-black p-1 w-[30%]">담당업무 (Duty)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.experience.length > 0 ? (
                                data.experience.map((exp, idx) => (
                                    <tr key={idx}>
                                        <td className="border border-black p-1 text-center">{exp.period}</td>
                                        <td className="border border-black p-1 text-center">{exp.company}</td>
                                        <td className="border border-black p-1 text-center">{exp.role}</td>
                                        <td className="border border-black p-1 text-center">{exp.duty}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="h-8"><td className="border border-black"></td><td className="border border-black"></td><td className="border border-black"></td><td className="border border-black"></td></tr>
                            )}
                            {[...Array(Math.max(0, 3 - data.experience.length))].map((_, i) => (
                                <tr key={`empty-exp-${i}`} className="h-8"><td className="border border-black"></td><td className="border border-black"></td><td className="border border-black"></td><td className="border border-black"></td></tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Skills & Languages & Portfolio */}
                <div className="mt-6">
                    <h4 className="text-sm font-bold border-b border-black mb-1 pb-1">기타 능력 (Skills & Others)</h4>
                    <table className="w-full border-collapse border border-black text-[10pt]">
                        <tbody>
                            <tr>
                                <th className="bg-gray-100 border border-black p-1 w-[20%] text-center font-bold">언어 (Languages)</th>
                                <td className="border border-black p-2">
                                    {data.languages.map(l => `${l.name} (${l.level})`).join(", ")}
                                </td>
                            </tr>
                            <tr>
                                <th className="bg-gray-100 border border-black p-1 w-[20%] text-center font-bold">기술 (Skills)</th>
                                <td className="border border-black p-2">
                                    {data.skills.join(", ")}
                                </td>
                            </tr>
                            {data.portfolioUrl && (
                                <tr>
                                    <th className="bg-gray-100 border border-black p-1 w-[20%] text-center font-bold">포트폴리오<br />(Portfolio)</th>
                                    <td className="border border-black p-2 text-blue-800 underline">
                                        {data.portfolioUrl}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="mt-auto pt-16 text-center">
                    <p className="text-xs mb-4">위의 내용은 사실과 틀림없음을 확인합니다.<br />(I certify that the information contained in this application is true and correct.)</p>
                    <p className="text-sm font-bold font-serif mb-12">
                        {new Date().toISOString().split('T')[0]}
                    </p>
                    <div className="flex justify-end pr-16 items-center gap-4">
                        <span className="text-xs">작성자 (Applicant):</span>
                        <span className="font-serif font-bold text-lg border-b border-black min-w-[100px] text-center">{data.fullNameEn}</span>
                        <span className="text-xs text-gray-400">(인/Sign)</span>
                    </div>
                </div>

            </div>
        </div>
    );
};
