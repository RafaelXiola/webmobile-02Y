import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Importar fontes do Google Fonts
import { Open_Sans, Poppins } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-open-sans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Projeto de Apoio a Vícios',
  description: 'Seu vício acaba aqui! Oferecemos apoio profissional para superar todos os tipos de vícios.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${openSans.variable} ${poppins.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
