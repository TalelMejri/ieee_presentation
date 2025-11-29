import { motion } from "framer-motion";
import { Star, Quote, Users, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import issra from "@/assets/member_month/issra.png"
import ines from "@/assets/feedbacks/ines.jpg";
import ahmed from "@/assets/feedbacks/ahmed.jpg"
import omar from "@/assets/feedbacks/omar.jpg"
import ayoub from "@/assets/feedbacks/ayoub.jpg"
import iheb from "@/assets/feedbacks/iheb.jpg"
import nour from "@/assets/previousBoard/nour.jpg";
import yassmin from "@/assets/feedbacks/yassmin.png";
import afrah from "@/assets/feedbacks/afrah.jpg"
const testimonials = [
  {
    id: 0,
    name: "Nour Elhouda Techini",
    role: "Previous Chair IEEE CS ENICarthage SBC 2024",
    image: nour,
    rating: 5,
    text: "Serving as The Chairwoman of the IEEE CS ENICarthage SBC was an enriching leadership experience that strengthened our community and expanded our impact. I had the opportunity to work with an exceptional team, launch meaningful initiatives, and support students in developing both their technical and professional skills.",
  },
  {
    id: 1,
    name: "Issra Akrout",
    role: "Member",
    image: issra,
    rating: 5,
    text: "Thank You IEEE CS ENICarthage it was a great experience to be part of this community, I learned a lot and met amazing people who inspired me to grow both personally and professionally.",
  },
  {
    id: 2,
    name: "Sahar Jleli",
    role: "Member",
    image: "",
    rating: 5,
    text: "Joining IEEE CS ENICarthage has been a transformative experience for me. The community is incredibly supportive, and I've had the chance to work on exciting projects that have enhanced my skills and confidence.",
  },
  {
    id: 3,
    name: "Ines Kalia",
    role: "Member",
    image: ines,
    rating: 5,
    text: "I want to thank the CS IEEE ENICarthage for this amazing opportunity. It was a valuable experience that allowed me to learn, grow, and connect with inspiring people. Truly grateful for the support and the chance to be part of this journey!"
  },
  {
    id: 4,
    name: "Ltayef Ahmed",
    role: "Member",
    image: ahmed,
    rating: 5,
    text: "Joining the IEEE Computer Society Chapter SBC has been a valuable experience for me. It allowed me to connect with motivated students, discover new perspectives in computing, and take part in activities that strengthened both my technical and soft skills. Being part of this community encouraged me to stay curious, collaborate more, and push myself to grow professionally. I’m grateful for the opportunities and support it has provided so far."
  },
  {
    id: 5,
    name: "Omar Karoui",
    role: "Member",
    rating: 5,
    image: omar,
    text: "I don't just thank you for the great work you do, but I especially thank you for the knowledge you imparted. I have learned so much from you, and the experience has been truly enlightening. Thank you for being such fantastic mentors"
  },
  {
    id: 6,
    name: "Mohamed Ayoub Dababi",
    role: "Member",
    rating: 5,
    image: ayoub,
    text: "IEEE ENICARTHAGE SB and specially our CS chapter is one of the most active and exceptional SBC'S 🔥🔥(congress , workshops , events ) we have everything here 🧡🧡"
  },
  {
    id: 7,
    name: "Iheb Marzouki",
    role: "Chairman AESS Chapter",
    rating: 5,
    image: iheb,
    text: "What an  amazing work , hope all the success for CS chapter , especially the Chair "
  },
  {
    id: 8,
    name: "Yasmine Kallel",
    role: "General Secretary SB",
    rating: 5,
    image: yassmin,
    text: "Being part of IEEE ENICarthage CS SBC wasn’t only about gaining technical skills and continuous learning, but also about belonging to a hardworking committee that truly values collaboration, innovation, and personal growth. "
  },
  {
    id: 9,
    name:"Afrah hedfi",
    role: "Member",
    rating: 5,
    image: afrah,
    text:"Being part of the IEEE ENICar has been a truly enriching experience. It helped me grow both personally and academically, discover new opportunities, and connect with motivated, inspiring people. I’m grateful for everything this community has offered me and proud to be part of it"
  }
];

function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentPage, totalPages, isAutoPlaying]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
    setIsAutoPlaying(false);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    setIsAutoPlaying(false);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    setIsAutoPlaying(false);
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: i * 0.1, type: "spring" }}
          >
            <Star
              className={`w-4 h-4 ${i < rating
                ? "text-[#faa41a] fill-[#faa41a]"
                : "text-gray-300"
                }`}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#008dfe]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#faa41a]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-20 right-20">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Quote className="w-8 h-8 text-[#008dfe]/30" />
        </motion.div>
      </div>
      <div className="absolute bottom-20 left-20">
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Heart className="w-6 h-6 text-[#faa41a]/30" />
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto relative">
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
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-[#008dfe]/30 rounded-full shadow-lg mb-6"
          >
            <Users className="w-5 h-5 text-[#008dfe]" />
            <span className="text-sm font-semibold bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
              Community Voices
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Members</span> Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the experiences and success stories from our vibrant community of innovators and leaders
          </p>
        </motion.div>
        <div className="relative mb-12">
          <div className="flex items-center justify-between mb-8">
            <motion.button
              onClick={prevPage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-[#008dfe]/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-[#008dfe] hover:bg-[#008dfe] hover:text-white z-10"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex-1 mx-4">
              <div className="flex justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPage
                      ? 'bg-linear-to-r from-[#008dfe] to-[#faa41a]'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                      }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <motion.button
              onClick={nextPage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-[#faa41a]/30 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-[#faa41a] hover:bg-[#faa41a] hover:text-white z-10"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:scale-105 group-hover:border-[#008dfe]/30">
                  <div className="absolute top-6 right-6 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 bg-linear-to-br from-[#008dfe] to-[#faa41a] rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Quote className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>
                    <blockquote className="mb-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm line-clamp-6">
                        "{testimonial.text}"
                      </p>
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        {
                          !testimonial.image ? (
                            <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center border-2 border-[#008dfe]/20">
                              <span className="text-gray-500 dark:text-gray-400 font-semibold">
                                {testimonial.name.charAt(0) + "" + testimonial.name.split(" ")[1].charAt(0)}
                              </span>
                            </div>
                          ) : <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-[#008dfe]/20"
                          />
                        }
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#008dfe] text-xs font-medium truncate">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-8 md:hidden">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-8 h-2 rounded-full transition-all duration-300 ${index === currentPage
                  ? 'bg-linear-to-r from-[#008dfe] to-[#faa41a]'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-16"
        >
          {[
            { number: "120+", label: "Members" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <div className="text-xl md:text-2xl font-bold bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
          href="https://forms.gle/qJ9TDbShhxwceHVg8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 md:px-8 md:py-6 bg-linear-to-r from-[#008dfe]/10 to-[#faa41a]/10 rounded-2xl border border-[#008dfe]/20 backdrop-blur-sm">
            <p className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">
              Ready to share your story?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-6 py-2 bg-linear-to-r from-[#008dfe] to-[#faa41a] text-white rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Share Feedback
            </motion.button>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

export default TestimonialsSection;