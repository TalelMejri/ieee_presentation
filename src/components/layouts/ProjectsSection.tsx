import { motion } from "framer-motion";
import { Code, Podcast, Globe, Rocket, ExternalLink, ChevronLeft, ChevronRight, BookOpen, Video, Play, GraduationCap, Eye } from "lucide-react";
import { useState } from "react";
import code_spectrum1 from "@/assets/projects/codespectrum1.png"
import code_spectrum12 from "@/assets/projects/codespectrum12.png"
import code_spectrum21 from "@/assets/projects/codespctrum2.jpg"
import code_spectrum22 from "@/assets/projects/codespctrum21.jpg"
import cstime from "@/assets/projects/cstime/1.png"
import cstime2 from "@/assets/projects/cstime/2.png"
import cstime3 from "@/assets/projects/cstime/3.png"
import cstwinsatck from "@/assets/projects/cstwinstack/1.png"
import cstwinsatck2 from "@/assets/projects/cstwinstack/2.png"
import cstwinsatck3 from "@/assets/projects/cstwinstack/3.png"
import cstwinsatck4 from "@/assets/projects/cstwinstack/4.png"
import cstwinsatck5 from "@/assets/projects/cstwinstack/5.png"

const projects = [
    {
        id: 1,
        title: "Our Magazine",
        subtitle: "Code Spectrum",
        description: "Code Spectrum is our college Computer Society's flagship magazine featuring cutting-edge articles on AI, cybersecurity, software development, and emerging technologies. Written by our talented members, it offers fresh perspectives on the evolving tech landscape.",
        editions: [
            { version: "1st Edition", year: "2024", participants: "15+ Authors", status: "completed", link: "https://online.fliphtml5.com/uixbf/dmhq/?fbclid=IwY2xjawOOqBpleHRuA2FlbQIxMABicmlkETFxempBN0VuVlFDVkJPSm1Dc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHs01dEWrD8eUtqy63Xr_u6n9Fukgw_D9HAuJq0ISoHfth4VioNOB0XCWg7a1_aem_xLhxxtDcsGRMbH7fd1UBHg#p=1" },
            { version: "2nd Edition", year: "2025", participants: "20+ Authors", status: "completed", link: "https://online.fliphtml5.com/hxrtj/dvjo/?fbclid=IwY2xjawOOqB1leHRuA2FlbQIxMABicmlkETFxempBN0VuVlFDVkJPSm1Dc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrE_QeRHCiY3a4kwPMoucEGxCPRoJQP2hW8XWwlAp0WklZg9HQMGuyEy5rDx_aem_DofHND0rjWKAMZCRiU-TqA#p=1" },
            { version: "3rd Edition", year: "Coming Soon", participants: "25+ Expected", status: "upcoming" }
        ],
        images: [code_spectrum1, code_spectrum12, code_spectrum21, code_spectrum22],
        technologies: ["AI & Machine Learning", "Cybersecurity", "5G to 6G Transition", "Industry 4.0", "Ethical AI", "Software Development"],
        category: "Tech Magazine",
        icon: BookOpen,
        color: "from-blue-500 to-cyan-500",
        borderColor: "border-blue-400/20",
        links: {
            website: "https://code-spectrum-ieee-cs-enicarthage-s.vercel.app/",
        },
    },
    {
        id: 2,
        title: "CS Time Podcast",
        subtitle: "Tech Education & Career Insights",
        description: "Join us in CS Time Podcast where we explore the world of computer Society through engaging conversations with  success stories...",
        episodes: "2+ Episodes",
        platform: "YouTube",
        subscribers: "50+",
        totalViews: "200+ Views",
        images: [cstime, cstime2, cstime3],
        technologies: ["Career Guidance", "Technical Interviews", "Industry Insights", "Tech Trends", "Student Experiences"],
        category: "Media & Education",
        icon: Podcast,
        color: "from-red-500 to-pink-500",
        borderColor: "border-red-400/20",
        links: {
            youtube: "https://www.youtube.com/watch?v=EGcL36GccS4&list=PL2k0o0XZWdu412zFUQ6lBP2yxJoqHUe3P",
        },
    },
    {
        id: 3,
        title: "CS TwinStack",
        subtitle: "Full-Stack Learning Platform",
        description: "An innovative collaborative learning platform developed in partnership with CS ENICarthage and CS ISIMM, designed to master modern web development through comprehensive courses, hands-on projects, and professional certification.",
        features: [
            "Progressive Web App (PWA)",
            "Mobile-First Design",
            "Offline Learning Capabilities",
            "Interactive Coding Exercises",
            "Real-time Progress Tracking",
            "Professional Certifications",
            "Collaborative Learning Environment"
        ],
        images: [cstwinsatck, cstwinsatck2, cstwinsatck3, cstwinsatck4, cstwinsatck5],
        technologies: [
            "Vue.js Framework",
            "Laravel Backend",
            "Tailwind CSS",
            "RESTful APIs",
            "Axios HTTP Client",
            "Database Design",
            "PWA Implementation",
            "Responsive Design"
        ],
        category: "Full-Stack Development",
        icon: Globe,
        color: "from-green-500 to-emerald-500",
        borderColor: "border-green-400/20",
        links: {
            website: "https://cstwinstack-guide.vercel.app/",
            demo: "https://drive.google.com/file/d/1-MMcvYiZrfDRZ7woUXse6IMl6WlXfStN/view?usp=sharing",
        },
        stats: {
            courses: "10+",
            students: "100+",
            certificates: "50+",
            partnership: "CS ISIMM"
        },
    },
];

function ProjectsSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

    const nextImage = (projectId: number, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) + 1) % totalImages
        }));
    };

    const prevImage = (projectId: number, totalImages: number) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
        }));
    };

    return (
        <section id="projects" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#008dfe]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#faa41a]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            {/* Floating Icons */}
            <div className="absolute top-20 right-20">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                >
                    <Code className="w-8 h-8 text-[#008dfe]/30" />
                </motion.div>
            </div>
            <div className="absolute bottom-20 left-20">
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                >
                    <Rocket className="w-6 h-6 text-[#faa41a]/30" />
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
                        <Rocket className="w-5 h-5 text-[#008dfe]" />
                        <span className="text-sm font-semibold bg-gradient-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">
                            Our Projects
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        Innovative <span className="bg-gradient-to-r from-[#008dfe] to-[#faa41a] bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover our portfolio of cutting-edge projects that showcase technical excellence, creativity, and real-world impact
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const IconComponent = project.icon;
                        const currentIndex = currentImageIndex[project.id] || 0;
                        const totalImages = project.images.length;

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                {/* Project Card */}
                                <div className={`relative h-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border ${project.borderColor} group-hover:scale-105 group-hover:border-[#008dfe]/30`}>

                                    {/* Image Container */}
                                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                                        <img
                                            src={project.images[currentIndex]}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&auto=format`;
                                            }}
                                        />

                                        {/* Navigation Arrows */}
                                        {totalImages > 1 && (
                                            <>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        prevImage(project.id, totalImages);
                                                    }}
                                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100"
                                                >
                                                    <ChevronLeft className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        nextImage(project.id, totalImages);
                                                    }}
                                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100"
                                                >
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </>
                                        )}

                                        {/* Image Counter */}
                                        {totalImages > 1 && (
                                            <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 rounded-full text-white text-xs backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-300">
                                                {currentIndex + 1} / {totalImages}
                                            </div>
                                        )}

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${project.color}/10 text-xs font-semibold rounded-full border ${project.borderColor} backdrop-blur-sm`}>
                                                <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full`}></div>
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Project Icon */}
                                        <div className="absolute top-4 right-4">
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                className={`w-10 h-10 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center shadow-lg`}
                                            >
                                                <IconComponent className="w-5 h-5 text-white" />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Title & Subtitle */}
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-[#008dfe] font-semibold text-sm">
                                                {project.subtitle}
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Magazine Editions */}
                                        {project.title === "Our Magazine" && (
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                                    <BookOpen className="w-4 h-4" />
                                                    Editions
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.editions?.map((edition, idx) => (
                                                        <motion.a
                                                            key={idx}
                                                            href={edition.link || "#"}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${edition.status === 'completed'
                                                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                                                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                                                                }`}
                                                        >
                                                            <Eye className="w-3 h-3" />
                                                            {edition.version}
                                                        </motion.a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Podcast Stats */}
                                        {project.title === "CS Time Podcast" && (
                                            <div className="mb-4 grid grid-cols-3 gap-2">
                                                <div className="text-center p-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg">
                                                    <div className="text-sm font-bold">{project.episodes}</div>
                                                    <div className="text-xs opacity-90">Episodes</div>
                                                </div>
                                                <div className="text-center p-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg">
                                                    <div className="text-sm font-bold">{project.subscribers}</div>
                                                    <div className="text-xs opacity-90">Subscribers</div>
                                                </div>
                                                <div className="text-center p-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg">
                                                    <div className="text-sm font-bold">{project.totalViews}</div>
                                                    <div className="text-xs opacity-90">Views</div>
                                                </div>
                                            </div>
                                        )}

                                        {/* CS TwinStack Stats */}
                                        {project.title === "CS TwinStack" && (
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                                    <GraduationCap className="w-4 h-4" />
                                                    Platform Impact
                                                </h4>
                                            </div>
                                        )}

                                        {/* Technologies */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                                {project.title === "Our Magazine" ? "Featured Topics" : "Tech Stack"}
                                            </h4>
                                            <div className="flex flex-wrap gap-1">
                                                {project.technologies.slice(0, 4).map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 4 && (
                                                    <span className="px-2 py-1 bg-gradient-to-r from-[#008dfe] to-[#faa41a] text-white text-xs rounded-full">
                                                        +{project.technologies.length - 4}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Links */}
                                        <div className="flex items-center gap-2">
                                            {project.links.website && (
                                                <motion.a
                                                    href={project.links.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#008dfe] to-[#faa41a] text-white rounded-full text-xs font-semibold transition-all duration-300 flex-1 justify-center"
                                                >
                                                    <ExternalLink className="w-3 h-3" />
                                                    Visit Project
                                                </motion.a>
                                            )}
                                            {project.links.youtube && (
                                                <motion.a
                                                    href={project.links.youtube}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex items-center gap-2 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full text-xs font-semibold transition-all duration-300 flex-1 justify-center"
                                                >
                                                    <Play className="w-3 h-3" />
                                                    Watch
                                                </motion.a>
                                            )}
                                            {project.links.demo && (
                                                <motion.a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex items-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full text-xs font-semibold transition-all duration-300 flex-1 justify-center"
                                                >
                                                    <Video className="w-3 h-3" />
                                                    Demo
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

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
                          Stay tuned for more exciting projects and innovations from our Computer Society!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ProjectsSection;