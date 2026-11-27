import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Global Group of Education',
  description: 'Privacy Policy for Global Group of Education website and services.',
};

const sections = [
  {
    num: '1',
    title: 'Introduction',
    content: `This is the privacy policy for the Global Group of Education and the services delivered through this and other sites owned by the Global Group of Education. This Privacy Policy defines how we handle the personal data received from the applicants when they visit the Global Group of Education website.\n\nPlease read this Policy carefully, because by using or visiting the Global Group of Education website and services, you agree to our terms and conditions. This Privacy Policy relates only to the Global Group of Education website. With time, we can revise this Privacy Policy and will notify our applicants of any possible changes by publishing a notice on our website. If you notice any publishing notice, please re-check our Privacy Policy before continuing to use our website. The revisit to our website after the changes means that you have agreed to our new terms.`,
  },
  {
    num: '2',
    title: 'Collection Of Your Personal Data',
    content: `We collect your personal information when you visit our website and ask for information about our services and other general information. We can also gather data when you submit an online application for your admissions, or when you sign up for our newsletter service.\n\nIn order to process your required inquiries, we can collect your full name, phone number, email, and postal addresses. To process enrolments, we can ask for your nationality, date of birth, education history, copy of passport, immigration history, and even ID card.\n\nWe can also utilize your email and postal address to send information about any further updates on your application, marketing communication, special offers, and other products or services similar to those you agree to enroll or enquired about from us. If you do not wish us to be part of our emails, you can opt-out from it by informing us through email or by notifying us of your preferences via the options listed in the section below stated as "Your Ability to Choose."`,
  },
  {
    num: '3',
    title: 'Sharing Your Information',
    content: `We may use your information to perform our duties and exercise our rights under the agreements made with our clients, and to keep you informed about any progress in your application and other effects. If you have enrolled in using our services through other consultants, we will share your data, test result, and attendance performance with them.\n\nIf you are using our services, we will share your provided information with our partners. Please note that this is restricted to exchanging individual data only with the institution concerned. We will share your personal data only with our service providers who are part of Global Group of Education site or answer your queries and requests and also with other Global Group of Education companies to enable administration of application and processing or to permit them to notify you about any new services and products which may interest you.\n\nWe may also need to reveal your personal data to third parties if we feel it is appropriate, at our absolute discretion, to comply with the law, to implement our User Agreement or this Privacy Policy, or to move or sell the Global Group of Education.`,
  },
  {
    num: '4',
    title: 'Your Ability To Choose',
    content: `As stated above, we could use your email address, postal address, or telephone number to provide you information on receiving or managing your application or any other services or products that we believe can interest you. If you do not wish to receive this information from us, you can contact us by emailing us or by sending your request to our address by phone.`,
  },
  {
    num: '5',
    title: 'Global Group of Education Cookies Policy',
    content: `Our website uses cookies and similar technologies to enhance your browsing experience, remember your preferences, and improve the performance of our services. The sections below explain what cookies are, how we use them, and how you can manage them.`,
  },
  {
    num: '6',
    title: 'What Is A Cookie?',
    content: `A cookie is a plain text file that is stored by a server of a website on your computer or mobile device. Only that server can retrieve the contents of that cookie or read them. Each cookie is special in the browser you are using. This will contain some anonymous information, including a unique identifier and the name of the domain.\n\nThe website you are visiting may set cookies ("first-party cookies"), or other websites that run data on the page you are accessing ("third-party cookies") may set these.`,
  },
  {
    num: '7',
    title: 'How Are Cookies Used?',
    content: `Cookies do several different things, including helping you to switch easily between sites, save your preferences, and generally enhance your website experience. Many websites you visit will be using cookies to improve the user experience by allowing the webpage to "remember" you, for either the duration of your access (using a "session cookie") or for repeated visits (using a "persistent cookie").\n\nWhen a website does not use cookies, you would assume that you will be visiting the website for the first time each time you move to a new page on the site — for example, when you type your login details and switch to the next page, the website does not remember you and will not be able to keep you logged in. Some websites may also use cookies to help them tailor their ads or advertisements based on your position and/or surfing habits.`,
  },
  {
    num: '8',
    title: 'Embedded Content',
    content: `Often, we add images and video clips from websites like YouTube, Twitter, Facebook, Instagram, and WeChat to help our clips. As a consequence, cookies from certain websites that we introduced to you when you visit a page containing that material. Global Group of Education does not monitor the distribution of these cookies, and you can search the website of the related third party for more information.\n\nHere are some of the websites that contain embedded content:`,
    list: [
      'Twitter',
      'Facebook',
      'LinkedIn',
      'YouTube',
      'Instagram',
      'WeChat',
    ],
  },
  {
    num: '9',
    title: 'Sharing Tools',
    content: `On the Global Group of Education web pages, you'll also see embedded share buttons; these allow users to quickly share content with friends via a variety of common social networks. Upon clicking on one of these buttons, the service you have chosen to share content through can set a cookie. The distribution of such cookies is not regulated by the Global Group of Education. There are current examples on our website, which include Facebook and Twitter.`,
  },
  {
    num: '10',
    title: 'What To Do If You Don\'t Want Any Cookies To Be Set?',
    content: `If you choose, any or all of the cookies can be blocked, or you can also erase cookies that are already set, but you need to be mindful that you may lose some of the functions of that site. To do this, please follow the guidelines on how to turn off cookies on your browser below.\n\nFor each category of cookies above, some instructions provide details on how to opt-out of some separately, e.g., Google Analytics.`,
  },
  {
    num: '11',
    title: 'How to Turn Off Cookies on Your Web Browser?',
    content: `All current versions of common browsers provide users with a degree of control over cookies that allow users to configure their browsers to accept or reject all, or any, cookies. Users can even set their browser to alert them each time they give a cookie.\n\nThe key browser forms and guidelines for turning off cookies on ALL pages are available on the aboutcookies.org website, not only on the Global Group of Education. If you do find the use of cookies annoying, we recommend that you obey the instructions on this page and turn them off for all websites, not just for Global Group of Education.\n\nIf you would like to find out more information about cookies, you can contact the Information Commissioner's Office.`,
  },
  {
    num: '12',
    title: 'Information Commissioner\'s Office',
    content: `The Office of the Information Commissioner is the independent body set up by the United Kingdom to protect information rights in the public interest, to encourage public bodies transparency and individuals' data privacy.`,
  },
  {
    num: '13',
    title: 'Internet Advertising Bureau',
    content: `The Internet Advertising Industry has developed a guide to digital advertising and online privacy.`,
  },
  {
    num: '14',
    title: 'International Chamber Of Commerce United Kingdom',
    content: `Details about the ICC (UK) cookie guide are available in the ICC website section.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-[#0b1a37] py-8 text-white text-center">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
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

      {/* Content */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-6 py-6">
            <div className="flex flex-col gap-4">
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
