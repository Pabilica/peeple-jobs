'use client';

import React, { useState } from 'react';
import { Navbar } from '@/app/components/Navbar';

// Mock Interview Data
const MOCK_INTERVIEWS = [
    {
        id: 'int-1',
        company: 'Toss',
        companyLogo: 'T',
        companyLogoColor: 'text-blue-500',
        role: 'Senior Frontend Engineer',
        date: '2023-11-15',
        time: '14:00 PM',
        type: 'Video Call (Google Meet)',
        status: 'Scheduled', // Scheduled, Completed, Canceled
        statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
        id: 'int-2',
        company: 'Danggeun Market',
        companyLogo: 'D',
        companyLogoColor: 'text-orange-500',
        role: 'Product Designer',
        date: '2023-11-20',
        time: '10:00 AM',
        type: 'On-site',
        status: 'Pending Action', // Pending confirmation from user
        statusColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    },
    {
        id: 'int-3',
        company: 'Line',
        companyLogo: 'L',
        companyLogoColor: 'text-green-500',
        role: 'Backend Developer',
        date: '2023-10-30',
        time: '11:00 AM',
        type: 'Video Call',
        status: 'Completed',
        statusColor: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
    }
];

export default function InterviewsPage() {
    const [interviews, setInterviews] = useState(MOCK_INTERVIEWS);

    const handleAction = (id: string, action: 'accept' | 'cancel' | 'reschedule') => {
        if (action === 'accept') {
            setInterviews(prev => prev.map(int =>
                int.id === id ? { ...int, status: 'Scheduled', statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' } : int
            ));
            alert('Interview accepted!');
        } else if (action === 'cancel') {
            if (confirm('Are you sure you want to cancel this interview?')) {
                setInterviews(prev => prev.map(int =>
                    int.id === id ? { ...int, status: 'Canceled', statusColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' } : int
                ));
            }
        } else if (action === 'reschedule') {
            alert('Redirecting to rescheduling options... (Mock)');
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
            <Navbar />

            <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Interviews</h1>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your upcoming interviews and schedule.</p>
                        </div>
                        <button className="px-4 py-2 bg-primary text-white rounded-xl font-bold hover:bg-teal-700 transition-colors">
                            Add to Calendar
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        {interviews.map((interview) => (
                            <div key={interview.id} className="bg-white dark:bg-[#1e1e1e] p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
                                {/* Date Box */}
                                <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
                                    <span className="text-xs font-bold text-slate-500 uppercase">{new Date(interview.date).toLocaleString('default', { month: 'short' })}</span>
                                    <span className="text-xl font-black text-slate-900 dark:text-white">{new Date(interview.date).getDate()}</span>
                                </div>

                                {/* Info */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${interview.statusColor}`}>
                                            {interview.status}
                                        </span>
                                        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">videocam</span>
                                            {interview.type}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{interview.role}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">with {interview.company} • {interview.time}</p>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 w-full md:w-auto">
                                    {interview.status === 'Pending Action' && (
                                        <button
                                            onClick={() => handleAction(interview.id, 'accept')}
                                            className="flex-1 md:flex-none px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-teal-700 transition-colors"
                                        >
                                            Accept
                                        </button>
                                    )}
                                    {(interview.status === 'Scheduled' || interview.status === 'Pending Action') && (
                                        <>
                                            <button
                                                onClick={() => handleAction(interview.id, 'reschedule')}
                                                className="flex-1 md:flex-none px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                            >
                                                Reschedule
                                            </button>
                                            <button
                                                onClick={() => handleAction(interview.id, 'cancel')}
                                                className="flex-1 md:flex-none px-4 py-2 border border-slate-200 dark:border-slate-700 text-red-500 rounded-lg font-bold text-sm hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    )}
                                    {interview.status === 'Completed' && (
                                        <button className="flex-1 md:flex-none px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-500 rounded-lg font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" disabled>
                                            View Notes
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {interviews.length === 0 && (
                        <div className="p-12 text-center bg-white dark:bg-[#1e1e1e] rounded-2xl border border-slate-100 dark:border-slate-800">
                            <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">event_busy</span>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">No interviews scheduled.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
