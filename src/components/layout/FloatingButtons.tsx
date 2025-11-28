'use client';

import { useState, useRef, useEffect } from 'react';
import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';
import { trackPhoneClick, trackWhatsAppClick, trackFormSubmit } from '@/lib/analytics';
import { siteConfig } from '@/data/site';
import { FaWhatsapp, FaPhoneAlt, FaComments, FaTimes, FaUserCircle, FaPaperPlane } from 'react-icons/fa';

const PRE_WRITTEN_QUESTIONS = [
  "Aracım ne kadar eder?",
  "Hangi araçları alıyorsunuz?",
  "Ödeme süreci nasıl işliyor?",
  "Yeriniz nerede?",
  "Hemen teklif almak istiyorum."
];

export default function FloatingButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string, isUser: boolean }[]>([
    { text: "Merhaba! 👋 Size nasıl yardımcı olabilirim?", isUser: false }
  ]);
  const chatRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    if (!isChatOpen) {
      trackFormSubmit('open_chat_dialog');
    }
    setIsChatOpen(!isChatOpen);
  };

  const handleQuestionClick = (question: string) => {
    // Add user message
    setMessages(prev => [...prev, { text: question, isUser: true }]);

    // Simulate typing delay then response
    setTimeout(() => {
      let response = "Size bu konuda hemen yardımcı olabiliriz. Lütfen aşağıdaki butonlardan bize ulaşın veya WhatsApp üzerinden fotoğraf gönderin.";

      if (question.includes("ne kadar")) {
        response = "Aracınızın değerini belirlemek için marka, model ve hasar durumunu görmemiz gerekiyor. WhatsApp'tan fotoğraf gönderirseniz 30 dakika içinde fiyat verebiliriz.";
      } else if (question.includes("Hangi araç")) {
        response = "Kazalı, hasarlı, pert, hurda ve motor arızalı her türlü aracı marka model fark etmeksizin alıyoruz.";
      } else if (question.includes("Ödeme")) {
        response = "Noter satışı yapıldığı anda paranızı banka hesabınıza havale/EFT yapıyoruz veya nakit ödüyoruz.";
      }

      setMessages(prev => [...prev, { text: response, isUser: false }]);
      trackFormSubmit(`chat_question_${question.substring(0, 10)}`);
    }, 600);
  };

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsChatOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto-scroll to bottom of chat
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Chat Dialog */}
      {isChatOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-24 right-4 md:right-24 w-[350px] max-w-[calc(100vw-32px)] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200 animate-slide-up flex flex-col max-h-[600px]"
        >
          {/* Header */}
          <div className="bg-primary text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaUserCircle className="text-2xl" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-primary"></div>
              </div>
              <div>
                <h3 className="font-bold text-sm">Müşteri Temsilcisi</h3>
                <p className="text-xs text-primary-100">Çevrimiçi</p>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 bg-gray-50 overflow-y-auto min-h-[300px]">
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isUser
                      ? 'bg-primary text-white rounded-tr-none'
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                      }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Quick Questions */}
          <div className="p-3 bg-white border-t border-gray-100 overflow-x-auto whitespace-nowrap pb-1">
            <div className="flex gap-2">
              {PRE_WRITTEN_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestionClick(q)}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-primary/10 text-gray-600 hover:text-primary text-xs rounded-full border border-gray-200 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 bg-white border-t border-gray-100 grid grid-cols-2 gap-3">
            <a
              href={formatWhatsAppHref(siteConfig.whatsapp)}
              onClick={() => trackWhatsAppClick('chat_dialog')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-success hover:bg-green-600 text-white flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-green-100"
            >
              <FaWhatsapp className="text-lg" /> WhatsApp
            </a>
            <a
              href={formatPhoneHref(siteConfig.phone)}
              onClick={() => trackPhoneClick('chat_dialog')}
              className="btn bg-accent hover:bg-red-600 text-white flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-red-100"
            >
              <FaPhoneAlt /> Hemen Ara
            </a>
          </div>
        </div>
      )}

      {/* Desktop Floating Buttons */}
      <div className="hidden md:flex fixed bottom-8 right-8 flex-col gap-4 z-40">
        <a
          href={formatPhoneHref(siteConfig.phone)}
          onClick={() => trackPhoneClick('floating')}
          className="bg-accent text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform floating"
          aria-label="Telefon"
          title="Hemen Ara"
        >
          <FaPhoneAlt className="text-2xl" />
        </a>
        <a
          href={formatWhatsAppHref(siteConfig.whatsapp)}
          onClick={() => trackWhatsAppClick('floating')}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-success text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative"
          aria-label="Canlı Sohbet"
          title="Canlı Sohbet"
        >
          {isChatOpen ? <FaTimes className="text-2xl" /> : <FaComments className="text-2xl" />}
          {!isChatOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
          )}
        </button>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t-2 border-accent z-50">
        <div className="flex">
          <a
            href={formatPhoneHref(siteConfig.phone)}
            onClick={() => trackPhoneClick('mobile-bottom')}
            className="flex-1 flex flex-col items-center justify-center py-3 bg-accent text-white"
          >
            <FaPhoneAlt className="text-xl mb-1" />
            <span className="text-xs font-semibold">Hemen Ara</span>
          </a>
          <a
            href={formatWhatsAppHref(siteConfig.whatsapp)}
            onClick={() => trackWhatsAppClick('mobile-bottom')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-3 bg-success text-white"
          >
            <FaWhatsapp className="text-2xl mb-1" />
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>
          <button
            onClick={toggleChat}
            className="flex-1 flex flex-col items-center justify-center py-3 bg-blue-600 text-white"
          >
            <FaComments className="text-xl mb-1" />
            <span className="text-xs font-semibold">Sohbet</span>
          </button>
        </div>
      </div>

      {/* Add padding to body to prevent content from being hidden behind mobile bottom bar */}
      <div className="md:hidden h-20" />
    </>
  );
}
