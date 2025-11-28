'use client';

import React from 'react';
import Link from 'next/link';
import { FaCar, FaWrench, FaFileAlt, FaRecycle, FaArrowRight, FaCheck } from 'react-icons/fa';

const services = [
  {
    id: 'kazali',
    slug: 'kazali-arac-alim',
    title: 'Kazalı Araç Alımı',
    description: 'Kaza yapmış, hasarlı aracınızı değerinde nakit satın alıyoruz.',
    icon: <FaCar className="text-3xl" />,
    color: 'from-secondary-800 to-secondary-900',
    btnColor: 'bg-secondary-600 hover:bg-secondary-700',
    lightColor: 'bg-secondary-50 text-secondary-700',
    features: ['Anında Nakit Ödeme', 'Ücretsiz Çekici', 'Noter İşlemleri Bizden'],
    stats: '5000+ Araç Alındı'
  },
  {
    id: 'hasarli',
    slug: 'hasarli-arac-alim',
    title: 'Hasarlı Araç Alımı',
    description: 'Kaporta, boya veya mekanik hasarlı araçlarınız için en iyi fiyat.',
    icon: <FaWrench className="text-3xl" />,
    color: 'from-secondary-800 to-secondary-900',
    btnColor: 'bg-secondary-600 hover:bg-secondary-700',
    lightColor: 'bg-secondary-50 text-secondary-700',
    features: ['Yüksek Fiyat Garantisi', '30 Dakikada Teklif', 'Yerinde Değerleme'],
    stats: '3500+ Araç Alındı'
  },
  {
    id: 'pert',
    slug: 'pert-arac-alim',
    title: 'Pert Araç Alımı',
    description: 'Sigorta veya kasko pert kayıtlı araçlarınızı sorunsuz alıyoruz.',
    icon: <FaFileAlt className="text-3xl" />,
    color: 'from-secondary-800 to-secondary-900',
    btnColor: 'bg-secondary-600 hover:bg-secondary-700',
    lightColor: 'bg-secondary-50 text-secondary-700',
    features: ['Tüm Evrak Takibi', 'Sorunsuz Devir', 'Aynı Gün İşlem'],
    stats: '2000+ Araç Alındı'
  },
  {
    id: 'hurda',
    slug: 'hurda-arac-alim',
    title: 'Hurda Araç Alımı',
    description: 'Kullanılamaz durumdaki hurda araçlarınızı geri dönüşüme kazandırın.',
    icon: <FaRecycle className="text-3xl" />,
    color: 'from-secondary-800 to-secondary-900',
    btnColor: 'bg-secondary-600 hover:bg-secondary-700',
    lightColor: 'bg-secondary-50 text-secondary-700',
    features: ['Çevre Dostu', 'Lisanslı Geri Dönüşüm', 'Hurda Belgesi Desteği'],
    stats: '10000+ Ton Geri Dönüşüm'
  }
];

export default function ServicesGridColored() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600">
            Her türlü araç durumu için profesyonel çözümler sunuyoruz. Aracınızın durumu ne olursa olsun, en iyi fiyatı veriyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Colored Header */}
              <div className={`h-32 bg-gradient-to-br ${service.color} p-6 relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] rounded-full border-4 border-white/30 animate-spin-slow"></div>
                </div>
                <div className="relative z-10 text-white transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white font-medium">
                  {service.stats}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 mb-6 line-clamp-2">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${service.lightColor}`}>
                        <FaCheck className="text-[8px]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${service.slug}`}
                  className={`w-full btn ${service.btnColor} text-white py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-bold shadow-md hover:shadow-lg transition-all`}
                >
                  Detaylı Bilgi <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
