import React from 'react';
import { Search, FileText, Plane, BookMarked, Languages, Award, Building2, HeartHandshake } from 'lucide-react';

const services = [
  { Icon: Search,         title: 'University Selection & Guidance',     desc: 'We help you choose the right universities and handle accommodation, travel, and pre-departure preparations for a smooth transition.' },
  { Icon: FileText,       title: 'Admissions & Interview Preparation',  desc: 'Our consultants and admissions officers work together to create strong applications and provide top guidance for interview preparation, setting students up for success.' },
  { Icon: Award,          title: 'Scholarships at Top Universities',    desc: 'We partner with top UK universities to secure scholarships for our students, easing the path to studying abroad.' },
  { Icon: Plane,          title: 'Visa & Immigration Support',          desc: 'Our dedicated team at headquarters will help you secure your study visa for your chosen field, ensuring a smooth application process.' },
  { Icon: Languages,      title: 'Test Preparation',                    desc: 'With our comprehensive approach to test preparation, we help you achieve optimal scores on language proficiency tests such as the IELTS, LanguageCert, PTE, and others.' },
  { Icon: Building2,      title: 'Post-Study Work Opportunities',       desc: 'We provide expert guidance on post-study work opportunities through our global network, helping you maximise your career prospects after graduating.' },
  { Icon: BookMarked,     title: 'Accommodation Support',               desc: 'Assistance in finding safe, affordable student accommodation near your university campus for a comfortable student life.' },
  { Icon: HeartHandshake, title: 'Pre-Departure Briefing',              desc: 'Detailed orientation covering travel, banking, culture, and life at your destination so you are fully prepared before you go.' },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 bg-[#fbaf1b]/20 text-[#b87c00] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-4">
            <Award size={13} /> What We Offer
          </span>
          <h2 className="text-[#0b1a37] font-semibold">Our Services,</h2>
          <div className="w-12 h-1 bg-[#fbaf1b] rounded-full mx-auto mt-3 mb-3"></div>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">Global Group of Education helps you get admission in your preferred university.</p>
        </div>

        <div className="sticky-cards flex flex-col gap-0">
          {services.map((s, i) => (
            <div key={s.title}
              style={{ top: '80px' }}
              className={`sticky rounded-xl border border-[#fbaf1b]/20 p-6 lg:p-8 flex flex-row gap-6 items-start mb-3
                ${i === services.length - 1 ? 'shadow-[0_2px_8px_rgba(0,0,0,0.04)]' : 'shadow-sm'}
                ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>

              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#162544] flex items-center justify-center mt-1">
                <s.Icon size={22} className="text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-[#0b1a37] font-semibold mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
