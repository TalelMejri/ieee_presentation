import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

function ContactSection() {
    return (
        <section id="contact" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#008dfe]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#faa41a]/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#008dfe]/5 to-[#faa41a]/5 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-semibold uppercase tracking-wider mb-3 text-[#008dfe]">
                        Get In Touch
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Contact <span className="bg-gradient-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Us</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Ready to start your next project with us? Send us a message and we'll get back to you as soon as possible.
                    </p>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 rounded-3xl border border-white/20 bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl shadow-2xl shadow-[#008dfe]/10"
                >
                    {/* Left Column - Contact Form */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Send us a Message</h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Have a question or want to work together? We'd love to hear from you.
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="fullname" className="sr-only">Full name</label>
                                    <Input
                                        id="fullname"
                                        name="fullname"
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full h-12 bg-white/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl focus:ring-2 focus:ring-[#008dfe] focus:border-transparent transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full h-12 bg-white/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl focus:ring-2 focus:ring-[#008dfe] focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="sr-only">Subject</label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full h-12 bg-white/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl focus:ring-2 focus:ring-[#008dfe] focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows={6}
                                    className="w-full bg-white/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-xl resize-none focus:ring-2 focus:ring-[#008dfe] focus:border-transparent transition-all"
                                />
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#008dfe] to-[#faa41a] hover:from-[#008dfe]/90 hover:to-[#faa41a]/90 text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <span>Send Message</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </form>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="space-y-8 lg:space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {/* Address */}
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-white/20"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#008dfe] to-[#008dfe]/80 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Our Location</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            45 Rue des Entrepreneurs<br />
                                            2035 Charguia II, Tunis
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-white/20"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#faa41a] to-[#faa41a]/80 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email Us</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">enicarthage.sb@gmail.com</p>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-white/20"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#008dfe] to-[#faa41a] rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                                        <Phone className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Call Us</h4>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">+216 44 444 444</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Follow Us</h3>
                            <div className="flex gap-4">
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 bg-gradient-to-br from-[#008dfe] to-[#008dfe]/80 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-5 w-5 text-white" />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 bg-gradient-to-br from-[#008dfe] to-[#008dfe]/80 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="h-5 w-5 text-white" />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 bg-gradient-to-br from-[#faa41a] to-[#faa41a]/80 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="h-5 w-5 text-white" />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ContactSection;