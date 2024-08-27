import React from 'react';
import AboutSections from '@/components/AboutSections';
import MeetTheTeam from '@/components/MeetTheTeam';
import JoinBanner from '@/components/JoinBanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Peniel',
  description: 'Peniel Institute builds the capacity, confidence, knowledge and skills of all learners to become great leaders by means of Leadership and Management and Customer Service courses. Here you will find more about the team behind this institution and our mission to create better leaders.'
}

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
