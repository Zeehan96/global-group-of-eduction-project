import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourses } from '../../../lib/data';

export async function generateStaticParams() {
  const courses = getCourses();
  return courses.map((c) => {
    const parts = c.url.split('/').filter(Boolean);
    const level = parts[parts.length - 1];
    const name = parts[parts.length - 2];
    return {
      slug: [name, level],
    };
  });
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slugParts = resolvedParams.slug;
  const courses = getCourses();
  const course = courses.find((c) => {
    const parts = c.url.split('/').filter(Boolean);
    return parts[parts.length - 2] === slugParts[0] && parts[parts.length - 1] === slugParts[1];
  });

  if (!course) {
    return { title: 'Course Not Found | Global Group of Education' };
  }

  return {
    title: `${course.titleClean || course.title} | Global Group of Education`,
    description: course.meta_description || 'Course details, entry criteria and admission consultation.',
  };
}

export default async function CourseDetailPage({ params }) {
  const resolvedParams = await params;
  const slugParts = resolvedParams.slug;
  const courses = getCourses();
  const course = courses.find((c) => {
    const parts = c.url.split('/').filter(Boolean);
    return parts[parts.length - 2] === slugParts[0] && parts[parts.length - 1] === slugParts[1];
  });

  if (!course) {
    notFound();
  }

  const relatedCourses = courses
    .filter((c) => c !== course && c.level === course.level)
    .slice(0, 6);

  return (
    <div>
      {/* Banner */}
      <div
        style={{
          background: 'linear-gradient(rgba(16, 39, 113, 0.88), rgba(16, 39, 113, 0.95)), url(/uploads/cont.jpg) center/cover no-repeat',
          padding: '75px 0',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span style={{ color: '#fbaf1b', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '13px' }}>
            {course.level.toUpperCase()} PROGRAM
          </span>
          <h1 style={{ fontSize: '36px', fontWeight: '800', marginTop: '10px' }}>
            {course.titleClean || course.title}
          </h1>
          {course.meta_description && (
            <p style={{ maxWidth: '750px', margin: '15px auto 0', color: '#cbd5e1', fontSize: '16px', lineHeight: '1.6' }}>
              {course.meta_description}
            </p>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <section style={{ padding: '60px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            {/* Left Main Article Column */}
            <div className="col-md-8">
              <div style={{ background: '#ffffff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#102771', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px', marginBottom: '25px' }}>
                  Course Overview &amp; Requirements
                </h3>

                {course.headings && course.headings.h3 && course.headings.h3.length > 0 && (
                  <div style={{ marginBottom: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {course.headings.h3.map((h, i) => (
                      <span key={i} style={{ background: '#eff6ff', color: '#1d4ed8', padding: '6px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '600' }}>
                        {h}
                      </span>
                    ))}
                  </div>
                )}

                {course.content && course.content.length > 0 ? (
                  course.content.map((para, idx) => (
                    <p key={idx} style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', marginBottom: '18px', textAlign: 'justify' }}>
                      {para}
                    </p>
                  ))
                ) : (
                  <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#475569' }}>
                    Full curriculum details for this program are available upon request from our admissions office.
                  </p>
                )}

                <div style={{ marginTop: '35px', padding: '25px', background: 'linear-gradient(135deg, #102771 0%, #1e3a8a 100%)', borderRadius: '10px', color: '#ffffff' }}>
                  <h4 style={{ fontWeight: '800', color: '#fbaf1b', marginBottom: '8px' }}>
                    Interested in this Course?
                  </h4>
                  <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '18px' }}>
                    Our counsellors will review your transcripts, find matching scholarships, and submit your application to partner universities.
                  </p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link
                      href={`/contact-us?course=${encodeURIComponent(course.titleClean || course.slug)}`}
                      className="btn"
                      style={{ background: '#fbaf1b', color: '#102771', fontWeight: '700', padding: '10px 22px', borderRadius: '6px' }}
                    >
                      Apply Now for Free
                    </Link>
                    <a
                      href={`https://wa.me/447586589659?text=I%20want%20to%20apply%20for%20${encodeURIComponent(course.titleClean || course.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                      style={{ background: '#25D366', color: '#ffffff', fontWeight: '700', padding: '10px 22px', borderRadius: '6px' }}
                    >
                      <i className="fa fa-whatsapp"></i> WhatsApp Advisor
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="col-md-4">
              <div style={{ background: '#ffffff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#102771', marginBottom: '15px', borderBottom: '2px solid #f1f5f9', paddingBottom: '10px' }}>
                  Related {course.level.toUpperCase()} Courses
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {relatedCourses.map((rel, idx) => (
                    <li key={idx} style={{ padding: '10px 0', borderBottom: '1px solid #f8fafc' }}>
                      <Link
                        href={`/course/${rel.name}/${rel.level}`}
                        style={{ color: '#334155', fontWeight: '600', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}
                      >
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '85%' }}>
                          {rel.titleClean || rel.name}
                        </span>
                        <i className="fa fa-angle-right" style={{ color: '#102771' }}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
