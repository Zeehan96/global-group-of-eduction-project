import React from 'react';
import Link from 'next/link';
import Testimonials from '../components/Testimonials';
import HeroVideo from '../components/HeroVideo';
import ServicesSection from '../components/ServicesSection';
import {
  Users, GraduationCap, ArrowRight,
  Search, FileText, Plane, BookMarked, Languages, Award, Building2, HeartHandshake,
} from 'lucide-react';

const services = [
  { Icon: Search,         title: 'University Selection & Guidance',      desc: 'We help you choose the right universities and handle accommodation, travel, and pre-departure preparations for a smooth transition.' },
  { Icon: FileText,       title: 'Admissions & Interview Preparation',   desc: 'Our consultants and admissions officers work together to create strong applications and provide top guidance for interview preparation, setting students up for success.' },
  { Icon: Award,          title: 'Scholarships at Top Universities',     desc: 'We partner with top UK universities to secure scholarships for our students, easing the path to studying abroad.' },
  { Icon: Plane,          title: 'Visa & Immigration Support',           desc: 'Our dedicated team at headquarters will help you secure your study visa for your chosen field, ensuring a smooth application process.' },
  { Icon: Languages,      title: 'Test Preparation',                     desc: 'With our comprehensive approach to test preparation, we help you achieve optimal scores on language proficiency tests such as the IELTS, LanguageCert, PTE, and others.' },
  { Icon: Building2,      title: 'Post-Study Work Opportunities',        desc: 'We provide expert guidance on post-study work opportunities through our global network, helping you maximise your career prospects after graduating.' },
  { Icon: BookMarked,     title: 'Accommodation Support',                desc: 'Assistance in finding safe, affordable student accommodation near your university campus for a comfortable student life.' },
  { Icon: HeartHandshake, title: 'Pre-Departure Briefing',               desc: 'Detailed orientation covering travel, banking, culture, and life at your destination so you are fully prepared before you go.' },
];

const aboutCards = [
  {
    num: '01', tag: 'About Global Group',
    title: 'GLOBAL GROUP OF\nEDUCATION',
    sub: '10+ Years of Excellence & Trusted Guidance',
    desc: 'In this era of educational competition, Global Group of Education brings you the finest consultants to help you achieve your desired degree from one of the best institutes in the UK and world top-ranked universities.',
    tags: ['10+ Years Experience','98% Visa Success Rate','30+ Partner Universities','5000+ Students Placed'],
    btn: 'Explore Our Portal', btnHref: 'https://globalgroupofeducationportal.com/login', external: true,
    img: '/assets/images/steps.jpg', imgRight: true,
  },
  {
    num: '02', tag: 'University Selection',
    title: 'UNIVERSITY SELECTION &\nGUIDANCE',
    sub: 'Tailored Academic Pathways for Every Student',
    desc: 'We help you choose the right universities and handle accommodation, travel, and pre-departure preparations for a smooth transition to higher education abroad.',
    tags: ['Course Shortlisting','Ranking & Budget Matching','Accommodation Support','Pre-Departure Briefings'],
    btn: 'Apply to University', btnHref: 'https://globalgroupofeducationportal.com/student-registration', external: true,
    img: '/assets/images/college-students-cramming-outdoor.jpg', imgRight: false,
  },
  {
    num: '03', tag: 'Financial Aid & Grants',
    title: 'SCHOLARSHIPS AT TOP\nUNIVERSITIES',
    sub: 'Merit & Need-Based Funding up to £10,000',
    desc: 'We partner directly with leading universities in the UK, USA, Canada, and Australia to secure lucrative scholarships for our students, easing the financial path to studying abroad.',
    tags: ['UK Vice-Chancellor Awards','USA Merit Scholarships','Canada Dean Grants','Partial & Full Awards'],
    btn: 'Find Scholarships', btnHref: 'https://globalgroupofeducationportal.com/login', external: true,
    img: '/assets/images/cources-bg1.jpg', imgRight: true,
  },
  {
    num: '04', tag: 'Visa Excellence',
    title: 'VISA & IMMIGRATION\nSUPPORT',
    sub: 'High-Success Student Visa Consulting',
    desc: 'Our dedicated team will help you secure your study visa, ensuring flawless CAS & I-20 documentation and thorough mock embassy interview preparation.',
    tags: ['CAS & I-20 Processing','Financial Assessment','Mock Embassy Interviews','98% Approval Track Record'],
    btn: 'Book Visa Consultation', btnHref: 'https://api.whatsapp.com/send/?phone=447586588658&text&type=phone_number&app_absent=0', external: true,
    img: '/assets/images/happy-girl-with-suitcase-passport-isolated-pink-wall-dark-haired-girl-striped-shirt-wearing-striped-casual-t-shirt-being-ready-travel.jpg', imgRight: false,
  },
  {
    num: '05', tag: 'Academic Programs',
    title: 'EXPLORE ACADEMIC\nCOURSES',
    sub: 'Undergraduate, Postgraduate & PhD Degrees',
    desc: "Find accredited undergraduate degrees, master's programs, PhD research opportunities, and foundation pathway programs across STEM, Business, Healthcare, and Humanities.",
    tags: ['Doctorate / PhD Degrees','Postgraduate / Masters','Undergraduate / Bachelors','Pre-Master & Foundation'],
    btn: 'Open Course Finder', btnHref: 'https://globalgroupofeducationportal.com/courseFinder/index?access=pass', external: true,
    img: '/assets/images/cources-bg.jpg', imgRight: true,
  },
  {
    num: '06', tag: 'Global Gateways',
    title: 'TOP STUDY\nDESTINATIONS',
    sub: 'UK, USA, Canada, Australia & Europe',
    desc: 'Choose from premier global education hubs offering post-study work rights, high standard of living, world-renowned faculties, and welcoming multicultural environments.',
    tags: ['United Kingdom 🇬🇧','United States 🇺🇸','Canada 🇨🇦','Australia 🇦🇺','Europe & UAE 🇪🇺'],
    btn: 'Explore Destinations', btnHref: 'https://globalgroupofeducationportal.com/login', external: true,
    img: '/assets/images/why-choose-bg.jpg', imgRight: false,
  },
  {
    num: '07', tag: 'Global Impact',
    title: 'WE HELP STUDENTS GROW\nTHEIR GLOBAL POTENTIAL',
    sub: 'Empowering Students Across 30+ Nationalities',
    desc: 'We provide complete admissions services for Australia, Canada, Europe, UK, USA and other countries, guiding thousands of ambitious students into rewarding international careers.',
    tags: ['98% Visa Success Rate','400+ Partner Universities','10+ Years Experience','100% Free Assessment'],
    btn: 'Start Free Assessment', btnHref: 'https://globalgroupofeducationportal.com/login', external: true,
    img: '/assets/images/user-graduates-banner.jpg', imgRight: true,
  },
];

export default function HomePage() {
  return (
    <div>

      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden bg-[#0b1a37]" style={{ minHeight: '500px' }}>
        <div className="absolute inset-0 z-0">
          <HeroVideo />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(8,15,36,0.85) 0%, rgba(8,15,36,0.60) 40%, rgba(8,15,36,0.0) 65%, rgba(8,15,36,0.0) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 flex items-center" style={{ minHeight: '500px' }}>
          <div className="max-w-lg">
            <p className="hero-text-1 text-sm font-semibold text-white mb-3">
              Welcome and <span className="text-white font-semibold" style={{ textDecoration: 'underline', textDecorationColor: '#fbaf1b', textUnderlineOffset: '4px', textDecorationThickness: '2px' }}>Join Us for Success</span>
            </p>
            <h1 style={{ fontSize: '38px', lineHeight: '48px', color: '#ffffff', fontWeight: '700' }} className="hero-text-2 mb-5 drop-shadow-lg">
              Your Gateway to Studying Abroad
            </h1>
            <p className="hero-text-3 mb-8 max-w-md" style={{ fontSize: '14px', color: '#ffffff', fontWeight: '400', lineHeight: '1.6' }}>
              We provide a complete admissions service for Australia, Canada, Europe, UK, USA and other countries.
            </p>
            <div className="hero-text-4 flex flex-wrap gap-3">
              <a href="https://globalgroupofeducationportal.com/partner-registration" target="_blank" rel="noreferrer"
                className="btn-slide inline-flex items-center gap-2 bg-[#fbaf1b] text-white font-medium text-sm px-5 py-2.5 rounded-md border border-[#fbaf1b]">
                <Users size={15} /> Be a Partner
              </a>
              <a href="https://globalgroupofeducationportal.com/student-registration" target="_blank" rel="noreferrer"
                className="btn-slide inline-flex items-center gap-2 bg-white text-[#0b1a37] font-medium text-sm px-5 py-2.5 rounded-md border border-white">
                <GraduationCap size={15} /> Be a Student
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. About Slider ── */}
      <section id="about-section" className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 bg-[#fbaf1b]/20 text-[#b87c00] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-5">
              <GraduationCap size={13} /> Complete Education Ecosystem
            </span>
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#0b1a37] leading-tight">
              GLOBAL ADMISSIONS &amp; <span className="text-[#fbaf1b]">CONSULTANCY</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
              Discover our comprehensive admissions services, accredited academic degree pathways, and certified guidance designed to turn your study abroad aspirations into global success.
            </p>
          </div>
          {/* Sticky scroll cards */}
          <div className="sticky-cards flex flex-col gap-0">
            {aboutCards.map((c, i) => (
              <div key={c.num}
                style={{ top: `80px` }}
                className={`sticky rounded-xl border border-[#fbaf1b]/20 p-8 lg:p-10 flex flex-col lg:flex-row gap-10 items-center mb-4
                  ${i === aboutCards.length - 1 ? 'shadow-[0_2px_8px_rgba(0,0,0,0.04)]' : 'shadow-sm'}
                  ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>

                {/* Image left — when imgRight is false */}
                {!c.imgRight && (
                  <div className="flex-1 w-full min-w-0 order-first lg:order-first">
                    <img src={c.img} alt={c.tag} className="w-full h-72 object-cover rounded-xl" />
                  </div>
                )}

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold text-[#0b1a37] leading-tight mb-2 whitespace-pre-line">{c.title}</h3>
                  <p className="text-sm font-semibold text-gray-600 mb-3">{c.sub}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{c.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {c.tags.map(t => (
                      <span key={t} className="border border-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-md hover:bg-[#fbaf1b] hover:text-white hover:border-[#fbaf1b] transition-colors cursor-default">{t}</span>
                    ))}
                  </div>
                  {c.external ? (
                    <a href={c.btnHref} target="_blank" rel="noreferrer"
                      className="btn-slide inline-flex items-center gap-2 bg-[#162544] text-white font-medium text-sm px-5 py-2.5 rounded-md hover:bg-[#0d172a] transition-colors">
                      {c.btn} <ArrowRight size={14} />
                    </a>
                  ) : (
                    <Link href={c.btnHref}
                      className="btn-slide inline-flex items-center gap-2 bg-[#162544] text-white font-medium text-sm px-5 py-2.5 rounded-md hover:bg-[#0d172a] transition-colors">
                      {c.btn} <ArrowRight size={14} />
                    </Link>
                  )}
                </div>

                {/* Image right — when imgRight is true */}
                {c.imgRight && (
                  <div className="flex-1 w-full min-w-0">
                    <img src={c.img} alt={c.tag} className="w-full h-72 object-cover rounded-xl" />
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── 3. Our Services ── */}
      <ServicesSection />

      <Testimonials />

    </div>
  );
}









