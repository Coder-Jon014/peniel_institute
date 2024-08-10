import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

const teamMembers = [
  {
    name: 'Hyacinth Rowe',
    role: 'CEO | Principal Tutor',
    image: 'https://utfs.io/f/38eb1b4e-aa47-4fa5-8cb2-2c0fdac96f44-9o68c4.png',
    bio: "She has extensive experience in nursing, teaching, leadership and management, organizational and community development. Over the years, she has also acquired knowledge and experience in business development and entrepreneurship, which have proven invaluable in her current roles.\n\nCurrently, she serves as a Director and Health Promotion Specialist at Educare Foundation Jamaica Limited, Business Support Manager for Rowe Accounting Services, Chairperson for Friends of Community Rehabilitation Services Jamaica (St. Elizabeth), and is also a Forever Living Business Owner."
  },
  {
    name: 'Suzette Duncan-Coombs',
    role: 'Course Tutor',
    image: 'https://utfs.io/f/9cd2c158-b35e-440b-92f2-1282d9f53f22-rt2xjd.jpg',
    bio: "Her professional journey began with training in Hospitality Management. However, she discovered a passion not only for delivering an exceptional guest experience but also for teaching and training. This passion led her to become a degree-trained educator. With over 20 years of experience, her teaching career spans all levels of the education system.\n\nPresently, she teaches full-time at Sydney Pagon STEM Academy while also delivering courses part-time at Peniel Institute. She is a Director at Educare Foundation Jamaica Limited and actively engages in community work as a volunteer teacher, with a background in the 4-H Club."
  }
];

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMemberCard = ({ name, role, image, bio }: TeamMemberProps) => {
  return (
    <Card className="w-[350px] relative pt-16 shadow-lg hover:shadow-xl transition-shadow duration-300 mt-14">
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-32 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md">
          <div className="w-28 h-28 rounded-full overflow-hidden">
            <Image 
              src={image} 
              alt={name} 
              width={112} 
              height={112} 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription>{bio}</CardDescription>
      </CardContent>
    </Card>
  );
};

const MeetTheTeam = () => (
  <div className="flex flex-col items-center min-h-screen py-12">
    <h1 className="text-4xl font-bold mb-8">Meet the Team</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} {...member} />
      ))}
    </div>
  </div>
);

export default MeetTheTeam;