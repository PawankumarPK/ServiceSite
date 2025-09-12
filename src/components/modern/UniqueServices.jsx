import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

// Import icons
import editIcon from "../../svg/editBlack.svg"
import androidIcon from "../../svg/android.svg"
import appStoreIos from "../../svg/appStoreIos.svg"
import serverIcon from "../../svg/server.svg"
import webIcon from "../../svg/web.svg"
import domainIcon from "../../svg/domain.svg"

const UniqueServices = () => {
    const [hoveredService, setHoveredService] = useState(null)
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "Cutting-edge web applications with modern technologies, responsive design, and lightning-fast performance.",
            icon: editIcon,
            color: "#6366f1",
            gradient: "from-indigo-500 to-purple-600",
            features: ["React/Next.js", "Node.js", "Modern UI", "PWA Ready"],
            stats: "100+ Projects"
        },
        {
            id: 2,
            title: "Mobile Apps",
            description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
            icon: androidIcon,
            color: "#10b981",
            gradient: "from-emerald-500 to-teal-600",
            features: ["React Native", "Flutter", "iOS/Android", "App Store Ready"],
            stats: "50+ Apps"
        },
        {
            id: 3,
            title: "UI/UX Design",
            description: "Beautiful, intuitive designs that engage users and drive conversions through thoughtful user experience.",
            icon: webIcon,
            color: "#f59e0b",
            gradient: "from-amber-500 to-orange-600",
            features: ["Figma", "User Research", "Prototyping", "Design Systems"],
            stats: "200+ Designs"
        },
        {
            id: 4,
            title: "Backend Development",
            description: "Robust, scalable server-side solutions with modern APIs, databases, and cloud infrastructure.",
            icon: serverIcon,
            color: "#ef4444",
            gradient: "from-red-500 to-rose-600",
            features: ["APIs", "Databases", "Cloud", "Microservices"],
            stats: "Scalable"
        },
        {
            id: 5,
            title: "iOS Development",
            description: "Premium native iOS applications with seamless performance and stunning user interfaces.",
            icon: appStoreIos,
            color: "#8b5cf6",
            gradient: "from-violet-500 to-purple-600",
            features: ["Swift/SwiftUI", "App Store", "iOS 16+", "Native Performance"],
            stats: "App Store Ready"
        },
        {
            id: 6,
            title: "DevOps & Cloud",
            description: "Modern infrastructure, continuous deployment, and monitoring solutions for your applications.",
            icon: domainIcon,
            color: "#06b6d4",
            gradient: "from-cyan-500 to-blue-600",
            features: ["Docker", "AWS/Azure", "CI/CD", "Monitoring"],
            stats: "99.9% Uptime"
        }
    ]

    return (
        <section
            ref={ref}
            id="services"
            className="py-20 relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #0f0f0f 100%)',
            }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-96 h-96 opacity-10"
                    style={{
                        background: 'conic-gradient(from 0deg, transparent 0%, #9CC118 10%, transparent 20%, transparent 80%, #DBD525 90%, transparent 100%)',
                        borderRadius: '50%',
                        filter: 'blur(20px)'
                    }}
                />

                <motion.div
                    animate={{
                        rotate: -360,
                        scale: [1.1, 1, 1.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 w-80 h-80 opacity-10"
                    style={{
                        background: 'conic-gradient(from 180deg, transparent 0%, #DBD525 15%, transparent 30%, transparent 70%, #9CC118 85%, transparent 100%)',
                        borderRadius: '50%',
                        filter: 'blur(25px)'
                    }}
                />

                {/* Tech Pattern Overlay */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
              linear-gradient(45deg, transparent 24%, rgba(156, 193, 24, 0.1) 25%, rgba(156, 193, 24, 0.1) 26%, transparent 27%, transparent 74%, rgba(219, 213, 37, 0.1) 75%, rgba(219, 213, 37, 0.1) 76%, transparent 77%),
              radial-gradient(circle at 50% 50%, rgba(156, 193, 24, 0.05) 2px, transparent 2px)
            `,
                        backgroundSize: '60px 60px, 30px 30px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 backdrop-blur-sm mb-8"
                    >
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse"></span>
                        <span className="text-secondary font-medium">Our Expertise</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                        WHAT WE
                        <span className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">
                            CREATE
                        </span>
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Transforming businesses through innovative technology solutions and exceptional digital experiences
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            onHoverStart={() => setHoveredService(service.id)}
                            onHoverEnd={() => setHoveredService(null)}
                            className="group relative"
                        >
                            <motion.div
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                }}
                                transition={{ duration: 0.3 }}
                                className="relative h-full p-8 rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden"
                                style={{
                                    background: hoveredService === service.id
                                        ? `linear-gradient(135deg, ${service.color}15, ${service.color}05)`
                                        : 'rgba(255, 255, 255, 0.05)'
                                }}
                            >
                                {/* Animated Border */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl"
                                    animate={{
                                        background: hoveredService === service.id
                                            ? `conic-gradient(from 0deg, transparent 0%, ${service.color} 50%, transparent 100%)`
                                            : 'transparent'
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        padding: '2px',
                                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                        maskComposite: 'subtract',
                                    }}
                                />

                                {/* Service Icon */}
                                <motion.div
                                    animate={{
                                        scale: hoveredService === service.id ? 1.1 : 1,
                                        rotate: hoveredService === service.id ? 5 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="relative mb-6"
                                >
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20"
                                        style={{
                                            background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`
                                        }}
                                    >
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={28}
                                            height={28}
                                            className="filter brightness-0 invert"
                                        />
                                    </div>

                                    {/* Stats Badge */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: hoveredService === service.id ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-bold text-black"
                                        style={{
                                            background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`
                                        }}
                                    >
                                        {service.stats}
                                    </motion.div>
                                </motion.div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-2 gap-2 mb-6">
                                        {service.features.map((feature, featureIndex) => (
                                            <motion.div
                                                key={featureIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={
                                                    hoveredService === service.id
                                                        ? { opacity: 1, x: 0 }
                                                        : { opacity: 0.7, x: 0 }
                                                }
                                                transition={{
                                                    duration: 0.3,
                                                    delay: featureIndex * 0.1
                                                }}
                                                className="flex items-center text-sm text-gray-400"
                                            >
                                                <div
                                                    className="w-2 h-2 rounded-full mr-2"
                                                    style={{ backgroundColor: service.color }}
                                                />
                                                {feature}
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full py-3 rounded-xl font-medium transition-all duration-300 border"
                                        style={{
                                            background: hoveredService === service.id
                                                ? `linear-gradient(135deg, ${service.color}, ${service.color}dd)`
                                                : 'transparent',
                                            borderColor: hoveredService === service.id ? service.color : 'rgba(255, 255, 255, 0.2)',
                                            color: hoveredService === service.id ? '#000' : '#fff'
                                        }}
                                    >
                                        Learn More
                                    </motion.button>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute top-4 right-4 w-3 h-3 rounded-full"
                                    style={{ backgroundColor: service.color }}
                                />

                                <motion.div
                                    animate={{
                                        y: [0, 10, 0],
                                        opacity: [0.2, 0.4, 0.2],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    className="absolute bottom-4 left-4 w-2 h-2 rounded-full"
                                    style={{ backgroundColor: service.color }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-center mt-20"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(`tel:9910765616`)}
                        className="px-12 py-4 bg-gradient-to-r from-secondary to-accent text-black rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300"
                        style={{
                            boxShadow: "0 10px 40px rgba(156, 193, 24, 0.3)"
                        }}
                    >
                        Start Your Project Today
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default UniqueServices

