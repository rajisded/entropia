import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="py-24 bg-white border-t border-gray-100 text-center text-sm font-light text-gray-400">
            <div className="container px-6 md:px-12 mx-auto">
                <p className="mb-8 text-black font-semibold tracking-tight">ENTROPIA</p>
                <p className="mb-12 max-w-sm mx-auto leading-relaxed">
                    Advancing humanity through structured collaboration of elite minds. Not a country. A civilizational engine.
                </p>
                <div className="flex justify-center gap-8 text-xs uppercase tracking-widest text-gray-500 font-medium">
                    <Link href="/prospectus" className="hover:text-black transition-colors">Manifesto</Link>
                    <a href="mailto:hello@entropiacity.com" className="hover:text-black transition-colors">Contact</a>
                    <Link href="/access" className="hover:text-black transition-colors">Login</Link>
                </div>
                <a href="mailto:hello@entropiacity.com" className="block mt-8 text-xs text-gray-400 hover:text-black transition-colors">
                    hello@entropiacity.com
                </a>
                <p className="mt-8 text-xs text-gray-300">
                    &copy; {new Date().getFullYear()} Private Intellectual State.
                </p>
            </div>
        </footer>
    );
}
