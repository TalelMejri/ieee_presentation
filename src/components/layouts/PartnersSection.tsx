import { motion } from "framer-motion";
import { ExternalLink, MapPin, Users, Handshake } from "lucide-react";
import theBridge from "@/assets/partners/9antra.png";;
import gomycode from "@/assets/partners/gomycode.png";
import iciCode from "@/assets/partners/icicode.png"
const partners = [
  {
    id: 1,
    name: "GOMYCODE",
    logo: gomycode,
    description: "Leading tech education platform providing coding bootcamps and digital skills training",
    website: "https://gomycode.com",
    socialMedia: {
      facebook: "https://www.facebook.com/gomycode/?brand_redir=102803826190572",
    },
    location: "Tunisia",
    type: "Education Partner"
  },
  {
    id: 2,
    name: "9antra The Bridge",
    logo: theBridge,
    description: "Leading tech education platform providing coding bootcamps and digital skills training",
    website: "https://9antra.tn",
    socialMedia: {
      facebook: "https://www.facebook.com/9antra.tn",
    },
    location: "Tunisia",
    type: "Education Partner"
  },
  {
    id: 3,
    name: "ICI Code",
    logo: iciCode,
    description: "Leading tech education platform providing coding bootcamps and digital skills training",
    website: "https://www.icicode.fr/vues/acces_eleve/login",
    socialMedia: {
      facebook: "https://www.facebook.com/profile.php?id=61557238409152"
    },
    location: "Tunisia",
    type: "Education Organization"
  },
];

function PartnersSection() {
  return (
    <section id="partners" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
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
            <Handshake className="w-5 h-5 text-[#faa41a]" />
            <span className="text-sm font-semibold bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
              Strategic Partnerships
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Collaborating with leading organizations to drive innovation, education, and technological advancement in our community
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Partner Card */}
              <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-[#008dfe]/30 hover:shadow-2xl transition-all duration-500">
                
                {/* Header with Logo */}
                <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-300 dark:border-gray-600 p-3 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/64x64/1e40af/ffffff?text=${partner.name.charAt(0)}`;
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#008dfe] transition-colors duration-300">
                          {partner.name}
                        </h3>
                        <p className="text-sm text-[#faa41a] font-semibold">
                          {partner.type}
                        </p>
                      </div>
                    </div>
                    
                    {/* External Link */}
                    <motion.a
                      href={partner.website}
                      whileHover={{ scale: 1.1 }}
                      target="_blank"
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-[#008dfe] hover:border-[#008dfe] transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {partner.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{partner.location}</span>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">Follow them:</span>
                    </div>
                    <div className="flex gap-2">
                      {Object.entries(partner.socialMedia).map(([platform, url]) => (
                        <motion.a
                          key={platform}
                          href={url}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-[#008dfe] hover:text-white transition-all duration-300"
                          title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                        >
                          <span className="text-xs font-semibold">
                            {platform === 'linkedin' ? 'in' : platform.charAt(0)}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#008dfe]/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#008dfe] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#faa41a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#faa41a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#008dfe] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 bg-gradient-to-r from-[#008dfe]/10 to-[#faa41a]/10 rounded-2xl border border-[#008dfe]/20 backdrop-blur-sm">
            <div className="text-center sm:text-left">
              <p className="text-gray-600 dark:text-gray-300">
                Join our network of innovative organizations and create impact together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PartnersSection;