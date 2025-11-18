import { Facebook, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

interface TeamCardProps {
  name: string
  title: string
  image: string
  socials: {
    facebook: string
    linkedin: string
  }
}

export function TeamCard({ name, title, image, socials }: TeamCardProps) {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Main Card Container */}
      <div className="relative h-80 overflow-hidden bg-gray-900 rounded-2xl">
        {/* Image */}
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay - Blue to Orange */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#008dfe]/20 via-transparent to-[#faa41a]/60"></div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#008dfe]/30 to-[#faa41a]/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Background for text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Name and Title */}
          <div className="relative mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[#008dfe] to-[#faa41a] rounded-full"></div>
              <p className="text-sm font-medium text-white/90">{title}</p>
            </div>
          </div>

          {/* Social Icons - Slide up on hover */}
          <div className="relative flex gap-3 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <motion.a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-[#008dfe] transition-all duration-300 border border-white/20 hover:border-[#008dfe]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`${name} Facebook`}
            >
              <Facebook size={18} className="text-white" />
            </motion.a>
            <motion.a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-[#008dfe] transition-all duration-300 border border-white/20 hover:border-[#008dfe]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`${name} LinkedIn`}
            >
              <Linkedin size={18} className="text-white" />
            </motion.a>
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#008dfe] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#faa41a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#faa41a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#008dfe] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
      </div>
    </motion.div>
  )
}