'use client';

import React from 'react';
import { useState } from 'react';
import { InterestForm } from './InterestForm';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const JoinBanner: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (values: any) => {
    // Here you would typically send the data to your backend or email service
    console.log(values);
    // After submission, you might want to hide the form and show a thank you message
    setShowForm(false);
  };

  return (
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
      <div className="absolute inset-0">
        <Image
          className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
          src="https://utfs.io/f/cf32e71d-a43c-412e-82e7-2f55deda7f85-mlzptx.jpg"
          alt="Happy African American woman attending a lecture"
          layout="fill"
        />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Join Us?
          </h2>
          <p className="mt-4 text-base text-gray-200">
            Join our community of learners and educators. Become the leader of tomorrow. Be the change you want to see in the world.
          </p>

          <div className="mt-8 lg:mt-12">
            <Button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-semibold text-white transition-all duration-200 bg-peniel-secondary hover:bg-peniel-main border border-transparent rounded-md focus:bg-blue-700"
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <InterestForm onSubmit={handleSubmit} onClose={() => setShowForm(false)} />
        </div>
      )}
    </section>
  );
};

export default JoinBanner;