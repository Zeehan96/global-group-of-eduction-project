import React from 'react';
import Link from 'next/link';

/**
 * variant: 'primary' | 'outline'
 * href: string (internal or external)
 * external: bool
 */
export default function Button({ children, href, external = false, variant = 'primary', className = '', ...props }) {
  const base = 'btn-slide inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-md transition-colors';

  const styles = {
    primary: 'bg-[#fbaf1b] text-white border border-[#fbaf1b]',
    outline: 'bg-transparent text-white border border-white',
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}
