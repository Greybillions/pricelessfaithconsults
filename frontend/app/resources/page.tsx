import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ResourcesHero } from '@/components/resources/ResourcesHero';
import { ResourceList } from '@/components/resources/ResourceList';
import { ResourcesCTA } from '@/components/resources/ResourcesCTA';

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ResourcesHero />
        <ResourceList />
        <ResourcesCTA />
      </main>

      <Footer />
    </>
  );
}
