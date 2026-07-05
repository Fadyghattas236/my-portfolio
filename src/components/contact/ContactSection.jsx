/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaWhatsapp, FaFacebook, FaLinkedin, FaEnvelope, 
  FaPhone, FaMapMarkerAlt, FaGithub, FaTwitter,
  FaPaperPlane, FaCheckCircle
} from 'react-icons/fa';
import { personalData } from '../../data/personalData';
import AnimatedSection from '../common/AnimatedSection';
// import emailjs from 'emailjs-com'; // للاستخدام لاحقاً

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // محاكاة إرسال (هتستبدلها بـ EmailJS بعدين)
    setTimeout(() => {
      setIsSent(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    { icon: <FaWhatsapp />, label: 'WhatsApp', value: personalData.phone, link: `https://wa.me/${personalData.phone}`, color: 'hover:bg-[#25D366]' },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: personalData.linkedin, link: personalData.linkedin, color: 'hover:bg-[#0A66C2]' },
    { icon: <FaGithub />, label: 'GitHub', value: personalData.github, link: personalData.github, color: 'hover:bg-[#333]' },
    { icon: <FaFacebook />, label: 'Facebook', value: personalData.facebook, link: personalData.facebook, color: 'hover:bg-[#1877F2]' },
    { icon: <FaEnvelope />, label: 'Email', value: personalData.email, link: `mailto:${personalData.email}`, color: 'hover:bg-primary' },
    { icon: <FaPhone />, label: 'Phone', value: personalData.phone, link: `tel:${personalData.phone}`, color: 'hover:bg-secondary' },
  ];

  return (
    <div className="min-h-screen py-20 px-4 pt-28 bg-gradient-to-b from-dark to-dark-secondary/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Have a project in mind or want to collaborate? Let's work together!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ===== معلومات التواصل ===== */}
          <motion.div
            ref={ref}
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            
            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 8 }}
                  className={`flex items-center gap-4 glass-effect p-4 rounded-xl ${method.color} transition-all duration-300 border border-white/5 hover:border-primary/30`}
                >
                  <span className="text-primary text-xl">{method.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400">{method.label}</p>
                    <p className="text-sm font-medium truncate max-w-[150px]">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <div className="glass-effect p-4 rounded-xl mt-4">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-primary text-xl" />
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm font-medium">Egypt 🇪🇬</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ===== الفورم ===== */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder:text-gray-500 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder:text-gray-500 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder:text-gray-500 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder:text-gray-500 transition-all duration-300 resize-none"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading || isSent}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSent 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30'
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin">⏳</span> Sending...
                  </>
                ) : isSent ? (
                  <>
                    <FaCheckCircle /> Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;