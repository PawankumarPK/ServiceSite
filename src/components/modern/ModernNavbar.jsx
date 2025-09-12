import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const ModernNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'backdrop-blur-md bg-white/10 border-b border-white/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">O</span>
                        </div>
                        <span className="text-2xl font-bold text-gradient">
                            OwnTechnologies
                        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link href={item.href}>
                                    <span className="text-white hover:text-secondary transition-colors duration-300 font-medium cursor-pointer relative group">
                                        {item.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                                    </span>
                                </Link>
                            </motion.div>
                        ))}

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open(`tel:9910765616`)}
                            className="px-6 py-3 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-medium hover:shadow-lg hover:shadow-secondary/25 transition-all duration-300"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <motion.span
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 6 : 0,
                                }}
                                className="w-6 h-0.5 bg-white block transition-all duration-300"
                            />
                            <motion.span
                                animate={{
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                }}
                                className="w-6 h-0.5 bg-white block mt-1 transition-all duration-300"
                            />
                            <motion.span
                                animate={{
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                    y: isMobileMenuOpen ? -6 : 0,
                                }}
                                className="w-6 h-0.5 bg-white block mt-1 transition-all duration-300"
                            />
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden backdrop-blur-md bg-black/50 border-t border-white/20"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link href={item.href}>
                                        <span
                                            className="block text-white hover:text-secondary transition-colors duration-300 font-medium cursor-pointer"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                onClick={() => {
                                    window.open(`tel:9910765616`)
                                    setIsMobileMenuOpen(false)
                                }}
                                className="w-full px-6 py-3 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-medium"
                            >
                                Get Started
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default ModernNavbar

