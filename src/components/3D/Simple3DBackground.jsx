import React from 'react'
import { motion } from 'framer-motion'

const Simple3DBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated gradient orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full blur-3xl"
            />

            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full blur-3xl"
            />

            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-2xl"
            />

            {/* Floating particles */}
            {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2
                    }}
                    className="absolute w-1 h-1 bg-secondary rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>
    )
}

export default Simple3DBackground

