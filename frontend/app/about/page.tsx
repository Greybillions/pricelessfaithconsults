import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/about/AboutHero';
import { WhoWeAre } from '@/components/about/WhoWeAre';
import { AboutValues } from '@/components/about/AboutValues';
import { AboutCTA } from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />
        <WhoWeAre />
        <AboutValues />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}
