import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import { getCityBySlug, getAllCities } from '@/data/cities';
import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';
import { siteConfig } from '@/data/site';

export async function generateStaticParams() {
  const cities = getAllCities();
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = getCityBySlug(params.city);

  if (!city) {
    return {
      title: 'Şehir Bulunamadı',
    };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);

  if (!city) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6">
                <span className="badge bg-accent/20 text-white border border-white/30">
                  {city.hero.badge}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                {city.hero.title}
                <br />
                <span className="text-accent-400">{city.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                {city.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={formatPhoneHref(siteConfig.phone)} className="btn btn-primary btn-lg">
                  📞 Hemen Ara
                </a>
                <a 
                  href={formatWhatsAppHref(siteConfig.whatsapp)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* City Info Section */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="text-3xl mb-2">👥</div>
                <div className="font-bold text-primary-900">{city.cityInfo.population}</div>
                <div className="text-sm text-primary-600">Nüfus</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="text-3xl mb-2">📍</div>
                <div className="font-bold text-primary-900">{city.cityInfo.coverage.length}</div>
                <div className="text-sm text-primary-600">İlçe Hizmeti</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-bold text-primary-900">{city.cityInfo.responseTime}</div>
                <div className="text-sm text-primary-600">Yanıt Süresi</div>
              </div>
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="text-3xl mb-2">✅</div>
                <div className="font-bold text-primary-900">%100</div>
                <div className="text-sm text-primary-600">Güvenli</div>
              </div>
            </div>

            <h2 className="text-3xl font-black text-center mb-8">Hizmet Verdiğimiz İlçeler</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {city.cityInfo.coverage.map((district, index) => (
                <div key={index} className="text-center py-2 px-4 bg-primary-50 rounded-lg text-sm text-primary-700">
                  {district}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-primary-50">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">{city.name} Avantajlarımız</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {city.features.map((feature, index) => (
                <div key={index} className="card bg-white">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-primary-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section bg-white">
          <div className="container">
            <h2 className="text-3xl font-black text-center mb-12">{city.name} Müşteri Yorumları</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {city.testimonials.map((testimonial) => (
                <div key={testimonial.id} className="card">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-primary-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="mb-3">
                    <span className="badge badge-primary text-xs">{testimonial.service}</span>
                  </div>
                  <div className="border-t border-primary-100 pt-3">
                    <p className="font-bold text-primary-900">{testimonial.name}</p>
                    <p className="text-sm text-primary-600">📍 {testimonial.district}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-primary-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-center mb-12">{city.name} Hakkında SSS</h2>
            <div className="space-y-4">
              {city.faqs.map((faq, index) => (
                <div key={index} className="card bg-white">
                  <h3 className="text-lg font-bold text-primary-900 mb-2">{faq.question}</h3>
                  <p className="text-primary-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section bg-gradient-to-br from-primary-800 via-secondary-800 to-secondary-900 text-white">
          <div className="container max-w-3xl text-center">
            <h2 className="text-4xl font-black mb-4">{city.name}'da Hemen Satın!</h2>
            <p className="text-xl mb-8">30 dakika içinde teklif alın, anında nakit ödeme</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={formatPhoneHref(siteConfig.phone)} className="btn btn-primary btn-lg">
                📞 {siteConfig.phoneDisplay}
              </a>
              <a 
                href={formatWhatsAppHref(siteConfig.whatsapp)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                💬 WhatsApp ile Yaz
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
