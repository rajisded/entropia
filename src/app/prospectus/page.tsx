'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
    "Executive Vision",
    "Civilizational Thesis",
    "Structural Architecture",
    "Governance Model",
    "Economic Framework",
    "Financial Infrastructure",
    "Citizenship Model",
    "Strategic Roadmap",
    "Legal & Sovereignty Strategy",
    "Long-Term Expansion Plan"
];

export default function Prospectus() {
    return (
        <main className="min-h-screen bg-gray-50 text-black font-sans selection:bg-black selection:text-white">
            <Navbar />

            <div className="container mx-auto px-6 md:px-12 pt-40 pb-32 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-16 relative overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start mb-16 pb-8 border-b border-gray-100">
                        <div>
                            <span className="bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded-sm mb-4 inline-block">
                                Confidential
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-2">Entropia Prospectus</h1>
                            <p className="text-gray-500 font-light text-lg">Sovereign Intellectual Civilization</p>
                        </div>
                        <div className="text-right mt-6 md:mt-0 font-mono text-xs text-gray-400">
                            <p>DOC ID: 2026-ENT-001</p>
                            <p>STATUS: DRAFT</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-16">
                        <div className="md:col-span-2 space-y-12">
                            <div className="bg-gray-50 p-6 rounded-lg text-sm leading-relaxed text-gray-600 border-l-2 border-black">
                                <p>
                                    <span className="text-black font-bold">WARNING:</span> This document outlines the conceptual architecture for a sovereign intellectual civilization.
                                    Unauthorized distribution is strictly prohibited. The concepts herein represent a divergence from Westphalian state models
                                    towards a networked, competence-based meta-society.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold tracking-tight mb-6">Introduction</h2>
                                <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                                    Entropia is not a conventional country. It is a sovereign intellectual civilization—a parallel, high-competence society organized around elite cognition, technological acceleration, and civilizational development.
                                </p>
                                <p className="text-gray-700 leading-relaxed font-light text-lg">
                                    Its purpose is not territory first—but people, systems, and leverage first.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-xl h-fit sticky top-32">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Table of Contents</h2>
                            <ul className="space-y-3">
                                {sections.map((section, idx) => (
                                    <li key={idx} className="flex items-start group cursor-pointer">
                                        <span className="text-xs font-mono text-gray-300 w-6 mt-1 transition-colors group-hover:text-black">
                                            {(idx + 1).toString().padStart(2, '0')}
                                        </span>
                                        <span className="text-sm text-gray-600 group-hover:text-black transition-colors font-medium">
                                            {section}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-20 pt-8 border-t border-gray-100 flex justify-between items-end">
                        <div>
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Authorized Signature</p>
                            <div className="h-px w-32 bg-black/20" />
                        </div>
                        <p className="text-xs font-mono text-gray-400">Version 1.0.0</p>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
