import React from 'react';

const testimonials = [
  {
    name: 'Ayesha Khan',
    country: 'Pakistan → UK',
    text: 'GGE made my dream of studying in the UK come true. Their support was outstanding. They guided me through every step — from university selection to visa approval.',
    img: '/assets/images/ayesha.jpg',
  },
  {
    name: 'Mohammed Al-Rashid',
    country: 'UAE → Canada',
    text: 'Consultants of this company have valuable knowledge to process the application for admission and visa. I am very satisfied with their services and recommend GGE for all students.',
    img: '/assets/images/Mohammed Al-Rashid.jpg',
  },
  {
    name: 'Priya Sharma',
    country: 'India → Australia',
    text: 'The team at GGE was incredibly helpful. They helped me find the right course and university within my budget. I got my visa approved on the first attempt!',
    img: '/assets/images/PriyaSharma.jpg',
  },
  {
    name: "James O'Brien",
    country: 'Ireland → UK',
    text: 'Consultants at GGE trained me to clear the test and interview for admission. They have deep knowledge and I highly recommend them to anyone planning to study abroad.',
    img: "/assets/images/JamesO'Brien.jpg",
  },
  {
    name: 'Fatima Malik',
    country: 'Pakistan → Hungary',
    text: 'I was confused about studying in Europe but GGE explained everything clearly. The process was smooth and I am now studying in Budapest. Thank you GGE!',
    img: '/assets/images/fatima.jpg',
  },
  {
    name: 'Ahmed Hassan',
    country: 'Egypt → USA',
    text: 'Professional, knowledgeable, and caring team. They handled my STEM application perfectly and I received my OPT visa without any issues. Truly world class service.',
    img: '/assets/images/AhmedHassan.png',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 text-[#b87c00] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-4" style={{ backgroundColor: 'rgba(251,175,27,0.08)' }}>
            ★ Student Stories
          </span>
          <h2 className="text-[#0b1a37] font-semibold">Alumni Testimonials</h2>
        </div>

        <div className="sticky-cards flex flex-col gap-0">
          {testimonials.map((t, i) => (
            <div key={t.name}
              style={{ top: '80px' }}
              className={`sticky rounded-xl border border-[#fbaf1b]/20 p-4 lg:p-6 flex flex-col gap-3 mb-3
                ${i === testimonials.length - 1 ? 'shadow-[0_2px_8px_rgba(0,0,0,0.04)]' : 'shadow-sm'}
                ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>

              <span className="text-4xl text-[#fbaf1b] leading-none font-semibold">"</span>
              <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
              <div className={`flex items-center gap-3 pt-3 border-t border-gray-100 ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                <img src={t.img} alt={t.name}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2 border-[#fbaf1b]" />
                <div className={i % 2 !== 0 ? 'text-right' : ''}>
                  <p className="text-sm font-semibold text-[#0b1a37]">{t.name}</p>
                  <p className="text-xs text-[#fbaf1b] font-semibold">{t.country}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


