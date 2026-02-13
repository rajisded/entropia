'use client';
import { motion } from 'framer-motion';
import { Brain, Users, LineChart, Building2, Globe2, HeartHandshake } from 'lucide-react';

const pillars = [
    {
        icon: Building2,
        title: "Purpose-Built City",
        description: "Designed from first principles. A neutral ground where excellence operates without artificial barriers.",
    },
    {
        icon: Users,
        title: "Merit-Based Citizenship",
        description: "Capped at 1 million. Citizenship is earned, measured, and continuously upheld based on contribution.",
    },
    {
        icon: Brain,
        title: "Knowledge Engine",
        description: "An exclusive legislative Think Tank producing proprietary research and strategic foresight.",
    },
    {
        icon: LineChart,
        title: "Performance Governance",
        description: "Authority flows from competence. Voting power is dynamically calibrated by contribution.",
    },
    {
        icon: Globe2,
        title: "ENT Economy",
        description: "A utility-backed internal economy where value is tied to participation and productivity.",
    },
    {
        icon: HeartHandshake,
        title: "Humanitarian Impact",
        description: "Ensuring technological acceleration strengthens humanity through universal basic security and uplift.",
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
                        Core Architecture
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
