import React from 'react';

const testimonials = [
  {
    name: 'Ayesha Khan',
    country: 'Pakistan → UK',
    text: 'GGE made my dream of studying in the UK come true. Their support was outstanding. They guided me through every step — from university selection to visa approval.',
    img: '/assets/images/gallery/gallery-tour3.jpg',
  },
  {
    name: 'Mohammed Al-Rashid',
    country: 'UAE → Canada',
    text: 'Consultants of this company have valuable knowledge to process the application for admission and visa. I am very satisfied with their services and recommend GGE for all students.',
    img: '/assets/images/gallery/gallery-tour4.jpg',
  },
  {
    name: 'Priya Sharma',
    country: 'India → Australia',
    text: 'The team at GGE was incredibly helpful. They helped me find the right course and university within my budget. I got my visa approved on the first attempt!',
    img: '/assets/images/gallery/gallery-tour5.jpg',
  },
  {
    name: 'James O\'Brien',
    country: 'Ireland → UK',
    text: 'Consultants at GGE trained me to clear the test and interview for admission. They have deep knowledge and I highly recommend them to anyone planning to study abroad.',
    img: '/assets/images/gallery/gallery-tour6.jpg',
  },
  {
    name: 'Fatima Malik',
    country: 'Pakistan → Hungary',
    text: 'I was confused about studying in Europe but GGE explained everything clearly. The process was smooth and I am now studying in Budapest. Thank you GGE!',
    img: '/assets/images/gallery/gallery-tour7.jpg',
  },
  {
    name: 'Ahmed Hassan',
    country: 'Egypt → USA',
    text: 'Professional, knowledgeable, and caring team. They handled my STEM application perfectly and I received my OPT visa without any issues. Truly world class service.',
    img: '/assets/images/gallery/gallery-tour8.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center bg-[#fbaf1b]/15 text-[#fbaf1b] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            Student Stories
          </span>
          <h2 className="text-3xl font-black text-[#0b1a37]">Alumni Testimonials</h2>
          <div className="w-16 h-1 bg-[#fbaf1b] rounded-full mx-auto mt-3"></div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
              {/* Quote mark */}
              <span className="text-4xl font-black text-[#fbaf1b] leading-none">"</span>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-50">
                <img src={t.img} alt={t.name}
                  className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2 border-[#fbaf1b]" />
                <div>
                  <p className="text-sm font-bold text-[#0b1a37]">{t.name}</p>
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
