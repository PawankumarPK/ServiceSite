import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import screenshot_one from "../../public/png/screenshot_1.png";
import screenshot_two from "../../public/png/screenshot_2.png";
import screenshot_three from "../../public/png/screenshot_3.png";
import portfolio_1 from "../../public/png/portfolio_1.png";
import portfolio_2 from "../../public/png/portfolio_2.png";
import portfolio_3 from "../../public/png/portfolio_3.png";
import portfolio_4 from "../../public/png/portfolio_4.png";
import portfolio_5 from "../../public/png/portfolio_5.png";
import portfolio_6 from "../../public/png/portfolio_6.png";
import Image from "next/image";
import { Box, Grid, Link, Typography } from "@mui/material";
import { motion, AnimatePresence } from 'framer-motion'
import teamBgOne from "../../public/png/teamBg1.png";
import teamBgTwo from "../../public/png/teamBg2.png";
import teamBgThree from "../../public/png/teamBg3.png";


//import OwlCarousel from "react-owl-carousel"

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});


const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 5,
        transition: {
            duration: 2
        }
    }
}

///----------------- Team common sections -----------------
const PortfolioDesc = ({ name, img, nameBg, altName }) => (
    <Grid mt={10} mr={{ lg: 5, md: 7, }} ml={{ lg: 5, md: 7, sm: 5 }}>

        <Grid justifyContent='center' ml={{ xs: 3.5 }} width={{ lg: 325, sm: 325, xs: 325 }} alignItems="center" display='flex'
            style={{
                color: "#707070",
                border: '2px solid',
            }}>

            <Image
                width={320}
                src={img}
                alt={altName} />

        </Grid>

        <Box


            sx={{
                pt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>

            <Image
                height={40}
                sx={{ position: 'relative' }}
                src={nameBg}
                alt='Team BG One Image'>
            </Image>

            <Typography sx={{ position: "absolute" }}
                fontSize={15}
                fontFamily="poppins-semibold"
                component='h4'
                color='#fff'
                textAlign='center'>

                {name}

            </Typography>
        </Box>
    </Grid>
)


const Portfolio = () => {

    <Grid
        ml={{ lg: 4, md: 4 }}
        width={{ lg: 300, md: 350, sm: 300, xs: 350 }}
        mt={{ sm: 5, xs: 5 }}>
        <Image
            layout='responsive'
            priority
            src={portfolio_1}
            alt='study image'>
        </Image>
    </Grid>
    return (


        <Grid height={{ lg: 1750, md: 1750, sm: 3200 }} id="portfolio">

            <Grid container direction="column" alignItems="center">
                <Typography component="subtitle2" pt={15} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B">
                    Our Portfolio
                </Typography>

                <Grid width={100} height={2} bgcolor="#40536B" />


                <Grid container justifyContent='center' textAlign="center">
                    <Typography component="h3" color="#000" mt={2} fontSize={{lg:45,md:45,xs:40}} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        Latest &
                    </Typography>

                    <Typography component="h3" color='#9CC118' mt={{lg:2,md:2,sm:0,xs:0}} fontSize={{lg:45,md:45,xs:40}} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        &nbsp;Creative Work
                    </Typography>
                </Grid>

            </Grid>
            <Grid>

                {/* <OwlCarousel items={3}

                        loop={true}
                        nav
                        autoplay={true}
                        autoplayTimeout={4000}
                        smartSpeed={2000}
                        animateOut="slideOutDown"
                        animateIn="slideInDown"
                        dots={true}
                        margin={10}
                        {...options}
                    >


                        <div>
                            <Link href="https://ownsafe.in/" target='_blank' passHref>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1.3 }}>
                                    <Grid width={300} height={300} pt={10} pb={10} bgcolor="#ccc">


                                        <Image
                                            src={screenshot_one}
                                            layout='fill'
                                            alt='Portfolio Image One'>
                                        </Image>

                                    </Grid>
                                </motion.div>
                            </Link>

                        </div>

                        <div>
                            <Link href="https://dentist.owntechnologies.com/" target='_blank' passHref>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1.3 }}>
                                    <Grid width={300} height={300} pt={10} pb={10} bgcolor="#ccc">
                                        <Image
                                            layout='fill'
                                            src={screenshot_two}
                                            alt='Portfolio Image Two'>
                                        </Image>
                                    </Grid>
                                </motion.div>
                            </Link>
                        </div>

                        <div>

                            <Link href="https://vivo.owntechnologies.com/" target='_blank' passHref>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1.3 }}>
                                    <Grid width={300} height={300} pt={10} pb={10} bgcolor="#ccc">
                                        <Image
                                            layout='fill'
                                            src={screenshot_three}
                                            alt='Portfolio Image Three'>
                                        </Image>
                                    </Grid>
                                </motion.div>
                            </Link>
                        </div>






                    </OwlCarousel> */}


                <Grid display={{ lg: 'flex', md: 'flex' }} justifyContent='center'  >

                    {/* Chemtime Academy */}
                    <Link href="https://chemtime.co.in/" scroll={true} passHref target="_blank">
                        <PortfolioDesc
                            name="Chemtime"
                            nameBg={teamBgOne}
                            img={portfolio_1}
                            altName="Chemtime Website">
                        </PortfolioDesc>
                    </Link>

                    {/* Givan Academy */}
                    <Link href="https://givan-academy.netlify.app/" scroll={true} passHref target="_blank">
                        <PortfolioDesc
                            name="Givan Academy"
                            nameBg={teamBgTwo}
                            img={portfolio_2}
                            altName="Givan Academy Website">

                        </PortfolioDesc>
                    </Link>

                    {/* IELTS Guroo Academy */}
                    <Link href="https://ielts-guroo.netlify.app/" scroll={true} passHref target="_blank">
                        <PortfolioDesc
                            name="IELTS Guroo"
                            nameBg={teamBgThree}
                            img={portfolio_3}
                            altName="IELTS Guroo Website">

                        </PortfolioDesc>
                    </Link>

                </Grid>


                <Grid display={{ lg: 'flex', md: 'flex' }} justifyContent='center' >

                    {/* Guragon IAS Academy */}
                    <Link href="https://ielts-guroo.netlify.app/" scroll={true} passHref target="_blank">
                        <PortfolioDesc
                            name="Gurgaon IAS"
                            nameBg={teamBgOne}
                            img={portfolio_4}
                            altName="Gurgaon IAS Website">
                        </PortfolioDesc>
                    </Link>

                    {/* Optimum Travel */}
                    <PortfolioDesc
                        name="Optimum Travel"
                        nameBg={teamBgTwo}
                        img={portfolio_6}
                        altName="Optimum Travel Website">

                    </PortfolioDesc>

                    {/* INGTI Travel */}
                    <Link href="https://ignti-landing-page.netlify.app/" scroll={true} passHref target="_blank">
                        <PortfolioDesc
                            name="IGNTI"
                            nameBg={teamBgThree}
                            img={portfolio_5}
                            altName="IGNTI Website">

                        </PortfolioDesc>
                    </Link>

                </Grid>


                <Grid justifyContent='center' alignItems='center' display='flex' pt={8}>
                    <Typography
                        component="p"
                        pl={{ lg: 3, xs: 1 }} pr={3} pb={{ lg: 0.5 }}
                        fontFamily='poppins-medium'
                        color="#595959"
                        textTransform='none'>
                        We’re excited to announce that we have 7 more projects coming up within the next month!

                    </Typography>
                </Grid>

                <Grid justifyContent='center' alignItems='center' display='flex' pt={1}>
                    <Typography
                        component="p"
                        pl={{ lg: 3, xs: 1 }} pr={3} pb={{ lg: 0.5 }}
                        fontFamily='poppins-medium'
                        color="#595959"
                        textTransform='none'>
                        We’re sure you’ll love working with us and can’t wait to see what we do next.

                    </Typography>
                </Grid>

            </Grid>
        </Grid>

    );

};
export default Portfolio;
