import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default: 'Peniel Institute | Customer Service | Leadership Management',
    template: '%s | Peniel Institute',
  },
  description: "Peniel Institute builds the capacity, confidence, knowledge and skills of all learners to become great leaders by means of Leadership and Management and Customer Service courses.",
  authors: [{ name: 'Jon', url: 'https://www.linkedin.com/in/jon-daniel-c-a3535b134/'}],
  creator: 'Jon-Daniel Coombs',
  keywords: ['Customer Service', 'Leadership', 'Management', 'Leadership Management', 'Jamaica', 'Institute', 'Leader', 'Experience', 'Skills', 'Quality Education'],

};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}