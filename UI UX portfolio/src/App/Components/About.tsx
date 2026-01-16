import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Palette, Code, Users, Zap, Figma, Smartphone } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    {
      icon: <Palette size={24} />,
      title: 'Programming Languages',
      description: 'C, C++, HTML, CSS, JavaScript',
    },
    {
      icon: <Users size={24} />,
      title: 'Soft Skills',
      description: 'Communication, Team Collaboration, Adaptability',
    },
    {
      icon: <Code size={24} />,
      title: 'Language',
      description: 'Fluent in English, Hindi, Marathi, Kannada',
    },
    {
      icon: <Zap size={24} />,
      title: 'Internships',
      description: 'Cognify technologies (UI/UX Designer), Elevate Labs (UI/UX Designer), Skilldzire (Web Development), Zudio Technologies (Web Development)',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Other Skills',
      description: 'Prototyping, Wireframing, Low-fidelity & high-fidelity prototypes, user flows, Surveys, usability testing, persona creation, Visual Design, Responsive Design, Design Systems, typography',
    },
    {
      icon: <Figma size={24} />,
      title: 'Interests',
      description: 'UI trends, Typography, Mobile App Design, Accessibility in Design',
    },
  ];

  const tools = [
    'Figma',
    'Adobe XD',
    'Photoshop',
    'Principle',
    'Framer',
    'HTML',
    'CSS',
    'Javascript',
    '3D Models',
  ];

  return (
    <section id="about" className="py-20 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8" />
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          I am a UI/UX Designer with a background in Computer Science Engineering, blending technical insight with design thinking. I am dedicated to crafting clean, intuitive, and user-centered interfaces that bridge the gap between complex functionality and seamless digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/50">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                className="px-6 py-3 bg-gray-900 border-2 border-blue-500/30 rounded-full text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}