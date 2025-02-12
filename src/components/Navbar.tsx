'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { InterestForm } from './InterestForm';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (values: any) => {
    // Here you would typically send the data to your backend or email service
    console.log(values);
    setShowForm(false);
  };

  return (
    <nav className="bg-white py-4 px-4 md:px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="https://utfs.io/f/59601084-3869-4731-8516-4f4b56b4fb2d-du3l9k.svg"
            alt="Peniel Logo"
            width={150}
            height={15}
            priority
          />
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-[#DC241C]">Home</Link>
          <Link href="/#courses" className="hover:text-[#DC241C]">Courses</Link>
          <Link href="/about-peniel" className="hover:text-[#DC241C]">About Us</Link>
        </div>
        <Button className="hidden md:block hover:bg-[#DC241C] bg-[#2C1474]" onClick={() => setShowForm(true)}>Get Started</Button>
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
          <Link href="/about-peniel" className="block hover:text-[#DC241C]">About Us</Link>
          <Button className="w-full hover:bg-[#DC241C] bg-[#2C1474]" onClick={() => setShowForm(true)}>Get Started</Button>
        </div>
      )}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <InterestForm onSubmit={handleSubmit} onClose={() => setShowForm(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;