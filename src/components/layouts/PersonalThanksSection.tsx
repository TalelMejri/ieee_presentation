import { motion } from "framer-motion";
import { Heart, Star, Sparkles, Gift, MessageCircle } from "lucide-react";
import { useState } from "react";
import nour from "@/assets/thanks/Nour_PIC.jpg";

const PersonalThanksSection = () => {
  const specialThanks = [
    {
      id: 1,
      name: "Nour Chargui",
      role: "Region 8 Representative Of The Awards Engagement Program For The IEEE CS SYP Senior Technician In Software Engineering And Information Systemes",
      contribution: "Continuous support and guidance",
      message: "Thank you for believing in our vision and providing unwavering support throughout our journey.",
      photo: nour,
    },
  ];

  const thankYouPhrases = [
    "We appreciate you!",
    "Your impact matters!",
    "Thank you for sharing!",
    "We're grateful for you!",
    "You inspire us!",
    "Thank you for guiding us!",
    "Your time is priceless!",
    "You make a difference!"
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-orange-500/10 to-blue-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      {/* Floating Hearts Animation */}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
            y: [0, -40, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute"
          style={{
            left: `${5 + i * 15}%`,
            top: `${10 + i * 12}%`
          }}
        >
          <Heart
            className={`w-6 h-6 ${i % 2 === 0 ? 'text-blue-400/40' : 'text-orange-400/40'}`}
            fill={i % 3 === 0 ? "currentColor" : "none"}
          />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}

            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-[#faa41a]/30 rounded-full shadow-lg mb-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex items-center gap-2"
            >
              <Heart className="w-5 h-5 text-blue-500" fill="currentColor" />
              <span className="text-sm font-semibold bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
                Heartfelt Appreciation
              </span>
              <Gift className="w-5 h-5 text-orange-500" />
            </motion.div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Recognition & <span className="bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Appreciation</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Honoring the individuals who have significantly contributed to our community's success
          </p>

          {/* Thank You Phrases */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {thankYouPhrases.map((phrase, index) => (
              <motion.div
                key={phrase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-blue-200/50 dark:border-blue-400/30 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  {phrase}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Thank You Cards Grid with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specialThanks.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
              onMouseEnter={() => setActiveCard(person.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-blue-200/30 dark:border-blue-400/20 hover:border-orange-300/50 dark:hover:border-orange-400/30 overflow-hidden">

                {/* Photo Section */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-full h-full object-cover"
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
                      animate={activeCard === person.id ? { rotate: [0, 10, -10, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Person Info */}
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {person.name}
                  </h3>
                  <p className="bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent font-medium text-sm mb-3">
                    {person.role}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500/10 to-orange-500/10 rounded-full">
                    <Star className="w-3 h-3 text-orange-500" />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {person.contribution}
                    </span>
                  </div>
                </div>

                <div className="relative mb-6">
                  <div className="absolute -top-2 -left-2 text-2xl text-blue-400">"</div>
                  <div className="pl-4 pt-2 pr-4">
                    <p className="text-gray-600 dark:text-gray-400 italic text-sm leading-relaxed text-center">
                      {person.message}
                    </p>
                  </div>
                  <div className="absolute -bottom-2 -right-2 text-2xl text-orange-400">"</div>
                </div>


                <div className="flex justify-center gap-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors"
                  >
                    <Heart className="w-5 h-5 text-blue-500" fill="currentColor" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-full transition-colors"
                  >
                    <Star className="w-5 h-5 text-orange-500" fill="currentColor" />
                  </motion.button>
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4"
            >
              <span className="text-xs text-gray-400 dark:text-gray-500">
                With sincere appreciation, The IEEE CS ENICarthage Team
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalThanksSection;