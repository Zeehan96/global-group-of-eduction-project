import React from 'react';
import HeroVideo from './HeroVideo';
import { Users, GraduationCap } from 'lucide-react';

const iconMap = { Users, GraduationCap };

export default function PageBanner({
  chip,
  title,
  subtitle,
  videoHero = false,
  buttons = [],
}) {
  return (
    <section
      className="relative overflow-hidden bg-[#0b1a37]"
      style={{ minHeight: videoHero ? '500px' : 'auto' }}
    >
      {/* Video or solid bg */}
      {videoHero && (
        <div className="absolute inset-0 z-0">
          <HeroVideo />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(8,15,36,0.85) 0%, rgba(8,15,36,0.60) 40%, rgba(8,15,36,0.0) 65%, rgba(8,15,36,0.0) 100%)' }} />
        </div>
      )}

      {/* Content */}
      <div className={`relative z-10 max-w-\[80%\] mx-auto px-6 lg:px-10 flex items-center ${videoHero ? '' : 'justify-center text-center'}`}
        style={{ minHeight: videoHero ? '500px' : 'auto', paddingTop: videoHero ? '0' : '56px', paddingBottom: videoHero ? '0' : '56px' }}>
        <div className={videoHero ? 'max-w-lg' : ''}>

          {chip && (
            <span className="hero-text-1 inline-flex items-center text-[#fbaf1b] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-4" style={{ backgroundColor: 'rgba(251,175,27,0.08)' }}>
              {chip}
            </span>
          )}

          <h1
            style={{ fontSize: '38px', lineHeight: '48px', color: '#ffffff', fontWeight: '700' }}
            className="hero-text-2 drop-shadow-lg mb-4"
          >
            {title}
          </h1>

          {!videoHero && (
            <div className="invisible h-4"></div>
          )}

          {subtitle && (
            <p className="hero-text-3 mb-6 max-w-md" style={{ fontSize: '14px', color: '#ffffff', fontWeight: '400', lineHeight: '1.6' }}>
              {subtitle}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="hero-text-4 flex flex-wrap gap-3">
              {buttons.map((b) => {
                const Icon = b.icon ? iconMap[b.icon] : null;
                const cls = `btn-slide inline-flex items-center gap-2 font-medium text-sm px-5 py-2.5 rounded-md
                  ${b.variant === 'outline'
                    ? 'bg-white text-[#0b1a37] border border-white'
                    : 'bg-[#fbaf1b] text-white border border-[#fbaf1b]'}`;
                return b.external ? (
                  <a key={b.label} href={b.href} target="_blank" rel="noreferrer" className={cls}>
                    {Icon && <Icon size={15} />}
                    {b.label}
                  </a>
                ) : (
                  <a key={b.label} href={b.href} className={cls}>
                    {Icon && <Icon size={15} />}
                    {b.label}
                  </a>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

