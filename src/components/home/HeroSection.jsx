import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaCode, FaReact, FaWordpress } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { personalData } from '../../data/personalData';
import heroImg from '../../assets/logo.png';

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4 pt-28 md:pt-32 lg:pt-36 relative overflow-hidden"
    >
      {/* ===== خلفية مع تأثيرات ===== */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* ===== الصورة مع إطار أنيق ===== */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
          className="mb-8 relative inline-block"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-2xl opacity-50 animate-pulse-slow" />
          
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-primary shadow-2xl shadow-primary/30 overflow-hidden">
            <img
              src={heroImg}
              alt={personalData.name}
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute -top-2 -right-2 bg-dark-secondary border-2 border-primary rounded-full p-2 shadow-lg shadow-primary/20"
          >
            <FaReact className="text-primary text-xl md:text-2xl animate-spin-slow" />
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.7, type: 'spring' }}
            className="absolute -bottom-2 -left-2 bg-dark-secondary border-2 border-secondary rounded-full p-2 shadow-lg shadow-secondary/20"
          >
            <FaWordpress className="text-secondary text-xl md:text-2xl" />
          </motion.div>
        </motion.div>

        {/* ===== الاسم ===== */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3"
        >
          <span className="gradient-text">{personalData.name}</span>
        </motion.h1>

        {/* ===== العنوان المتحرك ===== */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-primary/80 mb-4 h-14 md:h-16"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'React Specialist',
              2000,
              'WordPress Expert',
              2000,
              'DevOps Enthusiast',
              2000,
              'Problem Solver',
              2000,
            ]}
            repeat={Infinity}
            wrapper="span"
            speed={50}
            deletionSpeed={50}
            className="font-medium"
          />
        </motion.div>

        {/* ===== خط فاصل أنيق ===== */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '80px', opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-5"
        />

        {/* ===== النص التعريفي ===== */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          {personalData.bio}
        </motion.p>

        {/* ===== إحصائيات سريعة ===== */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          {personalData.heroStats.map((stat, index) => (
            <div key={index} className="text-center mx-4 md:mx-6">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ===== أزرار التواصل ===== */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center mb-8"
        >
          <Link
            to="/projects"
            className="btn-primary mx-2 my-1 inline-flex items-center gap-2"
          >
            <FaCode /> View My Work
          </Link>
          <a
            href={`https://wa.me/${personalData.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mx-2 my-1 inline-flex items-center gap-2"
          >
            <FaWhatsapp /> Contact Me
          </a>
        </motion.div>

        {/* ===== أيقونات السوشيال ميديا ===== */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex justify-center flex-wrap"
        >
          <SocialLink href={personalData.linkedin} icon={<FaLinkedin />} label="LinkedIn" color="hover:bg-[#0A66C2]" />
          <SocialLink href={personalData.github} icon={<FaGithub />} label="GitHub" color="hover:bg-[#333]" />
          <SocialLink href={personalData.facebook} icon={<FaFacebook />} label="Facebook" color="hover:bg-[#1877F2]" />
          <SocialLink href={`https://wa.me/${personalData.phone}`} icon={<FaWhatsapp />} label="WhatsApp" color="hover:bg-[#25D366]" />
        </motion.div>

        {/* ===== سهم التمرير لأسفل ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block text-gray-400 hover:text-primary transition-colors cursor-pointer"
          >
            <FiChevronDown className="text-3xl" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

// ===== مكون SocialLink المحسن =====
const SocialLink = ({ href, icon, label, color = 'hover:bg-primary' }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.15, y: -3 }}
    whileTap={{ scale: 0.9 }}
    className={`bg-white/5 backdrop-blur-sm p-3 md:p-3.5 rounded-full text-gray-300 hover:text-white ${color} transition-all duration-300 border border-white/10 hover:border-primary/50 shadow-lg hover:shadow-primary/20 mx-1 md:mx-2 my-1`}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default HeroSection;