'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Mock Conversations (Job Seekers)
const MOCK_CONVERSATIONS = [
    {
        id: 'conv-1',
        name: 'Min-ji Kim',
        role: 'Frontend Dev',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYDMPt3wL6XhvZUofryIE3gKEv-puAVpJc8N5gYEBPM2-SRbTiAETQXy9N38b1yqlJGQZ25OgqYWz7u_c9hfuaMWZgir7UYaUfEDiX00_0PA2Z4rQ5LX_0zWdLMgaNivWqUsbWI6E1MHhfTmLZmaSzVan79b337pQR9t0_Mfzxaly4wSd2R--v0u1q_KI14b4UuKzZPLAhSufeXNGjYm36uhvUP1VL0jOcVRvdyHYIRPASpnXFeRJXRYnGdZ59XwmG44UB2H2muUQ',
        lastMessage: 'Thank you for scheduling the interview. See you then!',
        time: '10:45 AM',
        unread: 1,
        online: true,
    },
    {
        id: 'conv-2',
        name: 'John Smith',
        role: 'Marketing Manager',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByrpGx3eg8QAKwAfzB43xGteGymAOYvjn4zzWlV-_vwHWuw5-ckPO6yzr-ia4T-Mwm95DJuBgN2IP7ddrnJz_LFi9RxZvJ3bO9n1LX2_Fq-1PJvP8xcqn6OkUT2gQa1KL884tjzKODmTN--2W9M0dh3hVl5ZDVA60_gl4smP-4U13Am5Xnv3loxwVaCovtjskYgL-gJf6PwvJD7dLD3SoHo7qF5J8wkbe43C1K89s3KXm_bFPU0QST7Pr6ksi9_xaby5HCIH-8OkU',
        lastMessage: 'Is the visa sponsorship available for E-7?',
        time: 'Yesterday',
        unread: 0,
        online: false,
    },
    {
        id: 'conv-3',
        name: 'Sarah Connor',
        role: 'UX Designer',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBo0lfN96FWIb1VdhKqW1ro9Zb_saeTm86Ya6uqyHlDonyy_MY4c-kie5nIF41CDvpthEv3WJtJp-RVQlkQbe3aKEyVlK2Fgcb3b18tifkrK1vcnq-T-XSm6y5kCFLW6MzEKuXyrrc2-hZgpLVVwykx43FUt9hMUKB_ZmBUF4aEs0-11JDg_PyJSvwlMrGalW-CfvpIVWZstSI8dPaJaun2I1M0rFTSVpUTG69caKS7nI0U3DZxF2kATHEWMOdNtsAzEEPKNMGGHio',
        lastMessage: 'I have attached my portfolio. Please take a look.',
        time: 'Oct 24',
        unread: 0,
        online: true,
    }
];

export default function CompanyChatPage() {
    const [selectedConvId, setSelectedConvId] = useState<string | null>('conv-1');

    const selectedConv = MOCK_CONVERSATIONS.find(c => c.id === selectedConvId);

    return (
        <div className="bg-background-light dark:bg-background-dark h-screen flex flex-col font-display overflow-hidden">
            {/* Minimal Header for Context */}
            <header className="bg-white dark:bg-[#1e1e1e] border-b border-slate-200 dark:border-slate-800 shrink-0 h-16 flex items-center px-4 sm:px-6 z-20">
                <Link href="/company/dashboard" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mr-4">
                    <span className="material-symbols-outlined">arrow_back</span>
                    <span className="hidden sm:inline font-bold">Dashboard</span>
                </Link>
                <h1 className="text-lg font-bold text-slate-900 dark:text-white">Messages</h1>
            </header>

            <div className="flex-grow flex w-full h-[calc(100vh-64px)] overflow-hidden">
                {/* Sidebar (List) */}
                <aside className={`w-full sm:w-80 md:w-96 border-r border-slate-100 dark:border-slate-800 flex flex-col bg-white dark:bg-[#1e1e1e] ${selectedConvId ? 'hidden sm:flex' : 'flex'}`}>
                    {/* Search */}
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-gray-400 text-lg">search</span>
                            </span>
                            <input
                                type="text"
                                placeholder="Search candidates..."
                                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border-none text-sm focus:ring-2 focus:ring-primary outline-none transition-shadow"
                            />
                        </div>
                    </div>

                    {/* List */}
                    <div className="flex-grow overflow-y-auto">
                        {MOCK_CONVERSATIONS.map((conv) => (
                            <div
                                key={conv.id}
                                onClick={() => setSelectedConvId(conv.id)}
                                className={`p-4 flex gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer border-b border-slate-50 dark:border-slate-800/50 ${selectedConvId === conv.id ? 'bg-slate-50 dark:bg-slate-800 border-l-4 border-l-primary' : 'border-l-4 border-l-transparent'}`}
                            >
                                <div className="relative shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-700" style={{ backgroundImage: `url('${conv.avatar}')` }}></div>
                                    {conv.online && <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-[#1e1e1e]"></div>}
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h4 className="font-bold text-slate-900 dark:text-white truncate">{conv.name}</h4>
                                        <span className="text-xs text-slate-400 whitespace-nowrap">{conv.time}</span>
                                    </div>
                                    <p className="text-xs font-bold text-primary mb-0.5">{conv.role}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{conv.lastMessage}</p>
                                </div>
                                {conv.unread > 0 && (
                                    <div className="flex flex-col items-end justify-center">
                                        <div className="w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                                            {conv.unread}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main Chat Area */}
                <main className={`flex-grow flex flex-col bg-slate-50 dark:bg-black w-full ${selectedConvId ? 'flex' : 'hidden sm:flex'}`}>
                    {selectedConv ? (
                        <>
                            {/* Header */}
                            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 bg-white dark:bg-[#1e1e1e] shadow-sm z-10">
                                <div className="flex items-center gap-3">
                                    <button onClick={() => setSelectedConvId(null)} className="sm:hidden text-slate-500">
                                        <span className="material-symbols-outlined">arrow_back</span>
                                    </button>
                                    <div className="w-10 h-10 rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-700" style={{ backgroundImage: `url('${selectedConv.avatar}')` }}></div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                            {selectedConv.name}
                                            <span className="text-xs font-normal text-slate-500 dark:text-slate-400 px-2 py-0.5 bg-slate-100 dark:bg-slate-700 rounded-full">{selectedConv.role}</span>
                                        </h3>
                                        <p className="text-xs text-green-500 font-bold">{selectedConv.online ? 'Online' : 'Offline'}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                                        <span className="material-symbols-outlined">search</span>
                                    </button>
                                    <button className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>
                            </div>

                            {/* Messages (Mock) */}
                            <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-4">
                                <div className="flex justify-center mb-4">
                                    <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs text-slate-500 font-medium">Today</span>
                                </div>

                                {/* Them */}
                                <div className="self-start max-w-[80%] flex items-end gap-2">
                                    <div className="w-8 h-8 rounded-full bg-cover bg-center shrink-0 mb-4" style={{ backgroundImage: `url('${selectedConv.avatar}')` }}></div>
                                    <div>
                                        <div className="bg-white dark:bg-[#1e1e1e] p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-200 dark:border-slate-700">
                                            <p className="text-sm text-slate-800 dark:text-slate-200">{selectedConv.lastMessage}</p>
                                        </div>
                                        <span className="text-[10px] text-slate-400 block mt-1">10:45 AM</span>
                                    </div>
                                </div>

                                {/* Me */}
                                <div className="self-end max-w-[80%]">
                                    <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm">
                                        <p className="text-sm">Great, looking forward to meeting you!</p>
                                    </div>
                                    <span className="text-[10px] text-slate-400 block text-right mt-1">10:46 AM • Read</span>
                                </div>
                            </div>

                            {/* Input */}
                            <div className="p-4 bg-white dark:bg-[#1e1e1e] border-t border-slate-200 dark:border-slate-800 shrink-0">
                                <div className="flex gap-2 max-w-4xl mx-auto">
                                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">add_circle</span>
                                    </button>
                                    <div className="flex-grow relative">
                                        <input
                                            type="text"
                                            placeholder="Type a message..."
                                            className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border-none text-sm focus:ring-2 focus:ring-primary outline-none"
                                        />
                                        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary">
                                            <span className="material-symbols-outlined text-lg hidden">sentiment_satisfied</span>
                                        </button>
                                    </div>
                                    <button className="p-2 bg-primary text-white rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-primary/20">
                                        <span className="material-symbols-outlined text-[20px] translate-y-[1px] translate-x-[1px]">send</span>
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex-grow flex flex-col items-center justify-center text-slate-400 p-8 text-center">
                            <span className="material-symbols-outlined text-6xl mb-4 text-slate-300">chat</span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Detailed Conversations</h3>
                            <p className="max-w-md">Select a conversation from the sidebar to view detailed messages.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
