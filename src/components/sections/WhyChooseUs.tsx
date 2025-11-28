'use client';

import React from 'react';
import { FaBolt, FaMoneyBillWave, FaTruck, FaFileAlt, FaHandshake, FaHistory, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '@/data/site';
import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';

const benefits = [
  {
    icon: <FaBolt />,
    title: 'Anında Değerleme',
    description: 'Aracınızın bilgilerini iletin, 30 dakika içinde gerçek değerinde fiyat teklifi alın.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-l-primary-500'
  },
  {
    icon: <FaMoneyBillWave />,
    title: 'En Yüksek Fiyat',
    description: 'Piyasa koşullarını anlık takip ederek aracınız için en yüksek fiyat garantisi veriyoruz.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-l-primary-500'
  },
  {
    icon: <FaTruck />,
    title: 'Ücretsiz Çekici',
    description: 'Aracınız nerede olursa olsun, kendi çekicimizle ücretsiz olarak bulunduğu yerden alıyoruz.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-l-primary-500'
  },
  {
    icon: <FaFileAlt />,
    title: 'Tüm Evraklar Bizden',
    description: 'Noter, satış ve devir işlemlerinin tüm masrafları ve takibi firmamıza aittir.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-l-primary-500'
  },
  {
    icon: <FaHandshake />,
    title: 'Anında Nakit Ödeme',
    description: 'Noter satışı yapıldığı anda paranız hesabınıza geçer veya nakit olarak ödenir.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-l-primary-500'
  },
  {
    icon: <FaHistory />,
    title: '20+ Yıllık Tecrübe',
    description: 'Sektördeki 20 yıllık deneyimimizle binlerce mutlu müşteriye hizmet verdik.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    border: 'border-l-primary-500'
  }
];

interface WhyChooseUsProps {
  features?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    color?: string;
    bg?: string;
    border?: string;
  }>;
  title?: string;
  description?: string;
}

export default function WhyChooseUs({
  features = benefits,
  title = "Neden Bizi Seçmelisiniz?",
  description = "Aracınızı satarken yaşayabileceğiniz tüm zorlukları ortadan kaldırıyoruz. Hızlı, güvenli ve karlı satış için doğru adrestesiniz."
}: WhyChooseUsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.bg?.replace('bg-', 'from-').replace('100', '50') || 'from-primary-50'} ${benefit.bg?.replace('bg-', 'to-').replace('100', '100') || 'to-primary-100'} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                <span className={benefit.color || 'text-primary-600'}>{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/pattern.png')]"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Aracınızı Satmak İçin Beklemeyin!
            </h3>
            <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
              Hemen arayın veya WhatsApp'tan yazın, aracınız için en iyi fiyat teklifini 30 dakika içinde alın.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={formatPhoneHref(siteConfig.phone)}
                className="btn bg-accent text-white hover:bg-accent-600 btn-lg font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <FaPhoneAlt /> Hemen Ara
              </a>
              <a
                href={formatWhatsAppHref(siteConfig.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-success hover:bg-green-600 text-white btn-lg font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <FaWhatsapp className="text-xl" /> WhatsApp Teklif
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
