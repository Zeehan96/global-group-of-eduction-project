import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

const FbIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const IgIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const YtIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const LiIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
          <div className="flex flex-col gap-2">
            <a href="tel:+447586589659" className="flex items-center gap-2 text-gray-300 text-sm font-semibold hover:text-[#fbaf1b] transition-colors">
              <span className="text-[#fbaf1b]"><PhoneIcon /></span> +44 7586589659
            </a>
            <a href="mailto:london@globalgroupofeducation.com" className="flex items-center gap-2 text-gray-300 text-xs font-semibold hover:text-[#fbaf1b] transition-colors">
              <span className="text-[#fbaf1b]"><MailIcon /></span> london@globalgroupofeducation.com
            </a>
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

        {/* Get Started */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 pb-2 border-b-2 border-[#fbaf1b]">Get Started</h3>
          <ul className="space-y-3">
            <li>
              <a href="https://globalgroupofeducationportal.com/partner-registration" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <div>
                  <p className="text-white text-sm font-semibold group-hover:text-[#fbaf1b] transition-colors">Be a Partner</p>
                  <p className="text-gray-500 text-xs">Join our partner network</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://globalgroupofeducationportal.com/partner-registration" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <div>
                  <p className="text-white text-sm font-semibold group-hover:text-[#fbaf1b] transition-colors">Be a Student</p>
                  <p className="text-gray-500 text-xs">Start your study abroad journey</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://globalgroupofeducationportal.com/login" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <div>
                  <p className="text-white text-sm font-semibold group-hover:text-[#fbaf1b] transition-colors">Explore Our Portal</p>
                  <p className="text-gray-500 text-xs">Browse courses & universities</p>
                </div>
              </a>
            </li>
            <li>
              <a href="https://globalgroupofeducationportal.com/login" target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
                <div>
                  <p className="text-white text-sm font-semibold group-hover:text-[#fbaf1b] transition-colors">Apply for Scholarship</p>
                  <p className="text-gray-500 text-xs">Find & apply for funding</p>
                </div>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Black bottom strip ── */}
      <div className="bg-[#0a1226] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col gap-4">

          {/* Row 1 — icons + address */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Social icons — square style */}
            <div className="flex items-center gap-2">
              {[
                { href: 'https://www.linkedin.com/company/global-group-of-education/posts/?feedView=all', icon: <LiIcon /> },
                { href: 'https://www.instagram.com/globalgroupofeducation/', icon: <IgIcon /> },
                { href: 'https://www.youtube.com/@GlobalGroupofEducation', icon: <YtIcon /> },
                { href: 'https://www.facebook.com/Globalgroupofeducation-101786341409358/', icon: <FbIcon /> },
                { href: 'https://twitter.com/GlobalGroupofE1', icon: <XIcon /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-md bg-[#162544] flex items-center justify-center text-white hover:bg-[#fbaf1b] hover:text-[#0b1a37] transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Address */}
            <span className="flex items-center gap-2 text-white text-xs font-semibold">
              <MapPin size={13} className="text-white flex-shrink-0" />
              126 E Ferry Rd, Canary Wharf Estate, London E14 9FP, United Kingdom
            </span>

          </div>

          {/* Row 2 — copyright + links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-3 border-t border-white/10">
            <p className="text-gray-500 text-xs">© Copyright {new Date().getFullYear()} Global Group of Education.com.</p>
            <div className="flex items-center gap-3 text-gray-500 text-xs">
              <Link href="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Decorative bottom image ── */}
      <div style={{
        backgroundImage: 'url(/assets/images/footerbehindlogo.png)',
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%',
        width: '100%',
        height: '40px',
      }} />

    </footer>
  );
}

