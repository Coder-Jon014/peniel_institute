import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white">
      <div>
        <Image
          src="https://utfs.io/f/86e9c3e4-38f4-4753-9a9b-5a4457c70297-1zbfv.png"
          alt="Peniel Logo"
          width={30}
          height={15}
          priority
        />
      </div>
      <div className="space-x-6">
        <Link href="/" className="hover:text-[#DC241C]">Home</Link>
        <Link href="#courses" className="hover:text-[#DC241C]">Courses</Link>
        <Link href="/about" className="hover:text-[#DC241C]">About Us</Link>
      </div>
      <Button className="hover:bg-[#DC241C] bg-[#2C1474]">Get Started</Button>
    </nav>
  );
};

export default Navbar;