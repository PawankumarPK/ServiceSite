import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Paper, Stack, TextField, Typography } from '@mui/material'
import editIcon from "../svg/editBlack.svg";
import facebookIcon from "../svg/facebookBlack.svg";
import instagramIcon from "../svg/instagramBlack.svg";
import linkdinIcon from "../svg/linkedinBlack.svg";
import twitterIcon from "../svg/twitterBlack.svg";





import React from 'react'
import Image from 'next/image';
import { textAlign } from '@mui/system';

const Footer = () => {
    return (
        <Grid bgcolor="#F7F8FA" >


            <Grid container>
                <Grid>
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
                    <Grid mt={5} ml={10} container mr={15} spacing={3}>

                        <Grid item xs="auto" mt="5px">
                            <Image
                                width={15}
                                src={facebookIcon}
                                alt="Facebook" />
                        </Grid>


                        <Grid item xs="auto" mt="5px" ml={5}>
                            <Image
                                width={25}
                                src={twitterIcon}
                                alt="Twitter" />
                        </Grid>

                        <Grid item xs="auto" mt="4px" ml={5}>
                            <Image
                                width={23}
                                src={instagramIcon}
                                alt="Instagram" />

                        </Grid>

                        <Grid item xs="auto" mt="3px" ml={5}>
                            <Image
                                width={23}
                                src={linkdinIcon}
                                alt="Linkdin" />

                        </Grid>
                    </Grid>

                </Grid>


                <Grid display='flex'>
                    <Image
                        width={15}
                        src={facebookIcon}
                        alt="Facebook" />
                    <Typography fontFamily='poppins-medium' color="#000" textTransform='none'>
                        Start your project
                    </Typography>

                </Grid>



            </Grid>

        </Grid>
    )
}

export default Footer