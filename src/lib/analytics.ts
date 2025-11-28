// src/lib/analytics.ts

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

/**
 * Track phone click conversion
 */
export const trackPhoneClick = (location?: string) => {
  // GTM DataLayer
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'phone_click',
      location: location || 'unknown',
      timestamp: new Date().toISOString(),
    });
  }

  // Google Ads Conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL}`,
      event_category: 'engagement',
      event_label: location || 'phone_click',
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'Phone Click',
      content_category: location || 'unknown',
    });
  }

  console.log('[Analytics] Phone click tracked:', location);
};

/**
 * Track WhatsApp click conversion
 */
export const trackWhatsAppClick = (location?: string) => {
  // GTM DataLayer
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'whatsapp_click',
      location: location || 'unknown',
      timestamp: new Date().toISOString(),
    });
  }

  // Google Ads Conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL}`,
      event_category: 'engagement',
      event_label: location || 'whatsapp_click',
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'WhatsApp Click',
      content_category: location || 'unknown',
    });
  }

  console.log('[Analytics] WhatsApp click tracked:', location);
};

/**
 * Track form submission conversion
 */
export const trackFormSubmit = (formName?: string) => {
  // GTM DataLayer
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_submit',
      form_name: formName || 'contact_form',
      timestamp: new Date().toISOString(),
    });
  }

  // Google Ads Conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/${process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL}`,
      event_category: 'lead',
      event_label: formName || 'contact_form',
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: formName || 'Contact Form',
      content_category: 'form_submission',
    });
  }

  console.log('[Analytics] Form submit tracked:', formName);
};

/**
 * Track service view
 */
export const trackServiceView = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'service_view',
      service_name: serviceName,
      timestamp: new Date().toISOString(),
    });
  }

  console.log('[Analytics] Service view tracked:', serviceName);
};

/**
 * Track city page view
 */
export const trackCityView = (cityName: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'city_view',
      city_name: cityName,
      timestamp: new Date().toISOString(),
    });
  }

  console.log('[Analytics] City view tracked:', cityName);
};

/**
 * Track CTA click
 */
export const trackCTAClick = (ctaName: string, location?: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'cta_click',
      cta_name: ctaName,
      location: location || 'unknown',
      timestamp: new Date().toISOString(),
    });
  }

  console.log('[Analytics] CTA click tracked:', ctaName, location);
};

/**
 * Initialize analytics on page load
 */
export const initializeAnalytics = () => {
  // Initialize dataLayer if not exists
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
  }

  console.log('[Analytics] Initialized');
};
