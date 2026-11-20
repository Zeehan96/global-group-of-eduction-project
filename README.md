# Global Group of Education - Next.js Migration

Website ko purani static HTML files se modern **Next.js (App Router)** aur **React 19** par kamyabi ke sath convert kar diya gaya hai.

---

## 🚀 Quick Start (Localhost)

Aap do tareeqon se chala sakte hain:

### Option 1: One-Click Launcher (Windows)
Double click karein:
- **`start_next_server.bat`** (Yeh automatically `npm run dev` chala kar `http://localhost:3000` par site start kar dega).

### Option 2: Terminal Commands
```bash
# Development mode (Hot-reloading ke sath)
npm run dev

# Production build test (Static generation)
npm run build

# Production server start
npm start
```
Browser mein open karein: **[http://localhost:3000](http://localhost:3000)**

---

## 🏗️ New Next.js Architecture

| Directory / File | Description |
| :--- | :--- |
| **`app/`** | Next.js App Router root |
| ├── **`app/layout.jsx`** | Global site layout, meta tags & stylesheet injection |
| ├── **`app/page.jsx`** | Modern interactive Homepage (Video hero, destinations grid, stats, featured unis) |
| ├── **`app/[slug]/page.jsx`** | Dynamic routing for **29 top-level pages** (`/study-in-uk`, `/study-in-usa`, `/about-us`, etc.) |
| ├── **`app/universities/[slug]/page.jsx`** | Dynamic pages for **32 partner universities** with SSG (`generateStaticParams`) |
| ├── **`app/course/[...slug]/page.jsx`** | Dynamic pages for **58 courses** (`/course/[name]/[level]`) |
| ├── **`app/all-universities/page.jsx`** | Live search & directory of all partner universities |
| ├── **`app/contact-us/page.jsx`** | Interactive assessment & contact inquiry form with WhatsApp integration |
| ├── **`app/globals.css`** | Extracted and optimized CSS styles |
| **`components/`** | Reusable React Components |
| ├── **`Header.jsx`** | Modern navigation header with responsive mobile toggle & dropdowns |
| ├── **`Footer.jsx`** | Complete footer with quick links, study destinations & social handles |
| ├── **`Marquee.jsx`** | Smooth infinite university ticker/marquee |
| ├── **`UniversityDirectory.jsx`**| Client-side live search component for universities |
| **`lib/data.js`** | Data layer extracting data from `fetched_data/` JSON database |
| **`public/`** | Static assets (CSS, JS, Fonts, Images, Videos, Uploads) served directly |

---

## ⚡ Benefits of this Next.js Conversion

1. **121 Static Pages Generated in ~4 seconds:** Har page Static Site Generation (SSG) ke sath pre-render hota hai, jis se loading speed instant hai.
2. **SEO Friendly:** Har university aur destination page ke apne dynamic meta tags aur OpenGraph tags hain.
3. **No 120 HTML Files Maintenance:** Ab content update karne ke liye alag alag HTML files edit karne ki zaroorat nahi, sirf data ya React component edit karein.
4. **Vercel Ready:** Vercel par direct push karne se zero-config live deployment ho jati hai.
