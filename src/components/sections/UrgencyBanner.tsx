'use client';

import React, { useState, useEffect } from 'react';
import { FaClock, FaWhatsapp, FaPhoneAlt, FaCheck, FaShieldAlt, FaStar, FaCar } from 'react-icons/fa';
import { siteConfig } from '@/data/site';
import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer
          return { hours: 4, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-secondary-900 to-primary-900 text-white py-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/pattern.png')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left: Offer & Timer */}
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 p-4 rounded-xl animate-pulse-soft">
              <div className="flex items-center gap-2 text-accent font-bold mb-1 justify-center md:justify-start">
                <FaClock /> BUGÜN İÇİN ÖZEL FIRSAT
              </div>
              <div className="flex items-center gap-2 text-3xl font-black font-mono">
                <div className="bg-black/30 px-2 py-1 rounded">0{timeLeft.hours}</div>
                <span>:</span>
                <div className="bg-black/30 px-2 py-1 rounded">{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</div>
                <span>:</span>
                <div className="bg-black/30 px-2 py-1 rounded">{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Aracınızı Bugün Satın, <span className="text-accent">%5 Ekstra</span> Kazanın!
              </h3>
              <p className="text-gray-100 text-sm md:text-base">
                Bugün yapılan başvurularda ekspertiz sonrası teklif edilen fiyata %5 ekliyoruz.
              </p>
            </div>
          </div>

          {/* Right: CTAs & Features */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={formatWhatsAppHref(siteConfig.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-success hover:bg-green-600 text-white font-bold shadow-lg shadow-green-900/20 flex items-center gap-2 animate-bounce-subtle"
              >
                <FaWhatsapp className="text-xl" /> WhatsApp Teklif
              </a>
              <a
                href={formatPhoneHref(siteConfig.phone)}
                className="btn bg-accent hover:bg-accent-600 text-white font-bold shadow-lg shadow-red-900/20 flex items-center gap-2"
              >
                <FaPhoneAlt /> Hemen Ara
              </a>
            </div>

            <div className="flex items-center gap-4 text-[10px] md:text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <FaCheck className="text-success" /> Ücretsiz Ekspertiz
              </div>
              <div className="flex items-center gap-1">
                <FaCheck className="text-success" /> Nakit Ödeme
              </div>
              <div className="flex items-center gap-1">
                <FaCheck className="text-success" /> Anında Devir
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
