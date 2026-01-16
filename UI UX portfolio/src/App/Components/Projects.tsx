import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

const projectsData = [
  {
    title: 'FitTrack Mobile App',
    description: 'A comprehensive fitness tracking app with personalized workout plans and nutrition guidance',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY3OTEyNDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Mobile App',
    tags: ['iOS', 'Android', 'Health', 'Fitness'],
    fullDescription: 'FitTrack is a comprehensive fitness tracking mobile application designed to help users achieve their health and fitness goals. The app combines workout tracking, nutrition logging, and personalized coaching in one seamless experience.',
    role: 'Lead UI/UX Designer',
    duration: '3 months',
    team: '4 people',
    challenges: 'Users found existing fitness apps overwhelming with too many features and complex navigation. The challenge was to create an intuitive experience that motivates users without overwhelming them.',
    solution: 'I designed a clean, progressive interface that guides users through their fitness journey step by step. The app uses smart defaults and personalization to reduce decision fatigue while maintaining depth for advanced users.',
    link: 'https://www.behance.net/sushantkonuri',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Modern data visualization dashboard for enterprise analytics with real-time insights',
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3OTY0MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Web App',
    tags: ['Dashboard', 'Data Viz', 'B2B', 'Analytics'],
    fullDescription: 'A sophisticated analytics dashboard designed for enterprise users to monitor key business metrics, track performance, and generate actionable insights from complex data sets.',
    role: 'Senior UX Designer',
    duration: '4 months',
    team: '6 people',
    challenges: 'Enterprise users needed to process large amounts of data quickly without getting lost in complexity. The existing system was cluttered and difficult to customize.',
    solution: 'I created a modular dashboard system with drag-and-drop widgets, smart filters, and contextual insights. The design prioritizes information hierarchy and allows users to customize their view based on their role and needs.',
    link: 'https://www.behance.net/sushantkonuri',
  },
  {
    title: 'ShopEase E-commerce',
    description: 'Seamless shopping experience with AI-powered recommendations and streamlined checkout',
    image: 'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3Njc5MTAxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'E-commerce',
    tags: ['Shopping', 'Mobile', 'Web', 'AI'],
    fullDescription: 'ShopEase is a modern e-commerce platform that uses AI to provide personalized shopping experiences. The platform focuses on reducing friction in the buying process while maintaining trust and transparency.',
    role: 'Product Designer',
    duration: '5 months',
    team: '8 people',
    challenges: 'High cart abandonment rates and low conversion were major pain points. Users felt overwhelmed by choices and concerned about payment security.',
    solution: 'I redesigned the entire shopping flow with a focus on trust signals, simplified navigation, and an express checkout option. AI-powered recommendations help users discover relevant products without overwhelming them.',
    link: 'https://www.behance.net/sushantkonuri',
  },
  {
    title: 'Creative Studio Portfolio',
    description: 'Stunning portfolio website for a creative agency showcasing their best work',
    image: 'https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3Njc5MjYwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Website',
    tags: ['Portfolio', 'Creative', 'Animation', 'Branding'],
    fullDescription: 'A bold and creative portfolio website designed to showcase a design agency\'s work in the most impactful way possible. The site features immersive animations and storytelling.',
    role: 'UI Designer',
    duration: '2 months',
    team: '3 people',
    challenges: 'The agency wanted a unique, memorable experience that would set them apart from competitors while ensuring the work remained the focus.',
    solution: 'I designed a visually striking layout with smooth transitions and micro-interactions that enhance the storytelling without distracting from the work itself. The design is bold yet functional.',
    link: 'https://www.behance.net/sushantkonuri',
  },
];

export function Projects() {
  const ref = useRef(null);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-black border-t border-blue-500/10" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8" />
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A selection of projects showcasing my design process, problem-solving approach,
              and attention to detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                onViewDetails={() => handleViewDetails(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </>
  );
}