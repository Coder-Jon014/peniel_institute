"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { HeroHighlight, Highlight } from './ui/hero-highlight';

interface SlideInfo {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
}

const slides: SlideInfo[] = [
  {
    title: "About Peniel Institute",
    content: "Peniel Institute was established in 2017 as an institute for continuing education and professional development. Our Aim, to develop and empower learners to become effective and transformational leaders enabling them to lead and manage their own business or enterprise, or lead and manage within a business organization. ",
    imageSrc: "https://utfs.io/f/a592ac10-cf3b-4431-a5a5-5d164a61d361-12kfn7.jpg",
    imageAlt: "Students in a classroom"
  },
  {
    title: "Our Vision",
    content: "Our vision is to build the capacity within our local community by developing the confidence, knowledge and skills of our people that will enable them to define their own realities and achieve their goals.",
    imageSrc: "https://utfs.io/f/f50261ce-48fe-4660-aa61-b3c07799f2a5-e3stow.jpg",
    imageAlt: "Students collaborating"
  },
  {
    title: "Our Mission",
    content: "Our mission is to develop quality industry and professionally recognized training programmes, tutoring, and coaching that will build self-confidence and motivate our adult learners to acquire the knowledge and skills needed to aspire to become great leaders of their own or that of others' businesses or organizations, thus contributing to local and national development.",
    imageSrc: "https://utfs.io/f/45a91c1e-a172-4e6d-bb15-3fcdb5035230-p9pnot.jpg",
    imageAlt: "Graduation ceremony"
  }
];

const AboutSections: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      <HeroHighlight>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-bold text-center mb-6 leading-tight md:leading-relaxed">
            We Bring A Wealth of <Highlight>Skills</Highlight> and{" "}
            <Highlight>Experience</Highlight> to Help You Become A{" "}
            <Highlight>Leader</Highlight>
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300">
            At Peniel Institute, we are dedicated to nurturing the next generation of leaders through comprehensive education and practical training.
          </p>
        </div>
      </HeroHighlight>

      <section className="relative h-[60vh] overflow-hidden bg-black">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              className="object-cover object-center object-[15%_20%] w-[100vw] h-full"
              src={slide.imageSrc}
              alt={slide.imageAlt}
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl px-4">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl mb-4">
                  {slide.title}
                </h2>
                <p className="text-base text-gray-300">
                  {slide.content}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutSections;