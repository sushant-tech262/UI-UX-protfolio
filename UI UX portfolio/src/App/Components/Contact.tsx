import { motion } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, Twitter, Github, Send, Dribbble, Phone, Download } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);

  const socialLinks = [
    { icon: <Linkedin size={24} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sushantkonuri/' },
    { icon: <Dribbble size={24} />, label: 'Dribbble', href: 'https://dribbble.com/sushant-konuri' },
    { icon: <Github size={24} />, label: 'GitHub', href: 'https://github.com/sushant-tech262' },
    { icon: <Mail size={24} />, label: 'Email', href: 'mailto:sushantkonuri0@gmail.com' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thanks for reaching out! This is a demo, so the form won\'t actually submit.');
  };

  return (
    <section id="contact" className="py-20 bg-black border-t border-blue-500/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create
            something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-blue-500/30 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200 text-white placeholder:text-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-blue-500/30 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200 text-white placeholder:text-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-blue-500/30 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200 text-white placeholder:text-gray-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-blue-500/30 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200 resize-none text-white placeholder:text-gray-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-200 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h3>
              <p className="text-gray-400 mb-6">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-800 border border-blue-500/30 rounded-lg">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:sushantkonuri0@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium">
                      sushantkonuri0@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-800 border border-blue-500/30 rounded-lg">
                    <Phone className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone No</p>
                    <a href="tel:+919834409212" className="text-blue-400 hover:text-blue-300 font-medium">
                      +91 9834409212
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>
              <div className="flex gap-4 mb-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="p-3 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 rounded-lg text-blue-400 hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-blue-400 transition-all duration-200"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>

              {/* Download Resume Button */}
              <motion.a
                href="https://drive.google.com/file/d/1N1FVxLe5mZiJcpej-0GB42zj8omwEFHR/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-blue-500/20"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-sm text-gray-500">
            © 2025 Sushant Konuri. All rights reserved.
          </div>
          <div className="text-sm text-gray-500">
            Designed & built with care
          </div>
        </div>
      </motion.div>
    </section>
  );
}