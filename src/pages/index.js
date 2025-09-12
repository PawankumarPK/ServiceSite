import dynamic from 'next/dynamic'

// Import optimization components
import SEOHead from '../components/optimization/SEOHead'
import LazyWrapper from '../components/optimization/LazyWrapper'

// Import modern components
import ModernNavbar from '../components/modern/ModernNavbar'
import UniqueHero from '../components/modern/UniqueHero'

// Lazy load heavy components for better performance
const UniqueServices = dynamic(() => import('../components/modern/UniqueServices'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse" />
})

const ModernAbout = dynamic(() => import('../components/modern/ModernAbout'), {
  loading: () => <div className="h-96 bg-primary animate-pulse" />
})

const ModernPortfolio = dynamic(() => import('../components/modern/ModernPortfolio'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />
})

const ModernContact = dynamic(() => import('../components/modern/ModernContact'), {
  loading: () => <div className="h-96 bg-primary animate-pulse" />
})

const ModernFooter = dynamic(() => import('../components/modern/ModernFooter'), {
  loading: () => <div className="h-64 bg-primary animate-pulse" />
})

// Keep some existing components that might still be needed
const Guarantee = dynamic(() => import('../components/Guarantee'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />
})

const ClientFeedback = dynamic(() => import('../components/ClientFeedback'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />
})

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Optimized SEO Head */}
      <SEOHead />

      {/* Modern Navigation */}
      <ModernNavbar />

      {/* Unique Hero Section with Cool Background */}
      <UniqueHero />

      {/* Lazy loaded sections for better performance */}
      <LazyWrapper>
        <UniqueServices />
      </LazyWrapper>

      <LazyWrapper>
        <ModernAbout />
      </LazyWrapper>

      <LazyWrapper>
        <ModernPortfolio />
      </LazyWrapper>

      <LazyWrapper>
        <Guarantee />
      </LazyWrapper>

      <LazyWrapper>
        <ClientFeedback />
      </LazyWrapper>

      <LazyWrapper>
        <ModernContact />
      </LazyWrapper>

      <LazyWrapper>
        <ModernFooter />
      </LazyWrapper>
    </div>
  )
}
