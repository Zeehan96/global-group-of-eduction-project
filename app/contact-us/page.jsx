'use client';

import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle } from 'lucide-react';
import Testimonials from '../../components/Testimonials';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(formData.subject || 'New Enquiry - Global Group of Education');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:london@globalgroupofeducation.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 5000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {sent && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm font-semibold">
          <CheckCircle size={18} /> Message sent successfully! We will get back to you shortly.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
          <input type="text" required placeholder="Your full name"
            value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#162544]" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input type="email" required placeholder="your@email.com"
            value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#162544]" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
          <input type="tel" required placeholder="+44 ..."
            value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#162544]" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
          <input type="text" required placeholder="How can we help?"
            value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}
            className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#162544]" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
        <textarea rows={5} required placeholder="Write your message here..."
          value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#162544] resize-none" />
      </div>
      <div>
        <button type="submit" disabled={loading}
          className="btn-slide inline-flex items-center gap-2 bg-[#162544] text-white font-medium text-sm px-6 py-3 rounded-md border border-[#162544] disabled:opacity-60">
          {loading ? 'Sending...' : <><span>Send Message</span><Send size={14} /></>}
        </button>
      </div>
    </form>
  );
}

export default function ContactUsPage() {
  return (
    <div>
      {/* Banner */}
      <div className="relative py-20 text-white text-center overflow-hidden" style={{ minHeight: '300px' }}>
        <div className="absolute inset-0 z-0">
          <img src="/assets/images/contact-us-banner-image.jpg" alt="Contact Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(8,15,36,0.65)' }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center justify-center h-full">
          <span className="inline-flex items-center bg-[#fbaf1b]/20 text-[#fbaf1b] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-4">
            Get In Touch
          </span>
          <h1 className="text-white mt-2" style={{ fontSize: '44px', lineHeight: '54px', fontWeight: '700' }}>Contact Us</h1>
          <div className="w-16 h-1 bg-[#fbaf1b] rounded-full mx-auto mt-4 mb-4"></div>
          <p style={{ fontSize: '14px', color: '#ffffff', fontWeight: '400' }} className="max-w-xl mx-auto">
            Reach out to our expert team for 100% free counselling, university selection, and visa guidance.
          </p>
        </div>
      </div>

      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-8">

          {/* Contact Form */}
          <div className="bg-white rounded-xl border border-[#fbaf1b]/30 shadow-sm px-8 py-8">
            <span className="inline-flex items-center bg-[#fbaf1b]/20 text-[#b87c00] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-3">
              Send Us a Message
            </span>
            <h2 className="text-2xl font-bold text-[#0b1a37] mb-6">Contact With Us</h2>
            <ContactForm />
          </div>

          {/* Office Maps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Pakistan Office */}
            <div className="bg-white rounded-xl border border-[#fbaf1b]/30 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100">
                <span className="inline-flex items-center bg-[#fbaf1b]/20 text-[#b87c00] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-3">
                  Pakistan
                </span>
                <h3 className="text-lg font-bold text-[#0b1a37] mb-2">Pakistan Office</h3>
                <p className="text-sm text-gray-600 mb-3">Building no 278, High Street, Sahiwal, Punjab, Pakistan.</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <Mail size={13} className="text-[#fbaf1b]" />
                  <a href="mailto:pakistan@globalgroupofeducation.com" className="hover:text-[#fbaf1b] transition-colors">pakistan@globalgroupofeducation.com</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={13} className="text-[#fbaf1b]" />
                  <a href="tel:+923233303333" className="hover:text-[#fbaf1b] transition-colors">+92 323 3303333</a>
                </div>
              </div>
              <div className="h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.3!2d73.1066!3d30.6762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b59a7e1b5555%3A0xc7c0b6b6b6b6b6b6!2sSahiwal%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Pakistan Office" />
              </div>
            </div>

            {/* UK Office */}
            <div className="bg-white rounded-xl border border-[#fbaf1b]/30 shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100">
                <span className="inline-flex items-center bg-[#fbaf1b]/20 text-[#b87c00] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-3">
                  United Kingdom
                </span>
                <h3 className="text-lg font-bold text-[#0b1a37] mb-2">UK Office</h3>
                <p className="text-sm text-gray-600 mb-3">Level 18, 40 Bank Street, Canary Wharf, London, E14 5NR, United Kingdom.</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <Mail size={13} className="text-[#fbaf1b]" />
                  <a href="mailto:london@globalgroupofeducation.com" className="hover:text-[#fbaf1b] transition-colors">london@globalgroupofeducation.com</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={13} className="text-[#fbaf1b]" />
                  <a href="tel:+447586589659" className="hover:text-[#fbaf1b] transition-colors">+44 7586 589659</a>
                </div>
              </div>
              <div className="h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5!2d-0.0197!3d51.5054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602b9f9b8b8b9%3A0xb8b8b8b8b8b8b8b8!2s40%20Bank%20St%2C%20London%20E14%205NR%2C%20UK!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="UK Office" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
