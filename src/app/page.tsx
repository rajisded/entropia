import Hero from '@/components/Hero';
import Vision from '@/components/Vision';
import Pillars from '@/components/Pillars';
import Philosophy from '@/components/Philosophy';
import Strategic from '@/components/Strategic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <Vision />
      <Pillars />
      <Philosophy />
      <Strategic />
      <Footer />
    </main>
  );
}
