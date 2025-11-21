import Head from 'next/head'
import ClientFeedback from '../components/ClientFeedback'
import ClientFeedbackCard from '../components/ClientFeedbackCard'
import DrawerNav from '../components/Drawer'
import Drawer from '../components/Drawer'
import Footer from '../components/Footer'
import Guarantee from '../components/Guarantee'
import Header from '../components/Header'
import MakeDesignBetter from '../components/MakeDesignBetter'
import Portfolio from '../components/Portfolio'
import TeamSection from '../components/TeamSection'
import WhatWeOffer from '../components/WhatWeOffer'
import WhyChooseUs from '../components/WhyChooseUs'
import YouImagineWeCreate from '../components/YouImagineWeCreate'
import CountriesServed from '../components/CountriesServed'
import OfficeSection from '../components/OfficeSection'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Top Website & Mobile App Development Company | OwnTechnologies</title>
        <meta
          name="description"
          content="OwnTechnologies is a top-rated website and mobile app development company in India, offering scalable, secure, and innovative solutions for startups and enterprises. Build responsive websites, Android/iOS apps, and powerful web platforms with us."
        />
        <meta
          name="keywords"
          content="Website development company, Mobile app development services, Custom web application development, Android app development, iOS app development, Full-stack development, React Native apps, Flutter development, Web and mobile solutions, App development agency, UI/UX design, E-commerce website development, Scalable web apps, SaaS development, Digital product development, Best development company in India"
        />
        <meta
          property="og:title"
          content="Expert Website & Mobile App Development | OwnTechnologies"
        />
        <meta
          property="og:description"
          content="Turn your vision into digital reality. Get robust, responsive websites and mobile apps crafted by industry-leading developers at OwnTechnologies."
        />
        <meta
          property="og:image"
          content="https://owntechnologies.in/seo-featured-image.jpg"
        />
        <meta
          property="og:url"
          content="https://owntechnologies.in/"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Website & Mobile App Development Experts | OwnTechnologies"
        />
        <meta
          name="twitter:description"
          content="Grow your business with powerful digital solutions. Hire expert web and mobile developers from OwnTechnologies."
        />
        <meta
          name="twitter:image"
          content="https://owntechnologies.in/seo-featured-image.jpg"
        />
        <link rel="canonical" href="https://owntechnologies.in/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Header />
      <MakeDesignBetter />
      <Guarantee />
      <Portfolio />
      <YouImagineWeCreate />
      <ClientFeedback />
      <WhyChooseUs />
      <WhatWeOffer />
      <CountriesServed />
      <TeamSection />
      <OfficeSection />


      <Footer />


    </div>
  )
}
