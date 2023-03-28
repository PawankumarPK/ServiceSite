import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MakeDesignBetter from '../components/MakeDesignBetter'
import Portfolio from '../components/Portfolio'
import TeamSection from '../components/TeamSection'
import WhatWeOffer from '../components/WhatWeOffer'
import WhyChooseUs from '../components/WhyChooseUs'
import YouImagineWeCreate from '../components/YouImagineWeCreate'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Own Technologies</title>
        <meta name="description" content="We are an advanced digital agency with a team of professionals who always develop user-friendly, responsive and mobile-friendly websites. We offer innovative online solutions for companies to promote their brand in the best possible way." />
        <link rel="icon" href="/ownLogo.ico" />
      </Head>

      
      <Header />
      <MakeDesignBetter />
      <YouImagineWeCreate />
      <WhyChooseUs />
      <WhatWeOffer />
      <TeamSection />
      <Portfolio/>
      <Footer />


    </div>
  )
}
