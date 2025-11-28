'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaPhoneAlt } from 'react-icons/fa';
import { siteConfig } from '@/data/site';
import { formatPhoneHref } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({
  faqs,
  title = "Sıkça Sorulan Sorular",
  subtitle = "Aklınıza takılan tüm soruların cevapları burada."
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left: Title & Info */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full font-bold text-sm mb-6">
                <FaQuestionCircle /> MERAK EDİLENLER
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-secondary-900 mb-6">
                {title}
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {subtitle}
              </p>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">Başka sorunuz mu var?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Uzman ekibimiz tüm sorularınızı yanıtlamak için hazır.
                </p>
                <a
                  href={formatPhoneHref(siteConfig.phone)}
                  className="btn bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white w-full flex items-center justify-center gap-2 font-bold transition-all"
                >
                  <FaPhoneAlt /> Bizi Arayın
                </a>
              </div>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-xl transition-all duration-300 ${openIndex === index
                    ? 'border-accent shadow-lg bg-white'
                    : 'border-gray-200 hover:border-accent/50 bg-gray-50'
                  }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-accent' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-accent text-white rotate-180' : 'bg-gray-200 text-gray-500'
                    }`}>
                    <FaChevronDown />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
