'use client';

import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaCar, FaCheckCircle, FaStar, FaShieldAlt, FaBolt, FaMoneyBillWave } from 'react-icons/fa';
import { siteConfig } from '@/data/site';
import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';
import { trackPhoneClick, trackWhatsAppClick, trackFormSubmit } from '@/lib/analytics';

interface HeroProps {
  badge?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: string;
  stats?: Array<{ value: string; label: string }>;
}

export default function HeroSectionEnhanced({
  badge = (
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 animate-fade-in">
      <FaCheckCircle className="text-success" />
      <span className="text-sm font-medium">Türkiye'nin En Güvenilir Araç Alım Merkezi</span>
    </div>
  ),
  title = (
    <>
      Aracınızı <span className="text-accent">Değerinde</span> ve <span className="text-accent">Nakit</span> Satın Alıyoruz
    </>
  ),
  subtitle = "Hasarlı, kazalı, pert veya hurda aracınızı 30 dakika içinde değerlendirip, adresinizden nakit ödeme ile teslim alıyoruz.",
  stats = [
    { value: "15+", label: "Yıllık Tecrübe" },
    { value: "5000+", label: "Mutlu Müşteri" },
    { value: "30dk", label: "Hızlı Teklif" }
  ]
}: HeroProps) {
  const [vehicleType, setVehicleType] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    trackFormSubmit('hero_lead_form');
    setIsSuccess(true);
    setIsSubmitting(false);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setVehicleType('');
      setPhone('');
    }, 3000);
  };

  const handlePhoneClick = () => {
    trackPhoneClick('hero_enhanced');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero_enhanced');
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary-400 blur-[100px]"></div>
      </div>

      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {badge}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href={formatPhoneHref(siteConfig.phone)}
                onClick={handlePhoneClick}
                className="btn bg-accent hover:bg-accent-600 text-white btn-lg shadow-lg shadow-accent/30 flex items-center gap-3 group"
              >
                <FaPhoneAlt className="group-hover:rotate-12 transition-transform" />
                <span>Hemen Ara</span>
              </a>
              <a
                href={formatWhatsAppHref(siteConfig.whatsapp)}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-success hover:bg-green-600 text-white btn-lg shadow-lg shadow-success/30 flex items-center gap-3 group"
              >
                <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform" />
                <span>WhatsApp Teklif</span>
              </a>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Card */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-white text-primary-900 p-4 rounded-full shadow-xl z-20 hidden md:block animate-floating">
              <div className="flex flex-col items-center">
                <FaShieldAlt className="text-3xl text-accent mb-1" />
                <span className="font-bold text-xs">Güvenli</span>
                <span className="text-[10px] font-medium">İşlem</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 relative z-10">
              <div className="bg-gray-50 p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <FaBolt className="text-accent" /> Ücretsiz Fiyat Teklifi Al
                </h3>
                <p className="text-sm text-gray-500 mt-1">Bilgilerinizi girin, 30 dakikada arayalım.</p>
              </div>

              <div className="p-6 space-y-4">
                {isSuccess ? (
                  <div className="text-center py-8 animate-fade-in">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheckCircle className="text-3xl" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Başvurunuz Alındı!</h4>
                    <p className="text-gray-600">Uzman ekibimiz en kısa sürede size dönüş yapacaktır.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Araç Durumu</label>
                      <select
                        required
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900 bg-white"
                      >
                        <option value="" disabled>Seçiniz</option>
                        <option value="kazali">Kazalı Araç</option>
                        <option value="hasarli">Hasarlı Araç</option>
                        <option value="pert">Pert Araç</option>
                        <option value="hurda">Hurda Araç</option>
                        <option value="ikinciel">İkinci El (Hasarsız)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Telefon Numaranız</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaPhoneAlt className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="05XX XXX XX XX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent text-gray-900 placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full btn bg-primary hover:bg-primary-700 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <FaMoneyBillWave /> Fiyat Teklifi İste
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-3">
                      Kişisel verileriniz KVKK kapsamında korunmaktadır.
                    </p>
                  </form>
                )}
              </div>

              {/* Mini Stats in Form */}
              <div className="bg-gray-50 p-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" /> <span>4.9/5 Puan</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaShieldAlt className="text-primary" /> <span>SSL Güvenli</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
