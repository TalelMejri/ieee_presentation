  import { motion } from "framer-motion";
  import { ArrowRight, Users, Sparkles, Star, Target } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import DecryptedText from "../DecryptedText";
  import one from "@/assets/hero_section/1.jpg"
  import two from "@/assets/hero_section/2.jpg"
  import three from "@/assets/hero_section/3.jpeg"
  import four from "@/assets/hero_section/4.jpg"
  import five from "@/assets/hero_section/Capture d'écran 2025-11-18 031116.png"
  import FloatingChatButton from "../chatroom/floating-chat-button";

  const HomePage = () => {
    const floatingElements = [
      { icon: Sparkles, delay: 0, duration: 3, x: "10%", y: "20%" },
      { icon: Star, delay: 1, duration: 4, x: "85%", y: "25%" },
      { icon: Target, delay: 2, duration: 3.5, x: "15%", y: "75%" },
      { icon: Users, delay: 1.5, duration: 4.2, x: "80%", y: "65%" },
    ];

    // Background photos data - optimized for better visibility
    const backgroundPhotos = [
      {
        url: one,
        position: "top-12 left-8",
        rotation: "-rotate-6",
        delay: 0.2
      },
      {
        url: two,
        position: "top-24 right-12",
        rotation: "rotate-4",
        delay: 0.4
      },
      {
        url: three,
        position: "bottom-24 left-12",
        rotation: "rotate-5",
        delay: 0.6
      },
      {
        url: four,
        position: "bottom-12 right-8",
        rotation: "-rotate-4",
        delay: 0.8
      }
    ];

    return (
      <div className="min-h-screen" id="home">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-blue-950/30 dark:via-gray-900 dark:to-orange-950/30">
          <FloatingChatButton />
          <div className="absolute inset-0 bg-grid-blue-900/[0.02] bg-[size:40px_40px]" />

          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>

          {backgroundPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -8 : 8 }}
              animate={{ opacity: 0.7, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: photo.delay, type: "spring" }}
              className={`absolute ${photo.position} w-36 h-44 md:w-44 md:h-52 lg:w-52 lg:h-60 ${photo.rotation}  lg:block`}
            >
              <div className="relative w-full h-full group">
                <img
                  src={photo.url}
                  alt={`Team activity ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10 backdrop-blur-[1px] rounded-xl border border-white/30 group-hover:border-orange-300/50 transition-all duration-500"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}

          {floatingElements.map((element, index) => {
            const IconComponent = element.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.3, 1],
                  y: [0, -25, 0],
                  x: [0, 15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: element.duration,
                  delay: element.delay,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className={`absolute ${element.x} ${element.y} hidden md:block`}
              >
                <IconComponent className="w-7 h-7 md:w-9 md:h-9 text-blue-500/60 dark:text-blue-400/60 drop-shadow-lg" />
              </motion.div>
            );
          })}

          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-3 px-6 py-3 mt-8 sm:mt-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-blue-200/40 dark:border-blue-400/40 rounded-full shadow-2xl mb-8 hover:shadow-3xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"
                  />
                  <span className="text-sm md:text-base font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                    <DecryptedText
                      text="  IEEE CS ENICarthage SBC"
                      speed={100}
                      maxIterations={20}
                      characters="ABCD1234!?"
                      className="revealed"
                      parentClassName="all-letters"
                      encryptedClassName="encrypted"
                    />
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-black mb-6 leading-tight">
                  <motion.span
                    className="bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Empowering
                  </motion.span>
                  <br />
                  <motion.span
                    className="bg-gradient-to-r from-orange-600 via-orange-500 to-blue-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    Future Leaders
                  </motion.span>
                </h1>

                {/* Description Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mb-8 max-w-4xl mx-auto"
                >
                  <motion.p
                    className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium"
                  >
                    Where <span className="text-blue-600 dark:text-blue-400 font-bold drop-shadow-sm">innovation</span> meets{" "}
                    <span className="text-orange-600 dark:text-orange-400 font-bold drop-shadow-sm">community</span> at IEEE CS ENICarthage SBC.
                  </motion.p>

                  {/* History Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-blue-200/40 dark:border-blue-400/20 shadow-xl"
                  >
                    <motion.p
                      className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center italic"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 }}
                    >
                      The IEEE Computer Society IEEE CS ENICarthage was established in 2012 at the National Engineering School of Carthage. We are part of the IEEE Tunisia Section, Region 8. Our goal is to empower ENICarthage students in computer science and provide unique opportunities for them to excel.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12"
              >
                {[
                  { number: "150+", label: "Active Members" },
                  { number: "12+", label: "Events Yearly" },
                  { number: "80+", label: "Workshops" },
                  { number: "100%", label: "Passionate" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.6 + index * 0.1, type: "spring" }}
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-orange-700 transition-all duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-semibold uppercase tracking-wide mt-1 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <Button
                    size="lg"
                    className="relative gap-4 bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white px-8 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 border-0"
                  >
                    <span>Join Our Community</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>

              {/* Enhanced Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="flex flex-col items-center gap-2"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center cursor-pointer hover:border-orange-600 transition-colors"
                >
                  <motion.div
                    animate={{ y: [0, 16, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1 h-3 bg-gradient-to-b from-blue-500 to-orange-500 rounded-full mt-2"
                  />
                </motion.div>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Scroll to explore
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Floating Conference Photo - Center */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.9, duration: 1.2, type: "spring" }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl hidden xl:block"
          >
            <div className="relative group">
              <img
                src={five}
                alt="Student conference"
                className="w-full h-48 object-cover rounded-xl shadow-2xl opacity-70 group-hover:opacity-80 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent dark:from-gray-900/60 rounded-xl"></div>
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </section>
      </div>
    );
  };

  export default HomePage;