/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaReact, FaJs, FaWordpress, FaServer, FaCode, FaRocket, 
  FaHtml5, FaCss3, FaBootstrap, FaNode, FaPython, FaDatabase,
  FaPhp, FaDocker, FaGitAlt
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiExpress, SiMongodb, 
  SiMysql, SiPostgresql, SiTailwindcss, SiDotnet, SiFirebase
} from 'react-icons/si';
import { personalData } from '../../data/personalData';
import AnimatedSection from '../common/AnimatedSection';

const AboutPreview = () => {
  // ===== Map الأيقونات =====
  const iconMap = {
    FaReact: <FaReact />,
    FaJs: <FaJs />,
    FaWordpress: <FaWordpress />,
    FaServer: <FaServer />,
    FaCode: <FaCode />,
    FaRocket: <FaRocket />,
    FaHtml5: <FaHtml5 />,
    FaCss3: <FaCss3 />,
    FaBootstrap: <FaBootstrap />,
    FaNode: <FaNode />,
    FaPython: <FaPython />,
    FaDatabase: <FaDatabase />,
    FaPhp: <FaPhp />,
    FaDocker: <FaDocker />,
    FaGitAlt: <FaGitAlt />,
    SiNextdotjs: <SiNextdotjs />,
    SiTypescript: <SiTypescript />,
    SiExpress: <SiExpress />,
    SiMongodb: <SiMongodb />,
    SiMysql: <SiMysql />,
    SiPostgresql: <SiPostgresql />,
    SiTailwindcss: <SiTailwindcss />,
    SiDotnet: <SiDotnet />,
    SiFirebase: <SiFirebase />,
    // Material UI - استخدم أيقونة بديلة
    SiMaterialUi: <FaReact className="text-sky-400" />,
  };

  // أيقونات عائمة للخلفية
  const floatingIcons = [
    { icon: <FaReact />, color: 'text-primary', delay: 0, duration: 6, x: '10%', y: '20%' },
    { icon: <FaNode />, color: 'text-green-400', delay: 1, duration: 7, x: '80%', y: '30%' },
    { icon: <FaWordpress />, color: 'text-blue-400', delay: 2, duration: 5, x: '15%', y: '70%' },
    { icon: <FaDatabase />, color: 'text-green-400', delay: 0.5, duration: 8, x: '85%', y: '60%' },
    { icon: <FaCode />, color: 'text-purple-400', delay: 1.5, duration: 6.5, x: '50%', y: '10%' },
    { icon: <FaRocket />, color: 'text-orange-400', delay: 3, duration: 7.5, x: '5%', y: '40%' },
    { icon: <SiTypescript />, color: 'text-blue-500', delay: 0.8, duration: 9, x: '70%', y: '80%' },
    { icon: <FaDocker />, color: 'text-sky-400', delay: 2.5, duration: 6, x: '30%', y: '5%' },
    { icon: <SiMongodb />, color: 'text-green-500', delay: 1.8, duration: 7.5, x: '90%', y: '15%' },
    { icon: <FaPython />, color: 'text-yellow-400', delay: 3.5, duration: 8.5, x: '5%', y: '85%' },
  ];

  // تأثيرات متحركة للبطاقات
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        delay: i * 0.1 + 0.4,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  // ألوان المهارات
  const skillColors = {
    'React': 'border-primary text-primary',
    'Next.js': 'border-white/30 text-white',
    'JavaScript': 'border-yellow-400 text-yellow-400',
    'TypeScript': 'border-blue-500 text-blue-500',
    'HTML5': 'border-orange-500 text-orange-500',
    'CSS3': 'border-blue-400 text-blue-400',
    'Tailwind CSS': 'border-cyan-400 text-cyan-400',
    'Bootstrap': 'border-purple-400 text-purple-400',
    'Material UI': 'border-sky-400 text-sky-400',
    'Node.js': 'border-green-500 text-green-500',
    'Express.js': 'border-gray-400 text-gray-400',
    'Dotnet Core': 'border-purple-500 text-purple-500',
    'Python': 'border-yellow-400 text-yellow-400',
    'MongoDB': 'border-green-500 text-green-500',
    'MySQL': 'border-blue-500 text-blue-500',
    'PostgreSQL': 'border-blue-400 text-blue-400',
    'Firebase': 'border-orange-400 text-orange-400',
    'WordPress': 'border-blue-400 text-blue-400',
    'PHP': 'border-purple-400 text-purple-400',
    'DevOps': 'border-primary text-primary',
    'Docker': 'border-sky-400 text-sky-400',
    'Git/GitHub': 'border-orange-400 text-orange-400',
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-dark-secondary/30 relative overflow-hidden">
      {/* ===== أيقونات عائمة في الخلفية ===== */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute text-3xl md:text-4xl lg:text-5xl ${item.color} opacity-10`}
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [0, 30, -20, 15, 0],
              y: [0, -40, 20, -30, 0],
              rotate: [0, 10, -10, 5, 0],
              scale: [1, 1.2, 0.8, 1.1, 1],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: item.x,
              top: item.y,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ===== العنوان ===== */}
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="section-title"
            >
              About <span>Me</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Get to know me better and discover what I can do for you
            </motion.p>
          </motion.div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ===== النص والمهارات ===== */}
          <AnimatedSection delay={0.2} direction="left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="space-y-6"
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-2xl md:text-3xl font-bold"
              >
                <span className="gradient-text">Who am I?</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gray-300 leading-relaxed"
              >
                {personalData.bio}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-400 text-sm"
              >
                I'm passionate about creating clean, efficient, and user-friendly 
                digital experiences that solve real problems.
              </motion.p>
              
              {/* ===== المهارات ===== */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="pt-4"
              >
                <h4 className="text-sm font-semibold text-primary mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {personalData.skills.map((skill, index) => {
                    const colorClass = skillColors[skill.name] || 'border-primary/30 text-primary';
                    return (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.6 + index * 0.03,
                          duration: 0.3,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        whileHover={{
                          scale: 1.1,
                          y: -2,
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border ${colorClass} bg-white/5 backdrop-blur-sm transition-all duration-300 cursor-default`}
                      >
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>

              {/* ===== زرار Learn More ===== */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="btn-primary inline-block"
                >
                  Learn More About Me →
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* ===== الإحصائيات ===== */}
          <AnimatedSection delay={0.4} direction="right">
            <div className="grid grid-cols-2 gap-4">
              {personalData.heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                    boxShadow: '0 20px 60px rgba(108, 99, 255, 0.15)',
                  }}
                  className="glass-effect rounded-2xl p-5 text-center card-hover relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: index % 2 === 0 ? [0, 5, -5, 0] : [0, -5, 5, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    }}
                    className={`text-3xl md:text-4xl font-bold ${
                      index % 2 === 0 ? 'text-primary' : 'text-secondary'
                    } mb-1 relative z-10`}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs text-gray-400 relative z-10">{stat.label}</div>
                  <motion.div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${
                      index % 2 === 0 ? 'from-primary to-secondary' : 'from-secondary to-primary'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* ===== باقة المهارات ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 glass-effect rounded-2xl p-5"
            >
              <h4 className="text-sm font-semibold text-primary mb-3 text-center">My Expertise</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center">
                  <div className="text-xs text-gray-400">Frontend</div>
                  <div className="text-xs text-primary">React, Next.js, TS</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400">Backend</div>
                  <div className="text-xs text-secondary">Node.js, Express, Dotnet</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400">Database</div>
                  <div className="text-xs text-green-400">MongoDB, MySQL, Firebase</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400">CMS</div>
                  <div className="text-xs text-blue-400">WordPress, PHP</div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;