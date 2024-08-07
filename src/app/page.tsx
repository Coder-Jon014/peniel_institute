import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyStudy from '../components/WhyStudy';
import Courses from '../components/Courses';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Banner />
      <WhyStudy />
      <Courses />
      {/* Add other sections here when ready */}
    </main>
  );
}