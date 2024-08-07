import Image from 'next/image';
import { BackgroundBeams } from './backgroundBeams';

const courses = [
  { title: 'Leadership and Management', description: 'The Leadership and Management Course is provided for adult learners as a customized course designed to meet the training needs of the individual learner regardless of socio-economic status who wants to become an effective leader or manager of his or her business; perform optimally in an organization.' },
  { title: 'Customer Service', description: 'The Customer Service course is a 16-week course for business/organization leaders, managers, entrepreneurs and workers to begin an in-depth journey into what is involved in delivering quality customer service at world-class levels to both internal and external customers.' },
  { title: 'Business Administration', description: 'The Business Administration course is to guide adult learners through the process of developing their industry skills and knowledge in order for them to help in steering their companies towards its goals and compete with other companies.' },
];

const Courses = () => {
  return (
    <div className="py-8 md:py-16 px-4 md:px-20 bg-black text-white relative overflow-hidden" id="courses">
      <BackgroundBeams />
      <div className="relative z-10 ">
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-3xl font-bold mb-4">Courses We Offer</h2>
            <p className="text-gray-400">Designed to meet the training needs of leaders-to-be. Here are some of the courses we offer</p>
          </div>

          <div className="lg:col-span-2 space-y-8">
            {courses.map((course, index) => (
              <div key={index} className="flex">
                <div className="text-[#DC241C] font-bold text-xl mr-4">{(index + 1).toString().padStart(2, '0')}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-sm">{course.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 lg:mt-0">
            <Image 
              src="https://utfs.io/f/8110362e-09f2-4df4-a857-81057b25ec4e-3h50mg.jpg"
              alt="Courses Image"
              width={500}
              height={500}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;