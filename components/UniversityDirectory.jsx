'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function UniversityDirectory({ initialUniversities }) {
  const [search, setSearch] = useState('');

  const filtered = initialUniversities.filter((uni) => {
    const q = search.toLowerCase();
    const name = (uni.displayName || '').toLowerCase();
    const desc = (uni.meta_description || '').toLowerCase();
    return name.includes(q) || desc.includes(q);
  });

  return (
    <div>
      {/* Search Input Bar */}
      <div style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search universities by name, location, or keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: '14px 20px 14px 45px',
              fontSize: '15px',
              borderRadius: '50px',
              border: '2px solid #cbd5e1',
              boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
              width: '100%',
              height: '52px'
            }}
          />
          <i
            className="fa fa-search"
            style={{
              position: 'absolute',
              left: '18px',
              top: '18px',
              color: '#94a3b8',
              fontSize: '16px'
            }}
          ></i>
        </div>
        <p style={{ textAlign: 'center', marginTop: '10px', color: '#64748b', fontSize: '13px' }}>
          Showing {filtered.length} of {initialUniversities.length} partner universities
        </p>
      </div>

      {/* Grid of Universities */}
      <div className="row">
        {filtered.map((uni, idx) => (
          <div key={idx} className="col-md-4 col-sm-6" style={{ marginBottom: '30px' }}>
            <div
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '25px',
                background: '#ffffff',
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                  <img
                    src={`/uploads/${idx + 1}.png`}
                    alt={uni.displayName}
                    style={{ maxHeight: '55px', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#102771', marginBottom: '10px', minHeight: '44px' }}>
                  {uni.displayName}
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                  {uni.meta_description || (uni.content && uni.content[0]) || 'Official accredited partner university offering bachelor, master, and doctoral programs.'}
                </p>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link
                  href={`/universities/${uni.slug}`}
                  style={{ color: '#102771', fontWeight: '700', fontSize: '13px', textDecoration: 'none' }}
                >
                  View Campus Details <i className="fa fa-arrow-right"></i>
                </Link>
                <a
                  href={`https://wa.me/447586589659?text=I%20am%20interested%20in%20${encodeURIComponent(uni.displayName)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#25D366', fontSize: '18px' }}
                  title="Apply via WhatsApp"
                >
                  <i className="fa fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
