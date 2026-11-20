import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTopLevelPages, getPageBySlug, getUniversities } from '../../lib/data';

export async function generateStaticParams() {
  const pages = getTopLevelPages();
  // Filter out any pages that might have their own custom route directory if needed
  return pages.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) {
    return { title: 'Page Not Found | Global Group of Education' };
  }
  return {
    title: `${page.cleanTitle} | Global Group of Education`,
    description: page.meta_description || 'Global Group of Education - International Student Consultancy',
  };
}

export default async function DynamicSlugPage({ params }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const universities = getUniversities().slice(0, 6);

  // Determine a nice header background based on slug
  const isDestination = slug.startsWith('study-in-') || slug === 'choose-your-destination';

  return (
    <div>
      {/* Banner */}
      <div 
        style={{
          background: isDestination 
            ? 'linear-gradient(rgba(16, 39, 113, 0.88), rgba(16, 39, 113, 0.95)), url(/uploads/uk.jpg) center/cover no-repeat'
            : 'linear-gradient(rgba(16, 39, 113, 0.88), rgba(16, 39, 113, 0.95)), url(/uploads/cont.jpg) center/cover no-repeat',
          padding: '75px 0',
          color: '#ffffff',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <span style={{ color: '#fbaf1b', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '13px' }}>
            {isDestination ? 'GLOBAL STUDY DESTINATION' : 'GLOBAL GROUP OF EDUCATION'}
          </span>
          <h1 style={{ fontSize: '38px', fontWeight: '800', marginTop: '10px' }}>
            {page.cleanTitle}
          </h1>
          {page.meta_description && (
            <p style={{ maxWidth: '750px', margin: '15px auto 0', color: '#cbd5e1', fontSize: '16px', lineHeight: '1.6' }}>
              {page.meta_description}
            </p>
          )}
        </div>
      </div>

      {/* Main Content Section */}
      <section style={{ padding: '60px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            {/* Left Main Article Column */}
            <div className="col-md-8">
              <div style={{ background: '#ffffff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', marginBottom: '30px' }}>
                
                {page.headings && page.headings.h2 && page.headings.h2.length > 0 && (
                  <div style={{ marginBottom: '25px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {page.headings.h2.map((h2, i) => (
                      <span key={i} style={{ background: '#eff6ff', color: '#1d4ed8', padding: '6px 14px', borderRadius: '50px', fontSize: '13px', fontWeight: '600' }}>
                        {h2}
                      </span>
                    ))}
                  </div>
                )}

                {page.content && page.content.length > 0 ? (
                  page.content.map((para, idx) => (
                    <p key={idx} style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', marginBottom: '20px', textAlign: 'justify' }}>
                      {para}
                    </p>
                  ))
                ) : (
                  <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569' }}>
                    {page.raw_text_summary || 'Please contact our education counsellors for comprehensive details on this program.'}
                  </p>
                )}

                {/* Consultation Card */}
                <div style={{ marginTop: '40px', padding: '25px', background: 'linear-gradient(135deg, #102771 0%, #1e3a8a 100%)', borderRadius: '12px', color: '#ffffff' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#fbaf1b', marginBottom: '8px' }}>
                    Book a Free Consultation
                  </h3>
                  <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '18px' }}>
                    Have questions about admissions, scholarships, or visa requirements? Our certified counsellors are here to guide you step-by-step.
                  </p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link
                      href="/contact-us"
                      className="btn"
                      style={{ background: '#fbaf1b', color: '#102771', fontWeight: '700', padding: '10px 22px', borderRadius: '6px' }}
                    >
                      Contact Our Team
                    </Link>
                    <a
                      href="https://wa.me/447586589659?text=Hello%20I%20need%20guidance"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      style={{ background: '#25D366', color: '#ffffff', fontWeight: '700', padding: '10px 22px', borderRadius: '6px' }}
                    >
                      <i className="fa fa-whatsapp"></i> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="col-md-4">
              {/* Destinations Navigation */}
              <div style={{ background: '#ffffff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', marginBottom: '30px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#102771', marginBottom: '15px', borderBottom: '2px solid #f1f5f9', paddingBottom: '10px' }}>
                  Study Destinations
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { name: 'Study in United Kingdom', slug: 'study-in-uk', flag: '🇬🇧' },
                    { name: 'Study in USA', slug: 'study-in-usa', flag: '🇺🇸' },
                    { name: 'Study in Canada', slug: 'study-in-canada', flag: '🇨🇦' },
                    { name: 'Study in Australia', slug: 'study-in-australia', flag: '🇦🇺' },
                    { name: 'Study in Hungary', slug: 'study-in-hungary', flag: '🇭🇺' },
                    { name: 'Study in UAE', slug: 'study-in-uae', flag: '🇦🇪' },
                  ].map((item, idx) => (
                    <li key={idx} style={{ padding: '9px 0', borderBottom: '1px solid #f8fafc' }}>
                      <Link
                        href={`/${item.slug}`}
                        style={{
                          color: slug === item.slug ? '#102771' : '#475569',
                          fontWeight: slug === item.slug ? '800' : '600',
                          fontSize: '14px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textDecoration: 'none'
                        }}
                      >
                        <span>{item.flag} {item.name}</span>
                        <i className="fa fa-angle-right"></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partner Universities */}
              <div style={{ background: '#ffffff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#102771', marginBottom: '15px', borderBottom: '2px solid #f1f5f9', paddingBottom: '10px' }}>
                  Top Partner Universities
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {universities.map((uni, idx) => (
                    <li key={idx} style={{ padding: '8px 0', borderBottom: '1px solid #f8fafc' }}>
                      <Link
                        href={`/universities/${uni.slug}`}
                        style={{ color: '#475569', fontWeight: '600', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}
                      >
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '85%' }}>
                          {uni.displayName}
                        </span>
                        <i className="fa fa-angle-right" style={{ color: '#102771' }}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '15px', textAlign: 'center' }}>
                  <Link href="/all-universities" style={{ color: '#102771', fontWeight: '700', fontSize: '13px' }}>
                    View All Universities →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
