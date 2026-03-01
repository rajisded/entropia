'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NewsPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex flex-col selection:bg-black selection:text-white">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center p-6 mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl w-full text-center space-y-12"
                >
                    <div className="space-y-6">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <span className="px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-semibold tracking-wider uppercase text-black">
                                The AI Newsletter
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black leading-tight">
                            Your Daily Source of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Truth</span> About AI.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
                            Stay ahead of the curve. Get the most critical AI developments, insights, and analysis delivered straight to your inbox every morning. No noise, just signal.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="max-w-md mx-auto w-full"
                    >
                        <form className="relative flex items-center w-full" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                required
                                className="w-full pl-6 pr-32 py-4 bg-white border border-gray-200 rounded-full outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all shadow-sm text-gray-900 placeholder:text-gray-400"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 bottom-2 px-6 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 group"
                            >
                                Subscribe
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                        <p className="text-xs text-gray-500 mt-4">
                            Join over 10,000+ forward-thinking founders, builders, and researchers.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
