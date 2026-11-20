'use client';

import React from 'react';
import Link from 'next/link';

export default function Marquee({ universities = [] }) {
  const list = universities.length > 0 ? universities : [
    { slug: 'university-of-chichester', displayName: 'University of Chichester', logo: '/uploads/1.png' },
    { slug: 'university-of-sunderland', displayName: 'University of Sunderland', logo: '/uploads/2.png' },
    { slug: 'university-of-bolton',     displayName: 'University of Bolton',     logo: '/uploads/3.png' },
    { slug: 'falmouth-university',      displayName: 'Falmouth University',      logo: '/uploads/4.png' },
    { slug: 'university-of-surrey',     displayName: 'University of Surrey',     logo: '/uploads/5.png' },
  ];

  // Duplicate for seamless infinite loop
  const doubled = [...list, ...list];

  return (
    <section className="bg-white border-y border-gray-100 py-6 overflow-hidden">
      <div className="flex w-max" style={{ animation: 'marqueeScroll 35s linear infinite' }}>
        {doubled.map((uni, idx) => (
          <Link
            key={idx}
            href={`/universities/${uni.slug}`}
            className="flex-shrink-0 w-48 mx-3 flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-12 flex items-center justify-center mb-2">
              <img
                src={uni.logo || '/assets/logo.png'}
                alt={uni.displayName || uni.name || 'University'}
                className="max-h-10 max-w-full object-contain"
              />
            </div>
            <span className="text-xs font-semibold text-gray-700 text-center truncate w-full block">
              {uni.displayName || uni.name}
            </span>
          </Link>
        ))}
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        section:hover div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
