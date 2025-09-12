import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

// Import your existing images
import studyImage from "../../../public/png/girl.png"
import teamImage1 from "../../../public/png/team1.png"
import teamImage2 from "../../../public/png/team2.png"
import teamImage3 from "../../../public/png/team3.png"

const ModernAbout = () => {
    const [activeTimeline, setActiveTimeline] = useState(0)
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const timelineData = [
        {
            year: "2020",
            title: "Company Founded",
            description: "Started with a vision to transform digital experiences and help businesses grow through innovative technology solutions.",
            icon: "🚀",
            color: "from-blue-500 to-purple-600"
        },
        {
            year: "2021",
            title: "Team Expansion",
            description: "Expanded our talented team of developers, designers, and project managers to deliver world-class solutions.",
            icon: "👥",
            color: "from-green-500 to-teal-600"
        },
        {
            year: "2022",
            title: "100+ Projects",
            description: "Successfully delivered over 100 projects across various industries, gaining invaluable experience and expertise.",
            icon: "🎯",
            color: "from-orange-500 to-red-600"
        },
        {
            year: "2023",
            title: "Industry Recognition",
            description: "Received multiple awards and recognition for our innovative solutions and exceptional client satisfaction.",
            icon: "🏆",
            color: "from-purple-500 to-pink-600"
        },
        {
            year: "2024",
            title: "Global Reach",
            description: "Expanded our services globally, serving clients across different continents with cutting-edge digital solutions.",
            icon: "🌍",
            color: "from-indigo-500 to-blue-600"
        }
    ]

    const features = [
        {
            title: "Innovation First",
            description: "We stay ahead of technology trends to deliver cutting-edge solutions",
            icon: "💡",
            color: "from-yellow-400 to-orange-500"
        },
        {
            title: "Client-Centric",
            description: "Your success is our priority. We work closely with you at every step",
            icon: "🤝",
            color: "from-green-400 to-teal-500"
        },
        {
            title: "Quality Assured",
            description: "Rigorous testing and quality control ensure perfect delivery every time",
            icon: "✨",
            color: "from-purple-400 to-pink-500"
        },
        {
            title: "24/7 Support",
            description: "Round-the-clock support to ensure your systems run smoothly",
            icon: "🛟",
            color: "from-blue-400 to-indigo-500"
        }
    ]

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section
            ref={ref}
            id="about"
            className="py-20 bg-gradient-to-br from-primary to-primary/95 overflow-hidden relative"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        About
                        <span className="text-gradient"> Us</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We are passionate innovators dedicated to transforming your digital vision into reality through cutting-edge technology and exceptional design.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                We are making design better for everyone
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                We specialize in high-performance immersive digital experiences aimed at delivering our clients a competitive advantage and effective ROI on their investment.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Our team of Solution Architects, Developers, Designers and Project Managers deliver world-class solutions that are innovative, engaging, scalable, maintainable and sustainable.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our solutions are built on the latest technologies to enable you to achieve your goals in the most cost-efficient manner possible.
                            </p>
                        </motion.div>

                        {/* Features Grid */}
                        <motion.div
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 text-2xl`}>
                                        {feature.icon}
                                    </div>
                                    <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                                    <p className="text-gray-300 text-sm">{feature.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.button
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open(`tel:9910765616`)}
                            className="px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-medium text-lg hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300"
                        >
                            Start Your Project
                        </motion.button>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05, rotateY: 10 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <Image
                                src={studyImage}
                                alt="About us"
                                className="rounded-2xl shadow-2xl"
                                priority
                            />

                            {/* Floating Elements */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                            >
                                500+
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, 15, 0],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                            >
                                5★
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Timeline Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Our Journey
                    </h3>

                    <div className="relative">
                        {/* Timeline Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent transform -translate-y-1/2 origin-left"
                        />

                        {/* Timeline Items */}
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8">
                            {timelineData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                    onHoverStart={() => setActiveTimeline(index)}
                                    className="text-center group cursor-pointer"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, y: -10 }}
                                        className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                                    >
                                        {item.icon}
                                    </motion.div>

                                    <motion.div
                                        animate={{
                                            scale: activeTimeline === index ? 1.05 : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="glass rounded-xl p-6 h-full"
                                    >
                                        <div className="text-secondary font-bold text-xl mb-2">
                                            {item.year}
                                        </div>
                                        <h4 className="text-white font-semibold mb-3">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-300 text-sm">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Team Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center"
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Meet Our Team
                    </h3>

                    <div className="flex justify-center items-center space-x-4 mb-8">
                        {[teamImage1, teamImage2, teamImage3].map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -10 }}
                                className="relative"
                            >
                                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-secondary shadow-lg">
                                    <Image
                                        src={image}
                                        alt={`Team member ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {index === 1 && (
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Our diverse team of experts brings together creativity, technical excellence, and passion to deliver exceptional results for every project.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default ModernAbout

