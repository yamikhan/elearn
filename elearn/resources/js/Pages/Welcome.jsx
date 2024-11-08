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
                                <h1 className="text-2xl font-bold text-white">ProLearn</h1>
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
                                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ProLearn</span>
                            </h1>
                            <p className="text-xl text-white/80 mb-8">
                                Your Learning Journey Starts Here
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a href={route('register')}  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
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
                            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 hover:scale-105 transform transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Your Learning, Your Way</h3>
                                <p className="text-white/80">- Customized course recommendations based on your interests and learning history</p>
                                <p className="text-white/80">- Dynamic learning paths that evolve as you progress, ensuring continuous growth</p>
                                <p className="text-white/80">- A roadmap to help you reach your professional or personal goals faster</p>
                            </div>


                            {/* Feature 2 */}
                            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 hover:scale-105 transform transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 12h3l-3 3-3-3h3zM5 18h14v-6l-7-4-7 4v6z" />
                                </svg>


                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Learn, Play, Achieve!</h3>
                                <p className="text-white/80">- Earn rewards and unlock achievements as you learn</p>
                                <p className="text-white/80">- Track your progress and see how you stack up against others in leaderboards</p>
                                <p className="text-white/80">- Stay motivated with interactive challenges and quests that make learning fun</p>
                            </div>


                            {/* Feature 3 */}
                            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 hover:scale-105 transform transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg mb-4 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11V3M9 11V3M3 7h18M5 21h14a2 2 0 002-2V10a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z" />
                                </svg>

                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Track Your Success, Every Step of the Way</h3>
                                <p className="text-white/80">- Real-Time Analytics: Access detailed reports that track your progress, highlight strengths, and pinpoint areas for improvement.</p>
                                <p className="text-white/80">- Goal-Oriented Tracking: Set personalized goals and milestones, and easily monitor your progress as you achieve them.</p>
                                <p className="text-white/80">- Smart Insights: Receive data-driven recommendations on which courses or modules to focus on next to enhance your learning.</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Footer */}
                <footer className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* About Us */}
                            <div>
                                <h4 className="text-lg font-semibold">About ProLearn</h4>
                                <p className="text-white/80 mt-2">
                                    ProLearn is a learning platform dedicated to helping you achieve your goals through personalized learning and engaging features.
                                </p>
                            </div>

                            {/* Links */}
                            <div>
                                <h4 className="text-lg font-semibold">Quick Links</h4>
                                <ul className="mt-2 space-y-2">
                                    <li><Link href="#" className="text-white/80 hover:text-white transition">About Us</Link></li>
                                    <li><Link href="#" className="text-white/80 hover:text-white transition">Contact</Link></li>
                                    <li><Link href="#" className="text-white/80 hover:text-white transition">Privacy Policy</Link></li>
                                    <li><Link href="#" className="text-white/80 hover:text-white transition">Terms of Service</Link></li>
                                </ul>
                            </div>

                            {/* Social Media */}
                            <div>
                                <h4 className="text-lg font-semibold">Follow Us</h4>
                                <div className="flex space-x-4 mt-2">
                                    <a href="#" className="text-white/80 hover:text-white transition">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="text-white/80 hover:text-white transition">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-white/80 hover:text-white transition">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="text-white/80 hover:text-white transition">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="mt-8 text-center text-white/70">
                            &copy; {new Date().getFullYear()} ProLearn. All rights reserved.
                        </div>
                    </div>
                </footer>

            </div>
        </>
    );
}