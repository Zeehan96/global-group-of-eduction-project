import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Global Group of Education',
  description: 'Privacy Policy for Global Group of Education website and services.',
};

const sections = [
  {
    num: '1',
    title: 'Introduction',
    content: `Global Group of Education (GGE) provides study abroad consultancy, university admissions, and student visa support services. At GGE, the privacy and security of our students, partners, clients, and website visitors are our top priorities. We are committed to protecting the personal information you share with us. This Privacy Policy explains how Global Group of Education collects, uses, stores, and protects personal data obtained through our website and related services.\n\nAll information stored by Global Group of Education is treated as strictly confidential. Personal data is securely stored and accessed only by authorised personnel. We implement appropriate technical, administrative, and organisational security measures to protect personal data against unauthorised access, misuse, alteration, loss, theft, disclosure, or destruction.`,
  },
  {
    num: '2',
    title: 'Types of Personal Data We Collect',
    content: `Personal data is any information that can identify you. Global Group of Education (GGE) may collect and process the following information when you use our website or services:`,
    list: [
      'Personal Identification Information: Full name, date of birth, gender, nationality, and other identification details.',
      'Contact Information: Email address, telephone number, postal address, and other contact details.',
      'Academic Information: Educational qualifications, academic records, university and course preferences, English language test results, and other information required to assess and process your application.',
      'Technical Information: IP address, browser type, device information, operating system, and website usage data collected through cookies and similar technologies.',
      'Communication Preferences: Your preferences for receiving newsletters, promotional materials, service updates, and other communications from GGE.',
    ],
    listSuffix: 'By submitting your information or registering with Global Group of Education, you consent to the collection, processing, and, where necessary, sharing of your personal data with partner universities, colleges, educational institutions, and authorised service providers for the purpose of processing your application and delivering our services.',
  },
  {
    num: '3',
    title: 'How We Collect Your Personal Data',
    content: `Global Group of Education (GGE) collects personal information through a variety of sources to provide our education consultancy and study abroad services effectively. This information may be collected through:`,
    list: [
      'Directly from You: When you submit enquiry or application forms, register on our website, contact us via phone, email, WhatsApp, or social media, subscribe to our updates, or use our services.',
      'Website & Digital Technologies: When you interact with our website, we may automatically collect technical information such as your IP address, browser type, device information, and website activity through cookies and similar technologies.',
      'Authorised Third Parties: Where necessary, we may receive relevant information from partner universities, educational institutions, authorised representatives, or publicly available sources to support your application and related services.',
    ],
    listSuffix: 'By using our website or services, you consent to the collection and processing of your personal information. Where required, your data may be shared with partner universities, colleges, educational institutions, and authorised service providers solely for the purpose of processing your application and delivering our services.',
  },
  {
    num: '4',
    title: 'How We Use Your Data',
    content: `Global Group of Education (GGE) processes your personal information to deliver our education consultancy and study abroad services effectively. Your information may be used for the following purposes:`,
    list: [
      'Application Processing: To manage enquiries, process applications, and facilitate admissions with partner universities, colleges, and educational institutions.',
      'Communication & Marketing: To provide service updates, newsletters, promotional offers, and relevant information about our services, where you have provided consent or where permitted by applicable law. You may opt out of marketing communications at any time.',
      'Student Support: To communicate with you regarding your applications, admissions, visa assistance, appointments, and other support services, while maintaining accurate records of our interactions.',
      'Website Management & Security: To ensure the security, functionality, and performance of our website, improve user experience, and protect our systems against unauthorised access or misuse.',
    ],
    listSuffix: 'We process your personal information only where there is a lawful basis to do so, including your consent, the performance of our contractual obligations, compliance with legal requirements, or our legitimate business interests. Your personal information is retained only for as long as necessary to fulfil these purposes and to meet applicable legal and regulatory obligations.',
  },
  {
    num: '5',
    title: 'Disclosure of Your Personal Data',
    content: `Global Group of Education (GGE) may share your personal data with trusted third parties only where necessary to provide our services, including:`,
    list: [
      'Partner universities, colleges, educational institutions, and authorised representatives for admission and application processing.',
      'Visa processing partners, language test providers, and other service providers involved in supporting your study abroad journey.',
      'Regulatory authorities or government bodies where required by applicable laws or legal obligations.',
      'Successors or acquiring organisations in the event of a business merger, acquisition, or restructuring.',
    ],
    listSuffix: 'We require all third parties to protect your personal data, process it securely, and use it only for the purposes authorised by Global Group of Education and in compliance with applicable data protection laws.',
  },
  {
    num: '6',
    title: 'Data Security',
    content: `Global Group of Education (GGE) is committed to protecting your personal data. We implement appropriate technical, administrative, and organisational security measures to prevent unauthorised access, loss, misuse, alteration, or disclosure of your information. Access to personal data is restricted to authorised personnel and trusted service providers who require it to perform their duties and are bound by confidentiality obligations.\n\nIf a data breach occurs that may affect your rights or freedoms, we will take appropriate action and notify you and the relevant authorities where required by law.`,
  },
  {
    num: '7',
    title: 'Data Retention',
    content: `We retain your personal data only for as long as necessary to provide our services, fulfil the purposes for which it was collected, and comply with applicable legal, regulatory, and contractual requirements.\n\nWhen personal data is no longer required, it is securely deleted or anonymised for statistical and research purposes. You may also request the deletion of your personal data, subject to any legal or regulatory obligations requiring us to retain certain records.`,
  },
  {
    num: '8',
    title: 'Cookies and Similar Technologies',
    content: `Our website uses cookies and similar technologies to enhance your browsing experience, remember your preferences, analyse website traffic, and improve the performance of our services. Cookies may also help us understand how visitors interact with our website so we can continuously improve its functionality.\n\nYou can manage or disable cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality and performance of our website.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-[#0b1a37] py-8 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="inline-flex items-center bg-[#162544] text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md mb-4">
            Legal
          </span>
          <h1 className="text-5xl font-bold mt-2">Privacy Policy</h1>
          <div className="w-16 h-1 bg-[#fbaf1b] rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            This Privacy Policy explains how Global Group of Education collects, uses, stores, shares, and protects your personal data.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10">
        <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-[#fbaf1b] pl-4 py-1">
          This Privacy Policy explains how Global Group of Education (GGE) collects, uses, stores, shares, and protects your personal data when you use our website or services. We are committed to safeguarding your privacy and ensuring that your personal information is processed securely, transparently, and in accordance with applicable data protection laws.
        </p>
      </div>

      {/* Content */}
      <section className="bg-gray-50 py-10 mt-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-6"><div className="flex flex-col gap-4">
            {sections.map((s) => (
              <div key={s.num} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-black mr-2">{s.num}.</span>
                  <h2 className="text-2xl font-bold text-black">{s.title}</h2>
                </div>
                {s.content.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 text-sm leading-relaxed mb-3">{para}</p>
                ))}
                {s.list && (
                  <ul className="list-none flex flex-col gap-1.5 mb-3 ml-2">
                    {s.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#fbaf1b] flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {s.listSuffix && s.listSuffix.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-600 text-sm leading-relaxed mt-2">{para}</p>
                ))}
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}







