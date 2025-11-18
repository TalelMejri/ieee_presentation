import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Send } from "lucide-react";
import cs_logo from "@/assets/Full_White.png";

function FooterLayout() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-white/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#008dfe]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#faa41a]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img
              src={cs_logo}
              alt="IEEE ENICarthage Student Branch"
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Empowering future leaders through technology, innovation, and community. 
              Join us to learn, share, and grow together in the world of engineering and technology.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/ieee-cs-enicarthage/", label: "LinkedIn" },
                { icon: Facebook, href: "https://www.facebook.com/ieee.cs.enicarthage", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/ieee_cs_enicarthage_/", label: "Instagram" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#008dfe]/30 hover:bg-[#008dfe]/10 transition-all duration-300"
                >
                  <social.icon className="h-4 w-4 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#008dfe] rounded-full"></div>
              Quick Links
            </h4>
            <nav className="flex flex-col gap-4" aria-label="Quick Links">
              {["About Us", "Our Team", "Events", "Workshops", "Gallery"].map((item, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ x: 5, color: "#faa41a" }}
                  className="text-sm text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 bg-[#008dfe] rounded-full group-hover:bg-[#faa41a] transition-colors"></div>
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
          
          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#faa41a] rounded-full"></div>
              Resources
            </h4>
            <nav className="flex flex-col gap-4" aria-label="Resources">
              {["Blog", "Join Us", "Support", "Partners", "Careers"].map((item, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ x: 5, color: "#008dfe" }}
                  className="text-sm text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                >
                  <div className="w-1.5 h-1.5 bg-[#faa41a] rounded-full group-hover:bg-[#008dfe] transition-colors"></div>
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
          
          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-[#008dfe] to-[#faa41a] rounded-full"></div>
              Stay Connected
            </h4>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <div className="w-8 h-8 bg-[#008dfe]/20 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-[#008dfe]" />
                </div>
                <div>
                  <div>45 Rue des Entrepreneurs</div>
                  <div>2035 Charguia II, Tunis</div>
                </div>
              </motion.div>
              
              <motion.a
                href="mailto:enicarthage.ieee.cs@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-[#faa41a]/20 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-[#faa41a]" />
                </div>
                enicarthage.ieee.cs@gmail.com

              </motion.a>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm text-gray-300">Subscribe to our newsletter</p>
              <motion.form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
                aria-label="Subscribe to newsletter"
                whileHover={{ scale: 1.02 }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="flex-1 bg-white/5 border border-white/10 placeholder:text-gray-400 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#008dfe] focus:border-transparent transition-all"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-[#008dfe] to-[#faa41a] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#008dfe]/20 transition-all flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} IEEE CS ENICarthage Student Branch Chapter. All rights reserved.
          </div>
          
        
          
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default FooterLayout;