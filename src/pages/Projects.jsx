import SEO from '../components/common/SEO';
import ProjectsSection from '../components/projects/ProjectsSection';

const Projects = () => {
  return (
    <>
      <SEO 
        title="Projects | Fady Ashraf - Software Developer Portfolio"
        description="Explore my portfolio of projects built with React, WordPress, Node.js, and more. See live demos and source code."
      />
      <ProjectsSection />
    </>
  );
};

export default Projects;