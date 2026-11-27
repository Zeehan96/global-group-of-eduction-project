import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | Global Group of Education',
  description: 'Cookie Policy for Global Group of Education website.',
};

const sections = [
  {
    num: '1',
    title: 'What Are Cookies?',
    content: `A cookie is a small file containing letters and numbers that is stored on your browser or on the hard drive of your computer, tablet, or mobile device when you visit our website, subject to your cookie preferences and applicable law. Cookies contain information that is transferred to your device and may allow us to recognise your device when you return to our website.`,
  },
  {
    num: '2',
    title: 'How We Use Cookies',
    content: `Global Group of Education use cookies and similar technologies for purposes including:`,
    list: [
      'Keeping our website secure and functioning properly.',
      'Remembering your preferences and settings.',
      'Improving website performance and functionality.',
      'Understanding how visitors use our website.',
      'Measuring website traffic and engagement.',
      'Improving our services and website content.',
      'Supporting marketing and advertising activities, where applicable.',
      'Helping us understand which pages, services, or information are most useful to visitors.',
    ],
    listSuffix: 'Under UK rules, users should be clearly informed about cookies and, except where an exemption applies, non-essential cookies should only be placed after appropriate consent has been obtained.',
  },
  {
    num: '3',
    title: 'Types of Cookies We Use',
    content: `Strictly Necessary Cookies\n\nThese cookies are essential for the operation, security, and basic functionality of our website. They may enable functions such as:`,
    list: [
      'Website security.',
      'Page navigation.',
      'Session management.',
      'Form functionality.',
      'Remembering essential user choices.',
    ],
    listSuffix: `Because these cookies are necessary for providing a service requested by the user, they may not require consent where the applicable legal exemption applies.\n\nFunctional Cookies\n\nFunctional cookies help us remember choices you make when using our website, such as language, preferences, or other settings. These cookies improve your experience but may not be essential for the basic operation of the website.\n\nAnalytics and Performance Cookies\n\nThese cookies help us understand how visitors interact with our website. We use this information to improve our website, services, and user experience.\n\nMarketing and Advertising Cookies\n\nWhere applicable, marketing or advertising cookies may be used to understand visitors' interests, measure advertising campaigns, and provide more relevant advertisements. We will seek appropriate consent before using non-essential marketing or advertising cookies where required by applicable law.`,
  },
  {
    num: '4',
    title: 'Your Choices About Cookies',
    content: `When you visit the Global Group of Education website, our cookie banner may allow you to choose which categories of non-essential cookies you wish to accept.\n\nYou may have the following options:`,
    list: [
      'Strictly Necessary Cookies – Always Active',
      'Preference Cookies – Optional',
      'Statistic / Analytics Cookies – Optional',
      'Marketing Cookies – Optional',
    ],
    listSuffix: 'You may choose to accept or reject non-essential cookies through the cookie consent banner. You may also choose "Reject All" where this option is available.',
  },
  {
    num: '5',
    title: 'Changing Your Cookie Preferences',
    content: `You can change or withdraw your cookie preferences at any time by accessing the cookie settings available on our website.\n\nYou can also control or delete cookies through your internet browser. Most browsers allow you to:`,
    list: [
      'Block cookies.',
      'Delete existing cookies.',
      'Block third-party cookies.',
      'Allow cookies from selected websites.',
      'Delete cookies when you close your browser.',
    ],
    listSuffix: 'Please note that if you use your browser settings to block all cookies, including essential cookies, you may not be able to access all or parts of our website or some features may not function correctly.',
  },
  {
    num: '6',
    title: 'Cookie Expiry',
    content: `The period for which cookies remain on your device depends on the type and purpose of the cookie.`,
    list: [
      'Session cookies generally expire when you close your browser.',
      'Persistent cookies remain on your device for a specified period or until they are deleted.',
      'Non-essential cookies may have different expiry periods depending on the provider and their purpose.',
    ],
    listSuffix: 'Where applicable, the cookie consent tool will provide information about the duration of individual cookies.',
  },
  {
    num: '7',
    title: 'Changes to This Cookies Policy',
    content: `We may update this Cookies Policy from time to time to reflect changes to:`,
    list: [
      'Our website.',
      'The cookies and technologies we use.',
      'Third-party services.',
      'Legal or regulatory requirements.',
      'Our privacy and data protection practices.',
    ],
    listSuffix: 'Any changes will be published on this page, together with an updated "Last Updated" date.',
  },
];

export default function CookiePolicyPage() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-[#0b1a37] py-8 text-white text-center">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <span className="inline-flex items-center bg-[#162544] text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md mb-4">
            Legal
          </span>
          <h1 className="text-5xl font-bold mt-2">Cookie Policy</h1>
          <div className="w-16 h-1 bg-[#fbaf1b] rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            This policy explains how Global Group of Education uses cookies and similar technologies on our website.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
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








