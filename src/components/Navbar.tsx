'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-4 md:px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="https://utfs.io/f/86e9c3e4-38f4-4753-9a9b-5a4457c70297-1zbfv.png"
            alt="Peniel Logo"
            width={30}
            height={15}
            priority
          />
          <div className="text-lg font-semibold">
            <span className="text-peniel-main">Peniel</span>{' '}
            <span className="text-peniel-secondary">Institute</span>
          </div>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-[#DC241C]">Home</Link>
          <Link href="#courses" className="hover:text-[#DC241C]">Courses</Link>
          <Link href="/about" className="hover:text-[#DC241C]">About Us</Link>
        </div>
        <Button className="hidden md:block hover:bg-[#DC241C] bg-[#2C1474]">Get Started</Button>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link href="/" className="block hover:text-[#DC241C]">Home</Link>
          <Link href="#courses" className="block hover:text-[#DC241C]">Courses</Link>
          <Link href="/about" className="block hover:text-[#DC241C]">About Us</Link>
          <Button className="w-full hover:bg-[#DC241C] bg-[#2C1474]">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;