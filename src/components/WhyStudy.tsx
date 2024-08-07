import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const reasons = [
  { icon: '👨‍🏫', title: 'Dynamic Tutors', description: 'Learn from experienced and passionate instructors.' },
  { icon: '👥', title: 'Team-Oriented Learning', description: 'Collaborate with peers for a holistic learning experience.' },
  { icon: '💰', title: 'Competitive Tuition Fees', description: 'Affordable education for all.' },
  { icon: '🛠️', title: 'Practical Approach', description: 'Hands-on training to prepare you for real-world challenges.' },
//   { icon: '🌱', title: 'Personal Development Support', description: 'Guidance and support to help you achieve personal growth.' },
];

const WhyStudy = () => {
  return (
    <div className="py-16 px-20 bg-white relative overflow-hidden">
      <div className="absolute -left-14 top-1/2 transform -translate-y-1/2 bg-peniel-secondary text-white py-2 px-4 rotate-90 origin-top-left z-1000">
        Why Us
      </div>
      <div className=" max-w-7xl  grid grid-cols-4 grid-rows-2 gap-y-4 gap-x-2">
        <div className="Heading-and-Subheading col-span-2 row-span-2 pr-20 my-auto">
          <h2 className="text-4xl font-bold mb-4">Why Study at Peniel</h2>
          <p className="text-sm text-black">At Peniel Institute, we are committed to providing quality education that empowers our students to become leaders in their fields. Here are some of the reasons why you should study at Peniel:</p>
        </div>
        {reasons.map((reason, index) => (
          <Card key={index} className={`Card-${index + 1}`}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-2">{reason.icon}</span>
                {reason.title}
              </CardTitle>
              <CardDescription>{reason.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyStudy;