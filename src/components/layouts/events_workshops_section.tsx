import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin, Users, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import git from "@/assets/events/git.jpg"
import cyber from "@/assets/events/cybersecurity.jpg"
import Linkedin from "@/assets/events/linkedin.jpg"
import hawkins from "@/assets/events/hawkinscode.jpg"
import xtreme from "@/assets/events/xtreme.jpg"
const events = [
  {
    id: 1,
    title: "Git & Github Workshop",
    type: "Workshop",
    date: "2025-01-15",
    location: "Annexe Building",
    attendees: 45,
    image: git,
    category: "Technical"
  },
  {
    id: 2,
    title: "CyberSecurity ",
    type: "Workshop",
    date: "2025-08-20",
    location: "Annexe Building",
    attendees: 30,
    image: cyber,
    category: "Technical"
  },
  {
    id: 3,
    title: "Upgrade Your Linkedin Profile",
    type: "Workshop",
    date: "2025-10-25",
    location: "Google Meet",
    attendees: 35,
    image: Linkedin,
    category: "Non Technical"
  },
  {
    id: 4,
    title: "Hawkins Code",
    type: "Event",
    date: "2025-10-18",
    location: "Gomycode",
    attendees: 80,
    image: hawkins,
    category: "Problem Solving"
  },
  {
    id: 5,
    title: "IEEE Xtreme 19.0",
    type: "Workshop",
    date: "2025-10-25",
    location: "Foundation Tunisia",
    attendees: 70,
    image: xtreme,
    category: "Problem Solving"
  },
 
];

function EventsWorkshopsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const itemWidth = 400; // Approximate width of each card including gap
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <section id="event" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#008dfe]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#faa41a]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

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
              Gallery
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Events & <span className="bg-gradient-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Workshops</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our latest activities through captivating moments and memorable experiences
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Recent Activities
            </h3>
            <div className="flex items-center gap-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      scrollContainerRef.current.scrollTo({
                        left: index * 400,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-[#008dfe] w-6'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-[#008dfe] transition-all shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollRight}
              className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-[#008dfe] transition-all shadow-lg"
            >
              <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </div>
        </div>

        {/* Scrolling Gallery */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 lg:w-96 snap-start group"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:scale-105 group-hover:border-[#008dfe]/30">
                  
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#008dfe] text-white text-xs font-semibold rounded-full shadow-lg">
                        {event.category}
                      </span>
                    </div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#faa41a] text-white text-xs font-semibold rounded-full shadow-lg">
                        {event.type}
                      </span>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">
                        {event.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-white/90 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.attendees}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#008dfe]/20 to-[#faa41a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                
                  {/* <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button className="px-4 py-2 bg-white text-gray-900 hover:bg-gray-100 rounded-full text-sm font-semibold shadow-lg">
                        View Photos
                      </Button>
                    </motion.div>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 bg-gradient-to-r from-[#008dfe]/10 to-[#faa41a]/10 rounded-3xl border border-[#008dfe]/20 backdrop-blur-sm">
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Want to See More?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Explore our complete gallery of events and workshops
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-[#008dfe] to-[#faa41a] hover:from-[#008dfe]/90 hover:to-[#faa41a]/90 text-white px-6">
                View Full Gallery
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style >{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default EventsWorkshopsSection;