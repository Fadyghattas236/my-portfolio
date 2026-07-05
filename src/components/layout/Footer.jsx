import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { personalData } from '../../data/personalData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-secondary/50 backdrop-blur-lg border-t border-white/10 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">
              <span className="text-primary">Fady</span> Ashraf
            </h3>
            <p className="text-gray-400 text-sm">Software Developer</p>
          </div>

          <div className="flex gap-4">
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalData.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a
              href={`https://wa.me/${personalData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-xl"
            >
              <FaWhatsapp />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © {currentYear} Fady Ashraf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;