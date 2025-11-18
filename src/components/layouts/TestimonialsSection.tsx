import { motion } from "framer-motion";
import { Star, Quote, Users, Heart } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Computer Science Student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "IEEE ENICarthage transformed my university experience. The workshops and networking events opened doors I never knew existed. The community is incredibly supportive!",
    department: "Technical Committee"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Electrical Engineering Student",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "The mentorship program changed everything for me. I went from being unsure about my career path to having clear goals and amazing connections in the industry.",
    department: "Mentorship Program"
  },
  {
    id: 3,
    name: "Marcus Rodriguez",
    role: "Software Engineering Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "The hands-on projects and hackathons organized by IEEE gave me practical skills that directly helped me land my first internship. Highly recommended!",
    department: "Projects Committee"
  },
  {
    id: 4,
    name: "Emily Parker",
    role: "AI & Machine Learning Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "The quality of events and the passion of the team is outstanding. I've grown both personally and professionally through my involvement with this community.",
    department: "Events Committee"
  },
  {
    id: 5,
    name: "David Kim",
    role: "Cybersecurity Student",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "Being part of IEEE ENICarthage helped me build confidence, develop leadership skills, and connect with amazing people who share the same passion for technology.",
    department: "Technical Committee"
  },
  {
    id: 6,
    name: "Lily Thompson",
    role: "Data Science Student",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 5,
    text: "The community here is like family. The support and opportunities provided have been instrumental in my academic and professional journey.",
    department: "Community Outreach"
  }
];

function TestimonialsSection() {

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
              className={`w-4 h-4 ${
                i < rating
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
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#008dfe]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#faa41a]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating Icons */}
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
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-[#008dfe]/30 rounded-full shadow-lg mb-6"
          >
            <Users className="w-5 h-5 text-[#008dfe]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
              Community Voices
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="bg-gradient-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Members</span> Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the experiences and success stories from our vibrant community of innovators and leaders
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Testimonial Card */}
              <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 group-hover:scale-105 group-hover:border-[#008dfe]/30">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 bg-gradient-to-br from-[#008dfe] to-[#faa41a] rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Quote className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="mb-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                      "{testimonial.text}"
                    </p>
                  </blockquote>

                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#008dfe]/20"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#faa41a] rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#008dfe] text-xs font-medium">{testimonial.role}</p>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {testimonial.department}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#008dfe] to-[#faa41a] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Corner Accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#008dfe] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#faa41a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { number: "98%", label: "Satisfaction Rate" },
            { number: "200+", label: "Active Members" },
            { number: "50+", label: "Events Yearly" },
            { number: "100%", label: "Recommended" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-gradient-to-r from-[#008dfe]/10 to-[#faa41a]/10 rounded-2xl border border-[#008dfe]/20 backdrop-blur-sm">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Ready to share your story?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-[#008dfe] to-[#faa41a] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Our Community
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;