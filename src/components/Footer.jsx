import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import facebookIcon from "../svg/facebookBlack.svg";
import instagramIcon from "../svg/instagramBlack.svg";
import linkdinIcon from "../svg/linkedinBlack.svg";
import twitterIcon from "../svg/twitterBlack.svg";

import callIcon from "../svg/call.svg";
import emailIcon from "../svg/emailBlack.svg";
import locationIcon from "../svg/location.svg";

import flowerPot from "../../public/png/flowerPot.png"

import ownLogo from "../../public/png/ownLogo.png"

import React from 'react'
import Image from 'next/image';


const Footer = () => {
    return (
        <Grid bgcolor="#fff" id="contact">



            <Grid
                mb={8}
                justifyContent={{ lg: "center", md: "start", sm: "start", xs: "start" }}
                container={{ lg: true, md: false, sm: false, xs: false }}>

                <Grid ml={{ md: 2, sm: 2, xs: 2 }}>



                    <Grid container mt={10} >

                        <Grid>
                            <Image
                                width={80}
                                src={ownLogo}
                                alt="Logo" />
                        </Grid>

                        <Grid justifyContent='center' >
                            {/* --------------------- OWN text ------------------------- */}
                            <Grid container
                                width={150}
                                height={45}
                                ml={{ lg: 1, md: 1, sm: 1, xs: 1 }}
                            >

                                <Typography component="h6" color="#27363B" textAlign='center' fontSize={{ lg: 40, xs: 35 }} fontFamily="poppins-bold">
                                    OWN
                                </Typography>

                            </Grid>

                            {/* --------------------- Technologies text ------------------------- */}
                            <Grid
                                component="body1"
                                color="#27363B"
                                container
                                width={105}
                                justifyContent="center"
                                ml={{ lg: 1, md: 1, sm: 1, xs: 1 }}
                            >


                                <Typography textAlign='center' fontSize={{ lg: 15, xs: 15 }} fontFamily="poppins-regular">
                                    Technologies
                                </Typography>

                            </Grid>



                        </Grid>

                        {/* ///--------- All Textfield ----------------------  */}
                        {/* <Grid container >
                            <Grid width={{ lg: 300, md: 200, sm: 350, xs: 200 }} ml={{ lg: 10, md: 10, sm: 0 }} mt={5}>

                                <Grid>
                                    <TextField fullWidth id="outlined-basic" label="Your Name" variant="outlined" />
                                </Grid>

                                <Grid mt={2}>
                                    <TextField fullWidth id="outlined-basic" label="Email Address" variant="outlined" />
                                </Grid>

                                <Grid mt={2}>
                                    <TextField fullWidth id="outlined-basic" label="Subject" variant="outlined" />
                                </Grid>
                            </Grid>


                            <Grid ml={5} mt={5} width={{ lg: 300, md: 300 }} mr={{ lg: 0, md: 10, sm: 0 }} height={200}>
                                <TextField multiline={true} rows={7} height={200} variant="outlined" fullWidth id="outlined-basic" label="Your Message" />
                            </Grid>

                        </Grid> */}
                    </Grid>


                    <Grid
                        width={250}
                        justifyContent="center"
                        mt={3}>


                        <Typography component="subtitle1" color="#000" textAlign='start' fontSize={{ lg: 15, xs: 15 }} fontFamily="poppins-regular">
                            Accelerate your online presence
                        </Typography>

                    </Grid>

                    <Grid

                        color="#27363B"
                        container
                        width={{ lg: 400, xs: 300 }}
                        justifyContent="center"
                        mt={1}>


                        <Typography component="body1"
                            color="#838788" textAlign='start' fontSize={{ lg: 15, xs: 15 }} fontFamily="poppins-regular">
                            We have been helping businesses reach their full potential — and beyond. Our agency offers a wide array of services to get you there. Explore our website for more info, and see how far you can go!
                        </Typography>

                    </Grid>




                </Grid>


                {/* /// ------------------- Contact section ------------------ */}
                <Grid ml={{ lg: 8, md: 0, sm: 2, xs: 2 }}>
                    <Grid

                        color="#27363B"
                        width={{ lg: 400, md: 300, sm: 250 }}
                        mt={10}
                    >


                        <Typography component="h4"
                            textAlign='start' fontSize={{ lg: 20, xs: 15 }} fontFamily="poppins-semibold">
                            Contact Us

                        </Typography>

                    </Grid>

                    <Grid
                        color="#27363B"
                        width={{ lg: 400, md: 200, sm: 250 }}
                        mt={1}>


                        <Grid alignItems='center' display='flex' mt={5}>
                            <Image
                                width={18}
                                src={callIcon}
                                alt="call Icon" />
                            <Typography component="subtitle1" ml={2} fontFamily='poppins-regular' color="#000" textTransform='none'>
                                +91-9910765616 / 9650636804
                            </Typography>

                        </Grid>



                        <Grid alignItems='center' display='flex' mt={5}>

                            <Image
                                width={18}
                                src={emailIcon}
                                alt="email Icon" />

                            <Typography component="subtitle1" ml={2} fontFamily='poppins-regular' color="#000" textTransform='none'>
                                hello@owntechnologies.com
                            </Typography>

                        </Grid>

                    </Grid>



                </Grid>



                {/* /// ------------------- Address section ------------------ */}

                <Grid ml={{ sm: 2, xs: 2 }}>
                    <Grid

                        color="#27363B"
                        width={100}
                        mt={10}
                        ml={{ lg: 0, md: 2, sm: 0 }}>


                        <Typography component="h4" textAlign='start' fontSize={{ lg: 20, xs: 15 }} fontFamily="poppins-semibold">
                            Address

                        </Typography>

                    </Grid>

                    <Grid alignItems='center' container mt={5} ml={{ lg: 0, md: 2, sm: 0 }}>

                        <Image
                            width={18}
                            src={locationIcon}
                            alt="location icon" />



                        <Grid width={{ lg: 270, md: 300, sm: 150 }} ml={2}>
                            <Typography component="subtitle1" fontFamily='poppins-regular' color="#000" >
                                C-717, Jvts Garden, Chattarpur, New DELHI - 110074
                            </Typography>
                        </Grid>




                    </Grid>

                    <Grid mt={10} width={{ lg: 300, md: 250, }}>
                        <Image
                            layout='responsive'
                            src={flowerPot}
                            alt="Flower Pot" />
                    </Grid>


                </Grid>
            </Grid>



            {/* ----------------------- Social Media icons ----------------------- */}


            <Grid
                width={{ lg: 400, xs: 100 }}
                justifyContent={{ lg: 'center', md: "start", sm: "start", xs: "start" }}
                ml={{ lg: 0, md: 2, sm: 2, xs: 2 }}

                mt={8}
                container>

                {/* <Grid item mt="5px">
                    <Image
                        width={15}
                        src={facebookIcon}
                        alt="Facebook" />
                </Grid> */}


                {/* <Grid mt="5px" ml={10}>
                    <Image
                        width={25}
                        src={twitterIcon}
                        alt="Twitter" />
                </Grid> */}

                <Grid mt="4px" >
                    <Link href="https://www.instagram.com/own_technologies/?next=%2F" target='_blank'>
                        <Image
                            width={23}
                            src={instagramIcon}
                            alt="Instagram" />
                    </Link>

                </Grid>

                <Grid mt="3px" ml={5}>
                    <Link href="https://www.linkedin.com/company/own-technologies/?viewAsMember=true" target='_blank'>
                        <Image
                            width={23}
                            src={linkdinIcon}
                            alt="Linkdin" />

                    </Link>
                </Grid>




            </Grid>


            {/* ----------------------- Copyright text ----------------------- */}

            <Grid textAlign={{ lg: 'center', md: "center", sm: "start", xs: "start" }} pb={5} ml={{ lg: 0, md: 2, sm: 2, xs: 2 }}>
                <Typography component="p" ml={{ lg: 10 }} mt={10} fontSize={12} fontFamily='poppins-regular' color="#838788" textTransform='none'>
                    Copyright © 2023  |  Created with ❤️ by OWN Technologies.
                </Typography>
            </Grid>






        </Grid>
    )
}

export default Footer