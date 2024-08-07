import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex justify-between items-center py-16 px-8 bg-white">
      <div className="w-1/2 px-20">
        <h1 className="text-4xl font-bold mb-4">Empowering Your Future with Quality Education</h1>
        <p className="text-s text-gray-500 mb-6">Affordable, Flexible, and Accessible Training Programs for Aspiring Leaders and Professionals.</p>
        <div className="flex items-center gap-4">
          <Button className="bg-peniel-secondary hover:bg-peniel-main flex items-center gap-2">
            Join Us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Button>
          <Link href="/about" className="text-peniel-primary underline">Get to know more</Link>
        </div>
      </div>
      <Image 
          src="https://utfs.io/f/1b6f6a71-b330-4322-ab32-64194cfca787-7kk9r.svg"
          alt="Hero Image"
          width={500}
          height={500}
          className="rounded-lg z-10 relative mx-20"
      />
    </div>
  );
};

export default Hero;