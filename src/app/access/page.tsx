'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, ArrowRight } from 'lucide-react';
import { getData } from 'country-list';

export default function AccessPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        currently_working_as: '',
        country_of_residence: '',
        social_link: '',
        primary_expertise: '',
        more_about_you: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [submitError, setSubmitError] = useState('');

    const countries = getData().sort((a, b) => a.name.localeCompare(b.name));

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name || formData.name.length < 2) {
            newErrors.name = "Please enter a valid name (min 2 characters).";
        }
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.currently_working_as || formData.currently_working_as.length < 2) {
            newErrors.currently_working_as = "Please enter your current role (min 2 characters).";
        }
        if (!formData.country_of_residence) {
            newErrors.country_of_residence = "Please select your country.";
        }
        if (formData.social_link && !/^https?:\/\/.+/.test(formData.social_link)) {
            newErrors.social_link = "Please enter a valid URL starting with http:// or https://";
        }
        if (!formData.primary_expertise || formData.primary_expertise.length < 3) {
            newErrors.primary_expertise = "Please enter your primary field of expertise (min 3 characters).";
        }
        if (formData.more_about_you && formData.more_about_you.length > 500) {
            newErrors.more_about_you = "Please keep your response under 500 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setStatus('error');
            setSubmitError('Please fix the errors in the form.');
            return;
        }

        setStatus('loading');
        setSubmitError('');

        try {
            const { error } = await supabase
                .from('early_access_users')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        currently_working_as: formData.currently_working_as,
                        country_of_residence: formData.country_of_residence,
                        social_link: formData.social_link || null,
                        primary_expertise: formData.primary_expertise,
                        more_about_you: formData.more_about_you || null,
                        created_at: new Date().toISOString(),
                    }
                ]);

            if (error) {
                if (error.code === '23505') {
                    throw new Error('This email is already registered.');
                }
                throw error;
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                currently_working_as: '',
                country_of_residence: '',
                social_link: '',
                primary_expertise: '',
                more_about_you: ''
            });

            // Send welcome email
            try {
                await fetch('/api/send-welcome', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                    }),
                });
            } catch (emailErr) {
                console.error('Failed to trigger welcome email:', emailErr);
            }

        } catch (err: any) {
            console.error('Error submitting form:', err);
            setStatus('error');
            setSubmitError(err.message || 'Something went wrong. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
            <Navbar />

            <div className="flex-grow flex flex-col justify-center pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* Left Side: Content & Benefits */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 text-center lg:text-left lg:sticky lg:top-32"
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
                            className="w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10"
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
                                        className="space-y-5"
                                    >
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Full Name <span className="text-red-500">*</span></label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your full name"
                                                    className={`w-full px-4 py-3 bg-gray-50 border ${errors.name ? 'border-red-300' : 'border-gray-200'} rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all`}
                                                    required
                                                />
                                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Email Address <span className="text-red-500">*</span></label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="name@example.com"
                                                    className={`w-full px-4 py-3 bg-gray-50 border ${errors.email ? 'border-red-300' : 'border-gray-200'} rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all`}
                                                    required
                                                />
                                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="currently_working_as" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Currently Working As <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                id="currently_working_as"
                                                name="currently_working_as"
                                                value={formData.currently_working_as}
                                                onChange={handleChange}
                                                placeholder="e.g., Software Engineer, Founder, Student"
                                                className={`w-full px-4 py-3 bg-gray-50 border ${errors.currently_working_as ? 'border-red-300' : 'border-gray-200'} rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all`}
                                                required
                                            />
                                            {errors.currently_working_as && <p className="text-red-500 text-xs mt-1">{errors.currently_working_as}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="country_of_residence" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Country of Residence <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <select
                                                    id="country_of_residence"
                                                    name="country_of_residence"
                                                    value={formData.country_of_residence}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 bg-gray-50 border ${errors.country_of_residence ? 'border-red-300' : 'border-gray-200'} rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all appearance-none`}
                                                    required
                                                >
                                                    <option value="">Select your country</option>
                                                    {countries.map((country) => (
                                                        <option key={country.code} value={country.name}>{country.name}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <ArrowDownIcon className="w-4 h-4 text-gray-400" />
                                                </div>
                                            </div>
                                            {errors.country_of_residence && <p className="text-red-500 text-xs mt-1">{errors.country_of_residence}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="primary_expertise" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Primary Field of Expertise <span className="text-red-500">*</span></label>
                                            <input
                                                type="text"
                                                id="primary_expertise"
                                                name="primary_expertise"
                                                value={formData.primary_expertise}
                                                onChange={handleChange}
                                                placeholder="e.g., AI/ML, Web Development, Product Design"
                                                className={`w-full px-4 py-3 bg-gray-50 border ${errors.primary_expertise ? 'border-red-300' : 'border-gray-200'} rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all`}
                                                required
                                            />
                                            {errors.primary_expertise && <p className="text-red-500 text-xs mt-1">{errors.primary_expertise}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="social_link" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Social Link / Website</label>
                                            <input
                                                type="url"
                                                id="social_link"
                                                name="social_link"
                                                value={formData.social_link}
                                                onChange={handleChange}
                                                placeholder="https://linkedin.com/in/yourprofile"
                                                className={`w-full px-4 py-3 bg-gray-50 border ${errors.social_link ? 'border-red-300' : 'border-gray-200'} rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all`}
                                            />
                                            {errors.social_link && <p className="text-red-500 text-xs mt-1">{errors.social_link}</p>}
                                        </div>

                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <label htmlFor="more_about_you" className="block text-xs font-semibold uppercase tracking-wider text-gray-500">More About You</label>
                                                <span className={`text-xs ${formData.more_about_you.length > 500 ? 'text-red-500' : 'text-gray-400'}`}>
                                                    {formData.more_about_you.length}/500
                                                </span>
                                            </div>
                                            <textarea
                                                id="more_about_you"
                                                name="more_about_you"
                                                value={formData.more_about_you}
                                                onChange={handleChange}
                                                placeholder="Tell us more about yourself, your interests, or what excites you about Entropia (optional)"
                                                rows={4}
                                                maxLength={500}
                                                className={`w-full px-4 py-3 bg-gray-50 border ${errors.more_about_you ? 'border-red-300' : 'border-gray-200'} rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all resize-none`}
                                            />
                                            {errors.more_about_you && <p className="text-red-500 text-xs mt-1">{errors.more_about_you}</p>}
                                        </div>

                                        {status === 'error' && (
                                            <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                                                {submitError}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-900 transition-all transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
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
                        <div className="lg:hidden space-y-6 w-full max-w-md mx-auto">
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

function ArrowDownIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}
