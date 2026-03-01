'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const socialChannels = [
    {
        name: "Discord",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.106 18.058a.07.07 0 0 0 .03.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.46-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.096 2.157 2.418 0 1.334-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.096 2.157 2.418 0 1.334-.946 2.418-2.157 2.418z" />
            </svg>
        )
    },
    {
        name: "Telegram",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 translate-x-[1px] translate-y-[-1px]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.06-.19-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.07.01.2 0 .38z" />
            </svg>
        )
    },
    {
        name: "Whatsapp",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
        )
    },
    {
        name: "Facebook",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103v3.328h-2.328c-2.311 0-2.587.72-2.587 2.336v1.791h3.769l-.356 3.667h-3.413v7.98h-2.411z" />
            </svg>
        )
    },
    {
        name: "X",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
        )
    },
    {
        name: "Reddit",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.562-1.249-1.25-1.249zm-2.752 4.698c-1.389 0-2.496-.682-2.73-1.025a.317.317 0 0 0-.441-.1.314.314 0 0 0-.099.44c.404.593 1.789 1.317 3.27 1.317 1.481 0 2.866-.724 3.27-1.317a.314.314 0 0 0-.1-.44.317.317 0 0 0-.441.1c-.233.343-1.34 1.025-2.729 1.025z" />
            </svg>
        )
    },
    {
        name: "LinkedIn",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        )
    },
    {
        name: "Instagram",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        )
    }
];

const telegramTabs = ["Community", "Research", "Development", "Announcements"];

const telegramRooms = [
    { name: "English", icon: "message" },
    { name: "Chinese", icon: "message" },
    { name: "Announcements", icon: "announcement" },
];

export default function CommunityPage() {
    const [activeTab, setActiveTab] = useState("Community");

    return (
        <main className="min-h-screen bg-[#0B0C10] text-[#E0E2E7] flex flex-col selection:bg-white selection:text-black">
            <Navbar />

            {/* Set a dark theme constraint specifically for this page inner while keeping navbar functional */}
            <div className="flex-1 flex flex-col pt-32 pb-24 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-[1000px] px-6 space-y-16"
                >
                    {/* Section 1: Social Channels */}
                    <section className="space-y-8">
                        <h2 className="text-2xl font-semibold text-white">Entropia Social Media Channels</h2>
                        <div className="flex flex-wrap gap-x-8 gap-y-10 md:gap-x-12">
                            {socialChannels.map((channel, i) => (
                                <div key={i} className="flex flex-col items-center gap-3 w-[80px] group cursor-pointer hover:scale-105 transition-transform">
                                    <div className="w-14 h-14 rounded-full bg-[#181A20] hover:bg-[#20222A] border border-[#2B2F36] flex items-center justify-center text-[#848E9C] group-hover:text-white transition-colors shadow-sm">
                                        {channel.icon}
                                    </div>
                                    <span className="text-sm font-medium text-[#848E9C] group-hover:text-[#EAECEF] transition-colors">{channel.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 2: Telegram Channels */}
                    <section className="space-y-8 border-t border-[#1C1F25] pt-12">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold text-white">Official Entropia Telegram Channels</h2>
                            <p className="text-[15px] text-[#848E9C]">Join the discussion and stay up to date with announcements!</p>
                        </div>

                        <div className="flex gap-1 border-b border-[#2B2F36] pb-4">
                            {telegramTabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab
                                            ? "bg-[#2B3139] text-[#EAECEF]"
                                            : "text-[#848E9C] hover:text-[#EAECEF]"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                            {telegramRooms.map((room, i) => (
                                <div key={i} className="bg-[#181A20] border border-[#2B2F36] p-5 rounded-xl hover:border-[#474D57] transition-colors group cursor-pointer flex flex-col justify-between h-[120px]">
                                    <div>
                                        {room.icon === "message" ? (
                                            <svg className="w-5 h-5 text-[#848E9C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-[#848E9C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                            </svg>
                                        )}
                                        <h3 className="text-[#EAECEF] font-semibold mt-2 text-sm">{room.name}</h3>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-xs font-semibold text-[#848E9C] group-hover:text-white transition-colors">Open Telegram Channel ›</span>
                                        <div className="flex gap-2 text-[#848E9C]">
                                            <button className="hover:text-white transition-colors">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                            </button>
                                            <button className="hover:text-white transition-colors">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 3: Quote */}
                    <section className="bg-[#181A20] border border-[#2B2F36] rounded-2xl p-8 md:p-12 mb-8 relative">
                        <svg className="w-10 h-10 text-[#2B3139] absolute top-8 left-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <div className="pl-0 md:pl-16 relative z-10">
                            <div className="hidden md:block h-6" /> {/* Spacer for icon absolute */}
                            <p className="text-[17px] leading-[1.7] text-[#EAECEF] font-medium tracking-wide">
                                The Entropia community inspires us every day. It is the innovation engine of Entropia that helps, and motivates us to achieve even higher goals. The Entropia community is the most knowledgeable AI community in the world. Nothing gives me greater pleasure than meeting and speaking to our community members, both online and in-person.
                            </p>
                            <br />
                            <p className="text-[17px] leading-[1.7] text-[#EAECEF] font-medium tracking-wide">
                                Thank you for your ongoing help and support.
                            </p>
                            <br />
                            <p className="text-[#848E9C] text-sm font-semibold tracking-wider">
                                - Aryan Pandey
                            </p>
                        </div>
                    </section>

                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
