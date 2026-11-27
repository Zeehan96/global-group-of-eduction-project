'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Smile, BookOpen, Gift, FileCheck } from 'lucide-react';

const stats = [
  { Icon: Smile,     val: 21,    suffix: '+', label: 'Countries' },
  { Icon: BookOpen,  val: 639,   suffix: '+', label: 'Universities' },
  { Icon: Gift,      val: 63541, suffix: '+', label: 'Courses' },
  { Icon: FileCheck, val: 5570,  suffix: '+', label: 'Students Satisfaction' },
  { Icon: Smile,     val: 100,   suffix: '+', label: 'Trusted Partners' },
];

function CountUp({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="text-4xl font-bold text-white">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      className="relative py-16 border-t-4 border-b-4 border-[#fbaf1b]"
      style={{
        backgroundImage: 'url(/assets/images/imagebgsession.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-[#162544]/80 flex items-center justify-center transition-all duration-300 hover:rounded-full hover:bg-[#fbaf1b]">
                <s.Icon size={26} className="text-white" />
              </div>
              <CountUp target={s.val} suffix={s.suffix} />
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

