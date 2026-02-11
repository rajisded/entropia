'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <Link href="/" className="text-lg font-bold tracking-tight text-black flex items-center gap-2 group">
                    <span className="w-2 h-2 bg-black rounded-full group-hover:scale-125 transition-transform" />
                    ENTROPIA
                </Link>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500">
                    <Link href="/#vision" className="hover:text-black transition-colors">Vision</Link>
                    <Link href="/#architecture" className="hover:text-black transition-colors">Architecture</Link>
                    <Link href="/#citizenship" className="hover:text-black transition-colors">Citizenship</Link>
                    <Link href="/prospectus" className={`hover:text-black transition-colors ${pathname === '/prospectus' ? 'text-black font-semibold' : ''}`}>Prospectus</Link>
                </div>

                <button className="px-5 py-2 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                    Access
                </button>
            </div>
        </motion.nav>
    );
}
