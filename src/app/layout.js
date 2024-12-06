import { Montserrat, Poppins } from 'next/font/google';
import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','500','600','700'], // Adjust weights as needed
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700'], // Adjust weights as needed
  variable: '--font-poppins',
});


export const metadata = {
  title: "Mohammad Rahim Portfolio",
  description: "Portfolio website developed using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <Head>
        <link rel="favicon" href="/images/favicon.svg" type="image/svg+xml"/>
      </Head>
      <body>
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
