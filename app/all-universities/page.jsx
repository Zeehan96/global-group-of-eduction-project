import React from 'react';
import { getUniversities } from '../../lib/data';
import UniversityDirectory from '../../components/UniversityDirectory';

export const metadata = {
  title: 'All Partner Universities | Global Group of Education',
  description: 'Explore our 30+ official partner universities across the UK, USA, Canada, and Europe. Find admissions, rankings, and courses.',
};

export default function AllUniversitiesPage() {
  const universities = getUniversities();

  return (
    <div>
      {/* Banner */}
      <div
        style={{
          background: 'linear-gradient(rgba(16, 39, 113, 0.88), rgba(16, 39, 113, 0.95)), url(/uploads/uk.jpg) center/cover no-repeat',
          padding: '75px 0',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span style={{ color: '#fbaf1b', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '13px' }}>
            GLOBAL ACADEMIC NETWORK
          </span>
          <h1 style={{ fontSize: '38px', fontWeight: '800', marginTop: '10px' }}>
            All Partner Universities
          </h1>
          <p style={{ maxWidth: '700px', margin: '15px auto 0', color: '#cbd5e1', fontSize: '16px' }}>
            Browse through our accredited partner universities worldwide. Our counsellors facilitate direct admissions and scholarship applications.
          </p>
        </div>
      </div>

      {/* Directory Section */}
      <section style={{ padding: '60px 0', background: '#f8fafc' }}>
        <div className="container">
          <UniversityDirectory initialUniversities={universities} />
        </div>
      </section>
    </div>
  );
}
