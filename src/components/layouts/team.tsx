import { TeamCard } from "./TeamCard"
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, ChevronDown } from 'lucide-react'

import talel from '../../assets/boards/talel.jpg'
import aya from '../../assets/boards/aya.jpg'
import chahed from '../../assets/boards/chahed.jpg'
import treso from '../../assets/boards/treso.jpg'
import maha from '../../assets/boards/maha.jpg'

import nour from '../../assets/previousBoard/nour.jpg'
import eya from '../../assets/previousBoard/eya.jpg'
import ameni from '../../assets/previousBoard/ameni.jpg'
import imen from '../../assets/previousBoard/imen.jpg'
import chadha from '../../assets/previousBoard/shedha.jpg'

const currentBoard = {
  year: "2025-2026",
  members: [
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
}

const previousBoards = [
  {
    year: "2024-2025",
    members: [
      {
        id: 1,
        name: 'Nour Elhouda Techini',
        title: 'Previous Chair 2024',
        image: nour,
        socials: {
          facebook: '#',
          linkedin: '#',
        },
      },
      {
        id: 2,
        name: 'Eya Sleimi',
        title: 'Previous Vice Chair 2024',
        image: eya,
        socials: {
          facebook: '#',
          linkedin: '#',
        },
      },
      {
        id: 3,
        name: 'Ameni Zakraoui',
        title: 'Previous Treasurer 2024',
        image: ameni,
        socials: {
          facebook: '#',
          linkedin: '#',
        },
      },
      {
        id: 4,
        name: 'Imen Barka',
        title: 'Previous Secretary 2024',
        image: imen,
        socials: {
          facebook: '#',
          linkedin: '#',
        },
      },
      {
        id: 5,
        name: 'Shedhae Sakka',
        title: 'Previous Webmaster 2024',
        image: chadha,
        socials: {
          facebook: '#',
          linkedin: '#',
        },
      },
    ]
  }
]

export function TeamSection() {
  const [selectedBoard, setSelectedBoard] = useState(currentBoard)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const allBoards = [currentBoard, ...previousBoards]

  const handleBoardSelect = (board: typeof currentBoard) => {
    setSelectedBoard(board)
    setIsDropdownOpen(false)
  }

  return (
    <section id="team" className="w-full bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#008dfe]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#faa41a]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Orange Header */}
      <div className="h-2 bg-linear-to-r from-[#008dfe] to-[#faa41a]"></div>

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
              Meet Our <span className="bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate individuals driving innovation and community at IEEE CS ENICarthage Student Branch Chapter
            </p>
          </motion.div>

          {/* Board Selection Dropdown */}
          <motion.div
            className="relative inline-block mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-[#faa41a]/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Calendar className="w-5 h-5 text-[#faa41a]" />
              <span className="text-sm font-semibold bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
                {selectedBoard.year} Board
              </span>
              <ChevronDown
                size={16}
                className={`text-[#faa41a] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 backdrop-blur-lg"
              >
                {allBoards.map((board, index) => (
                  <button
                    key={board.year}
                    onClick={() => handleBoardSelect(board)}
                    className={`w-full px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${selectedBoard.year === board.year
                      ? 'bg-[#008dfe]/10 text-[#008dfe] dark:text-[#008dfe] font-semibold'
                      : 'text-gray-700 dark:text-gray-200'
                      } ${index === 0 ? 'rounded-t-xl' : ''
                      } ${index === allBoards.length - 1 ? 'rounded-b-xl' : 'border-b border-gray-100 dark:border-gray-700'
                      }`}
                  >
                    {board.year} Board
                    {board.year === currentBoard.year && (
                      <span className="ml-2 px-2 py-1 text-xs bg-linear-to-r from-[#008dfe] to-[#faa41a] text-white rounded-full">
                        Current
                      </span>
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
          {selectedBoard.members.slice(0, 4).map((member, index) => (
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
        {selectedBoard.members.length > 4 && (
          <div className="flex flex-wrap justify-center gap-8">
            {selectedBoard.members.slice(4).map((member, index) => (
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
        )}

        {/* Year Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
            <div className="w-2 h-2 bg-linear-to-r from-[#008dfe] to-[#faa41a] rounded-full"></div>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {selectedBoard.year} Academic Year
            </span>
          </div>
        </motion.div>
      </div>

      {/* Close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </section>
  )
}