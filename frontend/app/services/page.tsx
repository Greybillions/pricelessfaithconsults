import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServiceDetails } from '@/components/services/ServiceDetails';
import { ServicesCTA } from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServicesHero />
        <ServiceDetails />
        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}
