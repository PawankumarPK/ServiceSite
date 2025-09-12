import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

// Import your existing project images
import portfolio1 from "../../../public/png/portfolio_1.png"
import portfolio2 from "../../../public/png/portfolio_2.png"
import portfolio3 from "../../../public/png/portfolio_3.png"
import portfolio4 from "../../../public/png/portfolio_4.png"
import portfolio5 from "../../../public/png/portfolio_5.png"
import portfolio6 from "../../../public/png/portfolio_6.png"
import portfolio7 from "../../../public/png/portfolio_7.png"
import portfolio8 from "../../../public/png/portfolio_8.png"
import portfolio9 from "../../../public/png/portfolio_9.png"
import portfolio10 from "../../../public/png/portfolio_10.png"

const ModernPortfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedProject, setSelectedProject] = useState(null)
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const categories = [
        { id: 'all', name: 'All Projects', count: 10 },
        { id: 'web', name: 'Web Apps', count: 4 },
        { id: 'mobile', name: 'Mobile Apps', count: 3 },
        { id: 'design', name: 'UI/UX Design', count: 3 },
    ]

    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            category: "web",
            description: "Modern e-commerce solution with advanced features and seamless user experience",
            image: portfolio1,
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            color: "from-blue-500 to-purple-600",
            year: "2024"
        },
        {
            id: 2,
            title: "Mobile Banking App",
            category: "mobile",
            description: "Secure and intuitive mobile banking application with biometric authentication",
            image: portfolio2,
            tags: ["React Native", "Firebase", "Biometrics", "Encryption"],
            color: "from-green-500 to-teal-600",
            year: "2024"
        },
        {
            id: 3,
            title: "Healthcare Dashboard",
            category: "design",
            description: "Comprehensive healthcare management dashboard with data visualization",
            image: portfolio3,
            tags: ["Figma", "User Research", "Prototyping", "Testing"],
            color: "from-red-500 to-pink-600",
            year: "2023"
        },
        {
            id: 4,
            title: "Learning Management System",
            category: "web",
            description: "Interactive LMS platform for online education and course management",
            image: portfolio4,
            tags: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
            color: "from-purple-500 to-indigo-600",
            year: "2024"
        },
        {
            id: 5,
            title: "Food Delivery App",
            category: "mobile",
            description: "Fast and reliable food delivery app with real-time tracking",
            image: portfolio5,
            tags: ["Flutter", "Firebase", "Maps API", "Payment Gateway"],
            color: "from-orange-500 to-red-600",
            year: "2023"
        },
        {
            id: 6,
            title: "SaaS Analytics Platform",
            category: "web",
            description: "Powerful analytics platform for business intelligence and reporting",
            image: portfolio6,
            tags: ["Next.js", "Python", "PostgreSQL", "Chart.js"],
            color: "from-teal-500 to-blue-600",
            year: "2024"
        },
        {
            id: 7,
            title: "Fitness Tracking App",
            category: "mobile",
            description: "Comprehensive fitness tracking with AI-powered workout recommendations",
            image: portfolio7,
            tags: ["Swift", "HealthKit", "CoreML", "CloudKit"],
            color: "from-lime-500 to-green-600",
            year: "2023"
        },
        {
            id: 8,
            title: "Travel Booking Platform",
            category: "design",
            description: "Beautiful and intuitive travel booking experience design",
            image: portfolio8,
            tags: ["Adobe XD", "User Journey", "Wireframes", "Prototypes"],
            color: "from-cyan-500 to-blue-600",
            year: "2024"
        },
        {
            id: 9,
            title: "Real Estate Portal",
            category: "web",
            description: "Modern real estate platform with virtual tours and advanced search",
            image: portfolio9,
            tags: ["React", "Three.js", "Express", "MongoDB"],
            color: "from-amber-500 to-orange-600",
            year: "2023"
        },
        {
            id: 10,
            title: "Meditation App UI",
            category: "design",
            description: "Calming and peaceful meditation app interface design",
            image: portfolio10,
            tags: ["Sketch", "Principle", "After Effects", "Lottie"],
            color: "from-violet-500 to-purple-600",
            year: "2024"
        }
    ]

    const filteredProjects = selectedCategory === 'all'
        ? projects
        : projects.filter(project => project.category === selectedCategory)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section
            ref={ref}
            id="portfolio"
            className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: 100 } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-gradient-to-r from-secondary to-accent mx-auto mb-6"
                    />
                    <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                        Our
                        <span className="text-gradient"> Portfolio</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our latest projects showcasing innovation, creativity, and technical excellence across various industries.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {category.name}
                            <span className="ml-2 text-sm opacity-75">({category.count})</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{
                                    y: -15,
                                    rotateX: 5,
                                    rotateY: 5,
                                }}
                                onClick={() => setSelectedProject(project)}
                                className="group cursor-pointer"
                            >
                                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-3d">
                                    {/* Project Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Overlay */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileHover={{ scale: 1 }}
                                                transition={{ delay: 0.1 }}
                                                className="text-white text-center"
                                            >
                                                <div className="text-4xl mb-2">👁️</div>
                                                <div className="font-semibold">View Project</div>
                                            </motion.div>
                                        </motion.div>

                                        {/* Year Badge */}
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                                            {project.year}
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* Category Badge */}
                                        <div className="flex items-center justify-between">
                                            <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs rounded-full font-medium capitalize`}>
                                                {project.category === 'web' ? 'Web App' : project.category === 'mobile' ? 'Mobile App' : 'UI/UX Design'}
                                            </span>

                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className="text-gray-400 group-hover:text-secondary transition-colors duration-300"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Floating Elements */}
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            rotate: [0, 5, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                        className="absolute top-2 left-2 w-3 h-3 bg-secondary rounded-full opacity-50"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-primary mb-2">
                                            {selectedProject.title}
                                        </h3>
                                        <span className={`px-4 py-2 bg-gradient-to-r ${selectedProject.color} text-white rounded-full font-medium`}>
                                            {selectedProject.year}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="mb-6">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-64 object-cover rounded-xl"
                                    />
                                </div>

                                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-primary mb-3">Technologies Used:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-medium hover:shadow-lg transition-all duration-300">
                                        View Live Demo
                                    </button>
                                    <button className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300">
                                        View Case Study
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-6 text-lg">
                        Have a project in mind? Let's create something amazing together!
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(`tel:9910765616`)}
                        className="px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-medium text-lg hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300"
                    >
                        Start Your Project
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default ModernPortfolio

