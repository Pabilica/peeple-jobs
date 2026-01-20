export default function AdminPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-4">Peeple Jobs Admin</h1>
            <p className="text-lg text-gray-600 mb-8">Dashboard initialized.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                <a href="/admin/analytics" className="p-6 bg-white rounded-xl shadow-soft hover:shadow-soft-hover transition-shadow text-center">
                    <h2 className="text-xl font-semibold mb-2">Analytics</h2>
                    <p className="text-sm text-gray-500">View platform metrics</p>
                </a>
                <a href="/admin/approvals" className="p-6 bg-white rounded-xl shadow-soft hover:shadow-soft-hover transition-shadow text-center">
                    <h2 className="text-xl font-semibold mb-2">Approvals</h2>
                    <p className="text-sm text-gray-500">Manage company approvals</p>
                </a>
                <a href="/admin/applicants" className="p-6 bg-white rounded-xl shadow-soft hover:shadow-soft-hover transition-shadow text-center">
                    <h2 className="text-xl font-semibold mb-2">Applicants</h2>
                    <p className="text-sm text-gray-500">Track candidates</p>
                </a>
            </div>
        </div>
    );
}
