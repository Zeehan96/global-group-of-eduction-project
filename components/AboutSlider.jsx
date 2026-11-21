'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutSlider({ cards }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? cards.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === cards.length - 1 ? 0 : c + 1));

  const c = cards[current];

  return (
    <div className="relative">

      {/* Slide card */}
      <div className={`bg-gray-50 rounded-xl border border-gray-100 p-8 lg:p-10 flex flex-col gap-10 items-center
        ${c.imgRight ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

        {/* Text side */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-black text-[#fbaf1b] tracking-widest">{c.num}</span>
            <div className="h-px w-8 bg-[#fbaf1b]"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#fbaf1b]">{c.tag}</span>
          </div>
          <h3 className="text-3xl font-black text-[#0b1a37] leading-tight mb-2 whitespace-pre-line">{c.title}</h3>
          <p className="text-sm font-bold text-gray-600 mb-3">{c.sub}</p>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">{c.desc}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {c.tags.map(t => (
              <span key={t} className="border border-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
          {c.external ? (
            <a href={c.btnHref} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#0b1a37] text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#162544] transition-colors">
              {c.btn} <ArrowRight size={14} />
            </a>
          ) : (
            <Link href={c.btnHref}
              className="inline-flex items-center gap-2 bg-[#0b1a37] text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#162544] transition-colors">
              {c.btn} <ArrowRight size={14} />
            </Link>
          )}
        </div>

        {/* Image side */}
        <div className="flex-1 w-full">
          <img src={c.img} alt={c.tag} className="w-full h-72 object-cover rounded-xl shadow-md" />
        </div>

      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-5">

        {/* Dots */}
        <div className="flex items-center gap-2">
          {cards.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${i === current ? 'w-6 h-2.5 bg-[#fbaf1b]' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#fbaf1b] hover:text-white hover:border-[#fbaf1b] transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#fbaf1b] hover:text-white hover:border-[#fbaf1b] transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
