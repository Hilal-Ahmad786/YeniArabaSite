# 🔧 Complete Setup Guide

This guide will help you create all remaining files to complete the project.

## 📋 Files Status

### ✅ Already Created
- `package.json`
- `.env.example`
- `next.config.js`
- `tailwind.config.ts`
- `tsconfig.json`
- `postcss.config.js`
- `README.md`
- `src/app/globals.css`
- `src/data/` (all data files)
- `src/lib/` (utils and analytics)

### 📝 Need to Create

You need to create these files:

## 1. Root Layout (`src/app/layout.tsx`)

Create this file to set up the main layout with analytics:

```typescript
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import GoogleTagManager from '@/components/analytics/GoogleTagManager';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import FacebookPixel from '@/components/analytics/FacebookPixel';
import { siteConfig } from '@/data/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['kazalı araç alımı', 'hasarlı araç alımı', 'pert araç alımı', 'hurda araç alımı'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <GoogleTagManager />
      <body className={inter.className}>
        {children}
        <GoogleAnalytics />
        <FacebookPixel />
      </body>
    </html>
  );
}
```

## 2. Homepage (`src/app/page.tsx`)

```typescript
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import HeroSection from '@/components/sections/HeroSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ProcessSteps from '@/components/sections/ProcessSteps';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import { ctaSections } from '@/data/cta';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesGrid />
        <ProcessSteps />
        <CTASection data={ctaSections[0]} />
        <TestimonialsSection />
        <CTASection data={ctaSections[1]} />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
```

## 3. Analytics Components

### `src/components/analytics/GoogleTagManager.tsx`

```typescript
import Script from 'next/script';

export default function GoogleTagManager() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  if (!gtmId) return null;

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}
```

### `src/components/analytics/GoogleAnalytics.tsx`

```typescript
import Script from 'next/script';

export default function GoogleAnalytics() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

  if (!ga4Id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga4Id}');
          `,
        }}
      />
    </>
  );
}
```

### `src/components/analytics/FacebookPixel.tsx`

```typescript
import Script from 'next/script';

export default function FacebookPixel() {
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

  if (!pixelId) return null;

  return (
    <Script
      id="fb-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `,
      }}
    />
  );
}
```

## 4. Layout Components

### `src/components/layout/Header.tsx`

```typescript
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/data/site';
import { mainNavigation } from '@/data/navigation';
import { formatPhoneDisplay, formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>⚡ 7/24 Hızlı Destek</span>
            <span className="hidden md:inline">✅ %100 Güvenli İşlem</span>
          </div>
          <a
            href={formatPhoneHref(siteConfig.phone)}
            onClick={() => trackPhoneClick('header-top')}
            className="font-semibold hover:text-accent transition-colors"
          >
            📞 {formatPhoneDisplay(siteConfig.phone)}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-900">
            {siteConfig.name}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-primary-700 hover:text-accent font-medium transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-primary-700 hover:bg-accent-50 hover:text-accent transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={formatWhatsAppHref(siteConfig.whatsapp)}
              onClick={() => trackWhatsAppClick('header')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              💬 WhatsApp
            </a>
            <a
              href={formatPhoneHref(siteConfig.phone)}
              onClick={() => trackPhoneClick('header')}
              className="btn btn-primary btn-sm"
            >
              📞 Hemen Ara
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {mainNavigation.map((item) => (
              <div key={item.href} className="py-2">
                <Link
                  href={item.href}
                  className="block text-primary-700 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block text-sm text-primary-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
```

### `src/components/layout/Footer.tsx`

```typescript
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { footerNavigation } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-primary-100 mb-4">{siteConfig.description}</p>
            <div className="flex gap-4">
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent">
                  📘
                </a>
              )}
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent">
                  📷
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Hizmetler</h4>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-primary-100 hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="font-bold mb-4">Şehirler</h4>
            <ul className="space-y-2">
              {footerNavigation.cities.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-primary-100 hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-primary-100">
              <li>📞 {siteConfig.phoneDisplay}</li>
              <li>📧 {siteConfig.email}</li>
              <li>⏰ {siteConfig.businessHours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-primary-200">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
```

### `src/components/layout/FloatingButtons.tsx`

```typescript
'use client';

import { formatPhoneHref, formatWhatsAppHref } from '@/lib/utils';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { siteConfig } from '@/data/site';

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="hidden md:flex fixed bottom-8 right-8 flex-col gap-4 z-40">
        <a
          href={formatWhatsAppHref(siteConfig.whatsapp)}
          onClick={() => trackWhatsAppClick('floating')}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-success text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <span className="text-2xl">💬</span>
        </a>
        <a
          href={formatPhoneHref(siteConfig.phone)}
          onClick={() => trackPhoneClick('floating')}
          className="bg-accent text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform floating"
          aria-label="Telefon"
        >
          <span className="text-2xl">📞</span>
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t-2 border-accent z-50">
        <div className="flex">
          <a
            href={formatPhoneHref(siteConfig.phone)}
            onClick={() => trackPhoneClick('mobile-bottom')}
            className="flex-1 flex flex-col items-center justify-center py-3 bg-accent text-white"
          >
            <span className="text-2xl mb-1">📞</span>
            <span className="text-xs font-semibold">Hemen Ara</span>
          </a>
          <a
            href={formatWhatsAppHref(siteConfig.whatsapp)}
            onClick={() => trackWhatsAppClick('mobile-bottom')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center py-3 bg-success text-white"
          >
            <span className="text-2xl mb-1">💬</span>
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
```

## 5. Next Steps

After creating these files:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create remaining section components** in `src/components/sections/`:
   - `HeroSection.tsx`
   - `ServicesGrid.tsx`
   - `ProcessSteps.tsx`
   - `StatsSection.tsx`
   - `TestimonialsSection.tsx`
   - `CTASection.tsx`

3. **Create service pages** in `src/app/`:
   - `kazali-arac-alim/page.tsx`
   - `hasarli-arac-alim/page.tsx`
   - `pert-arac-alim/page.tsx`
   - `hurda-arac-alim/page.tsx`

4. **Create city pages**:
   - `sehirler/[city]/page.tsx` (dynamic route)

5. **Create `.env.local`**:
   ```bash
   cp .env.example .env.local
   # Then edit with your actual values
   ```

6. **Run development server**:
   ```bash
   npm run dev
   ```

## 💡 Tips

- All section components follow similar patterns - check the examples
- Use the `cn()` utility for className merging
- Always call tracking functions on button clicks
- Test analytics with GTM Debug mode
- Mobile-first responsive design

## 🆘 Need Help?

If you get stuck:
1. Check the README.md
2. Review the data files in `src/data/`
3. Look at similar components for patterns
4. Test one component at a time

Good luck! 🚀
