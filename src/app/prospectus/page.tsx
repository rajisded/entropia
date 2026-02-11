'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

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

const contentMap: Record<string, React.ReactNode> = {
    "Executive Vision": (
        <>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Executive Vision</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                Entropia is not a conventional country. It is a sovereign intellectual civilization—a parallel, high-competence society organized around elite cognition, technological acceleration, and civilizational development.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                Its purpose is not territory first—but people, systems, and leverage first. We operate as a private intellectual state, a networked elite order, and a long-term civilizational engine.
            </p>
            <blockquote className="border-l-4 border-black pl-4 italic text-gray-600 my-8">
                "Advance humanity and technology through structured collaboration of elite minds, insulated from geopolitical friction and mediocrity-driven systems."
            </blockquote>
        </>
    ),
    "Civilizational Thesis": (
        <>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Civilizational Thesis</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                Human progress stagnates not due to lack of intelligence, but due to fragmented coordination. The current geopolitical order captures cognition in bureaucratic gridlock.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                <span className="font-medium text-black">The Solution:</span> A cohesive, high-trust, high-competence meta-society. By filtering for high-signal actors and aligning them under a sovereign framework, we unlock a velocity of innovation impossible in legacy states.
            </p>
        </>
    ),
    "Structural Architecture": (
        <>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Structural Architecture</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                The state is built around an <span className="font-medium text-black">Exclusive Think Tank Core</span>. This serves as the epistemic backbone of the nation—an invite-only logic core dedicated to high signal-to-noise ratio intellectual culture.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700 font-light text-lg">
                <li>Publication of proprietary research and strategic reports</li>
                <li>Acceptance of commissioned research assignments</li>
                <li>Internal knowledge marketplace</li>
            </ul>
        </>
    ),
    "Governance Model": (
        <>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Governance Model</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                We reject both democratic populism and authoritarian hierarchy. Entropia moves towards a <span className="font-medium text-black">competence-weighted decision system</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-black mb-2">Reputation-Indexed</h3>
                    <p className="text-sm text-gray-600">Influence is derived from contribution and proven foresight, not popularity.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-black mb-2">Algorithmic Oversight</h3>
                    <p className="text-sm text-gray-600">Data-driven councils assist in strategic resource allocation.</p>
                </div>
            </div>
        </>
    ),
    "Economic Framework": (
        <>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Economic Framework</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                Our economic base is built on knowledge capital, strategy, and innovation. We are establishing an internal economic ecosystem where intellectual services and research contracts form the primary revenue.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                Future phases include a native financial instrument and a sovereign-style treasury for long-term asset accumulation.
            </p>
        </>
    ),
    "Financial Infrastructure": (
        <>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Financial Infrastructure</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                To ensure sovereignty, we bypass dependency on conventional national banking systems.
            </p>
            <ul className="space-y-4 text-gray-700 font-light text-lg">
                <li className="flex items-start">
                    <span className="mr-2 text-black">01.</span>
                    <span><strong>Private Treasury:</strong> Validating the state's autonomy capabilities.</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 text-black">02.</span>
                    <span><strong>Asset-Backed Digital Infrastructure:</strong> A strategic reserve model to back the internal economy.</span>
                </li>
                <li className="flex items-start">
                    <span className="mr-2 text-black">03.</span>
                    <span><strong>Reputation Credit:</strong> Credit issuance based on contribution history rather than FICO scores.</span>
                </li>
            </ul>
        </>
    ),
    "Citizenship Model": (
        <>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Citizenship Model</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                Citizenship is merit-based and selective. Citizens are not residents—they are networked stakeholders.
            </p>
            <div className="space-y-4 mb-6">
                <div className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-bold text-black">Core Elite</h4>
                    <p className="text-sm text-gray-600">Architects and primary contributors.</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-bold text-black">Contributors</h4>
                    <p className="text-sm text-gray-600">Active participants in the knowledge economy.</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-bold text-black">Associates</h4>
                    <p className="text-sm text-gray-600">Provisional members and strategic partners.</p>
                </div>
            </div>
        </>
    ),
    "Strategic Roadmap": (
        <>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Strategic Roadmap</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                We are currently in the <span className="font-medium text-black">Conceptual Architecture Phase</span>.
            </p>
            <ol className="list-decimal pl-5 space-y-4 text-gray-700 font-light text-lg marker:text-black marker:font-bold">
                <li><strong>Jurisdictional Anchoring:</strong> Clarifying the legal interface with physical territories.</li>
                <li><strong>Capital Formation:</strong> Designing the structure for initial resource pooling.</li>
                <li><strong>Formalizing Eligibility:</strong> Defining the precise metrics for the first 100 citizens.</li>
                <li><strong>First Intellectual Product:</strong> Launching the pilot research output to validate the think tank model.</li>
            </ol>
        </>
    ),
    "Legal & Sovereignty Strategy": (
        <>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Legal & Sovereignty Strategy</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                We do not seek immediate territorial recognition but functional sovereignty.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                Our "Passport" begins as a tiered digital identity providing network privileges. Over time, through institutional partnerships and economic leverage, we aim for eventual diplomatic recognition as a non-territorial sovereign entity.
            </p>
        </>
    ),
    "Long-Term Expansion Plan": (
        <>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Long-Term Expansion Plan</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                Beyond a think tank, we envision:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 font-light">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />Strategic Intelligence Division</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />Technological R&D Accelerator</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />Arbitration Court Layer</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3" />Civilization-Scale Project Funding</li>
            </ul>
        </>
    )
};

export default function Prospectus() {
    const [activeSection, setActiveSection] = useState("Executive Vision");

    return (
        <main className="min-h-screen bg-gray-50 text-black font-sans selection:bg-black selection:text-white">
            <Navbar />

            <div className="container mx-auto px-6 md:px-12 pt-40 pb-32 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-16 relative overflow-hidden min-h-[800px]"
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
                            <div className="bg-gray-50 p-6 rounded-lg text-sm leading-relaxed text-gray-600 border-l-2 border-black mb-8">
                                <p>
                                    <span className="text-black font-bold">WARNING:</span> This document outlines the conceptual architecture for a sovereign intellectual civilization.
                                    Unauthorized distribution is strictly prohibited.
                                </p>
                            </div>

                            <div className="min-h-[400px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeSection}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {contentMap[activeSection]}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="md:border-l border-gray-100 md:pl-8">
                            <div className="sticky top-32">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Table of Contents</h2>
                                <ul className="space-y-1">
                                    {sections.map((section, idx) => (
                                        <li
                                            key={idx}
                                            className="group cursor-pointer"
                                            onClick={() => setActiveSection(section)}
                                        >
                                            <div className={`flex items-start py-2 px-3 rounded-md transition-all duration-200 ${activeSection === section ? 'bg-black text-white' : 'hover:bg-gray-50'}`}>
                                                <span className={`text-xs font-mono w-6 mt-0.5 transition-colors ${activeSection === section ? 'text-gray-400' : 'text-gray-300 group-hover:text-black'}`}>
                                                    {(idx + 1).toString().padStart(2, '0')}
                                                </span>
                                                <span className={`text-sm transition-colors font-medium ${activeSection === section ? 'text-white' : 'text-gray-600 group-hover:text-black'}`}>
                                                    {section}
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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
