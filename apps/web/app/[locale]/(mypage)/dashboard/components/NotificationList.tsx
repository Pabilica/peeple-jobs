import React from 'react';

const NOTIFICATIONS = [
    {
        id: 1,
        type: 'application_update', // can be 'alert', 'system', etc.
        title: 'Application Status Update',
        message: 'Your application for Senior Frontend Engineer at Toss has moved to "Interview" stage.',
        time: '2 hours ago',
        isRead: false,
        icon: 'work',
        color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
    },
    {
        id: 2,
        type: 'job_alert',
        title: 'New Job Match',
        message: 'A new job matching your "Product Designer" preference was posted by Coupang.',
        time: '5 hours ago',
        isRead: true,
        icon: 'notifications_active',
        color: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20',
    },
    {
        id: 3,
        type: 'system',
        title: 'Profile Completeness',
        message: 'Add 2 more skills to reach 100% profile completeness and get more visibility.',
        time: '1 day ago',
        isRead: true,
        icon: 'person',
        color: 'text-green-600 bg-green-50 dark:bg-green-900/20',
    }
];

export const NotificationList = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Notifications</h2>
                <button className="text-sm font-bold text-primary hover:underline">Mark all as read</button>
            </div>
            <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm divide-y divide-slate-100 dark:divide-slate-800">
                {NOTIFICATIONS.map((notif) => (
                    <div key={notif.id} className={`p-4 flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer ${notif.isRead ? 'opacity-70' : ''}`}>
                        <div className={`flex-none w-10 h-10 rounded-full flex items-center justify-center ${notif.color}`}>
                            <span className="material-symbols-outlined text-[20px]">{notif.icon}</span>
                        </div>
                        <div className="flex-grow">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className={`text-sm font-bold ${notif.isRead ? 'text-slate-700 dark:text-slate-300' : 'text-slate-900 dark:text-white'}`}>{notif.title}</h4>
                                <span className="text-xs text-slate-400 font-medium whitespace-nowrap ml-2">{notif.time}</span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{notif.message}</p>
                        </div>
                        {!notif.isRead && (
                            <div className="flex-none pt-2">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {NOTIFICATIONS.length === 0 && (
                <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                    <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">notifications_off</span>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">No notifications yet.</p>
                </div>
            )}
        </div>
    );
};
