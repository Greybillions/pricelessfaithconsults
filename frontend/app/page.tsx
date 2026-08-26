import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/home/Hero';
import { AboutPreview } from '@/components/home/AboutPreview';
import { Services } from '@/components/home/Services';
import { Audience } from '@/components/home/Audience';
import { Resources } from '@/components/home/Resources';
import { WhyUs } from '@/components/home/WhyUs';
import { VisionMission } from '@/components/home/VisionMission';
import { CTA } from '@/components/home/CTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutPreview />
        <Services />
        <Audience />
        <Resources />
        <WhyUs />
        <VisionMission />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
