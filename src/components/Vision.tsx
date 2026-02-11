'use client';
import { motion } from 'framer-motion';

export default function Vision() {
    return (
        <section id="vision" className="py-32 bg-white relative overflow-hidden text-black border-t border-gray-100">
            <div className="container px-6 md:px-12 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8 block">
                        Core Vision
                    </span>

                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-black leading-[1.05] mb-12">
                        Human progress stagnates not due to lack of intelligence, but due to <span className="text-accent underline decoration-2 decoration-accent/20">fragmented coordination</span>.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight">The Thesis</h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-light">
                                We are building a cohesive, high-trust, high-competence order.
                                Our model insulates elite cognition from geopolitical friction and mediocrity-driven systems.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight">Civilizational Engine</h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-light">
                                This entity functions as a private intellectual state, a networked elite order, and a long-term civilizational engine.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
