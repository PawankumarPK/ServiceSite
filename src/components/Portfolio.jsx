import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import screenshot_one from "../../public/png/screenshot_1.png";
import screenshot_two from "../../public/png/screenshot_2.png";
import screenshot_three from "../../public/png/screenshot_3.png";
import asap from "../../public/projects/asap.png";
import portfolio_2 from "../../public/png/portfolio_2.png";
import portfolio_3 from "../../public/png/portfolio_3.png";
import portfolio_4 from "../../public/png/portfolio_4.png";
import portfolio_5 from "../../public/png/portfolio_5.png";
import portfolio_6 from "../../public/png/portfolio_6.png";
import portfolio_7 from "../../public/png/portfolio_7.png";
import portfolio_8 from "../../public/png/portfolio_8.png";
import portfolio_9 from "../../public/png/portfolio_9.png";
import portfolio_10 from "../../public/png/portfolio_10.png";
import Image from "next/image";
import { Box, Grid, Link, Typography } from "@mui/material";
import { motion, AnimatePresence, useInView } from 'framer-motion'
import teamBgOne from "../../public/png/teamBg1.png";
import teamBgTwo from "../../public/png/teamBg2.png";
import teamBgThree from "../../public/png/teamBg3.png";
import FilteredCourses from "./FilteredCourses";


//import OwlCarousel from "react-owl-carousel"



///----------------- Team common sections -----------------
const PortfolioDesc = ({ name, img, nameBg, altName }) => (
    <Grid mt={10} mr={{ lg: 5, md: 7, }} ml={{ lg: 5, md: 7, sm: 5 }} >

        <Grid justifyContent='center' ml={{ xs: 2 }} width={{ lg: 325, sm: 325, xs: 325 }} alignItems="center" display='flex'
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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Grid
            id="portfolio"
            bgcolor="#F7F8FA"
            ref={ref}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '250px',
                    background: 'linear-gradient(180deg, rgba(247,248,250,1) 0%, rgba(247,248,250,0.5) 100%)',
                    zIndex: 0,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '200px',
                    background: 'linear-gradient(0deg, rgba(156,193,24,0.05) 0%, rgba(219,213,37,0.05) 50%, transparent 100%)',
                    zIndex: 0,
                }
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <Grid container direction="column" alignItems="center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <Typography
                            component="subtitle2"
                            mt={10}
                            fontSize={14}
                            fontFamily='poppins-medium'
                            textAlign="center"
                            color="#27363B"
                        >
                            Our Portfolio
                        </Typography>

                        <Grid width={100} height={2} bgcolor="#40536B" sx={{ mt: 1 }} />

                        <Grid container justifyContent='center' textAlign="center" mt={2} mb={3}>
                            <Typography
                                component="h3"
                                color="#000"
                                fontSize={{ lg: 50, md: 45, xs: 40 }}
                                fontFamily="poppins-bold"
                                sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                            >
                                Latest &
                            </Typography>

                            <Typography
                                component="h3"
                                color='#9CC118'
                                fontSize={{ lg: 50, md: 45, xs: 40 }}
                                fontFamily="poppins-bold"
                                sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                            >
                                &nbsp;Creative Work
                            </Typography>
                        </Grid>
                    </motion.div>
                </Grid>

                <FilteredCourses />
            </Box>
        </Grid>
    );
};
export default Portfolio;
