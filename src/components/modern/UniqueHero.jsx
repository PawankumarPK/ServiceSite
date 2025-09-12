import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const UniqueHero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [currentWord, setCurrentWord] = useState(0)
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 300], [0, -150])
    const y2 = useTransform(scrollY, [0, 300], [0, -100])

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const words = ['DIGITAL', 'CREATIVE', 'INNOVATIVE', 'MODERN']

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: (e.clientY / window.innerHeight) * 2 - 1
            })
        }

        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length)
        }, 2000)

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            clearInterval(interval)
        }
    }, [])

    return (
        <section
            ref={ref}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            id="home"
            style={{
                background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #0c0c0c 100%)',
            }}
        >
            {/* Animated Geometric Background */}
            <div className="absolute inset-0">
                {/* Large rotating rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                        width: '150vw',
                        height: '150vw',
                        background: 'conic-gradient(from 0deg, transparent 0%, #9CC118 2%, transparent 4%, transparent 96%, #DBD525 98%, transparent 100%)',
                        borderRadius: '50%',
                        opacity: 0.1,
                    }}
                />

                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                        width: '120vw',
                        height: '120vw',
                        background: 'conic-gradient(from 180deg, transparent 0%, #DBD525 3%, transparent 6%, transparent 94%, #9CC118 97%, transparent 100%)',
                        borderRadius: '50%',
                        opacity: 0.15,
                    }}
                />

                {/* Hexagonal grid pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
              radial-gradient(circle at 25% 25%, #9CC118 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #DBD525 1px, transparent 1px),
              linear-gradient(45deg, transparent 24%, rgba(156, 193, 24, 0.05) 25%, rgba(156, 193, 24, 0.05) 26%, transparent 27%, transparent 74%, rgba(219, 213, 37, 0.05) 75%, rgba(219, 213, 37, 0.05) 76%, transparent 77%)
            `,
                        backgroundSize: '50px 50px, 30px 30px, 100px 100px',
                        animation: 'slide 20s linear infinite'
                    }}
                />

                {/* Floating tech elements */}
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 360],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5
                        }}
                        className="absolute"
                        style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            width: `${20 + Math.random() * 40}px`,
                            height: `${20 + Math.random() * 40}px`,
                        }}
                    >
                        <div
                            className="w-full h-full border-2 border-secondary"
                            style={{
                                clipPath: i % 3 === 0
                                    ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                                    : i % 3 === 1
                                        ? 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                                        : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                            }}
                        />
                    </motion.div>
                ))}

                {/* Glowing orbs that follow mouse */}
                <motion.div
                    animate={{
                        x: mousePosition.x * 100,
                        y: mousePosition.y * 100,
                    }}
                    transition={{ type: "spring", stiffness: 150, damping: 30 }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(156, 193, 24, 0.3) 0%, rgba(156, 193, 24, 0.1) 40%, transparent 70%)',
                        filter: 'blur(40px)',
                    }}
                />

                <motion.div
                    animate={{
                        x: mousePosition.x * -80,
                        y: mousePosition.y * -80,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(219, 213, 37, 0.4) 0%, rgba(219, 213, 37, 0.1) 40%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse"></span>
                        <span className="text-secondary font-medium">Welcome to the Future of Development</span>
                    </div>
                </motion.div>

                {/* Main Headline with Rotating Words */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
                        <span className="block text-white mb-4">WE BUILD</span>
                        <motion.span
                            key={currentWord}
                            initial={{ opacity: 0, rotateX: 90, scale: 0.8 }}
                            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
                            exit={{ opacity: 0, rotateX: -90, scale: 0.8 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="block bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-pulse"
                            style={{
                                backgroundSize: '200% 100%',
                                animation: 'gradient-shift 3s ease infinite',
                            }}
                        >
                            {words[currentWord]}
                        </motion.span>
                        <span className="block text-white mt-4">EXPERIENCES</span>
                    </h1>
                </motion.div>

                {/* Subtitle with Typewriter Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mb-12"
                >
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        <span className="text-secondary font-semibold">Transforming ideas</span> into
                        <span className="text-accent font-semibold"> immersive digital realities</span> with
                        cutting-edge technology, innovative design, and unparalleled performance
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            y: -5,
                            boxShadow: "0 20px 40px rgba(156, 193, 24, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative px-8 py-4 bg-gradient-to-r from-secondary to-accent text-black rounded-full font-bold text-lg min-w-[250px] overflow-hidden"
                    >
                        <span className="relative z-10">Explore Our Work</span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-accent to-secondary"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.button>

                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            y: -5,
                            backgroundColor: "rgba(156, 193, 24, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(`tel:9910765616`)}
                        className="group px-8 py-4 border-2 border-secondary text-secondary rounded-full font-bold text-lg min-w-[250px] backdrop-blur-sm hover:text-white transition-all duration-300"
                    >
                        <span className="flex items-center justify-center">
                            <span>Start Your Project</span>
                            <motion.span
                                className="ml-2"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </span>
                    </motion.button>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                >
                    {[
                        { number: '500+', label: 'Projects Delivered', icon: '🚀' },
                        { number: '150+', label: 'Happy Clients', icon: '😊' },
                        { number: '99.9%', label: 'Uptime', icon: '⚡' },
                        { number: '24/7', label: 'Support', icon: '🛟' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-300"
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 text-sm md:text-base">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-gray-400 text-sm mb-4">Discover More</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1 h-16 bg-gradient-to-b from-secondary to-transparent rounded-full"
                />
            </motion.div>

            {/* Floating WhatsApp Button */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 2.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open(`https://wa.me/+919910765616?text=`)}
                className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg z-50 hover:shadow-2xl transition-all duration-300"
                style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)',
                }}
            >
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382z" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Custom Animations */}
            <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(50px) translateY(50px); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
        </section>
    )
}

export default UniqueHero

