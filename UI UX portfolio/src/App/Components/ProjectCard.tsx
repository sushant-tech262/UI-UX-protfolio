import { motion } from 'motion/react';
import { ExternalLink, Eye } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  index: number;
  onViewDetails: () => void;
}

export function ProjectCard({
  title,
  description,
  image,
  category,
  tags,
  index,
  onViewDetails,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent flex items-end justify-center pb-8"
        >
          <button
            onClick={onViewDetails}
            className="px-6 py-3 bg-white text-blue-600 rounded-full font-medium flex items-center gap-2 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200"
          >
            <Eye size={18} />
            View Details
          </button>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-4 py-2 bg-black/80 backdrop-blur-sm border border-blue-400/50 rounded-full text-sm font-medium text-blue-400 shadow-lg shadow-blue-500/30">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Animated corner accent */}
      <motion.div
        initial={{ width: 0, height: 0 }}
        animate={{
          width: isHovered ? '100px' : '0px',
          height: isHovered ? '100px' : '0px',
        }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 right-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20"
        style={{ borderBottomLeftRadius: '100%' }}
      />
    </motion.div>
  );
}