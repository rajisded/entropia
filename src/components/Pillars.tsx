'use client';
import { motion } from 'framer-motion';
import { Brain, Users, LineChart, Building2, Globe2, Network } from 'lucide-react';

const pillars = [
    {
        icon: Brain,
        title: "Think Tank Core",
        description: "Invite-only logic core. High signal-to-noise ratio intellectual culture.",
    },
    {
        icon: Users,
        title: "Sovereign Membership",
        description: "Multi-tiered citizenship based on merit (elite, contributors, associates).",
    },
    {
        icon: LineChart,
        title: "Economic Architecture",
        description: "Internal ecosystem built on intellectual services and knowledge capital.",
    },
    {
        icon: Building2,
        title: "Financial Sovereignty",
        description: "Private treasury and asset-backed digital infrastructure.",
    },
    {
        icon: Globe2,
        title: "Networked Passport",
        description: "Tiered digital identity & reputation-linked travel endorsements.",
    },
    {
        icon: Network,
        title: "Civilizational Pillars",
        description: "Strategic intelligence, R&D accelerator, and arbitration courts.",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
};

export default function Pillars() {
    return (
        <section id="architecture" className="py-32 bg-gray-50 text-black">
            <div className="container px-6 md:px-12 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 mb-6 block">
                        Architecture
                    </span>
                    <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-black mb-6">
                        Structural Pillars
                    </h2>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="mb-6 w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl text-black">
                                <pillar.icon className="w-6 h-6" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-semibold text-black mb-3 tracking-tight">
                                {pillar.title}
                            </h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
