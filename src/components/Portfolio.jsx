import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import screenshot_one from "../../public/png/screenshot_1.png";
import screenshot_two from "../../public/png/screenshot_2.png";
import screenshot_three from "../../public/png/screenshot_3.png";
import Image from "next/image";
import { Grid, Link, Typography } from "@mui/material";
import { motion, AnimatePresence } from 'framer-motion'

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

const Portfolio = () => {





    const options = {

        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    };


    return (


        <Grid height={800} bgcolor="#F7F8FA">



            <Grid mt={10} alignItems="center" justifyContent='center'>
                <Grid container direction="column" alignItems="center">
                    <Typography component="subtitle2" mt={10} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B">
                        Our Portfolio
                    </Typography>

                    <Grid width={100} height={2} bgcolor="#40536B" />


                    <Grid container justifyContent='center' textAlign="center">
                        <Typography component="h3" noWrap mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                            Latest &
                        </Typography>

                        <Typography component="h3" color='#9CC118' mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                            &nbsp;Creative Work
                        </Typography>
                    </Grid>

                </Grid>
                <Grid mt={10}>
                    <OwlCarousel items={3}

                        loop={true}
                        nav
                        autoplay={true}
                        autoplayTimeout={4000}
                        smartSpeed={2000}
                        animateOut="slideOutDown"
                        animateIn="slideInDown"
                        dots={true}
                        margin={10}

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

                        <div data-animate="flipInX animated">
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






                    </OwlCarousel>

                </Grid>
            </Grid>



        </Grid>
    );

};
export default Portfolio;
