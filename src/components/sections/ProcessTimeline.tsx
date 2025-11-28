'use client';

import React from 'react';
import { FaPhoneAlt, FaCar, FaHandshake, FaMoneyBillWave, FaFileAlt } from 'react-icons/fa';

const steps = [
  {
    id: 1,
    title: 'Bize Ulaşın',
    description: 'Telefon veya WhatsApp üzerinden aracınızın bilgilerini ve fotoğraflarını gönderin.',
    icon: <FaPhoneAlt />,
    color: 'bg-blue-500',
    duration: '5 DK'
  },
  {
    id: 2,
    title: 'Ücretsiz Ekspertiz',
    description: 'Uzman ekibimiz aracınızı yerinde incelesin veya fotoğraflar üzerinden değerlendirsin.',
    icon: <FaCar />,
    color: 'bg-purple-500',
    duration: '30 DK'
  },
  {
    id: 3,
    title: 'Fiyat Teklifi',
    description: 'Aracınızın durumu ve piyasa koşullarına göre en yüksek fiyat teklifini sunalım.',
    icon: <FaFileAlt />,
    color: 'bg-orange-500',
    duration: 'ANINDA'
  },
  {
    id: 4,
    title: 'Noter & Satış',
    description: 'Anlaşma sağlandığında noter işlemlerini başlatalım. Tüm masraflar bize ait.',
    icon: <FaHandshake />,
    color: 'bg-pink-500',
    duration: '1 SAAT'
  },
  {
    id: 5,
    title: 'Nakit Ödeme',
    description: 'Satış işlemi gerçekleştiği anda paranız hesabınıza geçsin veya nakit ödensin.',
    icon: <FaMoneyBillWave />,
    color: 'bg-green-500',
    duration: 'HEMEN'
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-lg text-gray-600">
            Aracınızı satmak hiç bu kadar kolay olmamıştı. 5 adımda hızlı ve güvenli satış süreci.
          </p>
        </div>

        <div className="relative">
          {/* Central Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.id} className="relative group">
                {/* Mobile Line */}
                {idx !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-16 left-8 w-1 h-full bg-gray-200 z-0"></div>
                )}

                <div className={`flex flex-col items-center ${idx % 2 === 0 ? 'lg:flex-col' : 'lg:flex-col-reverse'} gap-8`}>

                  {/* Card */}
                  <div className={`bg-white p-6 rounded-xl shadow-lg w-full relative group-hover:-translate-y-2 transition-transform duration-300 border-t-4 ${step.color.replace('bg-', 'border-')}`}>
                    <div className="absolute top-0 right-0 bg-gray-100 px-2 py-1 rounded-bl-lg text-[10px] font-bold text-gray-500">
                      ADIM {step.id}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>

                  {/* Connector Node */}
                  <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center text-2xl shadow-lg relative z-10 border-4 border-white`}>
                    {step.icon}

                    {/* Duration Badge */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-secondary-900 text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">
                      {step.duration}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block h-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
