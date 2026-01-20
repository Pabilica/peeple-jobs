'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';

// Mock Conversations
const MOCK_CONVERSATIONS = [
    {
        id: 'conv-1',
        name: 'Toss HR Team',
        logo: 'T',
        logoColor: 'bg-blue-500 text-white',
        lastMessage: 'Hello! I would like to schedule an interview with you.',
        time: '10:45 AM',
        unread: 2,
        online: true,
    },
    {
        id: 'conv-2',
        name: 'Coupang Recruitment',
        logo: 'C',
        logoColor: 'bg-red-600 text-white',
        lastMessage: 'Thanks for your application. We will review it shortly.',
        time: 'Yesterday',
        unread: 0,
        online: false,
    },
    {
        id: 'conv-3',
        name: 'Sarah Jenkins',
        logo: 'S',
        logoColor: 'bg-indigo-500 text-white',
        lastMessage: 'Hey! I saw your post on the community. Are you still looking for info?',
        time: 'Oct 24',
        unread: 0,
        online: true,
    }
];

export default function ChatPage() {
    const [selectedConvId, setSelectedConvId] = useState<string | null>('conv-1');

    const selectedConv = MOCK_CONVERSATIONS.find(c => c.id === selectedConvId);

    return (
        <div className="bg-background-light dark:bg-background-dark h-screen flex flex-col font-display overflow-hidden">
            <Navbar />

            <div className="flex-grow flex max-w-7xl mx-auto w-full h-[calc(100vh-64px)] px-0 sm:px-6 lg:px-8 py-0 sm:py-6">
                <div className="flex w-full bg-white dark:bg-[#1e1e1e] sm:rounded-2xl sm:border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">

                    {/* Sidebar (List) */}
                    <aside className={`w-full sm:w-80 md:w-96 border-r border-slate-100 dark:border-slate-800 flex flex-col ${selectedConvId ? 'hidden sm:flex' : 'flex'}`}>
                        {/* Header */}
                        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Messages</h2>
                            <button className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-lg">edit_square</span>
                            </button>
                        </div>

                        {/* Search */}
                        <div className="p-4 pt-2">
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400 text-lg">search</span>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search messages..."
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
                                    className={`p-4 flex gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer ${selectedConvId === conv.id ? 'bg-slate-50 dark:bg-slate-800 border-r-4 border-primary' : ''}`}
                                >
                                    <div className="relative shrink-0">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${conv.logoColor}`}>
                                            {conv.logo}
                                        </div>
                                        {conv.online && <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-[#1e1e1e]"></div>}
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h4 className="font-bold text-slate-900 dark:text-white truncate">{conv.name}</h4>
                                            <span className="text-xs text-slate-400 whitespace-nowrap">{conv.time}</span>
                                        </div>
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
                    <main className={`flex-grow flex flex-col ${selectedConvId ? 'flex' : 'hidden sm:flex'}`}>
                        {selectedConv ? (
                            <>
                                {/* Header */}
                                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 bg-white dark:bg-[#1e1e1e]">
                                    <div className="flex items-center gap-3">
                                        <button onClick={() => setSelectedConvId(null)} className="sm:hidden text-slate-500">
                                            <span className="material-symbols-outlined">arrow_back</span>
                                        </button>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${selectedConv.logoColor}`}>
                                            {selectedConv.logo}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">{selectedConv.name}</h3>
                                            <p className="text-xs text-green-500 font-bold">{selectedConv.online ? 'Online' : 'Offline'}</p>
                                        </div>
                                    </div>
                                    <button className="text-slate-400 hover:text-slate-600">
                                        <span className="material-symbols-outlined">more_vert</span>
                                    </button>
                                </div>

                                {/* Messages (Mock) */}
                                <div className="flex-grow overflow-y-auto p-6 bg-slate-50 dark:bg-slate-900/50 flex flex-col gap-4">
                                    <div className="flex justify-center mb-4">
                                        <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs text-slate-500 font-medium">Today</span>
                                    </div>

                                    <div className="self-end max-w-[80%]">
                                        <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm">
                                            <p className="text-sm">Hello, I have a question regarding the interview schedule.</p>
                                        </div>
                                        <span className="text-[10px] text-slate-400 block text-right mt-1">10:42 AM • Read</span>
                                    </div>

                                    <div className="self-start max-w-[80%] flex items-end gap-2">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mb-4 ${selectedConv.logoColor}`}>
                                            {selectedConv.logo}
                                        </div>
                                        <div>
                                            <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700">
                                                <p className="text-sm text-slate-800 dark:text-slate-200">{selectedConv.lastMessage}</p>
                                            </div>
                                            <span className="text-[10px] text-slate-400 block mt-1">10:45 AM</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Input */}
                                <div className="p-4 bg-white dark:bg-[#1e1e1e] border-t border-slate-100 dark:border-slate-800 shrink-0">
                                    <div className="flex gap-2">
                                        <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined">add_circle</span>
                                        </button>
                                        <div className="flex-grow relative">
                                            <input
                                                type="text"
                                                placeholder="Type a message..."
                                                className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-none text-sm focus:ring-2 focus:ring-primary outline-none"
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
                            <div className="flex-grow flex flex-col items-center justify-center text-slate-400 p-8 text-center bg-slate-50 dark:bg-slate-900/50">
                                <span className="material-symbols-outlined text-6xl mb-4 text-slate-300">chat</span>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Detailed Conversations</h3>
                                <p className="max-w-md">Select a conversation from the sidebar to view detailed messages.</p>
                            </div>
                        )}
                    </main>

                </div>
            </div>
        </div>
    );
}
