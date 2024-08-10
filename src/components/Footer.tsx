import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="mb-8 ml-8 md:mb-0">
            <Image
              src="https://utfs.io/f/df95a343-7cab-4c19-a438-8e8bceacea93-j44bg3.svg"
              alt="Peniel Institute Logo"
              width={300}
              height={150}
              className="mt-4"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="/about" className="hover:text-peniel-main">About</Link>
                <Link href="/courses" className="hover:text-peniel-main">Courses</Link>
                <Link href="/contact" className="hover:text-peniel-main">Contact</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <address className="not-italic">
                <p>41 Coke Drive, Santa Cruz P.O.,</p>
                <p>St. Elizabeth, Jamaica</p>
                <p>Email: penieleducation2@gmail.com</p>
                <p>Phone: 1(876) 966-3073 / 393-1291</p>
              </address>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/Peniel-Institute-110772427955820" className="text-gray-400 hover:text-peniel-main">
                  <Facebook size={24} />
                </a>
                <a href="https://www.linkedin.com/company/peniel-institute2/" className="text-gray-400 hover:text-peniel-main">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/peniel_institute/" className="text-gray-400 hover:text-peniel-main">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Peniel Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;