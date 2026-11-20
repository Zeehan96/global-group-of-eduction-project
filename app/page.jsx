import React from 'react';
import Link from 'next/link';
import {
  Users, GraduationCap, ArrowRight,
  Search, FileText, Plane, BookMarked, Languages, Award, Building2, HeartHandshake,
} from 'lucide-react';

const services = [
  { Icon: Search,         title: 'University Selection',     desc: 'Expert guidance to find the right university based on your profile, budget, and career goals.' },
  { Icon: FileText,       title: 'Admission Application',    desc: 'Complete support in preparing and submitting strong university applications with zero errors.' },
  { Icon: Plane,          title: 'Visa Assistance',          desc: 'Step-by-step visa file preparation, documentation, and mock interview coaching for high success.' },
  { Icon: BookMarked,     title: 'Scholarship Guidance',     desc: 'We identify and help you apply for scholarships and funding opportunities at top universities.' },
  { Icon: Languages,      title: 'English Test Preparation', desc: 'IELTS, TOEFL, and PTE preparation with our experienced tutors for the scores you need.' },
  { Icon: Award,          title: 'Credential Evaluation',    desc: 'Professional evaluation and verification of your academic documents for international recognition.' },
  { Icon: Building2,      title: 'Accommodation Support',    desc: 'Assistance in finding safe, affordable student accommodation near your university campus.' },
  { Icon: HeartHandshake, title: 'Pre-Departure Briefing',   desc: 'Detailed orientation covering travel, banking, culture, and life at your destination.' },
];

export default function HomePage() {
  return (
    <div>

      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden bg-[#0b1a37]" style={{ minHeight: '420px' }}>
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline poster="/assets/images/banner1.jpg"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover brightness-75">
            <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(8,15,36,0.90) 0%, rgba(8,15,36,0.75) 40%, rgba(8,15,36,0.20) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="max-w-lg">
            <p className="text-sm font-semibold text-gray-300 mb-3">
              Welcome and <span className="text-[#fbaf1b] underline underline-offset-2 font-bold">Join Us for Success</span>
            </p>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5 drop-shadow-lg">
              Your Gateway to<br />Studying Abroad
            </h1>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-8 max-w-md">
              We provide a complete admissions service for Australia, Canada, Europe, UK, USA and other countries.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://globalgroupofeducationportal.com/partner-registration" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#fbaf1b] text-[#0b1530] font-bold text-sm px-6 py-3 rounded-md hover:bg-yellow-400 transition-colors shadow-lg">
                <Users size={16} /> Be a Partner
              </a>
              <a href="https://globalgroupofeducationportal.com/student-registration" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/75 text-white font-bold text-sm px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                <GraduationCap size={16} /> Be a Student
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Our Services ── */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-8">

            {/* Header — left heading, right description */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-[#fbaf1b]/15 text-[#fbaf1b] text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                  ★ What We Offer
                </span>
                <h2 className="text-4xl font-black text-black leading-tight">
                  Our Services,<br />
                  <span className="text-gray-400">Study Smarter.</span>
                </h2>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm lg:text-right">
                From university selection to visa approval — we guide you at every single step of your international study abroad journey, ensuring the best outcome for your future career.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s) => (
                <div key={s.title} className="group border border-[#fbaf1b]/30 rounded-lg p-5 hover:shadow-md hover:-translate-y-1 transition-all bg-white">
                  <div className="w-11 h-11 rounded-lg bg-[#102771]/10 flex items-center justify-center mb-3 group-hover:bg-[#fbaf1b] transition-colors">
                    <s.Icon size={20} className="text-[#102771] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm font-bold text-[#102771] mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/our-services"
                className="inline-flex items-center gap-2 bg-[#162544] text-white font-bold text-sm px-5 py-2.5 rounded-md hover:bg-[#0d172a] transition-colors">
                View All Services <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
