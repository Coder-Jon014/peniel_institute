import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyStudy from '../components/WhyStudy';
import Courses from '../components/Courses';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import JoinBanner from '../components/JoinBanner';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Banner />
      <WhyStudy />
      <Courses />
      <Testimonials />
      <JoinBanner />
    </main>
  );
}