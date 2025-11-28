import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import HeroSectionEnhanced from '@/components/sections/HeroSectionEnhanced';
import UrgencyBanner from '@/components/sections/UrgencyBanner';
import StatsSection from '@/components/sections/StatsSection';
import ServicesGridColored from '@/components/sections/ServicesGridColored';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FourStepsProcess from '@/components/sections/FourStepsProcess';
import TestimonialsEnhanced from '@/components/sections/TestimonialsEnhanced';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTASection from '@/components/sections/CTASection';
import { ctaSections } from '@/data/cta';

export default function HomePage() {
  const homeFaqs = [
    {
      question: "Aracımın değeri ne kadar?",
      answer: "Aracınızın markası, modeli, yılı, kilometresi ve hasar durumu gibi faktörlere göre uzman ekibimiz tarafından en güncel piyasa verileriyle değerlendirme yapılır. WhatsApp üzerinden fotoğrafları göndererek 30 dakika içinde net fiyat teklifi alabilirsiniz."
    },
    {
      question: "Hangi tür araçları alıyorsunuz?",
      answer: "Kazalı, hasarlı, pert kayıtlı, motor arızalı, şanzıman arızalı, kaporta hasarlı, hurda belgeli veya çekme belgeli her türlü aracı marka ve model fark etmeksizin satın alıyoruz."
    },
    {
      question: "Ödeme ne zaman yapılıyor?",
      answer: "Noter satışı gerçekleştiği anda ödemeniz banka hesabınıza havale/EFT yoluyla veya talep ederseniz nakit olarak anında yapılır. Ödeme almadan satış işlemi tamamlanmaz."
    },
    {
      question: "Çekici hizmeti ücretli mi?",
      answer: "Hayır, aracınızın durumu ne olursa olsun, bulunduğu yerden teslim alınması için çekici hizmetimiz tamamen ücretsizdir. Türkiye'nin her yerinden alım yapıyoruz."
    },
    {
      question: "Noter masrafları kime ait?",
      answer: "Tüm noter, satış ve devir masrafları firmamız tarafından karşılanmaktadır. Size hiçbir ek masraf yansıtılmaz."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Enhanced Hero with Form */}
        <HeroSectionEnhanced />

        {/* Add Urgency */}
        <UrgencyBanner />

        {/* Colored Services */}
        <ServicesGridColored />

        {/* Original Stats */}
        <StatsSection />

        {/* 6 Benefits */}
        <WhyChooseUs />

        {/* Prominent Process */}
        <FourStepsProcess />

        {/* Enhanced Testimonials */}
        <TestimonialsEnhanced />

        {/* FAQ */}
        <FAQAccordion faqs={homeFaqs} />

        {/* Final CTA */}
        <CTASection data={ctaSections[0]} />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
