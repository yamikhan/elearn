import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                {/* Navigation */}
                <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md shadow-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <h1 className="text-2xl font-bold text-white">Your Logo</h1>
                            </div>
                            <div className="flex items-center">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="ml-4 text-white bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="text-center">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8">
                                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Your App</span>
                            </h1>
                            <p className="text-xl text-white/80 mb-8">
                                Your awesome application description goes here. Make it compelling!
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a href="#features" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                                    Get Started
                                </a>
                                <a href="#learn-more" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div id="features" className="bg-white/10 backdrop-blur-md py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Feature One</h3>
                                <p className="text-white/80">Description of your first amazing feature goes here.</p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Feature Two</h3>
                                <p className="text-white/80">Description of your second amazing feature goes here.</p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Feature Three</h3>
                                <p className="text-white/80">Description of your third amazing feature goes here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}