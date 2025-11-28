'use client';

import { useState } from 'react';

// Sample testimonials (you can move this to data/testimonials.ts later)
const testimonials = [
  {
    id: 1,
    name: 'Mehmet K.',
    location: 'İstanbul, Kadıköy',
    rating: 5,
    text: 'Kazalı aracımı çok hızlı bir şekilde değerlendirdiler. Fiyat teklifinden çok memnun kaldım. Kesinlikle tavsiye ederim!',
    service: 'Kazalı Araç',
  },
  {
    id: 2,
    name: 'Ayşe D.',
    location: 'Ankara, Çankaya',
    rating: 5,
    text: 'Hasarlı aracım için piyasanın en iyi fiyatını verdiler. Tüm işlemler çok profesyonelce ve hızlıca tamamlandı.',
    service: 'Hasarlı Araç',
  },
  {
    id: 3,
    name: 'Can Y.',
    location: 'İzmir, Karşıyaka',
    rating: 5,
    text: 'Pert aracım için evrak işlemleri konusunda çok yardımcı oldular. Her şey çok kolay ve hızlıydı. Teşekkürler!',
    service: 'Pert Araç',
  },
  {
    id: 4,
    name: 'Zeynep M.',
    location: 'Bursa, Nilüfer',
    rating: 5,
    text: 'Hurda aracım için en yüksek fiyatı aldım. Çekici hizmeti ücretsizdi ve aynı gün ödeme yaptılar. Harika!',
    service: 'Hurda Araç',
  },
  {
    id: 5,
    name: 'Ahmet S.',
    location: 'Antalya, Muratpaşa',
    rating: 5,
    text: '15 yıllık tecrübeleri belli oluyor. Çok güvenilir ve profesyonel bir ekip. Herkese tavsiye ederim.',
    service: 'Kazalı Araç',
  },
  {
    id: 6,
    name: 'Elif T.',
    location: 'İstanbul, Beşiktaş',
    rating: 5,
    text: 'WhatsApp üzerinden iletişim kurduk, 2 saat içinde geldiler ve işlemi hallettik. Çok hızlı ve kolay!',
    service: 'Hasarlı Araç',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get 3 testimonials to display
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-primary-900 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            5000+ mutlu müşterimizin gerçek yorumları
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card ${index === 1 ? 'md:scale-105 md:shadow-medium' : ''}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-primary-700 mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Service Badge */}
              <div className="mb-3">
                <span className="badge badge-primary text-xs">
                  {testimonial.service}
                </span>
              </div>

              {/* Author */}
              <div className="border-t border-primary-100 pt-3">
                <p className="font-bold text-primary-900">{testimonial.name}</p>
                <p className="text-sm text-primary-600">📍 {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full bg-accent text-white hover:bg-accent-600 transition-colors flex items-center justify-center"
            aria-label="Önceki"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full bg-accent text-white hover:bg-accent-600 transition-colors flex items-center justify-center"
            aria-label="Sonraki"
          >
            →
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-primary-50 rounded-lg">
            <div className="text-2xl mb-2">⭐</div>
            <div className="font-bold text-primary-900">4.9/5</div>
            <div className="text-sm text-primary-600">Ortalama Puan</div>
          </div>
          <div className="text-center p-4 bg-primary-50 rounded-lg">
            <div className="text-2xl mb-2">😊</div>
            <div className="font-bold text-primary-900">5000+</div>
            <div className="text-sm text-primary-600">Mutlu Müşteri</div>
          </div>
          <div className="text-center p-4 bg-primary-50 rounded-lg">
            <div className="text-2xl mb-2">🏆</div>
            <div className="font-bold text-primary-900">%98</div>
            <div className="text-sm text-primary-600">Memnuniyet</div>
          </div>
          <div className="text-center p-4 bg-primary-50 rounded-lg">
            <div className="text-2xl mb-2">🔄</div>
            <div className="font-bold text-primary-900">%95</div>
            <div className="text-sm text-primary-600">Tekrar Müşteri</div>
          </div>
        </div>
      </div>
    </section>
  );
}
