import { motion } from "framer-motion";
import { Star, Award, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import issra from "@/assets/member_month/issra.png";
import omar from "@/assets/member_month/omar.jpg";
import ines from "@/assets/member_month/ines.jpg";
import eya from "@/assets/member_month/september2025/eya.png"
import narmine from "@/assets/member_month/september2025/narmine.jpg"
import wassim from "@/assets/member_month/september2025/wassim.jpg"
import sahar from "@/assets/member_month/february2025/sahar.png"
import hiba from "@/assets/member_month/november2025/hiba.png"
import roua from "@/assets/member_month/november2025/roua.jpg"
import tasnim from "@/assets/member_month/november2025/tasnim.jpg"
const allMonthsData = {
  "november-2024": {
    month: "November 2025",
    members: [
      {
        id: 1,
        name: "Hiba Ghozi",
        role: "Member",
        image: hiba,
        quote: "Great things are done by a series of small things brought together.",
      },
      {
        id: 2,
        name: "Tasnim saidi",
        role: "Member",
        image: tasnim,
        quote: "Excellence is not a skill, it's an attitude.",
      },
      {
        id: 3,
        name: "Roua Ben Fraj",
        role: "Member",
        image: roua,
        quote: "The only way to do great work is to love what you do.",
      }
    ]
  },
  "october-2024": {
    month: "October 2025",
    members: [
      {
        id: 1,
        name: "Issra Akrout",
        role: "Member",
        image: issra,
        quote: "Great things are done by a series of small things brought together.",
      },
      {
        id: 2,
        name: "Omar Karoui",
        role: "Member",
        image: omar,
        quote: "Excellence is not a skill, it's an attitude.",
      },
      {
        id: 3,
        name: "Ines Kalia",
        role: "Member",
        image: ines,
        quote: "The only way to do great work is to love what you do.",
      }
    ]
  },
  "september-2024": {
    month: "September 2025",
    members: [
      {
        id: 1,
        name: "Eya Ben Hassine",
        role: "Member",
        image: eya,
        quote: "Innovation distinguishes between a leader and a follower.",
      },
      {
        id: 2,
        name: "Nermine Ouada",
        role: "Member",
        image: narmine,
        quote: "Creativity is intelligence having fun.",
      },
      {
        id: 3,
        name: "Wassim Gallali",
        role: "Member",
        image: wassim,
        quote: "Creativity is intelligence having fun.",
      }
    ]
  },
  "february-2024": {
    month: "February 2025",
    members: [
      {
        id: 1,
        name: "Issra Akrout",
        role: "Member",
        image: issra,
        quote: "The way to get started is to quit talking and begin doing.",
      },
      {
        id: 2,
        name: "Sahar Jleli",
        role: "Member",
        image: sahar,
        quote: "Excellence is not a skill, it's an attitude.",
      }
    ]
  }
};

function MembersOfTheMonth() {
  const [selectedMonth, setSelectedMonth] = useState("november-2024");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentData = allMonthsData[selectedMonth as keyof typeof allMonthsData];
  const monthKeys = Object.keys(allMonthsData);

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#008dfe]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#faa41a]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Floating Stars */}
      <div className="absolute top-20 right-20">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Star className="w-8 h-8 text-[#faa41a]/30" />
        </motion.div>
      </div>
      <div className="absolute bottom-20 left-20">
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Star className="w-6 h-6 text-[#008dfe]/30" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Month Selection */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex flex-col items-center gap-4 mb-6"
          >
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-[#faa41a]/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 text-[#faa41a]" />
                <span className="text-sm font-semibold bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
                  {currentData.month}
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
                  {monthKeys.map((monthKey, index) => (
                    <button
                      key={monthKey}
                      onClick={() => {
                        setSelectedMonth(monthKey);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ${selectedMonth === monthKey
                        ? 'bg-[#008dfe]/10 text-[#008dfe] dark:text-[#008dfe] font-semibold'
                        : 'text-gray-700 dark:text-gray-200'
                        } ${index === 0 ? 'rounded-t-xl' : ''
                        } ${index === monthKeys.length - 1 ? 'rounded-b-xl' : 'border-b border-gray-100 dark:border-gray-700'
                        }`}
                    >
                      {allMonthsData[monthKey as keyof typeof allMonthsData].month}
                      {monthKey === "november-2024" && (
                        <span className="ml-2 px-2 py-1 text-xs bg-linear-to-r from-[#008dfe] to-[#faa41a] text-white rounded-full">
                          Current
                        </span>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Members of the <span className="bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Month</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Celebrating outstanding contributions and exceptional dedication from our brightest stars
          </p>
        </motion.div>

        {/* Members Grid */}
        <div
          className={`grid gap-6 ${currentData.members.length === 1
              ? 'grid-cols-1 max-w-sm mx-auto'
              : currentData.members.length === 2
                ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            }`}
        >
          {currentData.members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:scale-105 flex flex-col">
                {/* Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 bg-linear-to-br from-[#faa41a] to-[#ff8c00] rounded-full flex items-center justify-center shadow-md"
                  >
                    <Award className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center brightness-105 contrast-105 transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&auto=format';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Name and Role */}
                  <div className="mb-3 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-linear-to-r from-[#008dfe]/10 to-[#faa41a]/10 rounded-full border border-[#008dfe]/20">
                      <div className="w-2 h-2 bg-linear-to-r from-[#008dfe] to-[#faa41a] rounded-full"></div>
                      <p className="text-[#008dfe] font-medium text-xs">{member.role}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-[#faa41a]/20">
                    <div className="text-[#faa41a] text-base mb-1">"</div>
                    <p className="text-gray-600 dark:text-gray-300 italic text-xs leading-relaxed">
                      {member.quote}
                    </p>
                  </blockquote>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Congratulations to our outstanding members! Your dedication inspires us all.
          </p>
          <motion.div
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-linear-to-r from-[#008dfe]/10 to-[#faa41a]/10 rounded-full border border-[#008dfe]/20"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-[#faa41a]" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {selectedMonth === "october-2024"
                ? "Next selection: November 2025"
                : `Viewing: ${currentData.month}`
              }
            </span>
          </motion.div>
        </motion.div>
      </div>
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </section>
  );
}

export default MembersOfTheMonth;