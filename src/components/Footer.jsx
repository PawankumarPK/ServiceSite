import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import facebookIcon from "../svg/facebookBlack.svg";
import instagramIcon from "../svg/instagramBlack.svg";
import linkdinIcon from "../svg/linkedinBlack.svg";
import twitterIcon from "../svg/twitterBlack.svg";

import callIcon from "../svg/call.svg";
import emailIcon from "../svg/emailBlack.svg";
import locationIcon from "../svg/location.svg";

import flowerPot from "../../public/png/flowerPot.png"

import React from 'react'
import Image from 'next/image';

const Footer = () => {
    return (
        <Grid bgcolor="#F7F8FA" id="contact">



            <Grid
                mb={8}
                justifyContent={{ lg: "start", md: "start", sm: "center", xs: "center" }}
                container={{ lg: true, md: false, sm: false, xs: false }}>

                <Grid>
                    <Grid container direction="column" >


                        <Grid ml={{ lg: 10, md: 10, sm: 0 }} mt={10}>
                            <Typography noWrap mt={2} fontSize={{ lg: 45, xs: 35 }} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                                Questions?
                            </Typography>
                            <Typography noWrap mt={1} fontSize={{ lg: 45, xs: 35 }} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                                Let's Get In Touch
                            </Typography>
                        </Grid>

                        {/* ///--------- All Textfield ----------------------  */}
                        <Grid container >
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

                        </Grid>

                    </Grid>


                    {/* ///--------- Button ----------------------  */}
                    <Grid mt={5} ml={{ lg: 9, md: 10, sm: 0 }}>
                        <Button variant="contained" sx={{
                            borderRadius: 50, bgcolor: "#27363B",
                            ':hover': {
                                bgcolor: '#9CC118',
                            },
                        }}>
                            <Typography
                                width={{ lg: 620, md: 520, sm: 570, xs: 420 }}
                                pb={1}
                                pt={1}
                                fontFamily='poppins-medium'
                                color="#fff"
                                textTransform='none'>

                                Start your project

                            </Typography>

                        </Button>
                    </Grid>

                </Grid>

                {/* ///--------- Right Section ----------------------  */}

                <Grid
                    justifyContent='center'

                    width={{ lg: 400, md: 700, sm: 700 }}
                    ml={{ lg: 10, md: 5, sm: 0 }}
                    mt={{ lg: 35, md: 5, sm: 10, xs: 10 }}
                    container={{ lg: false, md: true, sm: true }}>

                    <Grid >
                        <Grid container>
                            <Grid width={15} mt={1}>
                                <Image
                                    layout='responsive'
                                    src={locationIcon}
                                    alt="location" />
                            </Grid>


                            <Grid width={270} ml={2}>
                                <Typography fontFamily='poppins-regular' color="#000" >
                                    C-717, JVTS GARDEN, CHATTARPUR, NEW DELHI - 110074
                                </Typography>
                            </Grid>

                        </Grid>




                        <Grid display='flex' mt={5}>
                            <Image
                                width={18}
                                src={callIcon}
                                alt="Facebook" />
                            <Typography ml={2} fontFamily='poppins-regular' color="#000" textTransform='none'>
                                +91 9910765616
                            </Typography>

                        </Grid>



                        <Grid display='flex' mt={5}>
                            <Image
                                width={18}
                                src={emailIcon}
                                alt="Facebook" />
                            <Typography ml={2} fontFamily='poppins-regular' color="#000" textTransform='none'>
                                PAWAN@GMAIL.COM
                            </Typography>

                        </Grid>
                    </Grid>

                    <Grid mt={10} width={300}>
                        <Image
                            layout='responsive'
                            src={flowerPot}
                            alt="Flower Pot" />
                    </Grid>

                </Grid>



            </Grid>
            {/* ----------------------- Social Media icons ----------------------- */}
            <Grid justifyContent={{ lg: 'start', sm: "center", xs: "center" }} mt={10} ml={{ lg: 10 }} container>

                <Grid item mt="5px">
                    <Image
                        width={15}
                        src={facebookIcon}
                        alt="Facebook" />
                </Grid>


                <Grid mt="5px" ml={10}>
                    <Image
                        width={25}
                        src={twitterIcon}
                        alt="Twitter" />
                </Grid>

                <Grid mt="4px" ml={10}>
                    <Image
                        width={23}
                        src={instagramIcon}
                        alt="Instagram" />

                </Grid>

                <Grid mt="3px" ml={10}>
                    <Image
                        width={23}
                        src={linkdinIcon}
                        alt="Linkdin" />

                </Grid>




            </Grid>

            <Grid textAlign={{ lg: 'start', sm: "center", xs: "center" }} pb={5}>
                <Typography ml={{ lg: 10 }} mt={10} fontSize={12} fontFamily='poppins-regular' color="#838788" textTransform='none'>
                    Copyright © 2022  |  Created with Love by OWN Inc.
                </Typography>
            </Grid>






        </Grid>
    )
}

export default Footer