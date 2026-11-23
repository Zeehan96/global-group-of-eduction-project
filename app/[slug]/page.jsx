import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTopLevelPages, getPageBySlug } from '../../lib/data';
import { GraduationCap, Briefcase, Globe, FileCheck, Users, Star } from 'lucide-react';
import Testimonials from '../../components/Testimonials';

// Destination specific data
const destinationData = {
  'study-in-uk': {
    banner: '/assets/images/study-incountry-images/rear-view-young-man-looking-river-thames.jpg',
    flag: '🇬🇧',
    country: 'United Kingdom',
    article: [
      { type: 'heading', text: 'Why Study in the United Kingdom?' },
      { type: 'para', text: 'The United Kingdom is home to some of the world\'s most prestigious universities, including Oxford, Cambridge, Imperial College London, and the London School of Economics. A UK degree is recognised and respected by employers and academic institutions globally, giving graduates a significant competitive advantage.' },
      { type: 'para', text: 'The standard duration of an undergraduate degree in the UK is three years, and a master\'s degree typically takes just one year — making it one of the most time-efficient and cost-effective study destinations in the world.' },
      { type: 'heading', text: 'Student Life in the UK' },
      { type: 'para', text: 'The UK offers an incredibly diverse and multicultural student experience. With over 600,000 international students from 180+ countries, you will find vibrant student communities, cultural events, and world-class facilities on every campus. Cities like London, Manchester, Edinburgh, and Birmingham offer rich cultural life alongside excellent academic resources.' },
      { type: 'para', text: 'Students have access to affordable public transport, student discounts, part-time work opportunities (up to 20 hours per week during term time), and a wide variety of clubs, societies, and sports facilities.' },
      { type: 'heading', text: 'Post-Study Work Visa' },
      { type: 'para', text: 'The UK Graduate Route visa allows international students to stay and work — or look for work — in the UK for up to 2 years after completing their degree (3 years for doctoral graduates). This provides a valuable opportunity to gain professional experience and potentially transition to long-term UK residency.' },
      { type: 'heading', text: 'Scholarships & Funding' },
      { type: 'para', text: 'There are many scholarship opportunities available to international students in the UK. The Chevening Scholarship, funded by the UK government, covers full tuition, living costs, and flights. The GREAT Scholarship programme, the Commonwealth Scholarships, and numerous university-specific bursaries are also available. GGE counsellors will help you identify and apply for the most suitable funding options.' },
      { type: 'heading', text: 'UK Student Visa (Tier 4)' },
      { type: 'para', text: 'To study in the UK, Pakistani and most international students require a Student visa (formerly Tier 4). You will need a Confirmation of Acceptance for Studies (CAS) from your university, proof of English language proficiency (IELTS/PTE), financial evidence, and a valid passport. GGE provides end-to-end visa guidance to maximise your approval chances.' },
    ],
    highlights: [
      { icon: GraduationCap, title: 'World-Class Universities',   desc: 'Oxford, Cambridge, Imperial & 100+ top-ranked institutions.' },
      { icon: FileCheck,     title: 'Post-Study Work Visa',       desc: 'Graduate Route visa — work up to 2 years after graduation.' },
      { icon: Star,          title: 'Scholarships Available',     desc: 'Chevening, GREAT and university-specific funding opportunities.' },
      { icon: Briefcase,     title: 'Career Opportunities',       desc: 'Access to one of the world\'s largest job markets post-study.' },
      { icon: Globe,         title: 'Multicultural Environment',  desc: 'Diverse student community from 180+ countries worldwide.' },
      { icon: Users,         title: 'Student Support',            desc: '100% free GGE guidance from application to visa approval.' },
    ],
  },
  'study-in-usa': {
    banner: '/assets/images/study-incountry-images/study-in-usa.jpg',
    flag: '🇺🇸',
    country: 'United States of America',
    article: [
      { type: 'heading', text: 'Why Study in the USA?' },
      { type: 'para', text: 'The United States hosts the largest number of international students in the world and is home to globally renowned institutions including Harvard, MIT, Stanford, and Yale. American universities consistently dominate the QS and Times Higher Education world rankings, offering unmatched academic excellence across virtually every discipline.' },
      { type: 'para', text: 'The US university system is known for its flexibility — students can explore multiple subjects before declaring a major, switch programs, and customise their academic path. This freedom makes it ideal for students who want a broad, well-rounded education.' },
      { type: 'heading', text: 'Student Life in the USA' },
      { type: 'para', text: 'Campus life in America is vibrant and comprehensive. Universities offer on-campus housing, dining, sports facilities, research labs, career centres, and thousands of student clubs. The sheer scale of American campuses means students have access to resources that are unmatched anywhere else in the world.' },
      { type: 'para', text: 'International students can work up to 20 hours per week on campus during their studies. The diverse social environment across states like New York, California, Texas, and Massachusetts ensures students experience a truly global lifestyle.' },
      { type: 'heading', text: 'OPT & STEM Extension' },
      { type: 'para', text: 'After graduation, F-1 visa holders can apply for Optional Practical Training (OPT), allowing them to work in the US for 12 months. STEM degree graduates are eligible for a 24-month STEM OPT extension, giving up to 3 years of post-study work experience — a major pathway into American industry and green card sponsorship.' },
      { type: 'heading', text: 'Scholarships & Funding' },
      { type: 'para', text: 'The Fulbright Program is the most prestigious US government scholarship for international students. Many universities also offer merit-based scholarships, graduate assistantships, and research fellowships that can significantly reduce or fully cover tuition costs. GGE will help you identify and apply for financial aid that matches your profile.' },
      { type: 'heading', text: 'US Student Visa (F-1)' },
      { type: 'para', text: 'To study in the USA, international students need an F-1 Student Visa. After receiving an acceptance letter and I-20 form from your university, you must pay the SEVIS fee and attend a visa interview at the US Embassy. GGE provides complete F-1 visa preparation support including documentation, financial proof, and interview coaching.' },
    ],
    highlights: [
      { icon: GraduationCap, title: 'Ivy League Education',       desc: 'Harvard, MIT, Stanford and 4,000+ accredited institutions.' },
      { icon: FileCheck,     title: 'OPT / STEM Extension',       desc: '3-year Optional Practical Training for STEM degree holders.' },
      { icon: Star,          title: 'Merit Scholarships',         desc: 'Fulbright and university scholarships for international students.' },
      { icon: Briefcase,     title: 'Global Career Network',      desc: 'Silicon Valley, Wall Street and Fortune 500 hiring pipelines.' },
      { icon: Globe,         title: 'Research Opportunities',     desc: 'World\'s highest R&D investment with cutting-edge facilities.' },
      { icon: Users,         title: 'GGE Guidance',               desc: 'Expert support for US university applications and F-1 visa.' },
    ],
  },
  'study-in-canada': {
    banner: '/assets/images/study-incountry-images/study-in-canada.jpg',
    flag: '🇨🇦',
    country: 'Canada',
    article: [
      { type: 'heading', text: 'Why Study in Canada?' },
      { type: 'para', text: 'Canada is one of the most welcoming and sought-after study destinations for international students. With world-ranked universities such as the University of Toronto, UBC, McGill, and McMaster, Canadian degrees are globally respected and highly valued by employers. Canada consistently ranks among the top countries for quality of life, safety, and inclusivity.' },
      { type: 'para', text: 'Canada\'s education system blends British academic rigour with American innovation, offering a unique academic experience. Tuition fees and living costs are significantly lower than the USA or UK, making it an excellent value destination for quality education.' },
      { type: 'heading', text: 'Student Life in Canada' },
      { type: 'para', text: 'Canada\'s major student cities — Toronto, Vancouver, Montreal, Ottawa, and Calgary — offer diverse communities, modern infrastructure, and a high standard of living. International students make up a significant proportion of the student population, creating a truly global campus culture.' },
      { type: 'para', text: 'Students can work up to 20 hours per week off-campus during the academic term and full-time during scheduled breaks. Part-time work helps cover living expenses and builds valuable Canadian work experience.' },
      { type: 'heading', text: 'Post-Graduate Work Permit (PGWP)' },
      { type: 'para', text: 'Canada\'s Post-Graduate Work Permit allows international graduates to work in Canada for a period equal to the length of their study program — up to 3 years. This work experience is a key pathway to permanent residency through the Express Entry system and Provincial Nominee Programs (PNP).' },
      { type: 'heading', text: 'Scholarships & Funding' },
      { type: 'para', text: 'The Canadian government and universities offer numerous scholarships for international students, including the Vanier Canada Graduate Scholarships, Banting Postdoctoral Fellowships, and university entrance awards. Many institutions also offer need-based bursaries and work-study programmes. GGE counsellors will guide you to the right funding opportunities.' },
      { type: 'heading', text: 'Canada Student Visa (Study Permit)' },
      { type: 'para', text: 'To study in Canada, international students need a Study Permit. Pakistan is part of the Student Direct Stream (SDS), which offers faster processing — often within 20 days — when you meet specific requirements including IELTS 6.0, a Guaranteed Investment Certificate (GIC), and tuition payment. GGE will manage your complete SDS application from start to finish.' },
    ],
    highlights: [
      { icon: GraduationCap, title: 'Top Universities',           desc: 'University of Toronto, UBC, McGill and 100+ institutions.' },
      { icon: FileCheck,     title: 'Post-Graduate Work Permit',  desc: 'PGWP allows working up to 3 years after graduation.' },
      { icon: Star,          title: 'PR Pathway',                 desc: 'Express Entry and Provincial Nominee Programs available.' },
      { icon: Briefcase,     title: 'Job Market',                 desc: 'Strong demand for skilled graduates across all sectors.' },
      { icon: Globe,         title: 'Quality of Life',            desc: 'Consistently ranked among the safest, most livable nations.' },
      { icon: Users,         title: 'GGE Support',                desc: 'Complete guidance from SDS application to study permit.' },
    ],
  },
  'study-in-australia': {
    banner: '/assets/images/study-incountry-images/study-in-australia.jpg',
    flag: '🇦🇺',
    country: 'Australia',
    article: [
      { type: 'heading', text: 'Why Study in Australia?' },
      { type: 'para', text: 'Australia is the third most popular destination for international students in the English-speaking world. Home to the Group of Eight (Go8) universities — including the Australian National University, University of Melbourne, and University of Sydney — Australia offers world-class education with globally recognised qualifications.' },
      { type: 'para', text: 'Australian universities are known for their strong research output, practical learning approach, and industry connections. The country invests heavily in education infrastructure, ensuring students have access to cutting-edge laboratories, libraries, and digital resources.' },
      { type: 'heading', text: 'Student Life in Australia' },
      { type: 'para', text: 'Australia\'s lifestyle is a major draw for international students. With a sunny climate, stunning natural landscapes, vibrant cities like Sydney, Melbourne, Brisbane, and Perth, and a relaxed, friendly culture, students enjoy an exceptional quality of life. Australia is consistently ranked among the safest and most livable countries in the world.' },
      { type: 'para', text: 'International students can work up to 48 hours per fortnight during term time and unlimited hours during holidays. This provides excellent opportunities to gain work experience and supplement living costs.' },
      { type: 'heading', text: 'Post-Study Work Rights' },
      { type: 'para', text: 'Australia\'s Temporary Graduate visa (Subclass 485) allows international graduates to live and work in Australia after completing their studies. The duration ranges from 2 to 4 years depending on the level and location of study. Students who study in regional Australia may qualify for extended post-study work rights.' },
      { type: 'heading', text: 'Scholarships & Funding' },
      { type: 'para', text: 'The Australia Awards Scholarships, funded by the Australian Government, are among the most prestigious scholarships available for students from developing countries. Many universities also offer excellence scholarships, international merit awards, and equity bursaries. GGE will help you identify and apply for the right opportunities.' },
      { type: 'heading', text: 'Australia Student Visa (Subclass 500)' },
      { type: 'para', text: 'To study in Australia, you need a Student Visa (Subclass 500). Requirements include an enrolment confirmation (CoE), proof of English proficiency (IELTS/PTE), financial capacity evidence, Overseas Student Health Cover (OSHC), and a genuine student statement (GTE). GGE provides complete visa application support to ensure a strong, well-documented submission.' },
    ],
    highlights: [
      { icon: GraduationCap, title: 'Group of Eight',             desc: 'ANU, University of Melbourne, Sydney and world top-50 unis.' },
      { icon: FileCheck,     title: 'Post-Study Work Rights',     desc: '2–4 years post-study work visa depending on qualification.' },
      { icon: Star,          title: 'Australia Awards',           desc: 'Government scholarships and university-funded opportunities.' },
      { icon: Briefcase,     title: 'Career Prospects',           desc: 'Mining, healthcare, engineering and IT sectors highly demanded.' },
      { icon: Globe,         title: 'Lifestyle',                  desc: 'Beautiful climate, beaches and world-class student cities.' },
      { icon: Users,         title: 'GGE Guidance',               desc: 'Full support for Australian student visa (Subclass 500).' },
    ],
  },
  'study-in-hungary': {
    banner: '/assets/images/study-incountry-images/study-in-hungry.jpg',    flag: '🇭🇺',
    country: 'Hungary',
    article: [
      { type: 'heading', text: 'Why Study in Hungary?' },
      { type: 'para', text: 'Hungary has emerged as one of the most attractive study destinations in Europe, particularly for students seeking EU-accredited degrees at affordable tuition fees. Located in the heart of Central Europe, Hungary offers a rich cultural heritage, a high standard of education, and a welcoming environment for international students.' },
      { type: 'para', text: 'Hungarian universities — especially in fields like medicine, dentistry, pharmacy, engineering, and business — have strong international reputations. Degrees earned in Hungary are recognised across the European Union and globally, opening doors to careers worldwide.' },
      { type: 'heading', text: 'Student Life in Hungary' },
      { type: 'para', text: 'Budapest, the capital city, is frequently voted one of the most beautiful and livable cities in Europe. Its vibrant nightlife, historic architecture, affordable living costs, and thriving international student community make it a fantastic place to live and study. Other university cities like Debrecen, Pécs, and Miskolc also offer excellent student environments.' },
      { type: 'para', text: 'The cost of living in Hungary is significantly lower than in Western Europe. Students can enjoy a comfortable lifestyle on a modest budget, with affordable accommodation, food, transport, and entertainment options throughout the country.' },
      { type: 'heading', text: 'Schengen Zone Access' },
      { type: 'para', text: 'As a member of the Schengen Area, a Hungarian student residence permit allows you to travel freely across 26 European countries. This is a huge advantage for students who want to explore Europe, attend conferences, or pursue internships in other EU countries during their studies.' },
      { type: 'heading', text: 'Stipendium Hungaricum Scholarship' },
      { type: 'para', text: 'The Stipendium Hungaricum is a prestigious Hungarian government scholarship that covers full tuition fees, provides a monthly stipend for living expenses, and includes accommodation support. It is available to students from partner countries including Pakistan. GGE has extensive experience guiding students through the competitive Stipendium Hungaricum application process.' },
      { type: 'heading', text: 'Hungary Student Visa' },
      { type: 'para', text: 'Pakistani students require a national visa (Type D) to study in Hungary, which then converts to a residence permit upon arrival. Requirements include an acceptance letter from a Hungarian university, proof of financial means, health insurance, and accommodation confirmation. GGE will prepare and submit your complete visa application.' },
    ],
    highlights: [
      { icon: GraduationCap, title: 'European Education',         desc: 'EU-accredited degrees recognised across Europe and globally.' },
      { icon: FileCheck,     title: 'Schengen Zone Access',       desc: 'Free movement across 26 Schengen European countries.' },
      { icon: Star,          title: 'Stipendium Hungaricum',      desc: 'Government scholarship covering tuition and accommodation.' },
      { icon: Briefcase,     title: 'Affordable Tuition',         desc: 'High-quality education at significantly lower costs than UK/USA.' },
      { icon: Globe,         title: 'Medical & Engineering',      desc: 'Top programs in medicine, dentistry, and engineering.' },
      { icon: Users,         title: 'GGE Support',                desc: 'Direct intake partnerships with Hungarian universities.' },
    ],
  },
  'study-in-uae': {
    banner: '/assets/images/study-incountry-images/study-in-uae.jpg',
    flag: '🇦🇪',
    country: 'United Arab Emirates',
    article: [
      { type: 'heading', text: 'Why Study in the UAE?' },
      { type: 'para', text: 'The United Arab Emirates has rapidly transformed into a world-class education hub, attracting students from across Asia, Africa, and beyond. With over 70 universities and branch campuses of globally renowned institutions — including NYU Abu Dhabi, Heriot-Watt University Dubai, Middlesex University Dubai, and the University of Birmingham Dubai — the UAE offers internationally recognised degrees in a modern, dynamic environment.' },
      { type: 'para', text: 'Studying in the UAE means you benefit from Western-standard education without travelling far from home. The cultural proximity, familiar cuisine, and strong Pakistani community make the UAE a comfortable transition for Pakistani students.' },
      { type: 'heading', text: 'Student Life in the UAE' },
      { type: 'para', text: 'Dubai and Abu Dhabi are two of the most exciting and cosmopolitan cities in the world. Students enjoy world-class infrastructure, modern campuses, state-of-the-art facilities, and a safe, secure environment. The UAE\'s multicultural society — with residents from over 200 nationalities — creates a truly global campus experience.' },
      { type: 'para', text: 'The UAE offers a tax-free environment, excellent transport links, and a thriving social scene. Students can access internship and part-time work opportunities with some of the world\'s leading multinational companies headquartered in Dubai and Abu Dhabi.' },
      { type: 'heading', text: 'Career & Business Opportunities' },
      { type: 'para', text: 'The UAE is a global hub for finance, trade, logistics, tourism, and technology. Graduating from a UAE university gives you direct access to one of the most dynamic job markets in the world. Dubai\'s free zones and Abu Dhabi\'s ADGM attract Fortune 500 companies, creating abundant career opportunities for graduates across all disciplines.' },
      { type: 'heading', text: 'Scholarships & Funding' },
      { type: 'para', text: 'Several UAE universities offer merit-based scholarships and tuition discounts for high-achieving international students. Additionally, the UAE government offers scholarships through various federal programmes. GGE, as an official representative of multiple UAE university partners, can help you secure the best available scholarships and financial support.' },
      { type: 'heading', text: 'UAE Student Visa' },
      { type: 'para', text: 'International students in the UAE are issued a Student Residence Visa sponsored by their university. The process is straightforward — once you receive your offer letter, the university handles the visa sponsorship. Requirements include passport copies, photos, medical fitness, and Emirates ID registration. GGE will coordinate with the university to ensure your visa is processed smoothly and on time.' },
    ],
    highlights: [
      { icon: GraduationCap, title: 'Global Branch Campuses',     desc: 'NYU, Heriot-Watt, Middlesex and 70+ universities in UAE.' },
      { icon: FileCheck,     title: 'Fast Admissions',            desc: 'Quick processing with rolling intakes throughout the year.' },
      { icon: Star,          title: 'Tax-Free Income',            desc: 'Work in a tax-free economy post-graduation.' },
      { icon: Briefcase,     title: 'Business Hub',               desc: 'Dubai and Abu Dhabi are global centres for business & finance.' },
      { icon: Globe,         title: 'Modern Infrastructure',      desc: 'World-class facilities, technology and student campuses.' },
      { icon: Users,         title: 'GGE Partners',               desc: 'Official representatives of UAE university partners.' },
    ],
  },
  'study-in-europe': {
    banner: '/assets/images/study-incountry-images/study-in-europe.jpg',
    flag: '🇪🇺',
    country: 'Europe',
    article: [
      { type: 'heading', text: 'Why Study in Europe?' },
      { type: 'para', text: 'Europe is one of the world\'s most diverse and historically rich study destinations, home to some of the oldest and most prestigious universities on the planet. From the University of Bologna in Italy — founded in 1088 — to modern research powerhouses like ETH Zurich, TU Munich, and KU Leuven, Europe offers world-class education across every discipline.' },
      { type: 'para', text: 'Many European countries offer tuition-free or very low-cost education even for international students, particularly in Germany, Norway, and Austria. This makes Europe an outstanding choice for students seeking high-quality education at a fraction of the cost of UK, USA, or Australia.' },
      { type: 'heading', text: 'Student Life in Europe' },
      { type: 'para', text: 'Studying in Europe means living in some of the world\'s most beautiful and culturally vibrant cities — Berlin, Paris, Amsterdam, Vienna, Prague, and Barcelona. Each city offers a unique blend of history, art, nightlife, and academic culture. Campus life is dynamic, with strong international student communities and excellent student welfare support.' },
      { type: 'para', text: 'The cost of living varies by country, but Central and Eastern European countries like Hungary, Poland, and Czech Republic offer a very affordable lifestyle. Students can enjoy a rich social and cultural experience without breaking the budget.' },
      { type: 'heading', text: 'Schengen Zone & Travel Freedom' },
      { type: 'para', text: 'Most European study destinations are part of the Schengen Area, allowing students to travel freely across 26 countries on a single residence permit. This is a unique advantage — during holidays and study breaks, students can explore multiple European nations, attend cultural events, and build a truly international perspective.' },
      { type: 'heading', text: 'Scholarships & Funding' },
      { type: 'para', text: 'The Erasmus+ programme is Europe\'s flagship scholarship scheme, funding thousands of students each year. Country-specific scholarships such as the DAAD (Germany), Eiffel (France), Holland Scholarship (Netherlands), and Stipendium Hungaricum (Hungary) also offer substantial financial support for international students. GGE will help you identify and apply for the right European scholarship.' },
      { type: 'heading', text: 'Europe Student Visa' },
      { type: 'para', text: 'Visa requirements vary by European country. For Schengen countries, Pakistani students typically need a national (Type D) long-stay visa or a residence permit issued by the destination country. Requirements generally include university acceptance, proof of finances, health insurance, and accommodation. GGE provides country-specific visa guidance for all major European study destinations.' },
    ],
    highlights: [
      { icon: GraduationCap, title: 'Top Universities',           desc: 'ETH Zurich, TU Munich, KU Leuven & centuries-old institutions.' },
      { icon: FileCheck,     title: 'Schengen Zone Access',       desc: 'Travel freely across 26 European countries.' },
      { icon: Star,          title: 'Erasmus+ Scholarships',      desc: 'Europe\'s flagship scholarship programme for students.' },
      { icon: Briefcase,     title: 'Low / No Tuition Fees',      desc: 'Germany, Norway & Austria offer tuition-free education.' },
      { icon: Globe,         title: 'Cultural Experience',        desc: 'Live in some of the world\'s most iconic cities.' },
      { icon: Users,         title: 'GGE Guidance',               desc: 'Full support for European university applications & visas.' },
    ],
  },
  'study-in-new-zealand': {
    banner: '/assets/images/study-incountry-images/study-in-europe.jpg',
    flag: '🇳🇿',
    country: 'New Zealand',
    article: [
      { type: 'heading', text: 'Why Study in New Zealand?' },
      { type: 'para', text: 'New Zealand is an increasingly popular study destination, offering internationally recognised qualifications, a safe and welcoming environment, and stunning natural landscapes. All eight of New Zealand\'s universities rank in the top 3% of universities worldwide according to the QS World University Rankings, making it a destination of genuine academic excellence.' },
      { type: 'para', text: 'New Zealand universities are known for their practical, research-led approach to education. Students benefit from small class sizes, strong lecturer-student relationships, and access to cutting-edge research facilities across disciplines including agriculture, environmental science, engineering, business, and healthcare.' },
      { type: 'heading', text: 'Student Life in New Zealand' },
      { type: 'para', text: 'New Zealand is consistently ranked among the safest and most peaceful countries in the world. Its cities — Auckland, Wellington, Christchurch, and Dunedin — offer vibrant student communities, excellent public transport, affordable living, and an extraordinary quality of life. The country\'s breathtaking natural environment, from mountains to beaches, provides an unmatched backdrop for student life.' },
      { type: 'para', text: 'International students in New Zealand can work up to 20 hours per week during their studies and full-time during scheduled holidays. This provides valuable local work experience and helps manage living costs in one of the world\'s most livable countries.' },
      { type: 'heading', text: 'Post-Study Work Visa' },
      { type: 'para', text: 'New Zealand offers a Post-Study Work Visa that allows graduates to work for up to 3 years after completing a degree of two or more years at a New Zealand university. This work experience is a strong pathway towards New Zealand residency through the Skilled Migrant Category and other immigration pathways.' },
      { type: 'heading', text: 'Scholarships & Funding' },
      { type: 'para', text: 'The New Zealand Government offers the New Zealand Excellence Awards for international students, and universities provide their own merit scholarships and bursaries. The New Zealand Aid Programme also funds students from developing countries. GGE counsellors will identify all applicable scholarships and help you submit strong applications.' },
      { type: 'heading', text: 'New Zealand Student Visa' },
      { type: 'para', text: 'To study in New Zealand, international students require a Student Visa issued by Immigration New Zealand. Requirements include an offer of place from a registered institution, proof of sufficient funds, return flight confirmation, and medical/chest X-ray clearance if required. GGE provides full New Zealand student visa guidance to ensure a smooth and successful application.' },
    ],
    highlights: [
      { icon: GraduationCap, title: 'Top 3% Universities',        desc: 'All 8 NZ universities rank in the world\'s top 3%.' },
      { icon: FileCheck,     title: 'Post-Study Work Visa',       desc: 'Work in NZ for up to 3 years after graduation.' },
      { icon: Star,          title: 'NZ Excellence Awards',       desc: 'Government & university scholarships available.' },
      { icon: Briefcase,     title: 'PR Pathway',                 desc: 'Skilled Migrant Category residency route for graduates.' },
      { icon: Globe,         title: 'Safe & Peaceful',            desc: 'Consistently ranked among world\'s most livable nations.' },
      { icon: Users,         title: 'GGE Guidance',               desc: 'Full support for NZ university applications & student visa.' },
    ],
  },
};

export async function generateStaticParams() {
  const pages = getTopLevelPages();
  return pages
    .filter((p) => p.slug !== 'about-us')
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return { title: 'Page Not Found | Global Group of Education' };
  return {
    title: `${page.cleanTitle} | Global Group of Education`,
    description: page.meta_description || 'Global Group of Education - International Student Consultancy',
  };
}

export default async function DynamicSlugPage({ params }) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();

  const isDestination = slug.startsWith('study-in-') || slug === 'choose-your-destination';
  const destInfo = destinationData[slug] || null;

  // Smart title casing: abbreviations stay ALL-CAPS, 'in' stays lowercase, rest Title Case
  const ABBRS = new Set(['uk', 'usa', 'uae', 'aus', 'nz']);
  const LOWER_WORDS = new Set(['in', 'of', 'the', 'and', 'a', 'an']);
  const formattedTitle = page.cleanTitle
    .split(' ')
    .map((word, i) => {
      const w = word.toLowerCase();
      if (ABBRS.has(w)) return word.toUpperCase();
      if (i !== 0 && LOWER_WORDS.has(w)) return w;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');

  return (
    <div>
      {/* Banner */}
      <div className="relative py-20 text-white text-center overflow-hidden" style={{ minHeight: '340px' }}>
        <div className="absolute inset-0 z-0">
          <img
            src={destInfo?.banner || '/assets/images/about-bg.jpg'}
            alt={page.cleanTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(8,15,36,0.70)' }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center justify-center h-full">
          <span className="inline-flex items-center bg-[#fbaf1b]/20 text-[#fbaf1b] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-4">
            {isDestination ? `Global Study Destination` : 'Global Group of Education'}
          </span>
          <h1 style={{ fontSize: '44px', lineHeight: '54px', fontWeight: '700', color: '#fff' }}>{formattedTitle}</h1>
          <div className="w-12 h-1 bg-[#fbaf1b] rounded-full mx-auto mt-4"></div>
          {page.meta_description && (
            <p style={{ fontSize: '14px', color: '#fff', fontWeight: '400' }} className="max-w-2xl mx-auto mt-4 leading-relaxed">{page.meta_description}</p>
          )}
        </div>
      </div>

      {/* Destination highlights cards */}
      {destInfo && (
        <section className="bg-gray-50 py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-8">
              <span className="inline-flex items-center bg-[#fbaf1b]/20 text-[#b87c00] text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-md mb-3">
                Why Study in {destInfo.country}
              </span>
              <h2 className="text-[#0b1a37] font-semibold">Key Highlights</h2>
              <div className="w-12 h-1 bg-[#fbaf1b] rounded-full mx-auto mt-3"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {destInfo.highlights.map((h) => (
                <div key={h.title} className="bg-white rounded-xl border border-[#fbaf1b]/20 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="w-11 h-11 rounded-lg bg-[#162544] flex items-center justify-center mb-3">
                    <h.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-[#0b1a37] font-semibold text-sm mb-1">{h.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="bg-white rounded-xl border border-[#fbaf1b]/30 shadow-sm p-6 mb-6">

                {/* Destination article content */}
                {destInfo?.article?.length > 0 ? (
                  destInfo.article.map((block, idx) =>
                    block.type === 'heading' ? (
                      <h3 key={idx} className="text-[#0b1a37] font-bold text-base mt-6 mb-2 pb-2 border-b border-[#fbaf1b]/30">{block.text}</h3>
                    ) : (
                      <p key={idx} className="text-gray-600 text-sm leading-relaxed mb-4">{block.text}</p>
                    )
                  )
                ) : page.content?.length > 0 ? (
                  page.content.map((para, idx) => {
                    const cleaned = para.replace(/[\u{1F1E0}-\u{1F1FF}]{2}/gu, '').trim();
                    if (!cleaned) return null;
                    const testimonialPhrases = [
                      'consultants of this recruitment',
                      'consultants of global group',
                      'gge counsellors were very helpful',
                      'extremely satisfied with the service',
                      'the team of a global group',
                      'the supportive team of the global',
                      'i am very grateful to the global',
                      'i am mian waqar',
                      'hellow,my name',
                      'i got my offer letter',
                      'i am very grateful',
                    ];
                    const lower = cleaned.toLowerCase();
                    if (testimonialPhrases.some(p => lower.startsWith(p))) return null;
                    const isHeading = cleaned.length <= 60 && !/[.!?]$/.test(cleaned);
                    return isHeading ? (
                      <h3 key={idx} className="text-[#0b1a37] font-bold text-base mt-6 mb-2 pb-2 border-b border-[#fbaf1b]/30">{cleaned}</h3>
                    ) : (
                      <p key={idx} className="text-gray-600 text-sm leading-relaxed mb-4">{cleaned}</p>
                    );
                  })
                ) : (
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {page.raw_text_summary || 'Please contact our education counsellors for comprehensive details on this program.'}
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

    </div>
  );
}
