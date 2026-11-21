'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Testimonials from '../../components/Testimonials';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Banner */}
      <div className="bg-[#0b1a37] py-8 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="inline-flex items-center bg-[#162544] text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md mb-4">
            Get In Touch
          </span>
          <h1 className="text-5xl font-bold mt-2">Contact Us</h1>
          <div className="w-16 h-1 bg-[#fbaf1b] rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Reach out to our expert team for 100% free counselling, university selection, and visa guidance.
          </p>
        </div>
      </div>

      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-10">

          {/* ── Contact Form ── */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-8 py-8">
            <h2 className="text-2xl font-bold text-[#0b1a37] mb-6">CONTACT WITH US</h2>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm mb-4">Our team will contact you shortly.</p>
                <button onClick={() => setSubmitted(false)}
                  className="btn-slide inline-flex items-center gap-2 bg-[#162544] text-white font-bold text-sm px-5 py-2.5 rounded-md hover:bg-[#0d172a] transition-colors">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name:</label>
                    <input type="text" required placeholder="NAME"
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#162544]" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email:</label>
                    <input type="email" required placeholder="EMAIL"
                      value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#162544]" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number:</label>
                    <input type="tel" required placeholder="PHONE NUMBER"
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#162544]" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Subject:</label>
                    <input type="text" required placeholder="SUBJECT"
                      value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#162544]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message:</label>
                  <textarea rows={5} placeholder="MESSAGE"
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-100 border-0 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#162544] resize-none" />
                </div>
                <div>
                  <button type="submit"
                    className="btn-slide inline-flex items-center gap-2 bg-[#162544] text-white font-bold text-sm px-4 py-2 rounded-md hover:bg-[#0d172a] transition-colors">
                    SUBMIT <Send size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ── Office Maps ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Pakistan Office */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-50">
                <h3 className="text-xl font-bold text-[#0b1a37] mb-3">PAKISTAN OFFICE ADDRESS:</h3>
                <p className="text-sm font-bold text-[#0b1a37]">Global Group of Education</p>
                <p className="text-sm font-bold text-[#0b1a37] mb-2">Pakistan Office</p>
                <p className="text-sm text-gray-600 mb-1">Building no 278, High Street, Sahiwal, Punjab, Pakistan.</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <Mail size={13} className="text-[#fbaf1b]" />
                  <a href="mailto:pakistan@globalgroupofeducation.com" className="hover:text-[#fbaf1b] transition-colors">pakistan@globalgroupofeducation.com</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={13} className="text-[#fbaf1b]" />
                  <a href="tel:+923233303333" className="hover:text-[#fbaf1b] transition-colors">+923233303333</a>
                </div>
              </div>
              <div className="h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.9!2d73.1066!3d30.6697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b7b9e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sGlobal%20Group%20of%20Education!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Pakistan Office">
                </iframe>
              </div>
            </div>

            {/* UK Office */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-50">
                <h3 className="text-xl font-bold text-[#0b1a37] mb-3">UK OFFICE ADDRESS:</h3>
                <p className="text-sm font-bold text-[#0b1a37]">Global Group of Education</p>
                <p className="text-sm font-bold text-[#0b1a37] mb-2">UK Office</p>
                <p className="text-sm text-gray-600 mb-1">Level 18, 40 Bank Street, Canary Wharf, London, E14 5NR, United Kingdom.</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <Mail size={13} className="text-[#fbaf1b]" />
                  <a href="mailto:london@globalgroupofeducation.com" className="hover:text-[#fbaf1b] transition-colors">london@globalgroupofeducation.com</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={13} className="text-[#fbaf1b]" />
                  <a href="tel:+447586589659" className="hover:text-[#fbaf1b] transition-colors">+44 7586589659</a>
                </div>
              </div>
              <div className="h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6!2d-0.0197!3d51.5054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602b6e0e0e0e1%3A0x1e1e1e1e1e1e1e1e!2s40%20Bank%20St%2C%20London%20E14%205NR!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="UK Office">
                </iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Testimonials />

    </div>
  );
}







