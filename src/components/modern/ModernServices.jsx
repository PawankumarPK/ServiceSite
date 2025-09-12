import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

// Import icons (you can replace these with your existing SVG imports)
import editIcon from "../../svg/editBlack.svg"
import androidIcon from "../../svg/android.svg"
import appStoreIos from "../../svg/appStoreIos.svg"
import serverIcon from "../../svg/server.svg"
import webIcon from "../../svg/web.svg"
import domainIcon from "../../svg/domain.svg"

const ModernServices = () => {
    const [hoveredCard, setHoveredCard] = useState(null)
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "From individual and portfolio websites to commercial or custom sites, we create stunning web experiences with modern technologies and responsive design.",
            icon: editIcon,
            color: "from-blue-500 to-purple-600",
            features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"]
        },
        {
            id: 2,
            title: "UI/UX Design",
            description: "We create user and customer experiences that engage, inspire, and drive tangible business results through beautiful and intuitive design.",
            icon: webIcon,
            color: "from-green-500 to-teal-600",
            features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"]
        },
        {
            id: 3,
            title: "Backend Development",
            description: "Robust server-side solutions with cutting-edge technologies including APIs, databases, and cloud infrastructure for scalable applications.",
            icon: serverIcon,
            color: "from-orange-500 to-red-600",
            features: ["API Development", "Database Design", "Cloud Integration", "Security"]
        },
        {
            id: 4,
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android with superior performance and user experience.",
            icon: androidIcon,
            color: "from-purple-500 to-pink-600",
            features: ["Native Apps", "Cross-Platform", "App Store Optimization", "Push Notifications"]
        },
        {
            id: 5,
            title: "iOS Development",
            description: "Premium iOS applications with native performance, seamless integration, and stunning user interfaces that delight users.",
            icon: appStoreIos,
            color: "from-indigo-500 to-blue-600",
            features: ["Swift Development", "App Store Guidelines", "iOS Optimization", "Modern UI"]
        },
        {
            id: 6,
            title: "Maintenance & Support",
            description: "Comprehensive maintenance and support services to keep your digital products running smoothly and up-to-date.",
            icon: domainIcon,
            color: "from-teal-500 to-green-600",
            features: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Bug Fixes"]
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

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
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
            id="services"
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
                        <span className="text-gradient"> Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We offer comprehensive digital solutions to transform your business with cutting-edge technology and innovative design.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            onHoverStart={() => setHoveredCard(service.id)}
                            onHoverEnd={() => setHoveredCard(null)}
                            className="group"
                        >
                            <motion.div
                                whileHover={{
                                    y: -10,
                                    rotateX: 5,
                                    rotateY: 5,
                                    scale: 1.02
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut"
                                }}
                                className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-3d h-full"
                                style={{
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                {/* Gradient Background on Hover */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: hoveredCard === service.id ? 0.1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl`}
                                />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10 mb-6"
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={28}
                                            height={28}
                                            className="filter brightness-0 invert"
                                        />
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {service.features.map((feature, featureIndex) => (
                                            <motion.div
                                                key={featureIndex}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={
                                                    hoveredCard === service.id
                                                        ? { opacity: 1, x: 0 }
                                                        : { opacity: 0.7, x: 0 }
                                                }
                                                transition={{
                                                    duration: 0.3,
                                                    delay: featureIndex * 0.1
                                                }}
                                                className="flex items-center text-sm text-gray-500"
                                            >
                                                <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                                                {feature}
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Learn More Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${hoveredCard === service.id
                                                ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        Learn More
                                    </motion.button>
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
                                    className="absolute top-4 right-4 w-3 h-3 bg-secondary rounded-full opacity-50"
                                />

                                <motion.div
                                    animate={{
                                        y: [0, 10, 0],
                                        rotate: [0, -5, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    className="absolute bottom-4 left-4 w-2 h-2 bg-accent rounded-full opacity-30"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(`tel:9910765616`)}
                        className="px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-medium text-lg hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300"
                    >
                        Start Your Project Today
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default ModernServices

