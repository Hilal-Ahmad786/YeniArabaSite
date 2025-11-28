'use client';

import React, { useState } from 'react';
import { FaStar, FaQuoteLeft, FaCheckCircle, FaCar, FaMapMarkerAlt } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    location: 'İstanbul, Kadıköy',
    vehicle: '2018 Ford Focus',
    service: 'kazali',
    rating: 5,
    date: '2 gün önce',
    text: 'Kazalı aracımı satmak için çok yer aradım, en iyi fiyatı burası verdi. 30 dakikada geldiler, parayı hemen hesabıma geçtiler. Kesinlikle tavsiye ederim.',
    avatarColor: 'bg-blue-500'
  },
  {
    id: 2,
    name: 'Mehmet Demir',
    location: 'Ankara, Çankaya',
    vehicle: '2015 VW Passat',
    service: 'hasarli',
    rating: 5,
    date: '1 hafta önce',
    text: 'Motor arızalı aracım vardı, tamir masrafı çok yüksekti. Değerinde aldılar, çekici ile ücretsiz götürdüler. Çok profesyonel bir ekip.',
    avatarColor: 'bg-green-500'
  },
  {
    id: 3,
    name: 'Ayşe Kaya',
    location: 'İzmir, Karşıyaka',
    vehicle: '2020 Renault Clio',
    service: 'pert',
    rating: 5,
    date: '3 hafta önce',
    text: 'Pert kayıtlı aracım için endişeliydim ama süreç çok kolay işledi. Tüm evrak işlerini onlar halletti, ben sadece notere gittim.',
    avatarColor: 'bg-purple-500'
  },
  {
    id: 4,
    name: 'Mustafa Çelik',
    location: 'Bursa, Nilüfer',
    vehicle: '2012 Honda Civic',
    service: 'kazali',
    rating: 4,
    date: '1 ay önce',
    text: 'Hızlı ve güvenilir hizmet. Fiyat konusunda piyasanın üzerinde teklif verdiler. Memnun kaldım.',
    avatarColor: 'bg-orange-500'
  },
  {
    id: 5,
    name: 'Zeynep Yıldız',
    location: 'Antalya, Muratpaşa',
    vehicle: '2016 Opel Astra',
    service: 'hasarli',
    rating: 5,
    date: '2 ay önce',
    text: 'Kaporta hasarlı aracımı satmak istiyordum. WhatsApp\'tan fotoğraf attım, hemen fiyat verdiler. Ertesi gün gelip aldılar.',
    avatarColor: 'bg-pink-500'
  },
  {
    id: 6,
    name: 'Ali Öztürk',
    location: 'İstanbul, Başakşehir',
    vehicle: '2010 Fiat Doblo',
    service: 'hurda',
    rating: 5,
    date: '3 ay önce',
    text: 'Eski aracımı hurdaya çıkarmak istiyordum. Tüm prosedürleri biliyorlar, hiç uğraşmadım. Teşekkürler.',
    avatarColor: 'bg-red-500'
  }
];

const filters = [
  { id: 'all', label: 'Tümü' },
  { id: 'kazali', label: 'Kazalı Araç' },
  { id: 'hasarli', label: 'Hasarlı Araç' },
  { id: 'pert', label: 'Pert Araç' },
  { id: 'hurda', label: 'Hurda Araç' },
];

export default function TestimonialsEnhanced() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTestimonials = activeFilter === 'all'
    ? testimonials
    : testimonials.filter(t => t.service === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-100 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <span className="text-sm font-bold text-yellow-700">4.9/5 Müşteri Memnuniyeti</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-gray-600">
            Binlerce mutlu müşterimiz gibi siz de aracınızı güvenle satın. Gerçek kullanıcı yorumları.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === filter.id
                  ? 'bg-secondary-900 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <FaQuoteLeft className="absolute top-6 right-6 text-gray-200 text-4xl" />

              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-xl shadow-md`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <FaMapMarkerAlt /> {testimonial.location}
                  </div>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-4 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
                <div className="flex items-center gap-2 text-xs font-medium bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600">
                  <FaCar className="text-secondary-500" /> {testimonial.vehicle}
                </div>
                <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                  <FaCheckCircle /> Doğrulanmış
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
