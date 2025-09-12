import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ModernFooter = () => {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        services: [
            { name: 'Web Development', href: '#services' },
            { name: 'Mobile Apps', href: '#services' },
            { name: 'UI/UX Design', href: '#services' },
            { name: 'Backend Development', href: '#services' },
            { name: 'E-commerce', href: '#services' },
            { name: 'Digital Marketing', href: '#services' }
        ],
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Our Team', href: '#about' },
            { name: 'Portfolio', href: '#portfolio' },
            { name: 'Case Studies', href: '#portfolio' },
            { name: 'Testimonials', href: '#about' },
            { name: 'Contact', href: '#contact' }
        ],
        resources: [
            { name: 'Blog', href: 'https://blog.owntechnologies.in/', external: true },
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Support', href: '#contact' },
            { name: 'FAQ', href: '#' },
            { name: 'Documentation', href: '#' }
        ]
    }

    const socialLinks = [
        {
            name: 'LinkedIn',
            icon: '💼',
            url: 'https://www.linkedin.com/company/own-technologies/',
            color: 'from-blue-600 to-blue-700'
        },
        {
            name: 'Instagram',
            icon: '📸',
            url: 'https://www.instagram.com/own_technologies/',
            color: 'from-pink-500 to-purple-600'
        },
        {
            name: 'WhatsApp',
            icon: '💬',
            url: 'https://wa.me/+919910765616?text=',
            color: 'from-green-500 to-green-600'
        },
        {
            name: 'Email',
            icon: '📧',
            url: 'mailto:info@owntechnologies.in',
            color: 'from-red-500 to-pink-600'
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const waveVariants = {
        animate: {
            d: [
                "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    return (
        <footer className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 overflow-hidden">
            {/* Animated Wave Background */}
            <div className="absolute inset-0 opacity-10">
                <svg
                    viewBox="0 0 1440 320"
                    className="absolute bottom-0 w-full h-full"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        variants={waveVariants}
                        animate="animate"
                        fill="url(#gradient1)"
                        fillOpacity="0.3"
                    />
                    <defs>
                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9CC118" />
                            <stop offset="50%" stopColor="#DBD525" />
                            <stop offset="100%" stopColor="#9CC118" />
                        </linearGradient>
                    </defs>
                </svg>

                <svg
                    viewBox="0 0 1440 320"
                    className="absolute bottom-0 w-full h-full"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        variants={waveVariants}
                        animate="animate"
                        fill="url(#gradient2)"
                        fillOpacity="0.2"
                        style={{
                            animationDelay: '2s'
                        }}
                    />
                    <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#DBD525" />
                            <stop offset="50%" stopColor="#9CC118" />
                            <stop offset="100%" stopColor="#DBD525" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Floating Background Elements */}
            <div className="absolute inset-0 opacity-5">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 180, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1.5
                        }}
                        className={`absolute w-20 h-20 bg-secondary rounded-full blur-xl`}
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 20}%`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                {/* Main Footer Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
                >
                    {/* Company Info */}
                    <motion.div variants={itemVariants} className="lg:col-span-2">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-3 mb-6"
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">O</span>
                            </div>
                            <span className="text-2xl font-bold text-gradient">
                                OwnTechnologies
                            </span>
                        </motion.div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Transforming ideas into immersive digital experiences with cutting-edge technology,
                            innovative design, and unparalleled performance. Your success is our mission.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center space-x-3 text-gray-300"
                            >
                                <span className="text-secondary">📞</span>
                                <span>+91-9910765616</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center space-x-3 text-gray-300"
                            >
                                <span className="text-secondary">📧</span>
                                <span>info@owntechnologies.in</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center space-x-3 text-gray-300"
                            >
                                <span className="text-secondary">📍</span>
                                <span>India (Remote)</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white font-bold text-lg mb-6 relative">
                            Services
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '50px' }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute -bottom-2 left-0 h-0.5 bg-secondary"
                            />
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                >
                                    <Link href={link.href}>
                                        <span className="text-gray-300 hover:text-secondary transition-colors duration-300 cursor-pointer">
                                            {link.name}
                                        </span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white font-bold text-lg mb-6 relative">
                            Company
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '50px' }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute -bottom-2 left-0 h-0.5 bg-secondary"
                            />
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                >
                                    <Link href={link.href}>
                                        <span className="text-gray-300 hover:text-secondary transition-colors duration-300 cursor-pointer">
                                            {link.name}
                                        </span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Resources */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-white font-bold text-lg mb-6 relative">
                            Resources
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '50px' }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="absolute -bottom-2 left-0 h-0.5 bg-secondary"
                            />
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                >
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-secondary transition-colors duration-300"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link href={link.href}>
                                            <span className="text-gray-300 hover:text-secondary transition-colors duration-300 cursor-pointer">
                                                {link.name}
                                            </span>
                                        </Link>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Newsletter Subscription */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass rounded-2xl p-8 mb-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Stay Updated with Our Latest Insights
                            </h3>
                            <p className="text-gray-300">
                                Get weekly updates on the latest technology trends, project showcases, and industry insights.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all duration-300"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 bg-gradient-to-r from-secondary to-accent text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Social Links & Bottom Bar */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: 10,
                                        y: -5
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-2xl hover:shadow-lg transition-all duration-300 group`}
                                    title={social.name}
                                >
                                    <motion.span
                                        animate={{
                                            rotate: [0, 10, -10, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.5
                                        }}
                                    >
                                        {social.icon}
                                    </motion.span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-center md:text-right">
                            <p className="text-gray-300 text-sm">
                                © {currentYear} OwnTechnologies. All rights reserved.
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                                Crafted with ❤️ and cutting-edge technology
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Back to Top Button */}
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                >
                    <motion.div
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        ↑
                    </motion.div>
                </motion.button>
            </div>
        </footer>
    )
}

export default ModernFooter

