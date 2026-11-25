import React from 'react';
import Link from 'next/link';
import ServicesSection from '../../components/ServicesSection';
import PageBanner from '../../components/PageBanner';
import StatsSection from '../../components/StatsSection';

export const metadata = {
  title: 'About Us | Global Group of Education',
  description: 'Learn about Global Group of Education - your trusted study abroad consultancy with 10+ years of experience.',
};

export default function AboutUsPage() {
  return (
    <div>
      <PageBanner
        chip="Who We Are"
        title="About Us"
        subtitle="Your trusted study abroad consultancy with 10+ years of excellence in guiding students to top universities worldwide."
        videoHero={true}
        buttons={[
          { label: 'Be a Partner', href: 'https://globalgroupofeducationportal.com/partner-registration', variant: 'primary', external: true, icon: 'Users' },
          { label: 'Be a Student', href: 'https://globalgroupofeducationportal.com/student-registration', variant: 'outline', external: true, icon: 'GraduationCap' },
        ]}
      />

      {/* About Section — SS design */}
      <section className="bg-white py-10">
        <div className="max-w-\[80%\] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Left — 2 stacked images + 10 years badge */}
            {/* Left — 1 tall image */}
            <div className="flex-shrink-0 w-full lg:w-72">
              <img src="/assets/images/about-us-image1.png" alt="About GGE"
                className="w-full h-full object-cover rounded-xl shadow-sm" style={{ minHeight: '400px' }} />
            </div>

            {/* Middle — image2 + image3 no gap */}
            <div className="flex-shrink-0 w-full lg:w-72 flex flex-col gap-0">
              <img src="/assets/images/about-us-img2.png" alt="Graduate"
                className="w-full object-cover rounded-t-xl" style={{ height: '360px' }} />
              <div className="relative overflow-hidden rounded-b-xl" style={{ height: '180px' }}>
                <img src="/assets/images/about-us-image3.png" alt="World Map"
                  className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold text-[#0b1a37]">10</span>
                  <span className="text-sm font-semibold text-gray-600 mt-1 tracking-widest uppercase text-center leading-tight">Years Of<br/>Experience</span>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1">
                <h2 className="text-[#0b1a37] mb-3">Global Group Of Education</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  In this era of educational competition, the Global Group of Education brings you the finest consultants to help you achieve your desired degree from one of the best institutes in the UK and the world top-ranked universities. Our consultants are co-operative and excel at their work.
                </p>

                <h4 className="text-[#0b1a37] uppercase tracking-wide mb-2">Our Well-Grounded Team</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  We have trustworthy consultant's veterans who are highly qualified and are skilled at their work. Our expert team that will guide you according to your preference and potential, and will also provide you with impartial advice.
                </p>

                <h4 className="text-[#0b1a37] uppercase tracking-wide mb-2">Why Choose Global Group of Education?</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  We have a mission of making international education accessible and providing students with opportunities that will lead them towards a successful career. We are reliable, co-operative and have a fantastic team working to make education even more convenient.
                </p>

               
              </div>

          </div>
        </div>
      </section>

      <ServicesSection />

      {/* CEO Message */}
      {/* <section className="bg-white py-10">
        <div className="max-w-\[80%\] mx-auto px-6 lg:px-10">
          <div className="bg-gray-50 rounded-xl border border-[#fbaf1b]/20 shadow-sm p-8 flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <img src="/assets/images/dr.png" alt="CEO"
                className="w-36 h-36 rounded-full object-cover border-4 border-[#fbaf1b] shadow-md" />
              <div className="text-center">
                <p className="text-sm font-bold text-[#0b1a37]">Dr. Muhammad Zahid</p>
                <p className="text-xs text-[#fbaf1b] font-semibold tracking-wide">CEO &amp; Founder</p>
                <p className="text-xs text-gray-500">Global Group of Education</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#fbaf1b]">Message from CEO</span>
                <div className="h-px w-10 bg-[#fbaf1b]"></div>
              </div>
              <span className="text-5xl text-[#fbaf1b] leading-none font-bold">"</span>
              <p className="text-gray-600 text-sm leading-relaxed mt-1 mb-3">
                At Global Group of Education, our mission has always been to make world-class education accessible to every deserving student. We believe that the right guidance at the right time can transform lives. Over the past 10+ years, we have helped thousands of students achieve their dreams of studying at top universities across the UK, USA, Canada, Australia, and Europe. Our team of certified consultants is committed to providing honest, personalised, and results-driven support — from university selection to visa approval. We are not just consultants; we are partners in your journey to a better future.
              </p>
              <span className="text-5xl text-[#fbaf1b] leading-none font-bold flex justify-end">"</span>
            </div>
          </div>
        </div>
      </section> */}

      <StatsSection />

    </div>
  );
}

