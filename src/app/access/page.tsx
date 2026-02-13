'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, ArrowRight } from 'lucide-react';

export default function AccessPage() {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        if (!formData.name || formData.name.length < 2) {
            setStatus('error');
            setErrorMessage('Please enter a valid name (min 2 characters).');
            return;
        }

        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        try {
            const { error } = await supabase
                .from('entropia-access-emails')
                .insert([
                    {
                        "Name": formData.name,
                        email: formData.email,
                        created_at: new Date().toISOString(),
                    }
                ]);

            if (error) {
                // Check if duplicate entry error (23505 is typical Postgres code for unique violation)
                if (error.code === '23505') {
                    throw new Error('This email is already registered.');
                }
                throw error;
            }

            setStatus('success');
            setFormData({ name: '', email: '' });

            // Send welcome email (fire and forget)
            fetch('/api/send-welcome', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                }),
            }).catch((emailErr) => {
                console.error('Failed to trigger welcome email:', emailErr);
            });
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setStatus('error');
            setErrorMessage(err.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
            <Navbar />

            <div className="flex-grow flex flex-col justify-center pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                        {/* Left Side: Content & Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 text-center lg:text-left"
                        >
                            <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-6 block">
                                Join the Waitlist
                            </span>
                            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black mb-6 leading-[1.1]">
                                Get Early Access to <br /> Entropia.
                            </h1>
                            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                                Be among the first to connect with exceptional minds in a city designed for progress. Secure your spot in the founding community.
                            </p>

                            <div className="hidden lg:block space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black">Priority Onboarding</h3>
                                        <p className="text-sm text-gray-500 font-light mt-1">Get invited before the public launch.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black">Exclusive Updates</h3>
                                        <p className="text-sm text-gray-500 font-light mt-1">Receive inside information on development.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-black">Founding Member Status</h3>
                                        <p className="text-sm text-gray-500 font-light mt-1">Permanent recognition as an early supporter.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10"
                        >
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Check className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-black mb-2">Access Requested</h3>
                                        <p className="text-gray-600 mb-8">
                                            Thank you for joining. We've added you to the priority list and will be in touch soon.
                                        </p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="text-sm font-medium text-gray-500 hover:text-black underline decoration-gray-300 hover:decoration-black underline-offset-4 transition-all"
                                        >
                                            Register another email
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-6"
                                    >
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Enter your full name"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="name@example.com"
                                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                                required
                                            />
                                        </div>

                                        {status === 'error' && (
                                            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                                                {errorMessage}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    <span>Processing...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Request Access</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>

                                        <p className="text-xs text-center text-gray-400 mt-6">
                                            By joining, you agree to our Terms of Service and Privacy Policy.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Mobile Benefits (Visible only on small screens) */}
                        <div className="lg:hidden space-y-6 w-full max-w-md">
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black">Priority Onboarding</h3>
                                    <p className="text-sm text-gray-500 font-light mt-1">Get invited before the public launch.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black">Exclusive Updates</h3>
                                    <p className="text-sm text-gray-500 font-light mt-1">Receive inside information on development.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mr-4 flex-shrink-0">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-black">Founding Member Status</h3>
                                    <p className="text-sm text-gray-500 font-light mt-1">Permanent recognition as an early supporter.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
