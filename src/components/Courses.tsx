import Image from 'next/image';

const courses = [
  { title: 'Leadership and Management', description: 'Customized courses to develop effective leaders and managers.' },
  { title: 'Customer Service', description: 'A 16-week course to master the art of delivering world-class customer service.' },
  { title: 'Business Administration', description: 'Develop industry skills and knowledge to steer your company towards success.' },
];

const Courses = () => {
  return (
    <div className="py-16 px-20 bg-black text-white relative" id="courses">
      <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-peniel-main text-white py-2 px-4 rotate-90 origin-top-left">
        Courses
      </div>
      <div className="grid grid-cols-3 grid-rows-5 gap-y-6">
        <div className="col-span-2 row-start-1">
          <h2 className="text-4xl font-bold mb-4">Courses We Offer</h2>
          <p className="text-gray-400">Designed to meet the training needs of leaders-to-be. Here are some of the courses we offer</p>
        </div>
        <div className="col-span-2 row-start-2">
          <p className="text-gray-400"> </p>
        </div>
        {courses.map((course, index) => (
          <div key={index} className={`col-span-2 row-start-${index + 3} flex`}>
            <div className="text-peniel-secondary font-bold text-xl mr-4">{(index + 1).toString().padStart(2, '0')}</div>
            <div>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-400">{course.description}</p>
            </div>
          </div>
        ))}
        <div className="row-span-3 row-start-3 col-start-3">
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