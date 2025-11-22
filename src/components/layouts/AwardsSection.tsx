import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import chapter_of_month from "@/assets/awards/chapter of the Month in Area 6 for April 2024.jpg"
import educationWeek from "@/assets/awards/outstanding_edcuation_week.jpg"
import cstam0 from "@/assets/awards/cstam0.jpg"
import cstam1 from "@/assets/awards/cstam1.jpg"
import csttam2 from "@/assets/awards/cstam2.jpg"
import cs_hero from "@/assets/awards/cs_hero.jpg"
import cs_hero2 from "@/assets/awards/CS_hero2.jpg"
import { desc } from "framer-motion/client";
const awards = [
    {
        id: 2,
        title: "Chapter of the Month",
        competition: "IEEE Computer Society Region 8",
        description: "Awarded 'Chapter of the Month' for April 2024 by IEEE Computer Society Region 8, recognizing outstanding chapter activities and member engagement",
        images: [chapter_of_month],
        year: "2024",
        category: "Chapter Recognition",
        icon: Award,
        color: "from-purple-400 to-purple-600",
        borderColor: "border-purple-400/20"
    },
    {
        id: 1,
        title: "CSTAM Campions ",
        competition: "IEEE CS Tunisian Annual Meeting - CSTAM 1.0",
        description: "Best CS Student Branch Chapter in Tunisia Award and claimed First Place in the Non-Technical Challenge at IEEE CS Tunisian Annual Meeting - CSTAM 1.0",
        images: [cstam0, cstam1, csttam2],
        year: "2024",
        category: "Chapter Excellence",
        icon: Trophy,
        color: "from-yellow-400 to-yellow-600",
        borderColor: "border-yellow-400/20"
    },
    {
        id: 4,
        title: "CS Hero Award",
        competition: "TSYP 12th Edition",
        description: "IEEE CS ENICarthage SBC Vice Chair, Aya Chokri, honored with the 'CS Hero Award' at the 12th Edition of TSYP for exceptional individual contributions and dedication to advancing the goals of the IEEE Computer Society",
        images: [cs_hero, cs_hero2],
        year: "2024",
        category: "Individual Excellence",
        icon: Medal,
        color: "from-red-400 to-red-600",
        borderColor: "border-red-400/20"
    },
    {
        id: 3,
        title: "IEEE Education Week",
        competition: "IEEE Computer Society Region 8",
        description: "Received recognition during IEEE Education Week 2025 for our chapter's significant contributions to educational initiatives and community engagement",
        images: [educationWeek],
        year: "2025",
        category: "Chapter Recognition",
        icon: Star,
        color: "from-green-400 to-green-600",
        borderColor: "border-green-400/20"
    },

];

function AwardsSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

    const nextImage = (awardId: number, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [awardId]: ((prev[awardId] || 0) + 1) % totalImages
        }));
    };

    const prevImage = (awardId: number, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [awardId]: ((prev[awardId] || 0) - 1 + totalImages) % totalImages
        }));
    };

    return (
        <section id="awards" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#008dfe]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#faa41a]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            {/* Floating Icons */}
            <div className="absolute top-20 right-20">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                >
                    <Trophy className="w-8 h-8 text-[#008dfe]/30" />
                </motion.div>
            </div>
            <div className="absolute bottom-20 left-20">
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                >
                    <Award className="w-6 h-6 text-[#faa41a]/30" />
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
                        className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-[#faa41a]/30 rounded-full shadow-lg mb-6"
                    >
                        <Trophy className="w-5 h-5 text-[#faa41a]" />
                        <span className="text-sm font-semibold bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
                            Our Achievements
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Awards & <span className="bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Recognition</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Celebrating our journey of excellence, innovation, and outstanding achievements in the tech community
                    </p>
                </motion.div>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {awards.map((award, index) => {
                        const IconComponent = award.icon;
                        const currentIndex = currentImageIndex[award.id] || 0;
                        const totalImages = award.images.length;

                        return (
                            <motion.div
                                key={award.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                {/* Award Card */}
                                <div className={`relative h-full bg-transparent rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border ${award.borderColor} group-hover:scale-105 group-hover:border-[#008dfe]/30`}>

                                    {/* Image Container - Full display */}
                                    <div className="relative h-80 overflow-hidden bg-transparent rounded-t-3xl">
                                        <img
                                            src={award.images[currentIndex]}
                                            alt={award.title}
                                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 bg-transparent"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://images.unsplash.com/photo-1551135049-8a33b42738b4?w=400&h=300&fit=crop&auto=format`;
                                            }}
                                        />

                                        {/* Navigation Arrows for multiple images - Always visible on mobile, hover on desktop */}
                                        {totalImages > 1 && (
                                            <>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        prevImage(award.id, totalImages);
                                                    }}
                                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100"
                                                >
                                                    <ChevronLeft className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        nextImage(award.id, totalImages);
                                                    }}
                                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100"
                                                >
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </>
                                        )}

                                        {/* Image Counter - Always visible on mobile, hover on desktop */}
                                        {totalImages > 1 && (
                                            <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 rounded-full text-white text-xs backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300">
                                                {currentIndex + 1} / {totalImages}
                                            </div>
                                        )}

                                        {/* Year Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-semibold rounded-full">
                                                {award.year}
                                            </span>
                                        </div>

                                        {/* Award Icon */}
                                        <div className="absolute top-4 right-4">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className={`w-12 h-12 bg-linear-to-br ${award.color} rounded-full flex items-center justify-center shadow-lg`}
                                            >
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Content with transparent background */}
                                    <div className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-b-3xl border-t border-gray-200 dark:border-gray-700">
                                        {/* Category */}
                                        <div className="mb-3">
                                            <span className={`inline-flex items-center gap-2 px-3 py-1 bg-linear-to-r ${award.color}/10 text-xs font-semibold rounded-full border ${award.borderColor}`}>
                                                <div className={`w-2 h-2 bg-linear-to-r ${award.color} rounded-full`}></div>
                                                {award.category}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {award.title}
                                        </h3>

                                        {/* Competition */}
                                        <p className="text-[#008dfe] font-semibold text-sm mb-3">
                                            {award.competition}
                                        </p>

                                        {/* Description */}
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                            {award.description}
                                        </p>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#008dfe] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#faa41a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-16"
                >
                    {[
                        { number: awards.length + "+", label: "Awards Won" },
                        { number: "2024", label: "Most Successful Year" },
                        { number: "100%", label: "Success Rate" },
                        { number: "#1", label: "Regional Ranking" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                            viewport={{ once: true }}
                            className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20"
                        >
                            <div className="text-2xl font-bold bg-linear-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
                                {stat.number}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Thank You Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-linear-to-r from-[#008dfe]/10 to-[#faa41a]/10 rounded-2xl border border-[#008dfe]/20 backdrop-blur-sm">
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                            A lot of thanks to previous and current members for making this possible.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AwardsSection;