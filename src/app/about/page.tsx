import React from 'react';
import AboutSections from '@/components/AboutSections';
import MeetTheTeam from '@/components/MeetTheTeam';
import JoinBanner from '@/components/JoinBanner';

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <AboutSections />
      <MeetTheTeam />
      <JoinBanner />
    </main>
  );
};

export default AboutPage;
