'use client';

import Link from 'next/link';
import { formatPhoneHref, formatWhatsAppHref, formatPhoneDisplay } from '@/lib/utils';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { siteConfig } from '@/data/site';

export default function HeroSection() {
  return (
    <section className="relative hero-gradient text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="badge bg-accent/20 text-white border border-white/30">
                🚗 TÜRKİYE'NİN EN GÜVENİLİR ARAÇ ALIM MERKEZİ
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Hasarlı Aracınızı
              <br />
              <span className="text-accent-400">En Yüksek Fiyata</span>
              <br />
              Satın Alıyoruz
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Kazalı, hasarlı, pert ve hurda araçlar için 30 dakikada ücretsiz ekspertiz ve anında nakit ödeme.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={formatPhoneHref(siteConfig.phone)}
                onClick={() => trackPhoneClick('hero')}
                className="btn btn-primary btn-lg group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">📞</span>
                Hemen Ara
              </a>
              <a
                href={formatWhatsAppHref(siteConfig.whatsapp)}
                onClick={() => trackWhatsAppClick('hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">💬</span>
                WhatsApp
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: '⚡', text: '30 Dakika' },
                { icon: '💰', text: 'En Yüksek Fiyat' },
                { icon: '🚚', text: 'Ücretsiz Çekici' },
                { icon: '✅', text: 'Anında Ödeme' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <div className="text-sm font-semibold">{feature.text}</div>
                </div>
              ))}
            </div>

            {/* Trust Indicator */}
            <div className="mt-12 flex items-center justify-center gap-2 text-white/80">
              <span className="text-2xl">🛡️</span>
              <span className="text-sm">15+ Yıllık Tecrübe • 5000+ Mutlu Müşteri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
