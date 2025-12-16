import { motion } from "framer-motion";
import { Star, Award, Calendar, ChevronDown, MessageCircle } from "lucide-react";
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
        name: "Tasnim Saidi",
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
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
                  className={`text-[#faa41a] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
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

        <div className={`grid ${currentData.members.length === 1
          ? 'grid-cols-1  max-w-sm mx-auto '
          : currentData.members.length === 2
            ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto gap-8'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          } mb-16`}>
          {currentData.members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
              onMouseEnter={() => setActiveCard(member.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-blue-200/30 dark:border-blue-400/20 hover:border-orange-300/50 dark:hover:border-orange-400/30 overflow-hidden">

                {/* Photo Section */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.unsplash.com/photo-${['1472099645785', '1494790108759', '1507003211169'][index % 3]}-w=400&h=400&fit=crop&crop=faces&auto=format`;
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 rounded-full w-32 h-32 mx-auto"></div>

                  {/* Badge */}
                  <div className="absolute -top-2 -right-2 z-10">
                    <motion.div
                      animate={activeCard === member.id ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 bg-gradient-to-r from-[#008dfe] to-[#faa41a] rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Award className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Person Info */}
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent font-medium text-sm mb-3">
                    {member.role}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#008dfe]/10 to-[#faa41a]/10 rounded-full">
                    <Star className="w-3 h-3 text-[#faa41a]" />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Member of the Month
                    </span>
                  </div>
                </div>

                {/* Quote Section */}
                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 text-2xl text-[#008dfe]">"</div>
                  <div className="pl-4 pt-2 pr-4">
                    <p className="text-gray-600 dark:text-gray-400 italic text-sm leading-relaxed text-center">
                      {member.quote}
                    </p>
                  </div>
                  <div className="absolute -bottom-2 -right-2 text-2xl text-[#faa41a]">"</div>
                </div>

                {/* Interactive Buttons */}
                <div className="flex justify-center gap-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-[#008dfe]" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-full transition-colors"
                  >
                    <Star className="w-5 h-5 text-[#faa41a]" fill="currentColor" />
                  </motion.button>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
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
                ? "Next selection: December 2025"
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