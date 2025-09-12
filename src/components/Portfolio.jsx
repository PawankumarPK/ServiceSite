import React, { useState, useEffect } from "react";
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
import { motion, AnimatePresence } from 'framer-motion'
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

    <Grid
        ml={{ lg: 4, md: 4 }}
        width={{ lg: 300, md: 350, sm: 300, xs: 350 }}
        mt={{ sm: 5, xs: 5 }}
    >
        <Image
            layout='responsive'
            priority
            src={asap}
            alt='study image'>
        </Image>
    </Grid>
    return (


        <Grid height={{}} id="portfolio" bgcolor="#F7F8FA" >

            <Grid container direction="column" alignItems="center">
                <Typography component="subtitle2" pt={0} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B">
                    Our Portfolio
                </Typography>

                <Grid width={100} height={2} bgcolor="#40536B" />


                <Grid container justifyContent='center' textAlign="center">
                    <Typography component="h3" color="#000" mt={2} fontSize={{ lg: 45, md: 45, xs: 40 }} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        Latest &
                    </Typography>

                    <Typography component="h3" color='#9CC118' mt={{ lg: 2, md: 2, sm: 0, xs: 0 }} fontSize={{ lg: 45, md: 45, xs: 40 }} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        &nbsp;Creative Work
                    </Typography>
                </Grid>

            </Grid>

            <FilteredCourses />
        </Grid >

    );

};
export default Portfolio;
