import { TeamCard } from "./TeamCard"
import { motion } from 'framer-motion'
import talel from '../../assets/boards/talel.jpg'
import aya from '../../assets/boards/aya.jpg'
import chahed from '../../assets/boards/chahed.jpg'
import treso from '../../assets/boards/treso.jpg'
import maha from '../../assets/boards/maha.jpg'
const teamMembers = [
  {
    id: 1,
    name: 'Talel Mejri',
    title: 'Chair Person',
    image: talel,
    socials: {
      facebook: '#',
      linkedin: '#',
    },
  },
  {
    id: 2,
    name: 'Aya Chokri',
    title: 'Vice Chair',
    image: aya,
    socials: {
      facebook: '#',
      linkedin: '#',
    },
  },
  {
    id: 3,
    name: 'Aya Abbassi',
    title: 'Treasurer',
    image: treso,
    socials: {
      facebook: '#',
      linkedin: '#',
    },
  },
  {
    id: 4,
    name: 'Chahed Requez',
    title: 'General Secretary',
    image: chahed,
    socials: {
      facebook: '#',
      linkedin: '#',
    },
  },
  {
    id: 5,
    name: 'Maha Dridi',
    title: 'Webmaster',
    image: maha,
    socials: {
      facebook: '#',
      linkedin: '#',
    },
  },
 
]

export function TeamSection() {
  return (
    <section id="team" className="w-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#008dfe]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#faa41a]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Orange Header */}
      <div className="h-2 bg-gradient-to-r from-[#008dfe] to-[#faa41a]"></div>

      {/* Content Container */}
      <div className="relative px-6 py-16 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-[#008dfe] mb-2 uppercase tracking-wider">
              Executive board
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our <span className="bg-gradient-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate individuals driving innovation and community at IEEE CS ENICarthage Student Branch Chapter
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
          {teamMembers.slice(0, 4).map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - Centered */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.slice(4).map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 lg:w-1/4"
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}