import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube, Github, ExternalLink, Users, Share2, Heart } from "lucide-react";

const socialMedia = [
  {
    name: "Facebook",
    username: "@IEEE.CS.ENICarthage",
    url: "https://www.facebook.com/ieee.cs.enicarthage",
    icon: Facebook,
    color: "from-blue-600 to-blue-800",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/10",
    followers: "3.5K+",
    description: "Join our Facebook community for updates, events, and discussions"
  },
  {
    name: "Instagram", 
    username: "@ieee_cs_enicarthage",
    url: "https://www.instagram.com/ieee_cs_enicarthage_/",
    icon: Instagram,
    color: "from-pink-500 to-purple-600",
    borderColor: "border-pink-500/20",
    bgColor: "bg-pink-500/10",
    followers: "500+",
    description: "Follow us for behind-the-scenes content and visual stories"
  },
  {
    name: "LinkedIn",
    username: "IEEE CS ENICarthage",
    url: "https://www.linkedin.com/company/ieee-cs-enicarthage/",
    icon: Linkedin,
    color: "from-blue-700 to-blue-900",
    borderColor: "border-blue-600/20",
    bgColor: "bg-blue-600/10",
    followers: "1.2K+",
    description: "Connect with us professionally and stay updated with our achievements"
  },
  {
    name: "YouTube",
    username: "IEEE CS ENICarthage",
    url: "https://www.youtube.com/@ieee_cs_enicarthage",
    icon: Youtube,
    color: "from-red-500 to-red-700",
    borderColor: "border-red-500/20",
    bgColor: "bg-red-500/10",
    followers: "60+",
    description: "Subscribe for tutorials, event recordings, and tech content"
  },
  {
    name: "GitHub",
    username: "ieee-cs-enicarthage",
    url: "https://github.com/IEEECSENICarthage",
    icon: Github,
    color: "from-gray-700 to-gray-900",
    borderColor: "border-gray-600/20",
    bgColor: "bg-gray-600/10",
    followers: "10+",
    description: "Explore our open-source projects and contribute to our codebase"
  }
];

function SocialMediaSection() {
  return (
    <section id="social" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#008dfe]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#faa41a]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 right-20">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Share2 className="w-8 h-8 text-[#008dfe]/30" />
        </motion.div>
      </div>
      <div className="absolute bottom-20 left-20">
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <Heart className="w-6 h-6 text-[#faa41a]/30" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto relative">
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
            <Users className="w-5 h-5 text-[#faa41a]" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
              Join Our Community
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Follow Us on <span className="bg-gradient-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Social Media</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay connected with our latest updates, events, and tech insights across all platforms
          </p>
        </motion.div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {socialMedia.map((platform, index) => {
            const IconComponent = platform.icon;
            
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Social Media Card */}
                <motion.a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${platform.borderColor} ${platform.bgColor} backdrop-blur-sm relative overflow-hidden`}
                >
                  {/* Platform Icon */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center shadow-lg mb-4 mx-auto`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Platform Name */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
                      {platform.name}
                    </h3>

                    {/* Username */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-3">
                      {platform.username}
                    </p>

                    {/* Followers */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {platform.followers} Followers
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-xs text-center leading-relaxed mb-4">
                      {platform.description}
                    </p>

                    {/* Follow Button */}
                    <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#008dfe] to-[#faa41a] text-white rounded-full text-sm font-semibold transition-all duration-300 group-hover:shadow-lg">
                      <span>Follow Us</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                  {/* Corner Accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#008dfe] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#faa41a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-16"
        >
          {[
            { number: "6K+", label: "Total Followers" },
            { number: "50+", label: "Monthly Posts" },
            { number: "100K+", label: "Total Reach" },
            { number: "24/7", label: "Active Community" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
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
              Never miss an update from our vibrant community
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-[#008dfe] to-[#faa41a] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Follow All Platforms
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SocialMediaSection;