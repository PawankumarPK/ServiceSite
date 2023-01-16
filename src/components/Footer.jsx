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
import { textAlign } from '@mui/system';

const Footer = () => {
    return (
        <Grid bgcolor="#F7F8FA">


            <Grid container >
                <Grid mb={8}>
                    <Grid container direction="column">


                        <Grid ml={10} mt={10}>
                            <Typography noWrap mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                                Questions?
                            </Typography>
                            <Typography noWrap mt={1} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                                Let's Get In Touch
                            </Typography>
                        </Grid>

                        <Grid container>
                            <Grid width={300} ml={10} mt={5}>

                                <Grid >
                                    <TextField fullWidth id="outlined-basic" label="Your Name" variant="outlined" />
                                </Grid>

                                <Grid mt={2}>
                                    <TextField fullWidth id="outlined-basic" label="Email Address" variant="outlined" />
                                </Grid>

                                <Grid mt={2}>
                                    <TextField fullWidth id="outlined-basic" label="Subject" variant="outlined" />
                                </Grid>
                            </Grid>



                            <Grid ml={5} mt={5} width={300} height={200}>
                                <TextField multiline={true} rows={7} height={200} variant="outlined" fullWidth id="outlined-basic" label="Your Message" />
                            </Grid>




                        </Grid>

                    </Grid>

                    <Grid mt={5} ml={10}>
                        <Button variant="contained" sx={{ borderRadius: 50, bgcolor: "#27363B" }}
                            style={{
                                color: "#000",
                            }}>
                            <Typography pl={30} pr={30} pb={1} pt={1} fontFamily='poppins-medium' color="#fff" textTransform='none'>
                                Start your project
                            </Typography>

                        </Button>
                    </Grid>


                    {/* ----------------------- Social Media icons ----------------------- */}
                    <Grid  mt={10} ml={10} container>

                        <Grid item mt="5px">
                            <Image
                                width={15}
                                src={facebookIcon}
                                alt="Facebook" />
                        </Grid>


                        <Grid  mt="5px" ml={10}>
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
                    <Typography ml={10} mt={10} fontSize={12} fontFamily='poppins-regular' color="#838788" textTransform='none'>
                        Copyright © 2022  |  Created with Love by OWN Inc.
                    </Typography>
                </Grid>


                <Grid ml={20} mt={35} height={160} direction='column' width={500}>

                    <Grid display='flex' container >
                        <Image
                            width={18}
                            src={locationIcon}
                            alt="Facebook" />


                        <Typography ml={2} fontFamily='poppins-regular' color="#000" textTransform='none'>
                            C-717, JVTS GARDEN, CHATTARPUR, NEW DELHI - 110074
                        </Typography>

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


                    <Grid mt={10}>
                        <Image
                            width={300}
                            src={flowerPot}
                            alt="Flower Pot" />
                    </Grid>

                </Grid>



            </Grid>

        </Grid>
    )
}

export default Footer