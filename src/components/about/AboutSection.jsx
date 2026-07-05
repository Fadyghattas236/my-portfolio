import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaWordpress, FaServer, FaCode, FaRocket,
  FaHtml5, FaCss3, FaBootstrap, FaNode, FaPython, FaDatabase,
  FaPhp, FaDocker, FaGitAlt, FaUserGraduate, FaBriefcase
} from 'react-icons/fa';
import { personalData } from '../../data/personalData';
import AnimatedSection from '../common/AnimatedSection';

const AboutSection = () => {
  // ===== أيقونات =====
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
    FaUserGraduate: <FaUserGraduate />,
    FaBriefcase: <FaBriefcase />,
    default: <FaServer className="text-primary" />,
  };

  // ===== تصنيف المهارات =====
  const skillCategories = {
    'Frontend': ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
    'Backend': ['Node.js', 'Express.js', 'Dotnet Core', 'Python'],
    'Database': ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
    'CMS & DevOps': ['WordPress', 'PHP', 'DevOps', 'Docker', 'Git/GitHub'],
  };

  // ===== ألوان المهارات =====
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

  const getIcon = (iconName) => iconMap[iconName] || iconMap.default;

  return (
    <div className="min-h-screen py-20 px-4 pt-28 bg-gradient-to-b from-dark to-dark-secondary/50">
      <div className="max-w-6xl mx-auto">
        {/* ===== العنوان ===== */}
        <AnimatedSection>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
        </AnimatedSection>

        {/* ===== السيرة الذاتية ===== */}
        <AnimatedSection delay={0.2}>
          <div className="glass-effect rounded-2xl p-8 mb-12 relative overflow-hidden">
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <FaUserGraduate className="text-2xl text-primary" />
                <h3 className="text-xl font-bold">Who I Am</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {personalData.bio}
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-primary" />
                  <span className="text-gray-400">3+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaRocket className="text-secondary" />
                  <span className="text-gray-400">20+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCode className="text-primary" />
                  <span className="text-gray-400">Full Stack Developer</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ===== المهارات مقسمة لفئات ===== */}
        <AnimatedSection delay={0.4}>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            My <span className="text-primary">Skills</span>
          </h3>

          <div className="space-y-8">
            {Object.entries(skillCategories).map(([category, skills], catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                className="glass-effect rounded-2xl p-6"
              >
                <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <span className="text-2xl">
                    {category === 'Frontend' && '🎨'}
                    {category === 'Backend' && '⚙️'}
                    {category === 'Database' && '🗄️'}
                    {category === 'CMS & DevOps' && '🚀'}
                  </span>
                  {category}
                  <span className="text-sm text-gray-400 font-normal ml-2">
                    ({skills.length} skills)
                  </span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {skills.map((skillName) => {
                    const skill = personalData.skills.find(s => s.name === skillName);
                    if (!skill) return null;
                    
                    const colorClass = skillColors[skill.name] || 'border-primary/30 text-primary';
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 }}
                        whileHover={{ scale: 1.03 }}
                        className={`flex items-center gap-3 glass-effect px-4 py-2.5 rounded-xl border ${colorClass} transition-all duration-300`}
                      >
                        <span className="text-lg">{getIcon(skill.icon)}</span>
                        <div className="flex-1">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-1.5 mt-1">
                            <motion.div
                              className={`h-1.5 rounded-full ${skill.level >= 80 ? 'bg-primary' : skill.level >= 60 ? 'bg-secondary' : 'bg-gray-500'}`}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* ===== الأدوات واللغات ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <AnimatedSection delay={0.6}>
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-center">
                🛠️ Tools I Use
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {personalData.tools.map((tool, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-primary/20 px-4 py-2 rounded-full text-primary text-sm border border-primary/20"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4 text-center">
                💻 Programming Languages
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {personalData.languages.map((lang, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-secondary/20 px-4 py-2 rounded-full text-secondary text-sm border border-secondary/20"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* ===== خبرة إضافية ===== */}
        <AnimatedSection delay={0.9}>
          <div className="mt-12 glass-effect rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              💡 What I Can Do For You
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🌐</div>
                <h4 className="font-semibold mb-1">Web Development</h4>
                <p className="text-sm text-gray-400">Modern, responsive, and fast websites</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-semibold mb-1">SPA Applications</h4>
                <p className="text-sm text-gray-400">Single Page Apps with React & Next.js</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔧</div>
                <h4 className="font-semibold mb-1">CMS & Backend</h4>
                <p className="text-sm text-gray-400">WordPress, Node.js, and APIs</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutSection;