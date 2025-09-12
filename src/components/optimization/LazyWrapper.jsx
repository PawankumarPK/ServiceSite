import { Suspense } from 'react'
import { motion } from 'framer-motion'

const LoadingSpinner = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-64"
    >
        <div className="relative">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-16 h-16 border-4 border-accent/30 rounded-full"
            />
        </div>
    </motion.div>
)

const LazyWrapper = ({ children, fallback = <LoadingSpinner /> }) => {
    return (
        <Suspense fallback={fallback}>
            {children}
        </Suspense>
    )
}

export default LazyWrapper

