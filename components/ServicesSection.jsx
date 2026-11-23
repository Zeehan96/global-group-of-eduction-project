import React from 'react';
import { FileText, Plane, BookMarked, Languages, Award, Building2 } from 'lucide-react';

const services = [
  { Icon: Building2,  title: 'University Selection & Guidance',    desc: 'We help you choose the right universities and handle accommodation, travel, and pre-departure preparations for a smooth transition.' },
  { Icon: FileText,   title: 'Admissions & Interview Preparation', desc: 'Our consultants and admissions officers work together to create strong applications and provide top guidance for interview preparation, setting students up for success.' },
  { Icon: Award,      title: 'Scholarships at Top Universities',   desc: 'We partner with top UK universities to secure scholarships for our students, easing the path to studying abroad.' },
  { Icon: Plane,      title: 'Visa & Immigration Support',         desc: 'Our dedicated team at headquarters will help you secure your study visa for your chosen field, ensuring a smooth application process.' },
  { Icon: Languages,  title: 'Test Preparation',                   desc: 'With our comprehensive approach to test preparation, we help you achieve optimal scores on language proficiency tests such as the IELTS, LanguageCert, PTE, and others.' },
  { Icon: BookMarked, title: 'Post-Study Work Opportunities',      desc: 'We provide expert guidance on post-study work opportunities through our global network, helping you maximise your career prospects after graduating.' },
];

export default function ServicesSection() {
  return (
    <section
      className="relative pt-16 pb-20 mb-10"
      style={{
        backgroundImage: 'url(/assets/images/service-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-[#fbaf1b] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-4" style={{ backgroundColor: 'rgba(251,175,27,0.08)' }}>
            <Award size={13} /> What We Offer
          </span>
          <h2 className="text-white font-semibold">Our Services</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2">
            Global Group of Education helps you get admission in your preferred university.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 mt-12">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card rounded-xl pb-6 px-6 flex flex-col border border-white/10"
              style={{ backgroundColor: 'rgba(8, 18, 40, 0.85)', paddingTop: '0' }}
            >
              {/* Icon box — sits on top edge */}
              <div
                style={{
                  position: 'relative',
                  left: '0px',
                  top: '-20px',
                  height: '70px',
                  width: '80px',
                  background: '#091529',
                  color: '#e8edfa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px 10px 2px 2px',
                  boxShadow: '6px -7px 0px -1px #1b3560',
                  zIndex: 2,
                  flexShrink: 0,
                  marginBottom: '-10px',
                }}
              >
                <s.Icon size={26} color="#e8edfa" />
              </div>

              <h3 className="text-white font-semibold text-sm mb-2 mt-2">{s.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
