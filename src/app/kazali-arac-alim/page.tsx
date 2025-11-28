import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
import HeroSectionEnhanced from '@/components/sections/HeroSectionEnhanced';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FourStepsProcess from '@/components/sections/FourStepsProcess';
import TestimonialsEnhanced from '@/components/sections/TestimonialsEnhanced';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTASection from '@/components/sections/CTASection';
import { ctaSections } from '@/data/cta';

const service = getServiceBySlug('kazali-arac-alim');

export const metadata: Metadata = {
  title: service?.metaTitle || 'Kazalı Araç Alımı',
  description: service?.metaDescription || '',
  keywords: service?.keywords || [],
};

export default function KazaliAracPage() {
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Header />
      <main>
        {/* Enhanced Hero */}
        <HeroSectionEnhanced
          badge={service.hero.badge}
          title={
            <>
              {service.hero.title} <span className="text-accent">{service.hero.titleHighlight}</span>
            </>
          }
          subtitle={service.hero.subtitle}
        />

        {/* Features / Why Choose Us */}
        <WhyChooseUs
          title="Neden Bizi Seçmelisiniz?"
          description="Kazalı aracınızı satarken size sunduğumuz ayrıcalıklar."
          features={service.features.map(f => ({
            icon: f.icon,
            title: f.title,
            description: f.description,
            color: 'text-primary-600',
            bg: 'bg-primary-50',
            border: 'border-l-primary-500'
          }))}
        />

        {/* Process */}
        <FourStepsProcess />

        {/* Testimonials */}
        <TestimonialsEnhanced />

        {/* FAQ */}
        <FAQAccordion faqs={service.faqs} />

        {/* Final CTA */}
        <CTASection data={ctaSections[0]} />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
