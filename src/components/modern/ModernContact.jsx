import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ModernContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedField, setFocusedField] = useState(null)

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    const services = [
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'Backend Development',
        'E-commerce Solutions',
        'Digital Marketing',
        'Other'
    ]

    const contactInfo = [
        {
            icon: '📞',
            title: 'Phone',
            content: '+91-9910765616',
            action: () => window.open('tel:9910765616'),
            color: 'from-green-500 to-teal-600'
        },
        {
            icon: '📧',
            title: 'Email',
            content: 'info@owntechnologies.in',
            action: () => window.open('mailto:info@owntechnologies.in'),
            color: 'from-blue-500 to-purple-600'
        },
        {
            icon: '💬',
            title: 'WhatsApp',
            content: 'Chat with us',
            action: () => window.open('https://wa.me/+919910765616?text='),
            color: 'from-green-600 to-green-500'
        },
        {
            icon: '📍',
            title: 'Location',
            content: 'India (Remote)',
            action: () => { },
            color: 'from-red-500 to-pink-600'
        }
    ]

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        alert('Thank you for your message! We will get back to you soon.')
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        })
        setIsSubmitting(false)
    }

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
            id="contact"
            className="py-20 bg-gradient-to-br from-primary via-primary/95 to-secondary/10 overflow-hidden relative"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"
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
                        Get In
                        <span className="text-gradient"> Touch</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to transform your digital presence? Let's discuss your project and create something extraordinary together.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="lg:col-span-1 space-y-6"
                    >
                        <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Contact Information
                            </h3>
                            <p className="text-gray-300 mb-8">
                                We're here to help you bring your digital vision to life. Reach out through any of these channels.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, x: 10 }}
                                        onClick={info.action}
                                        className="flex items-center space-x-4 p-4 glass-dark rounded-xl cursor-pointer hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center text-2xl`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">{info.title}</h4>
                                            <p className="text-gray-300 text-sm">{info.content}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-white/20">
                                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    {[
                                        { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/company/own-technologies/' },
                                        { name: 'Instagram', icon: '📸', url: 'https://www.instagram.com/own_technologies/' },
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-2xl hover:bg-secondary hover:shadow-lg transition-all duration-300"
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="lg:col-span-2"
                    >
                        <motion.div variants={itemVariants} className="glass rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Send us a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Field */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="relative"
                                    >
                                        <motion.input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all duration-300"
                                            placeholder="Your Name"
                                            animate={{
                                                scale: focusedField === 'name' ? 1.02 : 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{
                                                scaleX: focusedField === 'name' ? 1 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-left"
                                        />
                                    </motion.div>

                                    {/* Email Field */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="relative"
                                    >
                                        <motion.input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all duration-300"
                                            placeholder="Your Email"
                                            animate={{
                                                scale: focusedField === 'email' ? 1.02 : 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{
                                                scaleX: focusedField === 'email' ? 1 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-left"
                                        />
                                    </motion.div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Phone Field */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="relative"
                                    >
                                        <motion.input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('phone')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all duration-300"
                                            placeholder="Your Phone"
                                            animate={{
                                                scale: focusedField === 'phone' ? 1.02 : 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{
                                                scaleX: focusedField === 'phone' ? 1 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-left"
                                        />
                                    </motion.div>

                                    {/* Service Field */}
                                    <motion.div
                                        variants={itemVariants}
                                        className="relative"
                                    >
                                        <motion.select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('service')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all duration-300"
                                            animate={{
                                                scale: focusedField === 'service' ? 1.02 : 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <option value="" className="bg-primary text-white">Select a Service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service} className="bg-primary text-white">
                                                    {service}
                                                </option>
                                            ))}
                                        </motion.select>
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{
                                                scaleX: focusedField === 'service' ? 1 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-left"
                                        />
                                    </motion.div>
                                </div>

                                {/* Message Field */}
                                <motion.div
                                    variants={itemVariants}
                                    className="relative"
                                >
                                    <motion.textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        rows="6"
                                        required
                                        className="w-full px-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all duration-300 resize-none"
                                        placeholder="Tell us about your project..."
                                        animate={{
                                            scale: focusedField === 'message' ? 1.02 : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{
                                            scaleX: focusedField === 'message' ? 1 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-left"
                                    />
                                </motion.div>

                                {/* Submit Button */}
                                <motion.div variants={itemVariants}>
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-xl font-medium text-lg hover:shadow-xl hover:shadow-secondary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center space-x-2">
                                                <div className="loader"></div>
                                                <span>Sending...</span>
                                            </div>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </motion.button>
                                </motion.div>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-300 mb-6">
                        Need immediate assistance? Choose your preferred way to connect:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open('tel:9910765616')}
                            className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                        >
                            📞 Call Now
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open('https://wa.me/+919910765616?text=')}
                            className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                        >
                            💬 WhatsApp
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open('mailto:info@owntechnologies.in')}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                        >
                            📧 Email
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ModernContact

