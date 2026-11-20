'use client';

import React, { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'United Kingdom',
    studyLevel: 'Undergraduate',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            GET IN TOUCH
          </span>
          <h1 style={{ fontSize: '38px', fontWeight: '800', marginTop: '10px' }}>
            Contact Us &amp; Free Assessment
          </h1>
          <p style={{ maxWidth: '700px', margin: '15px auto 0', color: '#cbd5e1', fontSize: '16px' }}>
            Have questions about studying abroad? Reach out to our expert team for 100% free counselling and visa guidance.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <section style={{ padding: '70px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            {/* Contact Information & Office Cards */}
            <div className="col-md-5">
              <div style={{ background: '#ffffff', padding: '35px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#102771', marginBottom: '20px' }}>
                  UK Head Office
                </h3>

                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <i className="fa fa-map-marker" style={{ fontSize: '22px', color: '#fbaf1b', marginTop: '3px' }}></i>
                  <div>
                    <strong style={{ color: '#1a2744', display: 'block', marginBottom: '4px' }}>London Office:</strong>
                    <span style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6' }}>
                      Level 18, 40 Bank Street, Canary Wharf, London, E14 5NR, United Kingdom
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <i className="fa fa-phone" style={{ fontSize: '20px', color: '#fbaf1b', marginTop: '3px' }}></i>
                  <div>
                    <strong style={{ color: '#1a2744', display: 'block', marginBottom: '4px' }}>Phone / WhatsApp:</strong>
                    <a href="https://wa.me/447586589659" target="_blank" rel="noreferrer" style={{ color: '#102771', fontSize: '14px', fontWeight: '600' }}>
                      +44 7586589659
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <i className="fa fa-envelope" style={{ fontSize: '18px', color: '#fbaf1b', marginTop: '3px' }}></i>
                  <div>
                    <strong style={{ color: '#1a2744', display: 'block', marginBottom: '4px' }}>Email Address:</strong>
                    <a href="mailto:london@globalgroupofeducation.com" style={{ color: '#102771', fontSize: '14px', fontWeight: '600' }}>
                      london@globalgroupofeducation.com
                    </a>
                  </div>
                </div>

                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1a2744', marginBottom: '12px' }}>
                    Connect on Social Media:
                  </h4>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a href="https://www.facebook.com/Globalgroupofeducation-101786341409358/" target="_blank" rel="noreferrer" className="btn btn-default" style={{ color: '#1877f2' }}>
                      <i className="fa fa-facebook"></i> Facebook
                    </a>
                    <a href="https://wa.me/447586589659" target="_blank" rel="noreferrer" className="btn btn-default" style={{ color: '#25D366' }}>
                      <i className="fa fa-whatsapp"></i> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Assessment & Inquiry Form */}
            <div className="col-md-7">
              <div style={{ background: '#ffffff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#102771', marginBottom: '8px' }}>
                  Online Admission Assessment Form
                </h3>
                <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '25px' }}>
                  Fill in your details and an education consultant will review your profile and respond within 24 hours.
                </p>

                {submitted ? (
                  <div style={{ padding: '30px', background: '#ecfdf5', border: '1px solid #10b981', borderRadius: '10px', textAlign: 'center' }}>
                    <i className="fa fa-check-circle" style={{ fontSize: '48px', color: '#10b981', marginBottom: '15px' }}></i>
                    <h3 style={{ color: '#065f46', fontWeight: '800', margin: '0 0 10px 0' }}>Thank You!</h3>
                    <p style={{ color: '#047857', fontSize: '15px' }}>
                      Your inquiry has been submitted successfully. One of our admission advisors will contact you shortly.
                    </p>
                    <button
                      className="btn btn-default"
                      onClick={() => setSubmitted(false)}
                      style={{ marginTop: '15px', fontWeight: '600' }}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label style={{ fontWeight: '600', color: '#334155' }}>Full Name *</label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={{ height: '45px', borderRadius: '6px' }}
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label style={{ fontWeight: '600', color: '#334155' }}>Email Address *</label>
                        <input
                          type="email"
                          required
                          className="form-control"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{ height: '45px', borderRadius: '6px' }}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label style={{ fontWeight: '600', color: '#334155' }}>Phone / WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          className="form-control"
                          placeholder="+44 7586589659"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{ height: '45px', borderRadius: '6px' }}
                        />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label style={{ fontWeight: '600', color: '#334155' }}>Preferred Study Destination *</label>
                        <select
                          className="form-control"
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          style={{ height: '45px', borderRadius: '6px' }}
                        >
                          <option value="United Kingdom">United Kingdom (UK)</option>
                          <option value="United States">United States (USA)</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="Hungary">Hungary</option>
                          <option value="United Arab Emirates">United Arab Emirates (UAE)</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label style={{ fontWeight: '600', color: '#334155' }}>Target Study Level *</label>
                      <select
                        className="form-control"
                        value={formData.studyLevel}
                        onChange={(e) => setFormData({ ...formData, studyLevel: e.target.value })}
                        style={{ height: '45px', borderRadius: '6px' }}
                      >
                        <option value="Undergraduate">Undergraduate / Bachelor's Degree</option>
                        <option value="Postgraduate">Postgraduate / Master's Degree</option>
                        <option value="Doctorate">Doctorate / Ph.D.</option>
                        <option value="Foundation">Foundation Program</option>
                        <option value="Pre-Master">Pre-Master Course</option>
                        <option value="English Language">English Language Course</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label style={{ fontWeight: '600', color: '#334155' }}>Your Academic Background &amp; Questions</label>
                      <textarea
                        rows="4"
                        className="form-control"
                        placeholder="Mention your previous qualification, grades, desired course, or any questions you have..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ borderRadius: '6px' }}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      style={{
                        background: '#102771',
                        borderColor: '#102771',
                        height: '48px',
                        fontSize: '16px',
                        fontWeight: '700',
                        borderRadius: '6px',
                        marginTop: '10px'
                      }}
                    >
                      Submit Free Assessment Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
