import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <div className="text-gray-900 dark:text-gray-100">
                                <h3 className="text-lg font-semibold mb-2">Total Users</h3>
                                <p className="text-3xl font-bold">1,234</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <div className="text-gray-900 dark:text-gray-100">
                                <h3 className="text-lg font-semibold mb-2">Revenue</h3>
                                <p className="text-3xl font-bold">$12,345</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <div className="text-gray-900 dark:text-gray-100">
                                <h3 className="text-lg font-semibold mb-2">Active Projects</h3>
                                <p className="text-3xl font-bold">42</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <div className="text-gray-900 dark:text-gray-100">
                                <h3 className="text-lg font-semibold mb-2">Tasks Completed</h3>
                                <p className="text-3xl font-bold">89%</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h3 className="text-2xl font-bold mb-4">Welcome, {auth.user.name}!</h3>
                            <p className="mb-4">Here's an overview of your recent activity:</p>
                            
                            {/* Recent Activity */}
                            <div className="mb-8">
                                <h4 className="text-xl font-semibold mb-4">Recent Activity</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                                        You completed Project X
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                                        New team member joined
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                                        Upcoming deadline for Project Y
                                    </li>
                                </ul>
                            </div>

                            {/* Quick Actions */}
                            <div>
                                <h4 className="text-xl font-semibold mb-4">Quick Actions</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                        Create New Project
                                    </button>
                                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                        Add Team Member
                                    </button>
                                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                                        View Reports
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}