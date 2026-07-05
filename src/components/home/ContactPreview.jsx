import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { personalData } from '../../data/personalData';
import AnimatedSection from '../common/AnimatedSection';

const ContactPreview = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="section-title">
              Get In <span>Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* واتساب */}
          <AnimatedSection delay={0.1}>
            <motion.a
              href={`https://wa.me/${personalData.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-6 text-center block card-hover group"
            >
              <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                <FaWhatsapp className="text-3xl text-green-400" />
              </div>
              <h4 className="font-semibold mb-1">WhatsApp</h4>
              <p className="text-sm text-gray-400">Quick Response</p>
              <p className="text-xs text-primary mt-2">Click to Chat</p>
            </motion.a>
          </AnimatedSection>

          {/* إيميل */}
          <AnimatedSection delay={0.2}>
            <motion.a
              href={`mailto:${personalData.email}`}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-6 text-center block card-hover group"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <FaEnvelope className="text-3xl text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-sm text-gray-400">Send a Message</p>
              <p className="text-xs text-primary mt-2 truncate">{personalData.email}</p>
            </motion.a>
          </AnimatedSection>

          {/* تليفون */}
          <AnimatedSection delay={0.3}>
            <motion.a
              href={`tel:${personalData.phone}`}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-6 text-center block card-hover group"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 transition-colors">
                <FaPhone className="text-3xl text-secondary" />
              </div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-sm text-gray-400">Call Me</p>
              <p className="text-xs text-primary mt-2">{personalData.phone}</p>
            </motion.a>
          </AnimatedSection>

          {/* Location */}
          <AnimatedSection delay={0.4}>
            <motion.div
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-3xl text-primary" />
              </div>
              <h4 className="font-semibold mb-1">Location</h4>
              <p className="text-sm text-gray-400">Egypt</p>
              <p className="text-xs text-primary mt-2">Available Worldwide</p>
            </motion.div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.5}>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="btn-primary inline-block"
            >
              Send Me a Message →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactPreview;