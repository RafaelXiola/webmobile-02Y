import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Statistics from '@/components/Statistics';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Testimonials />
      <Statistics />
      <Partners />
      <Services />
      <FAQ />
      <CTA />
    </main>
  );
}
