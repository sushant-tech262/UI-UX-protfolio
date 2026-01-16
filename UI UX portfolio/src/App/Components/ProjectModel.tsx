import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, Users } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    category: string;
    tags: string[];
    fullDescription: string;
    role: string;
    duration: string;
    team: string;
    challenges: string;
    solution: string;
    link: string;
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-gray-900 border border-blue-500/30 rounded-2xl z-50 overflow-hidden shadow-2xl shadow-blue-500/20"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-800 border border-blue-500/30 rounded-full shadow-lg hover:bg-gray-700 hover:border-blue-500/50 transition-all duration-200 text-blue-400"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="h-full overflow-y-auto">
              {/* Header Image */}
              <div className="relative h-64 md:h-96">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="px-4 py-2 bg-black/80 backdrop-blur-sm border border-blue-400/50 rounded-full text-sm font-medium text-blue-400 mb-4 inline-block shadow-lg shadow-blue-500/30">
                    {project.category}
                  </span>
                  <h2 className="text-4xl font-bold text-white">{project.title}</h2>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                      <Users size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <p className="font-medium text-gray-300">{project.role}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                      <Calendar size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-medium text-gray-300">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                      <Users size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Team Size</p>
                      <p className="font-medium text-gray-300">{project.team}</p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-white">Overview</h3>
                    <p className="text-gray-400 leading-relaxed">{project.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-white">The Challenge</h3>
                    <p className="text-gray-400 leading-relaxed">{project.challenges}</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3 text-white">The Solution</h3>
                    <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                  </div>

                  {/* View Project Button */}
                  <div className="pt-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
                    >
                      <ExternalLink size={20} />
                      View Project
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}