import Head from 'next/head'

const SEOHead = ({
    title = "Top Website & Mobile App Development Company | OwnTechnologies",
    description = "OwnTechnologies is a top-rated website and mobile app development company in India, offering scalable, secure, and innovative solutions for startups and enterprises.",
    keywords = "Website development company, Mobile app development services, Custom web application development, Android app development, iOS app development, Full-stack development, React Native apps, Flutter development, Web and mobile solutions, App development agency, UI/UX design, E-commerce website development, Scalable web apps, SaaS development, Digital product development, Best development company in India",
    ogTitle = "Expert Website & Mobile App Development | OwnTechnologies",
    ogDescription = "Turn your vision into digital reality. Get robust, responsive websites and mobile apps crafted by industry-leading developers at OwnTechnologies.",
    ogImage = "https://owntechnologies.in/seo-featured-image.jpg",
    ogUrl = "https://owntechnologies.in/",
    canonical = "https://owntechnologies.in/"
}) => {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="author" content="OwnTechnologies" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="OwnTechnologies" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={ogUrl} />
            <meta property="twitter:title" content={ogTitle} />
            <meta property="twitter:description" content={ogDescription} />
            <meta property="twitter:image" content={ogImage} />

            {/* Canonical */}
            <link rel="canonical" href={canonical} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

            {/* Additional Meta Tags for Performance */}
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#27363B" />
            <meta name="msapplication-TileColor" content="#27363B" />

            {/* Preconnect to external resources */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "OwnTechnologies",
                        "url": "https://owntechnologies.in",
                        "logo": "https://owntechnologies.in/png/ownLogo.png",
                        "description": description,
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "India"
                        },
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91-9910765616",
                            "contactType": "customer service"
                        },
                        "sameAs": [
                            "https://www.linkedin.com/company/own-technologies/",
                            "https://www.instagram.com/own_technologies/"
                        ]
                    })
                }}
            />
        </Head>
    )
}

export default SEOHead

