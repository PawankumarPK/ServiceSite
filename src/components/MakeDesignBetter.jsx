import { Box, Button, Grid, Link, Typography } from '@mui/material'
import { Container } from '@mui/system'
import studyImage from "../../public/png/study_two.png";
import folderOpenIcon from "../svg/folderOpenIcon.svg";
import editIcon from "../svg/editIcon.svg";
import codeIcon from "../svg/codeIcon.svg";
import settingsIcon from "../svg/settingsIcon.svg";

import React from 'react'
import Image from 'next/image';


const MakeDesignBetter = () => {
    return (
        <Grid bgcolor="#fff" >

            {/* ----------------------- We are making design section ----------------------- */}
            <Grid
                justifyContent='center'
                alignItems="center"
                id="about"
                container={{ lg: true, sm: false }}
                pt={{ lg: 30, md: 30, sm: 15, xs: 15 }}
                textAlign={{ lg: "start", md: "start", sm: "center", xs: "center" }}
            // height={{ lg: 600, sm: 700, }}
            >


                <Grid width={{ lg: 600, md: 320 }} pr={{ lg: 5, md: 5 }}>
                    <Typography
                        component="p"
                        sx={{
                            fontSize: {
                                lg: 20,
                                md: 16,
                                sm: 16,
                                xs: 12
                            }
                        }}
                        color="#595959" fontFamily="poppins">
                        We are technologies company
                    </Typography>

                    <Typography
                        component="h2"
                        sx={{
                            fontSize: {
                                lg: 45,
                                md: 40,
                                sm: 35,
                                xs: 30
                            }
                        }}
                        pt={1} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}
                        color="#000">
                        We are making design better for everyone
                    </Typography>

                    <Typography
                        component="p"
                        sx={{
                            fontSize: {
                                lg: 17,
                                md: 15,
                                sm: 15,
                                xs: 12
                            }
                        }}
                        pt={4} color="#595959" fontFamily="poppins">
                        We specialise on high performance immersive digital experience aimed at delivering our clients a competitive advantage and effective ROI on their investment.

                    </Typography>



                    <Typography
                        component="p"

                        sx={{
                            fontSize: {
                                lg: 17,
                                md: 15,
                                sm: 15,
                                xs: 12
                            }
                        }}
                        pt={4} color="#595959" fontFamily="poppins">
                        Our team of Solution Architects, Developers, Designers and Project Managers deliver world-class solutions that result in solutions that are innovative, engaging, scalable, maintainable and sustainable.

                    </Typography>

                    <Typography

                        sx={{
                            fontSize: {
                                lg: 17,
                                md: 15,
                                sm: 15,
                                xs: 12
                            }
                        }}
                        pt={4} color="#595959" fontFamily="poppins">
                        Our solutions are built on the latest technologies to enable you to achieve your goals in the most cost-efficient manner possible.

                    </Typography>

                    <Grid pt={5}>
                        <Button href="#contact" scroll={true} variant="contained" sx={{
                            borderRadius: 50, bgcolor: "#27363B",
                            ':hover': {
                                bgcolor: '#9CC118',
                            },


                        }}>
                            <Typography component="p"
                                pl={3} pr={3} pb={1} pt={1} fontFamily='poppins-medium' color="#fff" textTransform='none'>
                                Start your project
                            </Typography>

                        </Button>
                    </Grid>
                </Grid>

                {/* ----------------------- Study image ----------------------- */}
                <Grid
                    pl={{ lg: 10, md: 4 }}
                    width={{ lg: 450, md: 350, sm: 300, xs: 250 }}
                    pt={{ sm: 5, xs: 5 }}>
                    <Image
                        layout='responsive'
                        priority
                        src={studyImage}
                        alt='study image'>
                    </Image>
                </Grid>

            </Grid>

            {/* ----------------------- Circle design section ----------------------- */}
            <Grid pt={5} pb={20} container alignItems='center' display='flex' justifyContent='center'>

                <Grid
                    flexDirection='column'
                    alignItems='center'
                    display='flex'
                    md
                    pl={{ lg: 15, md: 5 }}
                    pr={{ lg: 10, sm: 10 }}
                    pt={{ sm: 10, xs: 10 }}
                >

                    <Grid width={90} height={90} bgcolor="#01A9F5" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                        <Image
                            width={35}
                            src={folderOpenIcon}
                            alt="Folder Open Icon" />
                    </Grid>

                    <Typography component="p" pt={1} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B" textTransform='none'>
                        World leader in consulting and finance
                    </Typography>

                </Grid>






                <Grid
                    flexDirection='column'
                    md
                    alignItems='center'
                    display='flex'
                    pl={{ lg: 5, md: 5 }}
                    pr={{ lg: 10, sm: 10 }}
                    pt={{ sm: 10, xs: 10 }}
                >
                    <Grid width={90} height={90} bgcolor="#40536B" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                        <Image
                            width={35}
                            src={codeIcon}
                            alt="Code Icon" />
                    </Grid>

                    <Typography component="p" pt={1} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B" textTransform='none'>
                        A focused team with a specialized skill

                    </Typography>

                </Grid>


                <Grid
                    flexDirection='column'
                    textAlign="center"
                    md
                    alignItems='center'
                    display='flex'
                    pl={{ lg: 5, md: 5 }}
                    pr={{ lg: 10, sm: 10 }}
                    pt={{ sm: 10, xs: 10 }}>
                    <Grid width={90} height={90} bgcolor="#DBBF05" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                        <Image
                            width={35}
                            src={settingsIcon}
                            alt="Settings Icon" />
                    </Grid>

                    <Typography component="p" pt={1} fontSize={14} fontFamily='poppins-medium' color="#27363B" textTransform='none'>
                        Trusted and professional advisors for you
                    </Typography>

                </Grid>



                <Grid
                    flexDirection='column'
                    md
                    alignItems='center'
                    display='flex'
                    pl={{ lg: 5, md: 5 }}
                    pr={{ lg: 15, sm: 10 }}
                    pt={{ sm: 10, xs: 10 }}>
                    <Grid width={90} height={90} bgcolor="#9CC118" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                        <Image
                            width={35}
                            src={editIcon}
                            alt="Edit Icon" />
                    </Grid>

                    <Typography component="p" pt={1} fontSize={14} textAlign="center" fontFamily='poppins-medium' color="#27363B" textTransform='none'>
                        Experience to give you a better results
                    </Typography>

                </Grid>


            </Grid>

        </Grid>
    )
}

export default MakeDesignBetter