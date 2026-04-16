import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/icons';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'divjotbhogal@gmail.com',
    href: 'mailto:divjotbhogal@gmail.com',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (647) 861-9071',
    href: 'tel:+16478619071',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'divjot-bhogal',
    href: 'https://linkedin.com/in/divjot-bhogal',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'AltraDiv',
    href: 'https://github.com/AltraDiv',
    color: 'from-purple-500 to-pink-500',
  },
];

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-4 rounded-2xl bg-accent/10 text-accent-light mb-6">
            <Send size={32} />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="max-w-lg mx-auto text-gray-400 text-lg">
            I'd love to hear from you! Whether it's about a role, a project, or just to connect — feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group glass-dark rounded-2xl p-6 card-hover flex items-center gap-5"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-br ${link.color} text-white shrink-0 group-hover:scale-110 transition-transform`}>
                <link.icon size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{link.label}</p>
                <p className="text-white font-medium group-hover:text-accent-light transition-colors">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-sm">
            Prefer email? Send me a message at{' '}
            <a href="mailto:divjotbhogal@gmail.com" className="text-accent-light hover:underline">
              divjotbhogal@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
