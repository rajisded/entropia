'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';

const sections = [
    "Vision",
    "Citizenship",
    "Governance Model",
    "Economic Model",
    "Knowledge & Education",
    "Tech Goals",
    "Humanitarian Goals",
    "Implementation Roadmap",
    "Conclusion"
];

const contentMap: Record<string, React.ReactNode> = {
    "Vision": (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Vision</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                Entropia City is envisioned as a purpose-built city for the advancement of humanity.
                It is not a political movement, and not a reaction to the world’s current systems. It is a city designed from first principles, a place where exceptional individuals from across the globe can live, build, research, and collaborate without the usual divisions of nationality, race, religion, or ideology.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                Entropia City will be grounded in one simple idea: <span className="font-medium text-black">human progress accelerates when capable people are free to work together without barriers.</span>
            </p>
            <div className="bg-gray-50 p-6 rounded-lg my-8 border-l-2 border-black">
                <h3 className="font-bold text-black mb-4 uppercase tracking-wider text-sm">Core Focus Areas</h3>
                <ul className="space-y-2 text-gray-700 font-light text-lg">
                    <li className="flex items-start"><span className="mr-2 text-black">•</span>Advancing frontier science and technology</li>
                    <li className="flex items-start"><span className="mr-2 text-black">•</span>Building ethical, scalable businesses</li>
                    <li className="flex items-start"><span className="mr-2 text-black">•</span>Supporting breakthrough research</li>
                    <li className="flex items-start"><span className="mr-2 text-black">•</span>Designing efficient systems of governance and collaboration</li>
                    <li className="flex items-start"><span className="mr-2 text-black">•</span>Funding high-impact philanthropic initiatives</li>
                </ul>
            </div>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                Entropia City will begin as a digitally coordinated ecosystem, establishing governance frameworks, research networks, economic systems, and a structured citizenship model online. This digital foundation allows global participation and institutional testing before physical development.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                In its next phase, Entropia City will take physical form as a master-planned city, ideally located on an island. The physical city will be designed intentionally, with integrated research hubs, innovation districts, residential zones, advanced infrastructure, and sustainable systems built into its foundation.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                This is not about isolation from the world. It is about creating a concentrated environment where excellence can operate at full capacity and generate solutions that benefit humanity at large.
            </p>
            <blockquote className="border-l-4 border-black pl-4 italic text-gray-600 my-8 text-xl">
                "In a fragmented global landscape, Entropia City aims to become a neutral ground for collaboration — a city built deliberately to channel human potential toward lasting progress."
            </blockquote>
        </div>
    ),
    "Citizenship": (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Citizenship</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                Citizenship in Entropia City is not automatic, permanent, or symbolic. It is earned, measured, and continuously upheld.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                We intend to cap the population of Entropia City at <span className="font-bold text-black">one million citizens</span>. This limit is deliberate. The goal is to maintain focus, efficiency, and high performance. A smaller population allows stronger coordination, higher standards, and a culture built around excellence rather than scale.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-bold text-black mb-2">Performance-Based</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Citizenship is based on contribution and capability. It is not a status for life unless performance continues to justify it. Every citizen must remain aligned with the city’s mission.
                    </p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                    <h3 className="font-bold text-black mb-2">Dynamic Review</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        If a citizen consistently underperforms, they may lose their status. If a more capable individual emerges, the system allows for replacement. The objective is preservation of quality.
                    </p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-black mt-8 mb-4">Defined Sectors</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700 font-light text-lg mb-8">
                <li className="flex items-center p-2 bg-white border border-gray-100 rounded shadow-sm"><span className="w-2 h-2 bg-black rounded-full mr-3"></span>Business & Capital Allocation</li>
                <li className="flex items-center p-2 bg-white border border-gray-100 rounded shadow-sm"><span className="w-2 h-2 bg-black rounded-full mr-3"></span>Research, Science & Education</li>
                <li className="flex items-center p-2 bg-white border border-gray-100 rounded shadow-sm"><span className="w-2 h-2 bg-black rounded-full mr-3"></span>Governance, Policy & Admin</li>
                <li className="flex items-center p-2 bg-white border border-gray-100 rounded shadow-sm"><span className="w-2 h-2 bg-black rounded-full mr-3"></span>Technology & Engineering</li>
                <li className="flex items-center p-2 bg-white border border-gray-100 rounded shadow-sm"><span className="w-2 h-2 bg-black rounded-full mr-3"></span>Philanthropy & Social Systems</li>
            </ul>

            <h3 className="text-xl font-bold text-black mt-8 mb-4">AI-Assisted Evaluation</h3>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                To ensure fairness and objectivity, advanced AI systems will assist in evaluating and monitoring performance within each sector. AI will not replace human judgment, but it will provide continuous, data-driven evaluation to maintain standards.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg font-medium mt-4">
                In Entropia City, quality is not a preference. It is the foundation.
            </p>
        </div>
    ),
    "Governance Model": (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Governance Model</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg font-medium text-black">
                Entropia City will not function as a traditional democracy.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                It will not be based on electoral popularity, party politics, campaigning, or ideological blocs. Instead, it will operate as a performance-driven civic system where governance authority flows from contribution and competence.
            </p>

            <div className="my-8 space-y-6">
                <div className="border-l-4 border-black pl-6 py-2">
                    <h3 className="text-xl font-bold text-black mb-2">The Role of Citizens</h3>
                    <p className="text-gray-600 mb-3">All citizens may propose policy changes, structural reforms, and research priorities. Governance originates from the collective intelligence of the citizen body.</p>
                </div>

                <div className="border-l-4 border-gray-300 pl-6 py-2">
                    <h3 className="text-xl font-bold text-black mb-2">The Role of Stewards</h3>
                    <p className="text-gray-600 mb-3">Stewards execute governance. They represent operational leadership, serving fixed 3-year terms without immediate re-election to prevent power consolidation.</p>
                </div>

                <div className="border-l-4 border-gray-200 pl-6 py-2">
                    <h3 className="text-xl font-bold text-black mb-2">Dynamic Voting Power</h3>
                    <p className="text-gray-600 mb-3">Voting power is not equal or static. Influence is dynamically calibrated through an AI-assisted evaluation system measuring contribution to professional fields, humanity, and the city's mission.</p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-black mt-8 mb-4">Not Democracy — Not Autocracy</h3>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-4">
                Entropia City’s model is a structured meritocratic civic system:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-light text-lg mb-6">
                <li>Citizens generate policy.</li>
                <li>AI evaluates contribution-based influence.</li>
                <li>Stewards implement decisions.</li>
                <li>Authority rotates. Performance determines weight.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                Power is not inherited. It is not permanent. It is not emotional. It is earned and continuously reassessed.
            </p>
        </div>
    ),
    "Economic Model": (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Economic Model</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                The economy of Entropia City will be intentionally engineered to support a high-performance, knowledge-driven civilization. It begins as a digitally native system built on a proprietary blockchain infrastructure.
            </p>

            <div className="bg-black text-white p-8 rounded-xl my-8">
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="M12 2l9 4.9V17L12 22l-9-4.9V6.9L12 2z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold">The Entropia Currency (ENT)</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                    ENT creates a utility and contribution-backed economy. Unlike speculative tokens, its value is tied to participation, productivity, and economic output.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                    <div>• Purchasing research & IP</div>
                    <div>• Funding research initiatives</div>
                    <div>• Accessing advisory networks</div>
                    <div>• Governance participation</div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-black mt-8 mb-4">Marketplace & External Interface</h3>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                Entropia City will operate a structured digital marketplace governed by smart contracts for trading proprietary research, algorithms, and market intelligence.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                To interface with the global economy, a <span className="font-medium text-black">Derived External Token</span> will allow non-citizens to purchase public research and commercial tools. This acts as a controlled gateway, protecting core infrastructure while enabling global engagement.
            </p>

            <div className="my-8 p-6 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-black mb-4 uppercase text-xs tracking-widest">Foundational Principles</h4>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700 text-sm font-medium">
                    <li>Value must be created before it is rewarded.</li>
                    <li>Contribution determines access and influence.</li>
                    <li>Internal systems prioritize security and trust.</li>
                    <li>External engagement is strategic and controlled.</li>
                    <li>The economy exists to accelerate human advancement, not speculation.</li>
                </ol>
            </div>
        </div>
    ),
    "Knowledge & Education": (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Knowledge & Education</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                Knowledge will be the central pillar of Entropia City. The city will not merely host innovation, it will systematically produce it.
            </p>

            <div className="bg-gray-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-black mb-4">The Entropia Think Tank</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    An exclusive research institution accessible only to citizens, operating as a high-level intelligence engine focusing on frontier science, economic strategy, and long-term civilizational challenges.
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">Proprietary Research</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">Strategic Foresight</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">Data-Driven Policy</span>
                    <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">Risk Analysis</span>
                </div>
            </div>

            <h3 className="text-xl font-bold text-black mt-8 mb-4">Education for the Next Generation</h3>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                For the children of citizens, Entropia City will design an exclusive educational system built from first principles. The goal is to prepare students for the future, not the past.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 font-light text-lg mb-6">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Critical thinking & first-principles reasoning</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Systems thinking & interdisciplinary learning</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Project-based learning & mentorship</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-black rounded-full mr-3"></span>Entrepreneurship & capital allocation</li>
            </ul>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                By combining an elite think tank with a continuously evolving educational system, Entropia City aims to establish a sustainable intellectual ecosystem that compounds knowledge over time.
            </p>
        </div>
    ),
    "Tech Goals": (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Tech Goals</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-8">
                Entropia City is designed to push the boundaries of what human civilization can become. Our technological goals are ambitious, long-term, and civilizational in scope.
            </p>

            <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="text-2xl font-bold text-black/20">01</div>
                    <div>
                        <h4 className="font-bold text-black text-lg">Interplanetary Habitation</h4>
                        <p className="text-gray-600 text-sm mt-1">Strategic safeguards for human survival: advanced propulsion, life-support ecosystems, and off-world manufacturing.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="text-2xl font-bold text-black/20">02</div>
                    <div>
                        <h4 className="font-bold text-black text-lg">Advanced Artificial Intelligence</h4>
                        <p className="text-gray-600 text-sm mt-1">Responsible development of AI as a force multiplier for scientific discovery, governance, and resource allocation.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="text-2xl font-bold text-black/20">03</div>
                    <div>
                        <h4 className="font-bold text-black text-lg">Energy Abundance</h4>
                        <p className="text-gray-600 text-sm mt-1">Fusion, advanced fission, and grid optimization to unlock progress in manufacturing and computation.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="text-2xl font-bold text-black/20">04</div>
                    <div>
                        <h4 className="font-bold text-black text-lg">Biotechnology & Human Enhancement</h4>
                        <p className="text-gray-600 text-sm mt-1">Regenerative medicine, gene therapies, and longevity research to increase resilience and cognition.</p>
                    </div>
                </div>
            </div>

            <p className="text-gray-700 leading-relaxed font-light text-lg mt-8 border-t border-gray-100 pt-8">
                We do not aim to compete with nations or corporations. We aim to contribute to the long arc of human advancement.
            </p>
        </div>
    ),
    "Humanitarian Goals": (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Humanitarian Goals</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                Entropia City recognizes that technological acceleration will reshape the global order. Our humanitarian mission is to ensure that progress does not leave humanity behind.
            </p>

            <h3 className="text-xl font-bold text-black mt-8 mb-4">Preparing for a Post-AI World</h3>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-6">
                As AI automates labor, we prioritize sustainable models for a post-AI society: universal access to essentials, AI-driven resource allocation, and new economic participation models.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-black mb-2">Universal Basic Security</h4>
                    <p className="text-sm text-gray-600">Ensuring access to food, shelter, healthcare, and education—not as charity, but as civilizational infrastructure.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-black mb-2">Uplifting Poverty</h4>
                    <p className="text-sm text-gray-600">Scalable uplift systems, micro-entrepreneurship, and low-cost technological solutions for underserved regions.</p>
                </div>
            </div>

            <p className="text-gray-700 leading-relaxed font-light text-lg font-medium">
                "If technology increases capability, it must also increase responsibility."
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                Entropia City does not seek advancement for a small elite alone. Its long-term legitimacy depends on whether the systems it builds strengthen humanity as a whole.
            </p>
        </div>
    ),
    "Implementation Roadmap": (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Implementation Roadmap</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg mb-8">
                The objective is not rapid expansion, but structural durability. Each stage must validate governance and sustainability.
            </p>

            <div className="space-y-0 relative border-l border-gray-200 ml-3">
                <div className="mb-10 ml-8">
                    <span className="absolute -left-1.5 w-3 h-3 bg-black rounded-full ring-4 ring-white"></span>
                    <h3 className="text-lg font-bold text-black">Phase I — Foundation (Years 0–2)</h3>
                    <p className="text-sm text-gray-500 mb-2">Digital Formation & Institutional Design</p>
                    <p className="text-gray-700 text-sm">Finalize framework, launch internal governance, recruit founding citizens, and establish the Think Tank.</p>
                </div>
                <div className="mb-10 ml-8">
                    <span className="absolute -left-1.5 w-3 h-3 bg-gray-300 rounded-full ring-4 ring-white"></span>
                    <h3 className="text-lg font-bold text-black">Phase II — Institutional Scaling (Years 3–5)</h3>
                    <p className="text-sm text-gray-500 mb-2">Expansion & Economic Maturity</p>
                    <p className="text-gray-700 text-sm">Expand to 100k members, operationalize ENT economy, and launch derived public token.</p>
                </div>
                <div className="mb-10 ml-8">
                    <span className="absolute -left-1.5 w-3 h-3 bg-gray-300 rounded-full ring-4 ring-white"></span>
                    <h3 className="text-lg font-bold text-black">Phase III — Strategic Legitimacy (Years 5–10)</h3>
                    <p className="text-sm text-gray-500 mb-2">Physical Planning</p>
                    <p className="text-gray-700 text-sm">Geopolitical feasibility, land acquisition/partnership, and master urban design.</p>
                </div>
                <div className="mb-10 ml-8">
                    <span className="absolute -left-1.5 w-3 h-3 bg-gray-300 rounded-full ring-4 ring-white"></span>
                    <h3 className="text-lg font-bold text-black">Phase IV — Physical Development (Years 10–20)</h3>
                    <p className="text-sm text-gray-500 mb-2">Construction & Settlement</p>
                    <p className="text-gray-700 text-sm">Build research districts, residential zones, and smart infrastructure. First physical inhabitants.</p>
                </div>
                <div className="ml-8">
                    <span className="absolute -left-1.5 w-3 h-3 bg-gray-300 rounded-full ring-4 ring-white"></span>
                    <h3 className="text-lg font-bold text-black">Phase V — Long-Term Consolidation (20+ Years)</h3>
                    <p className="text-sm text-gray-500 mb-2">Global Impact</p>
                    <p className="text-gray-700 text-sm">Scaling to 1M citizens, major contributions to space & AI, and intergenerational stability.</p>
                </div>
            </div>

            <div className="mt-8 bg-gray-50 p-4 rounded text-sm text-gray-600 font-medium text-center">
                The objective is not speed. The objective is endurance.
            </div>
        </div>
    ),
    "Conclusion": (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                Entropia City is a long-term civilizational project built on a simple but demanding principle: <span className="text-black font-medium">excellence must be organized.</span>
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                It is a structured effort to bring together the highest-performing individuals across business, science, governance, and philanthropy to collaborate without artificial barriers and to act with long-term responsibility.
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-lg">
                Through a capped and merit-based citizenship model, performance-driven governance, a secure internal economy powered by ENT, an exclusive think tank, and forward-looking technological and humanitarian commitments, Entropia City aims to build an institution capable of shaping the post-AI era responsibly.
            </p>
            <div className="py-8 text-center text-xl font-light text-black space-y-2">
                <p>The ambition is not dominance, but contribution.</p>
                <p>Not isolation, but concentrated coordination.</p>
                <p>Not short-term visibility, but generational impact.</p>
            </div>
        </div>
    )
};

export default function Prospectus() {
    const [activeSection, setActiveSection] = useState("Vision");

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

                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-2">Entropia Prospectus</h1>
                            <p className="text-gray-500 font-light text-lg">Sovereign Intellectual Civilization</p>
                        </div>
                        <div className="text-right mt-6 md:mt-0 font-mono text-xs text-gray-400">
                            <p>DOC ID: 2026-ENT-001</p>
                            <p>STATUS: DRAFT</p>
                            <p>UPDATED: FEB 2026</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-16">
                        <div className="md:col-span-2 space-y-12">


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
                        <p className="text-xs font-mono text-gray-400">Version 2.0.0</p>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
