'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-white text-black">

            <div className="container relative z-10 text-center flex flex-col items-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500">
                        Sovereign Intellectual Civilization
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, letterSpacing: "-0.05em" }}
                    animate={{ opacity: 1, letterSpacing: "-0.06em" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-7xl md:text-9xl font-semibold tracking-tighter text-black mb-8 leading-[0.9]"
                >
                    ENTROPIA
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light"
                >
                    Advancing humanity through structured collaboration.
                    <br />
                    <span className="text-black font-medium mt-2 block">
                        A civilizational engine. Not a country.
                    </span>
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <ArrowDown className="w-5 h-5 text-black/50 animate-bounce" strokeWidth={1.5} />
            </motion.div>
        </section>
    );
}
