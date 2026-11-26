import './globals.css';
import { Rubik } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'Global Group of Education | Study Abroad Consultants',
  description: 'Official admission guidance from British Council certified consultants for UK, USA, Canada, Australia, Hungary & UAE.',
  icons: {
    icon: '/assets/images/bgremoveicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`body { min-width: 1280px; }`}</style>
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

