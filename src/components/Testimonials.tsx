import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const testimonials = [
  {
    title: "Transformative Leadership Training",
    message: "I have gained a whole lot from this Leadership and Management course which has helped me to be a better Manager in my field of work. I am so grateful for this training and experience."
  },
  {
    title: "Exceptional Tutor Support",
    message: "What I liked most about these courses was the help I received from the tutors. These courses have prepared me to become even better at my managerial skills and I intend to train others with this knowledge I have received."
  },
  {
    title: "Skill Application and Motivation",
    message: "I liked the experience. I learnt a lot and was able to apply these skills to my current job thanks to the help of the tutors. This also served as a great motivation for me personally."
  },
  {
    title: "Effective Job Preparation",
    message: "The entire course has prepared me to do my job effectively and also improve my knowledge and skills. I have and will continue to use the knowledge gained to improve my performance and productivity."
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-16 px-4 md:px-20 bg-white">
      <h2 className="text-3xl md:text-3xl font-bold mb-8 text-center">What Our Students Say About Our School</h2>
      
      <div className="overflow-x-auto flex space-x-4 pb-4">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="min-w-[300px] max-w-[350px]">
            <CardHeader>
              <CardTitle className="text-xl">&quot;{testimonial.title}&quot;</CardTitle>
              <CardDescription>{testimonial.message}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      
      <p className="text-center mt-8 text-sm text-gray-600">
        From members of Peniel Institute&apos;s 2021 graduating class.
      </p>
    </div>
  );
};

export default Testimonials;