import { motion } from "framer-motion";
import { Star, Award, Calendar } from "lucide-react";
import issra from "@/assets/member_month/issra.png"
import omar from "@/assets/member_month/omar.jpg"
import ines from "@/assets/member_month/ines.png"
const membersOfTheMonth = [
  {
    id: 1,
    name: "Issra Akrout",
    role: "Member",
    image: issra,
    department: "",
    quote: "Great things are done by a series of small things brought together."
  },
  {
    id: 2,
    name: "Omar Karoui",
    role: "Member",
    image: omar,
    quote: "Excellence is not a skill, it's an attitude."
  },
  {
    id: 3,
    name: "Ines Kalia",
    role: "Member ",
    image: ines,
    department: "",
    quote: "The only way to do great work is to love what you do."
  }
];

function MembersOfTheMonth() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-[#faa41a]/30 rounded-full shadow-lg mb-6"
          >
            <Calendar className="w-5 h-5 text-[#faa41a]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
              October 2024
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Members of the <span className="bg-gradient-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Month</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Celebrating outstanding contributions and exceptional dedication from our brightest stars
          </p>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {membersOfTheMonth.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:scale-105 group-hover:border-[#008dfe]/30">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-br from-[#faa41a] to-[#ff8c00] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Award className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Department Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-[#008dfe] text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                      {member.department}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Name and Role */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#008dfe] font-semibold">{member.role}</p>
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-[#faa41a]">
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                      "{member.quote}"
                    </p>
                  </blockquote>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {/* <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#faa41a]" />
                      Key Achievements
                    </h4> */}
                    {/* <ul className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-[#008dfe] rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul> */}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#008dfe] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#faa41a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
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
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-[#008dfe]/10 to-[#faa41a]/10 rounded-full border border-[#008dfe]/20"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 text-[#faa41a]" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Next selection: November 2024
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default MembersOfTheMonth;