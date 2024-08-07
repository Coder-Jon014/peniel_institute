import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const reasons = [
  { icon: '👨‍🏫', title: 'Dynamic Tutors', description: 'Learn from experienced and passionate instructors.' },
  { icon: '👥', title: 'Team-Oriented Learning', description: 'Collaborate with peers for a holistic learning experience.' },
  { icon: '💰', title: 'Competitive Tuition Fees', description: 'Affordable education for all.' },
  { icon: '🛠️', title: 'Practical Approach', description: 'Hands-on training to prepare you for real-world challenges.' },
  { icon: '🌱', title: 'Personal Development Support', description: 'Guidance and support to help you achieve personal growth.' },
];

const WhyStudy = () => {
  return (
    <div className="py-16 px-20 bg-white relative">
      <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-peniel-secondary text-white py-2 px-4 rotate-90 origin-top-left">
        Why Us
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-4 grid-rows-2 gap-5">
        <div className="col-span-2 row-span-1">
          <h2 className="text-3xl font-bold mb-4">Why Study at Peniel</h2>
          <span className="text-xl text-peniel-secondary">Peniel Institute</span>
        </div>
        {reasons.slice(0, 2).map((reason, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-2">{reason.icon}</span>
                {reason.title}
              </CardTitle>
              <CardDescription>{reason.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
        <div className="col-start-2 col-span-3 grid grid-cols-3 gap-x-10">
          {reasons.slice(2).map((reason, index) => (
            <Card key={index + 2}>
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
    </div>
  );
};

export default WhyStudy;