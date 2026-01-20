"use client";

import React from "react";
import { TopHeader } from "@/app/components/TopHeader";

export default function AdminSettingsPage() {
    return (
        <div className="flex flex-col h-screen h-[100dvh] bg-surface-ground overflow-hidden">
            <TopHeader title="Platform Settings" />

            <div className="flex-1 overflow-y-auto p-6 md:p-12">
                <div className="max-w-4xl mx-auto space-y-8">

                    {/* General Settings */}
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">General Configuration</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-slate-900 dark:text-white">Platform Name</p>
                                    <p className="text-sm text-slate-500">Visible in emails and headers</p>
                                </div>
                                <input type="text" defaultValue="Peeple Jobs" className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-slate-900 dark:text-white">Support Email</p>
                                    <p className="text-sm text-slate-500">Contact for user inquiries</p>
                                </div>
                                <input type="email" defaultValue="support@peeple.com" className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800" />
                            </div>
                        </div>
                    </div>

                    {/* Notification Settings */}
                    <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Notifications</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-slate-900 dark:text-white">Email Alerts</p>
                                    <p className="text-sm text-slate-500">Receive alerts for new reports</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button className="px-6 py-2 rounded-lg font-bold text-slate-600 hover:bg-slate-100">Cancel</button>
                        <button className="px-6 py-2 rounded-lg font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20">Save Changes</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
