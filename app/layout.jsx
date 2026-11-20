import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Global Group of Education | Study Abroad Consultants',
  description: 'Official admission guidance from British Council certified consultants for UK, USA, Canada, Australia, Hungary & UAE.',
  icons: {
    icon: '/assets/images/bgremoveicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
