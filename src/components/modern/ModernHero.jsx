import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Simple3DBackground from '../3D/Simple3DBackground'

const ModernHero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary/10"
            id="home"
        >
            {/* 3D Background Elements */}
            <Simple3DBackground />

            {/* Animated Background Gradients */}
            <div className="absolute inset-0 opacity-30">
                <motion.div
                    animate={{
                        x: mousePosition.x * 50,
                        y: mousePosition.y * 50,
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 30 }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: mousePosition.x * -30,
                        y: mousePosition.y * -30,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="text-center"
                >
                    {/* Main Heading */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
                            style={{
                                background: 'linear-gradient(45deg, #ffffff, #9CC118, #DBD525)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            We Create
                            <br />
                            <motion.span
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="text-gradient relative"
                            >
                                Digital
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-4 -right-4 w-8 h-8 border-2 border-secondary rounded-full opacity-50"
                                />
                            </motion.span>
                            <br />
                            Excellence
                        </motion.h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        Transforming ideas into immersive digital experiences with cutting-edge technology,
                        innovative design, and unparalleled performance.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-medium text-lg hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300 min-w-[200px]"
                        >
                            Explore Services
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open(`tel:9910765616`)}
                            className="px-8 py-4 border-2 border-white text-white rounded-full font-medium text-lg hover:bg-white hover:text-primary transition-all duration-300 min-w-[200px] glass"
                        >
                            Contact Us
                        </motion.button>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 glass rounded-2xl p-8 max-w-4xl mx-auto"
                    >
                        {[
                            { number: '500+', label: 'Projects Completed' },
                            { number: '50+', label: 'Happy Clients' },
                            { number: '99%', label: 'Success Rate' },
                            { number: '24/7', label: 'Support' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-300 text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-3 bg-white/50 rounded-full mt-2"
                    />
                </motion.div>
                <p className="text-white/70 text-sm mt-2 text-center">Scroll Down</p>
            </motion.div>

            {/* Floating WhatsApp Button */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open(`https://wa.me/+919910765616?text=`)}
                className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 z-50 breathe"
            >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z" />
                </svg>
            </motion.div>
        </section>
    )
}

export default ModernHero
