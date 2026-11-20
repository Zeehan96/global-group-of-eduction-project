import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

const FbIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const IgIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const YtIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
  </svg>
);
const LiIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const socials = [
  { href: 'https://www.linkedin.com/company/globalgroupofeducation',           Icon: LiIcon },
  { href: 'https://www.instagram.com/globalgroupofeducation/',                 Icon: IgIcon },
  { href: 'https://www.youtube.com/@GlobalGroupofEducation',                   Icon: YtIcon },
  { href: 'https://www.facebook.com/Globalgroupofeducation-101786341409358/',  Icon: FbIcon },
  { href: 'https://twitter.com/GlobalGroupofE1',                               Icon: XIcon  },
];

const footerLinks = {
  quick: [
    { label: 'Home',             href: '/' },
    { label: 'About Us',         href: '/about-us' },
    { label: 'Our Services',     href: '/our-services' },
    { label: 'All Universities', href: '/all-universities' },
    { label: 'Destinations',     href: '/choose-your-destination' },
    { label: 'Contact Us',       href: '/contact-us' },
    { label: 'FAQs',             href: '/faq' },
  ],
  destinations: [
    { label: 'Study in UK',        href: '/study-in-uk' },
    { label: 'Study in USA',       href: '/study-in-usa' },
    { label: 'Study in Canada',    href: '/study-in-canada' },
    { label: 'Study in Australia', href: '/study-in-australia' },
    { label: 'Study in Hungary',   href: '/study-in-hungary' },
    { label: 'Study in UAE',       href: '/study-in-uae' },
  ],
  universities: [
    { label: 'Univ. of Chichester',  href: '/universities/university-of-chichester' },
    { label: 'Univ. of Sunderland',  href: '/universities/university-of-sunderland' },
    { label: 'Univ. of Bolton',      href: '/universities/university-of-bolton' },
    { label: 'Falmouth University',  href: '/universities/falmouth-university' },
    { label: "Queen's Belfast",      href: '/universities/queens-university-belfast' },
    { label: 'Univ. of Surrey',      href: '/universities/university-of-surrey' },
    { label: 'South Bank Univ.',     href: '/universities/south-bank-university' },
    { label: 'Univ. of Portsmouth',  href: '/universities/university-of-portsmouth' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0b1a37] text-white">

      {/* ── Main Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link href="/">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md mb-4">
              <img src="/assets/images/bgremoveicon.png" alt="Global Group of Education" className="h-9 w-9 object-contain" />
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            We provide students with the best guidance, assistance, course and university counselling to ensure a bright and successful future.
          </p>
          {/* Contact */}
          <div className="flex flex-col gap-2 mb-5">
            <a href="tel:+447586589659" className="flex items-center gap-2 text-gray-300 text-sm font-semibold hover:text-[#fbaf1b] transition-colors">
              <span className="text-[#fbaf1b]"><PhoneIcon /></span> +44 7586589659
            </a>
            <a href="mailto:london@globalgroupofeducation.com" className="flex items-center gap-2 text-gray-300 text-xs font-semibold hover:text-[#fbaf1b] transition-colors">
              <span className="text-[#fbaf1b]"><MailIcon /></span> london@globalgroupofeducation.com
            </a>
          </div>
          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#162544] flex items-center justify-center text-white hover:bg-[#fbaf1b] hover:text-[#0b1a37] transition-colors">
                <s.Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 pb-2 border-b-2 border-[#fbaf1b]">Quick Links</h3>
          <ul className="space-y-2">
            {footerLinks.quick.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-gray-400 text-sm hover:text-[#fbaf1b] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 pb-2 border-b-2 border-[#fbaf1b]">Study Destinations</h3>
          <ul className="space-y-2">
            {footerLinks.destinations.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-gray-400 text-sm hover:text-[#fbaf1b] transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Universities */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 pb-2 border-b-2 border-[#fbaf1b]">Trending Universities</h3>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
            {footerLinks.universities.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-gray-400 text-xs hover:text-[#fbaf1b] transition-colors leading-snug">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* ── Black bottom strip — 1 line ── */}
      <div className="bg-[#0a1226] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">© Copyright Global Group of Education.com.</p>
          <div className="flex items-center gap-3 text-gray-500 text-xs">
            <Link href="/terms"   className="hover:text-white transition-colors">Terms and Conditions</Link>
            <span>|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>

      {/* ── Decorative bottom image ── */}
      <div className="w-full">
        <img src="/assets/images/footerbehindlogo.png" alt="" aria-hidden="true"
          className="w-full block object-cover h-8" />
      </div>

    </footer>
  );
}
