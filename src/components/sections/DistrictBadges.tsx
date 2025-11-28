'use client';

import React from 'react';
import { FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { cities } from '@/data/cities';

interface DistrictBadgesProps {
  citySlug: string;
}

export default function DistrictBadges({ citySlug }: DistrictBadgesProps) {
  const city = cities[citySlug];

  if (!city || !city.cityInfo.coverage) {
    return null;
  }

  const districts = city.cityInfo.coverage;

  // Split districts into two groups for visual variety if many
  const midPoint = Math.ceil(districts.length / 2);
  const group1 = districts.slice(0, midPoint);
  const group2 = districts.slice(midPoint);

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" /> Hizmet Bölgelerimiz
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              {city.name} genelinde {districts.length} ilçeye ücretsiz hizmet veriyoruz.
            </p>
          </div>

          <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 border border-blue-100">
            <FaInfoCircle /> {city.cityInfo.responseTime || '2 saat'} içinde adresinizdeyiz
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Group 1 */}
          <div className="flex flex-wrap gap-2 content-start">
            {group1.map((district, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-50 hover:bg-secondary-50 text-gray-700 hover:text-secondary-800 rounded-md text-sm border border-gray-200 hover:border-secondary-300 transition-colors cursor-default"
              >
                {district}
              </span>
            ))}
          </div>

          {/* Group 2 */}
          <div className="flex flex-wrap gap-2 content-start">
            {group2.map((district, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-50 hover:bg-accent-50 text-gray-700 hover:text-accent-800 rounded-md text-sm border border-gray-200 hover:border-accent-300 transition-colors cursor-default"
              >
                {district}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
