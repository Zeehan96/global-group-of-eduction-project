'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home, Globe, BookOpen, Handshake, Info, Phone,
  ChevronDown, ChevronUp, Flag, Menu, X, User, ArrowUpRight,
} from 'lucide-react';

const destinations = [
  { label: 'Study in UK',          href: '/study-in-uk' },
  { label: 'Study in USA',         href: '/study-in-usa' },
  { label: 'Study in Canada',      href: '/study-in-canada' },
  { label: 'Study in Australia',   href: '/study-in-australia' },
  { label: 'Study in Hungary',     href: '/study-in-hungary' },
  { label: 'Study in UAE',         href: '/study-in-uae' },
  { label: 'Study in Europe',      href: '/study-in-europe' },
  { label: 'Study in New Zealand', href: '/study-in-new-zealand' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen]   = useState(false);
  const [dropOpen, setDropOpen]   = useState(false);

  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [pathname]);
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  const close = () => { setMenuOpen(false); setDropOpen(false); };

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const navLink = (href, Icon, label, onClick) => {
    const active = isActive(href);
    return (
      <Link
        href={href}
        onClick={onClick || close}
        className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors
          ${active ? 'text-[#fbaf1b]' : 'text-[#162447] hover:text-[#fbaf1b]'}`}
      >
        <Icon size={15} />
        {label}
      </Link>
    );
  };

  const isDestActive = pathname.startsWith('/study-in-') || pathname === '/choose-your-destination';

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" onClick={close} className="flex-shrink-0">
            <img src="/assets/images/bgremoveicon.png" alt="Global Group of Education" className="h-11 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">

            {navLink('/', Home, 'Home')}

            <div
              className="relative"
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <button
                onClick={() => setDropOpen(!dropOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold transition-colors
                  ${isDestActive ? 'text-[#fbaf1b]' : 'text-[#162447] hover:text-[#fbaf1b]'}`}
              >
                <Globe size={15} />
                Study Destinations
                {dropOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </button>

              {dropOpen && (
                <ul className="absolute top-full left-0 w-56 bg-white border border-gray-200 border-t-4 border-t-[#fbaf1b] rounded-b-xl shadow-xl py-2 z-50">
                  {destinations.map((d) => (
                    <li key={d.href}>
                      <Link href={d.href} onClick={close}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-[#162447] hover:bg-gray-50 hover:pl-5 transition-all">
                        <span className="w-2 h-2 rounded-full bg-[#fbaf1b] flex-shrink-0 inline-block"></span>
                        {d.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {navLink('https://globalgroupofeducationportal.com/courseFinder/index?access=pass', BookOpen, 'Courses')}
            {navLink('/#about-section', Handshake, 'Our Services')}
            {navLink('/about-us', Info, 'About Us')}
            {navLink('/contact-us', Phone, 'Contact Us')}
          </nav>

          {/* Right: Login + Hamburger */}
          <div className="flex items-center gap-2">
            <Link
              href="https://globalgroupofeducationportal.com/login"
              className="btn-slide flex items-center gap-2 bg-[#162544] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#0d172a] transition-colors"
            >
              <span>Login</span>
              <ArrowUpRight size={14} className="text-white" />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 border border-gray-300 text-gray-500"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
            <ul className="flex flex-col py-2">

              {[
                { href: '/', Icon: Home, label: 'Home' },
                { href: '/#about-section', Icon: Handshake, label: 'Our Services' },
                { href: '/about-us', Icon: Info, label: 'About Us' },
                { href: '/contact-us', Icon: Phone, label: 'Contact Us' },
              ].map(({ href, Icon, label }) => (
                <li key={href} className="border-b border-gray-50">
                  <Link href={href} onClick={close}
                    className={`flex items-center gap-3 px-5 py-3.5 text-sm font-semibold transition-colors
                      ${isActive(href) ? 'text-[#fbaf1b] border-l-4 border-[#fbaf1b] bg-gray-50' : 'text-[#162447] hover:bg-gray-50'}`}>
                    <Icon size={15} />
                    {label}
                  </Link>
                </li>
              ))}

              {/* Mobile Destinations */}
              <li className="border-b border-gray-50">
                <button
                  onClick={() => setDropOpen(!dropOpen)}
                  className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-[#162447]"
                >
                  <span className="flex items-center gap-3"><Globe size={15} /> Study Destinations</span>
                  {dropOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {dropOpen && (
                  <ul className="bg-gray-50 border-l-4 border-[#fbaf1b] ml-5 mr-3 mb-2 rounded-r-lg">
                    {destinations.map((d) => (
                      <li key={d.href} className="border-b border-gray-100 last:border-0">
                        <Link
                          href={d.href}
                          onClick={close}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-[#162447] hover:bg-gray-100"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#fbaf1b] flex-shrink-0 inline-block"></span>
                          {d.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="border-b border-gray-50">
                <Link
                  href="https://globalgroupofeducationportal.com/courseFinder/index?access=pass"
                  onClick={close}
                  className="flex items-center gap-3 px-5 py-3.5 text-sm font-semibold text-[#162447] hover:bg-gray-50"
                >
                  <BookOpen size={15} /> Courses
                </Link>
              </li>

            </ul>
          </div>
        )}
      </header>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div onClick={close} className="fixed inset-0 bg-black/40 z-40 lg:hidden" />
      )}
    </>
  );
}



