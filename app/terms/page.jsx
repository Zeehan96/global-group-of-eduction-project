import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | Global Group of Education',
  description: 'Terms and Conditions for Global Group of Education services.',
};

const sections = [
  {
    num: '1',
    title: 'About Global Group of Education',
    content: `This website is operated by Global Group of Education (GGE). We provide international education consultancy services, including student counselling, university admissions support, visa guidance, English language test preparation, and related educational services.

If you have any questions regarding these Terms of Service or our services, please contact us through the contact information provided on our website.`,
  },
  {
    num: '2',
    title: 'Acceptance of These Terms',
    content: `By accessing or using our website, you confirm that you have read, understood, and agree to comply with these Terms of Service. If you do not agree with any part of these terms, you should discontinue using our website.`,
  },
  {
    num: '3',
    title: 'Related Policies',
    content: `These Terms should be read together with our Privacy Policy, Cookie Policy, and any additional terms or policies that apply to specific services offered by Global Group of Education.`,
  },
  {
    num: '4',
    title: 'Changes to These Terms',
    content: `Global Group of Education reserves the right to amend these Terms of Service at any time to reflect changes in our business, legal obligations, or the services we provide. Any updates will be published on this page and will take effect immediately upon publication.`,
  },
  {
    num: '5',
    title: 'Changes to Our Website and Services',
    content: `We continually review and improve our website and services. We may modify, update, suspend, or discontinue any part of our website, educational services, course information, or other content without prior notice.`,
  },
  {
    num: '6',
    title: 'Website Availability',
    content: `Although we aim to keep our website available at all times, we do not guarantee uninterrupted access. We may temporarily suspend or restrict access for maintenance, technical updates, security reasons, or circumstances beyond our control.`,
  },
  {
    num: '7',
    title: 'Transfer of Rights',
    content: `We may transfer our rights and obligations under these Terms of Service to another organisation if required as part of a business restructuring or legal process. Such a transfer will not affect your rights under these Terms.`,
  },
  {
    num: '8',
    title: 'Account Security and User Responsibilities',
    content: `If you create an account or submit information through our website, you are responsible for maintaining the confidentiality of your account credentials.`,
    list: [
      'Provide accurate and truthful information.',
      'Keep your login details secure.',
      'Notify us immediately if you suspect unauthorised access to your account.',
      'Ensure that all documents submitted to us are genuine and accurate.',
    ],
    listPrefix: 'You agree to:',
  },
  {
    num: '9',
    title: 'Use of Website Content',
    content: `All content published on this website, including text, graphics, images, logos, documents, brochures, videos, and other materials, is owned by or licensed to Global Group of Education unless otherwise stated.

You may use the content solely for your personal, non-commercial use in connection with exploring our educational services. You must not copy, reproduce, distribute, modify, or commercially exploit any content without our prior written permission.`,
  },
  {
    num: '10',
    title: 'Restrictions on Data Mining and Automated Access',
    content: `You must not use robots, spiders, artificial intelligence tools, web scraping software, data mining techniques, automated scripts, or similar technologies to extract, collect, reproduce, or analyse content from our website without our prior written consent.`,
  },
  {
    num: '11',
    title: 'Linking to Our Website',
    content: `You may link to the homepage of our website provided the link is fair, lawful, and does not imply any endorsement, sponsorship, or partnership that does not exist.

We reserve the right to request the removal of any link to our website that we consider misleading, inappropriate, or harmful to our reputation.`,
  },
  {
    num: '12',
    title: 'Intellectual Property Rights',
    content: `The Global Group of Education name, logo, branding, website design, educational materials, marketing content, publications, and all intellectual property displayed on this website are owned by or licensed to Global Group of Education.

You may not use our trademarks, branding, or copyrighted materials without obtaining our prior written permission.`,
  },
  {
    num: '13',
    title: 'Accuracy of Information and Educational Guidance',
    content: `We make reasonable efforts to ensure that the information provided on our website is accurate and up to date. However, university entry requirements, tuition fees, scholarships, English language requirements, visa regulations, and immigration policies may change without notice.

Global Group of Education provides professional educational guidance but does not guarantee:`,
    list: [
      'Admission to any university or college.',
      'Approval of a student visa.',
      'Scholarship awards.',
      'Employment opportunities after graduation.',
      'Acceptance of qualifications by educational institutions or immigration authorities.',
    ],
    listSuffix: 'Final decisions regarding admissions, scholarships, and visas are made solely by the relevant institutions and government authorities.',
  },
  {
    num: '14',
    title: 'Third-Party Websites',
    content: `Our website may include links to universities, colleges, government departments, visa authorities, testing organisations, partner institutions, or other third-party websites.

These links are provided for your convenience only. We do not control the content, services, or privacy practices of third-party websites and accept no responsibility for them.`,
  },
  {
    num: '15',
    title: 'Website Security',
    content: `We take reasonable measures to maintain the security of our website. However, we cannot guarantee that our website will always be free from viruses, malware, or other harmful software.

Users are responsible for using appropriate antivirus software and taking suitable precautions when accessing our website.`,
  },
  {
    num: '16',
    title: 'Prohibited Use',
    content: `You agree not to:`,
    list: [
      'Submit false, misleading, or fraudulent information.',
      'Upload forged or altered academic or identification documents.',
      'Attempt to gain unauthorised access to our systems or networks.',
      'Interfere with the operation or security of our website.',
      'Upload malicious software or harmful code.',
      'Use our website for unlawful or fraudulent purposes.',
      'Misrepresent yourself or another person when using our services.',
    ],
    listSuffix: 'Global Group of Education reserves the right to suspend or terminate access to our services where these Terms are breached.',
  },
  {
    num: '17',
    title: 'Limitation of Liability',
    content: `To the maximum extent permitted by law, Global Group of Education shall not be liable for any indirect, incidental, special, or consequential losses arising from the use of our website or consultancy services.

We are not responsible for:`,
    list: [
      'University admission decisions.',
      'Visa refusals or delays.',
      'Changes to immigration policies.',
      'Changes to university entry requirements or tuition fees.',
      'Decisions made by educational institutions or government authorities.',
      'Delays caused by third parties.',
    ],
    listSuffix: 'Nothing in these Terms excludes liability where such exclusion would be unlawful under applicable law.',
  },
  {
    num: '18',
    title: 'Privacy and Personal Information',
    content: `We collect, use, store, and protect your personal information in accordance with our Privacy Policy and applicable data protection laws.

By using our website or submitting an enquiry, you consent to the processing of your personal information for the purpose of providing educational consultancy services, processing applications, communicating with partner institutions, and responding to your enquiries.`,
  },
];

export default function TermsPage() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-[#0b1a37] py-8 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="inline-flex items-center bg-[#162544] text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md mb-4">
            Legal
          </span>
          <h1 className="text-5xl font-bold mt-2">Terms and Conditions</h1>
          {/* Gold underline */}
          <div className="w-16 h-1 bg-[#fbaf1b] rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Please read these terms carefully before using our website or services.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="bg-gray-50 py-10">
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
                {s.listPrefix && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">{s.listPrefix}</p>
                )}
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
                {s.listSuffix && (
                  <p className="text-gray-600 text-sm leading-relaxed mt-2">{s.listSuffix}</p>
                )}
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}







