'use client';

import React from 'react';
import { FaPhoneAlt, FaCar, FaHandshake, FaMoneyBillWave, FaArrowRight } from 'react-icons/fa';

interface ProcessProps {
  steps?: Array<{
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    badge: string;
    color: string;
  }>;
  title?: React.ReactNode;
  description?: string;
}

export default function FourStepsProcess({
  steps = [
    {
      id: 1,
      title: 'BİZE ULAŞIN',
      subtitle: 'Hızlı İletişim',
      description: 'Telefon veya WhatsApp üzerinden aracınızın bilgilerini iletin.',
      icon: <FaPhoneAlt />,
      badge: 'HIZLI',
      color: 'bg-orange-500'
    },
    {
      id: 2,
      title: 'EKSPERTİZ',
      subtitle: 'Ücretsiz Kontrol',
      description: 'Uzman ekibimiz aracınızı yerinde incelesin ve değerini belirlesin.',
      icon: <FaCar />,
      badge: 'ÜCRETSİZ',
      color: 'bg-orange-500'
    },
    {
      id: 3,
      title: 'ANLAŞMA',
      subtitle: 'Noter İşlemleri',
      description: 'Fiyatta anlaşalım, noter işlemlerini hemen başlatalım.',
      icon: <FaHandshake />,
      badge: 'KOLAY',
      color: 'bg-orange-500'
    },
    {
      id: 4,
      title: 'ÖDEME',
      subtitle: 'Anında Nakit',
      description: 'Satış işlemiyle birlikte paranız anında hesabınıza geçsin.',
      icon: <FaMoneyBillWave />,
      badge: 'HEMEN',
      color: 'bg-green-500'
    }
  ],
  title = (
    <>
      4 ADIMDA <span className="text-lime-accent">NAKDE ÇEVİRİN</span>
    </>
  ),
  description = "Karmaşık prosedürlerle uğraşmayın. Aracınızı satmanın en kolay ve hızlı yolu."
}: ProcessProps) {
  return (
    <section className="py-20 bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900 skew-x-12 opacity-50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-lime-accent text-secondary-900 font-bold px-4 py-1 rounded-full text-sm mb-4">
            KOLAY SATIŞ SÜRECİ
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            {title}
          </h2>
          <p className="text-gray-100 text-lg">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.id} className="relative group">
              {/* Arrow Connector (Desktop) */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 text-gray-600 text-2xl">
                  <FaArrowRight />
                </div>
              )}

              <div className="bg-secondary-800 rounded-2xl p-8 h-full border border-secondary-700 hover:border-lime-accent transition-colors duration-300 relative overflow-hidden group-hover:-translate-y-2 transform transition-transform">
                {/* Number Background */}
                <div className="absolute -bottom-4 -right-4 text-9xl font-black text-secondary-700 opacity-20 select-none">
                  {step.id}
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-secondary-900/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold border border-secondary-600">
                  {step.badge}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center text-3xl text-white mb-6 shadow-lg shadow-orange-900/20`}>
                  {step.icon}
                </div>

                <h3 className="text-xl font-black mb-1">{step.title}</h3>
                <div className="text-lime-accent text-sm font-bold mb-4">{step.subtitle}</div>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Bar */}
        <div className="mt-16 bg-secondary-800 rounded-xl p-6 border border-secondary-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-lime-accent text-secondary-900 flex items-center justify-center font-bold text-xl">
              !
            </div>
            <div>
              <div className="font-bold text-white">Ortalama İşlem Süresi</div>
              <div className="text-gray-400 text-sm">Noter işlemleri dahil</div>
            </div>
          </div>

          <div className="flex-1 w-full md:w-auto bg-secondary-900 h-4 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-3/4 bg-gradient-to-r from-orange-500 to-lime-accent rounded-full"></div>
            <div className="absolute top-0 left-1/4 w-1 h-full bg-secondary-900/50"></div>
            <div className="absolute top-0 left-2/4 w-1 h-full bg-secondary-900/50"></div>
            <div className="absolute top-0 left-3/4 w-1 h-full bg-secondary-900/50"></div>
          </div>

          <div className="text-2xl font-black text-white">
            60 <span className="text-sm font-normal text-gray-400">DAKİKA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
