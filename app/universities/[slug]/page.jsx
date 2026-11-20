import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getUniversities, getUniversityBySlug } from '../../../lib/data';

export async function generateStaticParams() {
  const universities = getUniversities();
  return universities.map((u) => ({
    slug: u.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const university = getUniversityBySlug(slug);
  if (!university) {
    return { title: 'University Not Found' };
  }
  return {
    title: `${university.displayName} | Global Group of Education`,
    description: university.meta_description || `Complete admission guide and courses at ${university.displayName}.`,
  };
}

export default async function UniversityPage({ params }) {
  const { slug } = await params;
  const university = getUniversityBySlug(slug);

  if (!university) {
    notFound();
  }

  const allUnis = getUniversities();
  const otherUnis = allUnis.filter(u => u.slug !== slug).slice(0, 5);

  return (
    <div>
      {/* Banner */}
      <div 
        style={{
          background: 'linear-gradient(rgba(16, 39, 113, 0.88), rgba(16, 39, 113, 0.95)), url(/uploads/cont.jpg) center/cover no-repeat',
          padding: '70px 0',
          color: '#ffffff',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <span style={{ color: '#fbaf1b', fontWeight: '700', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '13px' }}>
            PARTNER UNIVERSITY PROFILE
          </span>
          <h1 style={{ fontSize: '38px', fontWeight: '800', marginTop: '10px' }}>
            {university.displayName}
          </h1>
          <p style={{ maxWidth: '700px', margin: '15px auto 0', color: '#cbd5e1', fontSize: '16px' }}>
            {university.meta_description}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <section style={{ padding: '60px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            {/* Left Content Column */}
            <div className="col-md-8">
              <div style={{ background: '#ffffff', padding: '35px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#102771', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', marginBottom: '20px' }}>
                  About {university.displayName}
                </h3>
                
                {university.content && university.content.length > 0 ? (
                  university.content.map((para, i) => (
                    <p key={i} style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', marginBottom: '18px', textAlign: 'justify' }}>
                      {para}
                    </p>
                  ))
                ) : (
                  <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155' }}>
                    Information for {university.displayName} is being updated. Contact our counsellors for admission criteria, intakes, and fees.
                  </p>
                )}

                <div style={{ marginTop: '35px', padding: '25px', background: '#f1f5f9', borderRadius: '10px' }}>
                  <h4 style={{ fontWeight: '800', color: '#102771', marginBottom: '10px' }}>
                    Apply for Next Intake at {university.displayName}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#475569' }}>
                    Our consultants provide end-to-end guidance from application submission, scholarship evaluation, to CAS and Student Visa processing.
                  </p>
                  <Link
                    href={`/contact-us?subject=Application%20for%20${encodeURIComponent(university.displayName)}`}
                    className="btn btn-primary"
                    style={{ background: '#102771', borderColor: '#102771', fontWeight: '700', marginTop: '10px' }}
                  >
                    Start Your Application Free
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="col-md-4">
              {/* Quick Contact Card */}
              <div style={{ background: '#102771', color: '#ffffff', padding: '30px', borderRadius: '12px', marginBottom: '30px', textAlign: 'center' }}>
                <i className="fa fa-graduation-cap" style={{ fontSize: '36px', color: '#fbaf1b', marginBottom: '15px' }}></i>
                <h4 style={{ color: '#ffffff', fontWeight: '800', marginBottom: '10px' }}>Need Admission Help?</h4>
                <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '20px' }}>
                  Speak directly with an accredited international admissions counsellor.
                </p>
                <a
                  href={`https://wa.me/447586589659?text=I%20want%20to%20apply%20to%20${encodeURIComponent(university.displayName)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-block"
                  style={{ background: '#25D366', color: '#ffffff', fontWeight: '700', padding: '12px', borderRadius: '8px' }}
                >
                  <i className="fa fa-whatsapp"></i> Chat on WhatsApp
                </a>
              </div>

              {/* Other Universities */}
              <div style={{ background: '#ffffff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#102771', marginBottom: '15px' }}>
                  Other Partner Universities
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {otherUnis.map((uni, idx) => (
                    <li key={idx} style={{ padding: '10px 0', borderBottom: '1px solid #f1f5f9' }}>
                      <Link
                        href={`/universities/${uni.slug}`}
                        style={{ color: '#334155', fontWeight: '600', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}
                      >
                        <span>{uni.displayName}</span>
                        <i className="fa fa-angle-right" style={{ color: '#102771' }}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '15px', textAlign: 'center' }}>
                  <Link href="/all-universities" style={{ color: '#102771', fontWeight: '700', fontSize: '13px' }}>
                    View All 30+ Universities →
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
