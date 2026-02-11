'use client';
import { motion } from 'framer-motion';

const steps = [
    "Jurisdictional Anchoring",
    "Capital Formation",
    "Eligibility Metrics",
    "Intellectual Product"
];

export default function Strategic() {
    return (
        <section id="roadmap" className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container px-6 md:px-12 mx-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
                        <div>
                            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 mb-6 block">
                                Positioning
                            </span>
                            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-black mb-8 leading-tight">
                                Not a startup. <br />
                                <span className="text-gray-400">Institutional depth.</span>
                            </h2>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-xl text-gray-600 font-light leading-relaxed">
                                A long-horizon elite civilization project. We are currently in the <span className="text-black font-medium">Conceptual Architecture</span> phase.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-semibold text-black mb-6">Immediate Roadmap</h3>
                            <ul className="space-y-4">
                                {steps.map((step, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center text-gray-600 font-light"
                                    >
                                        <span className="w-1.5 h-1.5 bg-black rounded-full mr-4" />
                                        {step}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-semibold text-black mb-6">Prospectus</h3>
                            <ul className="space-y-4 text-gray-400 font-light">
                                <li>Executive Vision</li>
                                <li>Civilizational Thesis</li>
                                <li>Governance Model</li>
                                <li>Financial Infrastructure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
