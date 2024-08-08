import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSections from '@/components/AboutSections';

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutSections />
    </main>
  );
};

export default AboutPage;
