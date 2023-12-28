import Head from 'next/head'
import Footer from '../components/Footer'
import Guarantee from '../components/Guarantee'
import Header from '../components/Header'
import MakeDesignBetter from '../components/MakeDesignBetter'
import Portfolio from '../components/Portfolio'
import TeamSection from '../components/TeamSection'
import WhatWeOffer from '../components/WhatWeOffer'
import WhyChooseUs from '../components/WhyChooseUs'
import YouImagineWeCreate from '../components/YouImagineWeCreate'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Expert Website and Mobile App Development Services OwnTechnologies</title>
        <meta name="description" content="Transform your ideas into reality with our website and mobile app development services. As a leading agency, we specialize in crafting innovative digital solutions to drive your business forward." />
        <meta name="keywords" content="Website development,Mobile app development,Responsive web design,Android app development,Back-end development,E-commerce solutions,Mobile app UI/UX,Enterprise app development" />
        <link rel="icon" href="/ownLogo.ico" />
      </Head>


      <Header />
      <MakeDesignBetter />
      <Guarantee />
      <Portfolio />
      <YouImagineWeCreate />
      <WhyChooseUs />
      <WhatWeOffer />
      <TeamSection />

      <Footer />


    </div>
  )
}
