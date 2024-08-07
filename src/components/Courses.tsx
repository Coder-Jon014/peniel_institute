import Image from 'next/image';

const courses = [
  { title: 'Leadership and Management', description: 'The Leadership and Management Course is provided for adult learners as a customized course designed to meet the training needs of the individual learner regardless of socio-economic status who wants to become an effective leader or manager of his or her business; perform optimally in an organization.' },
  { title: 'Customer Service', description: 'The Customer Service course is a 16-week course for business/organization leaders, managers, entrepreneurs and workers to begin an in-depth journey into what is involved in delivering quality customer service at world-class levels to both internal and external customers.' },
  { title: 'Business Administration', description: 'The Business Administration course is to guide adult learners through the process of developing their industry skills and knowledge in order for them to help in steering their companies towards its goals and compete with other companies.' },
];

const Courses = () => {
  return (
    <div className="py-16 px-20 bg-black text-white " id="courses">
      {/* <div className="absolute top-1/2 -rotate-90 right-0 transform -translate-y-1/2 bg-peniel-main text-white py-2 px-6">
        Courses
      </div> */}
      <div className="grid grid-cols-3 grid-rows-4 mt-8">
        <div className="col-span-2 row-start-1">
          <h2 className="text-4xl font-bold mb-4">Courses We Offer</h2>
          <p className="text-gray-400">Designed to meet the training needs of leaders-to-be. Here are some of the courses we offer</p>
        </div>

        {courses.map((course, index) => (
          <div key={index} className={`col-span-2 row-start-${index + 2} flex mr-20`}>
            <div className="text-[#DC241C] font-bold text-xl mr-4">{(index + 1).toString().padStart(2, '0')}</div>
            <div>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-400 text-sm">{course.description}</p>
            </div>
          </div>
        ))}
        <div className="row-span-3 row-start-2 col-start-3">
          <Image 
            src="https://utfs.io/f/8110362e-09f2-4df4-a857-81057b25ec4e-3h50mg.jpg"
            alt="Courses Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;