import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ProjectsPreview from '../components/home/ProjectsPreview';
import ContactPreview from '../components/home/ContactPreview';
import SEO from '../components/common/SEO';

const Home = () => {
  return (
    <>
      <SEO 
        title="Fady Ashraf | Software Developer - React & WordPress"
        description="I am a passionate Software Developer specializing in building modern, responsive web applications with React, WordPress, and Dotnet."
      />
      <HeroSection />
      <AboutPreview />
      <ProjectsPreview />
      <ContactPreview />
    </>
  );
};

export default Home;