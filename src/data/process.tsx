// src/data/process.ts
import { ProcessStep } from './types';
import { FaPhoneAlt, FaCar, FaMoneyBillWave, FaFileAlt, FaCheckCircle } from 'react-icons/fa';

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: <FaPhoneAlt />,
    title: 'Bizi Arayın',
    description: 'Telefon veya WhatsApp ile bize ulaşın. Aracınız hakkında bilgi verin.',
  },
  {
    step: 2,
    icon: <FaCar />,
    title: 'Ekspertiz',
    description: 'Uzman ekibimiz 30 dakika içinde adresinize gelir ve ücretsiz değerlendirme yapar.',
  },
  {
    step: 3,
    icon: <FaMoneyBillWave />,
    title: 'Fiyat Teklifi',
    description: 'En yüksek ve en adil fiyat teklifimizi alırsınız. Karar sizin.',
  },
  {
    step: 4,
    icon: <FaFileAlt />,
    title: 'Evrak İşlemleri',
    description: 'Noter, tapu ve tüm resmi işlemleri biz hallederiz.',
  },
  {
    step: 5,
    icon: <FaCheckCircle />,
    title: 'Anında Ödeme',
    description: 'Anlaşma sonrası hemen nakit veya havale ile ödeme yapılır.',
  },
];
