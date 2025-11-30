import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin, Users, ArrowRight, ArrowLeft, Clock, Zap, Image as ImageIcon } from "lucide-react";
import git from "@/assets/events/git.jpg"
import cyber from "@/assets/events/cybersecurity.jpg"
import linkedin_photo from "@/assets/events/linkedin.jpg"
import hawkins from "@/assets/events/hawkinscode.jpg"
import xtreme from "@/assets/events/xtreme.jpg"
const events = [
  {
    id: 1,
    title: "Git & GitHub Masterclass",
    type: "Workshop",
    date: "2025-01-15",
    time: "14:00 - 17:00",
    location: "Annexe Building",
    attendees: 45,
    image: git,
    category: "Technical",
    status: "completed",
    description: "Learn version control and collaborative development with Git and GitHub",
    tags: ["Beginner", "Hands-on"],
    registrationLink: "#"
  },
  {
    id: 2,
    title: "CyberSecurity Awareness",
    type: "Workshop",
    date: "2025-08-20",
    time: "10:00 - 13:00",
    location: "Annexe Building",
    attendees: 30,
    image: cyber,
    category: "Technical",
    status: "completed",
    description: "Essential cybersecurity practices for developers",
    tags: ["Security", "Best Practices"],
    registrationLink: "#"
  },

  {
    id: 3,
    title: "Upgrade Your Linkedin Profile",
    type: "Workshop",
    date: "2025-10-25",
    location: "Google Meet",
    attendees: 35,
    image: linkedin_photo,
    category: "Non Technical",
    status: "completed",
    description: "Essential cybersecurity practices for developers",
    tags: ["Security", "Best Practices"],
    registrationLink: "#"
  },
  {
    id: 4,
    title: "Hawkins Code",
    type: "Event",
    date: "2025-10-18",
    location: "Gomycode",
    attendees: 80,
    image: hawkins,
    category: "Problem Solving",
    status: "completed",
    description: "Learn version control and collaborative development with Git and GitHub",
    tags: ["Beginner", "Hands-on"],
    registrationLink: "#"
  },
  {
    id: 5,
    title: "IEEE Xtreme 19.0",
    type: "Workshop",
    date: "2025-10-25",
    location: "Foundation Tunisia",
    attendees: 70,
    image: xtreme,
    category: "Problem Solving",
    status: "completed",
    description: "Learn version control and collaborative development with Git and GitHub",
    tags: ["Beginner", "Hands-on"],
    registrationLink: "#"
  },
  {
    id: 5,
    title: "CyberSecurity ",
    type: "Workshop",
    date: "2025-12-03",
    location: "Annexe Building",
    attendees: 70,
    image: xtreme,
    category: "CyberSecurity",
    status: "upcoming",
    description: "Learn cybersecurity basics Collaboration with Sup'Com Cybersecurity CLUB",
    tags: ["Beginner", "Hands-on"],
    registrationLink: "https://forms.gle/GYSM3G8N8HYwFwNx5"
  },
];

function EventsWorkshopsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[number] | null>(null);
  console.log(activeIndex + "" + selectedEvent);
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
      const itemWidth = 400;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  const upcomingEvents = events.filter(event => event.status === "upcoming");
  const pastEvents = events.filter(event => event.status === "completed");

  const getStatusColor = (status: any) => {
    switch (status) {
      case "upcoming": return "bg-green-500";
      case "ongoing": return "bg-orange-500";
      case "completed": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: any) => {
    switch (status) {
      case "upcoming": return "Upcoming";
      case "ongoing": return "Live Now";
      case "completed": return "Completed";
      default: return status;
    }
  };

  return (
    <section id="events" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#008dfe]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#faa41a]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-[#008dfe]/5 to-[#faa41a]/5 rounded-full blur-3xl"></div>

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
            <Zap className="w-5 h-5 text-[#faa41a]" />
            <span className="text-sm font-semibold bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
              Events & Workshops
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join us in shaping the future through technology, innovation, and collaboration
          </p>
        </motion.div>

        {/* Upcoming Events Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#008dfe]" />
              Upcoming Events
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {upcomingEvents.length} events scheduled
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:border-[#008dfe]/50">
                  {/* Event Header */}
                  <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)} text-white`}>
                        {getStatusText(event.status)}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {event.type}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#008dfe] transition-colors">
                      {event.title}
                    </h4>
                  </div>

                  {/* Event Details */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                      <span className="text-gray-400">•</span>
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {event.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-linear-to-r from-[#008dfe]/10 to-[#faa41a]/10 text-[#008dfe] dark:text-[#faa41a] text-xs rounded-full border border-[#008dfe]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {
                    event.registrationLink ? (
                      <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex gap-2">
                        <a
                          href={event.registrationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-linear-to-r from-[#008dfe] to-[#faa41a] hover:from-[#008dfe]/90 hover:to-[#faa41a]/90 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Register Now
                        </a>
                      </div>
                    ) : (
                      <div className="p-4 border-t border-gray-100 dark:border-gray-700 flex gap-2">
                        <div className="flex-1 bg-linear-to-r from-gray-400 to-gray-500 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold cursor-not-allowed opacity-80 flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4" />
                          Registration Opening Soon
                        </div>
                      </div>
                    )
                  }
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <ImageIcon className="w-6 h-6 text-[#faa41a]" />
                Event Gallery
              </h3>

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
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="shrink-0 w-80 lg:w-96 snap-start group"
                >
                  <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:scale-105 group-hover:border-[#008dfe]/30">

                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* linear Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>

                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 ${getStatusColor(event.status)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                          {getStatusText(event.status)}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-linear-to-r from-[#008dfe] to-[#faa41a] text-white text-xs font-semibold rounded-full shadow-lg">
                          {event.category}
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
                      <div className="absolute inset-0 bg-linear-to-br from-[#008dfe]/20 to-[#faa41a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* linear Fade Effects */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col items-center gap-6 px-8 py-6 bg-linear-to-r from-[#008dfe]/10 to-[#faa41a]/10 rounded-3xl border border-[#008dfe]/20 backdrop-blur-sm">
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Don't Miss Out!
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Stay updated with our latest events and workshops
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
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