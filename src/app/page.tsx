import Hero from '../components/Hero';
import WhyStudy from '../components/WhyStudy';
import Courses from '../components/Courses';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import JoinBanner from '../components/JoinBanner';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Banner />
      <WhyStudy />
      <Courses />
      <Testimonials />
      <JoinBanner />
      <FAQ />
    </main>
  );
}