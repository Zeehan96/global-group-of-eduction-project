import fs from 'fs';
import path from 'path';

let cachedSiteData = null;
let cachedUniversities = null;
let cachedCourses = null;
let cachedDestinations = null;

export function getSiteData() {
  if (!cachedSiteData) {
    const filePath = path.join(process.cwd(), 'fetched_data', 'site_data.json');
    cachedSiteData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }
  return cachedSiteData;
}

export function getTopLevelPages() {
  const site = getSiteData();
  const pages = site.pages
    .filter(p => !p.url.includes('/universities/') && !p.url.includes('/course/'))
    .map(p => {
      const slug = p.url.replace('https://www.globalgroupofeducation.com', '').replace(/^\/+|\/+$/g, '') || 'home';
      const cleanTitle = p.title ? p.title.split('|')[0].trim() : slug.replace(/-/g, ' ');
      return {
        ...p,
        slug,
        cleanTitle: cleanTitle || slug.replace(/-/g, ' ').toUpperCase()
      };
    })
    .filter(p => p.slug !== 'home');

  if (!pages.find(p => p.slug === 'study-in-europe')) {
    pages.push({
      slug: 'study-in-europe',
      cleanTitle: 'Study in Europe',
      title: 'Study in Europe | Global Group of Education',
      meta_description: 'Explore world-class academic institutions, multicultural environments, and career opportunities across Europe.',
      content: [
        'Europe is one of the most popular global study destinations offering a rich history, cutting-edge research facilities, and diverse degree programs taught in English.',
        'With Schengen visa mobility, students can explore multiple European nations during their studies. Many countries offer low tuition or tuition-free universities with excellent post-graduation work opportunities.',
        'Global Group of Education provides comprehensive application, visa, and scholarship assistance for students seeking admission into European universities.'
      ],
      headings: { h2: ['Top European Universities', 'Schengen Visa & Career Options'], h3: [] }
    });
  }

  if (!pages.find(p => p.slug === 'study-in-new-zealand')) {
    pages.push({
      slug: 'study-in-new-zealand',
      cleanTitle: 'Study in New Zealand',
      title: 'Study in New Zealand | Global Group of Education',
      meta_description: 'Discover world-ranked universities in New Zealand, post-study work visas, and exceptional quality of life.',
      content: [
        'New Zealand offers high academic standards, internationally recognized qualifications, and a safe, welcoming environment for international students.',
        'All eight of New Zealand\'s universities rank in the top 3% globally (QS World University Rankings). Students enjoy hands-on practical learning and generous post-study work rights up to 3 years.',
        'Our British Council certified education counsellors guide you through university selection, admission processing, and student visa application for New Zealand.'
      ],
      headings: { h2: ['Top Ranked NZ Universities', 'Post-Study Work Visa Guidance'], h3: [] }
    });
  }

  return pages;
}

export function getPageBySlug(slug) {
  const pages = getTopLevelPages();
  return pages.find(p => p.slug === slug);
}

export function getDestinations() {
  if (!cachedDestinations) {
    const filePath = path.join(process.cwd(), 'fetched_data', 'destinations.json');
    cachedDestinations = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }
  return cachedDestinations;
}

export function getUniversities() {
  if (!cachedUniversities) {
    const filePath = path.join(process.cwd(), 'fetched_data', 'universities.json');
    cachedUniversities = JSON.parse(fs.readFileSync(filePath, 'utf-8')).map((uni, idx) => {
      const slug = uni.url.split('/').filter(Boolean).pop();
      const name = uni.title ? uni.title.split('|')[0].trim() : slug.replace(/-/g, ' ');
      return {
        ...uni,
        slug,
        displayName: name || slug.replace(/-/g, ' '),
        logo: `/uploads/${idx + 1}.png`
      };
    });
  }
  return cachedUniversities;
}

export function getUniversityBySlug(slug) {
  const unis = getUniversities();
  return unis.find(u => u.slug === slug);
}

export function getCourses() {
  if (!cachedCourses) {
    const filePath = path.join(process.cwd(), 'fetched_data', 'courses.json');
    cachedCourses = JSON.parse(fs.readFileSync(filePath, 'utf-8')).map(course => {
      const parts = course.url.split('/').filter(Boolean);
      const level = parts[parts.length - 1];
      const name = parts[parts.length - 2];
      const slug = `${name}-${level}`;
      const titleClean = course.title ? course.title.split('–')[0].split('|')[0].trim() : name.replace(/-/g, ' ');
      return { ...course, slug, name, level, titleClean };
    });
  }
  return cachedCourses;
}
