'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Testimonials from '../../components/Testimonials';
import { SnackbarProvider, useSnackbar } from 'notistack';

function ContactForm() {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const subject = encodeURIComponent(formData.subject || 'New Enquiry - Global Group of Education');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:london@globalgroupofeducation.com?subject=${subject}&body=${body}`;
      
      setTimeout(() => {
        enqueueSnackbar('Message sent successfully!', {
          variant: 'success',
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setLoading(false);
      }, 1000);

    } catch {
      enqueueSnackbar('Something went wrong. Please try again.', {
        variant: 'error',
        anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      });
      setLoading(false);
    }
  };

  return (
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
        <button type="submit" disabled={loading}
          className="btn-slide inline-flex items-center gap-2 bg-[#162544] text-white font-medium text-sm px-4 py-2 rounded-md border border-[#162544] disabled:opacity-60">
          {loading ? 'Sending...' : <><span>SUBMIT</span> <Send size={14} /></>}
        </button>
      </div>
    </form>
  );
}

export default function ContactUsPage() {
  return (
    <SnackbarProvider maxSnack={3}>
      <div>
        {/* Banner */}
        <div className="relative py-20 text-white text-center overflow-hidden" style={{ minHeight: '300px' }}>
          {/* bg image + overlay */}
          <div className="absolute inset-0 z-0">
            <img src="/assets/images/contact-us-banner-image.jpg" alt="Contact Us"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'rgba(8,15,36,0.65)' }}></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
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

        <section className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-8">

            {/* Contact Form */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-8 py-8">
              <h2 className="text-2xl font-bold text-[#0b1a37] mb-6">CONTACT WITH US</h2>
              <ContactForm />
            </div>

            {/* Office Maps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Pakistan Office */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-50">
                  <h3 className="text-xl font-bold text-[#0b1a37] mb-3">PAKISTAN OFFICE ADDRESS:</h3>
                  <p className="text-sm font-bold text-[#0b1a37] mb-2">Building no 278, High Street, Sahiwal, Punjab, Pakistan.</p>
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.9!2d73.1066!3d30.6697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922b7b9e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sGlobal%20Group%20of%20Education!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Pakistan Office" />
                </div>
              </div>

              {/* UK Office */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-50">
                  <h3 className="text-xl font-bold text-[#0b1a37] mb-3">UK OFFICE ADDRESS:</h3>
                  <p className="text-sm font-bold text-[#0b1a37] mb-2">Level 18, 40 Bank Street, Canary Wharf, London, E14 5NR, United Kingdom.</p>
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
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6!2d-0.0197!3d51.5054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602b6e0e0e0e1%3A0x1e1e1e1e1e1e1e1e!2s40%20Bank%20St%2C%20London%20E14%205NR!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="UK Office" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <Testimonials />
      </div>
    </SnackbarProvider>
  );
}
