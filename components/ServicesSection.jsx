import React from 'react';
import { FileText, Plane, BookMarked, Languages, Award, Building2 } from 'lucide-react';

const services = [
  { Icon: Building2,  title: 'University Selection & Guidance',    desc: 'We help you choose the right universities, handle accommodation, travel, and pre-departure preparations for a smooth transition.' },
  { Icon: FileText,   title: 'Admissions & Interview Preparation', desc: 'Our consultants and admissions officers work together to create strong applications and provide top guidance for interview preparation, setting students up for success.' },
  { Icon: Award,      title: 'Scholarships at Top Universities',   desc: 'We partner with top universities worldwide to secure scholarships for our students, easing the path to studying abroad.' },
  { Icon: Plane,      title: 'Visa & Immigration Support',         desc: 'Our dedicated visa team will help you secure your study visa for your chosen destination, ensuring a smooth application process.' },
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
          <span className="inline-flex items-center gap-2 text-[#fbaf1b] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-4"
            style={{ backgroundColor: 'rgba(251,175,27,0.08)' }}>
            <Award size={13} /> What We Offer
          </span>
          <h2 className="text-white font-semibold">Our Services</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto mt-2">
            Global Group of Education helps you get admission in your preferred university.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-12">
          {services.map((s) => (

            /* service-block */
            <div key={s.title} className="service-block">

              {/* icon-box */}
              <div className="icon-box">
                <s.Icon size={28} color="#e8edfa" />
              </div>

              {/* inner-box */}
              <div className="inner-box">
                <h3 className="text-white font-semibold text-sm mb-2">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
