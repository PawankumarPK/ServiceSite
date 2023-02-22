import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MakeDesignBetter from '../components/MakeDesignBetter'
import TeamSection from '../components/TeamSection'
import WhatWeOffer from '../components/WhatWeOffer'
import WhyChooseUs from '../components/WhyChooseUs'
import YouImagineWeCreate from '../components/YouImagineWeCreate'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>OWN TECHNOLOGIES</title>
        <meta name="description" content="Tell us your business needs and wildest imaginations for your website — and our team of experts will customize a site that works just for you. Plus, we’ll stay in touch to make sure everything is running smoothly down the line." />
        <link rel="icon" href="/ownLogo.ico" />
      </Head>

      
      <Header />
      <MakeDesignBetter />
      <YouImagineWeCreate />
      <WhyChooseUs />
      <WhatWeOffer />
      <TeamSection />
      <Footer />


    </div>
  )
}
