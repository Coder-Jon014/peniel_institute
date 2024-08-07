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
    <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-20 bg-white overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-full lg:col-span-2 lg:row-span-2 pr-4 lg:pr-20 mb-8 lg:mx-auto flex flex-col justify-center">
          <h2 className="text-responsive-3xl font-bold mb-4">Why Study at Peniel</h2>
          <p className="text-sm text-black">At Peniel Institute, we are committed to providing quality education that empowers our students to become leaders in their fields. Here are some of the reasons why you should study at Peniel:</p>
        </div>
        {reasons.map((reason, index) => (
          <Card key={index} className={`Card-${index + 1} w-full`}>
            <CardHeader>
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <span className="text-xl sm:text-2xl mr-2">{reason.icon}</span>
                {reason.title}
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-black">{reason.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhyStudy;