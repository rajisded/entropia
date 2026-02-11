'use client';
import { motion } from 'framer-motion';

export default function Philosophy() {
    return (
        <section id="citizenship" className="py-40 bg-white relative overflow-hidden">
            <div className="container px-6 md:px-12 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-400 mb-8 block">
                        Philosophy
                    </span>

                    <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-black mb-12 leading-[0.9]">
                        Anti-mediocrity.
                        <br />
                        <span className="text-gray-400">Pro-advancement.</span>
                    </h2>

                    <p className="text-2xl text-gray-700 font-light leading-relaxed mb-24 max-w-2xl mx-auto">
                        We reject bureaucratic stagnation. We prioritize high cognition,
                        long-term thinking, and systems design.
                    </p>

                    <div className="grid md:grid-cols-2 gap-24 text-left border-t border-gray-100 pt-16">
                        <div>
                            <h3 className="text-xl font-medium text-black mb-6">Governance</h3>
                            <ul className="space-y-4 text-gray-500 font-light text-lg">
                                <li className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                    <span>Competence-weighted</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                    <span>Reputation-indexed</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                    <span>Data-driven</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-black mb-6">Membership</h3>
                            <ul className="space-y-4 text-gray-500 font-light text-lg">
                                <li className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                    <span>Merit-based</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                    <span>Multi-tiered</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                                    <span>High signal-to-noise</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
