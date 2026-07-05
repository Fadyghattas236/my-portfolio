/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';  // شيلنا FaGithub
import { projectsData } from '../../data/projectsData';
import AnimatedSection from '../common/AnimatedSection';

const ProjectsPreview = () => {
  // خذ أول 3 مشاريع فقط
  const previewProjects = projectsData.slice(0, 3);

  return (
    <section className="py-20 px-4 bg-dark-secondary/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="section-title">
              My <span>Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and experience
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div className="glass-effect rounded-2xl overflow-hidden card-hover group">
                <div className="relative h-48 overflow-hidden bg-primary/10">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                      🚀
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-primary/20 px-3 py-1 rounded-full text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-400">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-white px-3 py-2 rounded-lg text-sm hover:bg-primary/80 transition-colors text-center"
                    >
                      <FaExternalLinkAlt className="inline mr-1" /> View
                    </a>
                    {/* GitHub Button - شيلناها */}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="btn-primary inline-block"
            >
              View All Projects →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsPreview;