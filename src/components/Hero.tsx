import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-16 px-4 md:px-8 bg-white">
      <div className="w-full md:w-1/2 px-4 md:px-20 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Empowering Your Future with Quality Education</h1>
        <p className="text-sm md:text-base text-gray-500 mb-6">Affordable, Flexible, and Accessible Training Programs for Aspiring Leaders and Professionals.</p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button className="w-full sm:w-auto bg-peniel-secondary hover:bg-peniel-main flex items-center justify-center gap-2">
            Join Us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Button>
          <Link href="/about" className="text-peniel-primary underline">Get to know more</Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <Image 
          src="https://utfs.io/f/1b6f6a71-b330-4322-ab32-64194cfca787-7kk9r.svg"
          alt="Hero Image"
          width={500}
          height={500}
          className="rounded-lg z-10 relative w-full max-w-md md:max-w-lg"
        />
      </div>
    </div>
  );
};

export default Hero;