import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Paper, Stack, Typography } from '@mui/material'
import teamOne from "../../public/png/team1.png";
import teamBgOne from "../../public/png/teamBg1.png";

import teamTwo from "../../public/png/team2.png";
import teamBgTwo from "../../public/png/teamBg2.png";

import teamThree from "../../public/png/team3.png";
import teamBgThree from "../../public/png/teamBg3.png";




import React from 'react'
import Image from 'next/image';
import { textAlign } from '@mui/system';

const TeamSection = () => {
    return (
        <Grid>

            <Grid container direction="column" alignItems="center">

                <Typography mt={10} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B">
                    We are own technologies company

                </Typography>

                <Grid width={260} height={2} bgcolor="#40536B"></Grid>


                <Grid container justifyContent='center' textAlign="center">
                    <Typography noWrap mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        We have some
                    </Typography>

                    <Typography color='#9CC118' mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        &nbsp;great
                    </Typography>
                </Grid>

                <Typography noWrap mt={1} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                    talented staff
                </Typography>


                <Grid width={500}>
                    <Typography mt={2} fontSize={12} fontFamily='poppins-regular' textAlign="center" color="#595959">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.
                    </Typography>
                </Grid>



                <Grid container justifyContent='center' pb={10}>

                    <Grid mt={10} mr={20}>
                        <Grid justifyContent='center' alignItems="center" display='flex'>
                            <Image
                                width={200}
                                src={teamOne}
                                alt="Team Memeber One " />
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
                                src={teamBgOne}
                                alt='Team BG One Image'>
                            </Image>

                            <Typography sx={{ position: "absolute" }}
                                fontSize={15}
                                fontFamily="poppins-semibold"
                                component='h3'
                                color='#fff'
                                textAlign='center'>

                                Alex Stoke

                            </Typography>

                        </Box>

                        <Typography
                            mt={1}
                            fontSize={15}
                            fontFamily="poppins-regular"
                            component='h3'
                            color='#000'
                            textAlign='center'>

                            Director

                        </Typography>


                    </Grid>



                    <Grid mt={10} mr={20}>
                        <Grid justifyContent='center' alignItems="center" display='flex'>
                            <Image
                                width={200}
                                src={teamTwo}
                                alt="Team Memeber One " />
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
                                src={teamBgTwo}
                                alt='Team BG One Image'>
                            </Image>

                            <Typography sx={{ position: "absolute" }}
                                fontSize={15}
                                fontFamily="poppins-semibold"
                                component='h3'
                                color='#fff'
                                textAlign='center'>

                                Lisa Waren

                            </Typography>

                        </Box>

                        <Typography
                            mt={1}
                            fontSize={15}
                            fontFamily="poppins-regular"
                            component='h3'
                            color='#000'
                            textAlign='center'>

                            Director

                        </Typography>



                    </Grid>


                    <Grid mt={10} >
                        <Grid justifyContent='center' alignItems="center" display='flex'>
                            <Image
                                width={200}
                                src={teamThree}
                                alt="Team Memeber One " />
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
                                src={teamBgThree}
                                alt='Team BG One Image'>
                            </Image>

                            <Typography sx={{ position: "absolute" }}
                                fontSize={15}
                                fontFamily="poppins-semibold"
                                component='h3'
                                color='#fff'
                                textAlign='center'>

                                Alex Stoke

                            </Typography>

                        </Box>

                        <Typography
                            mt={1}
                            fontSize={15}
                            fontFamily="poppins-regular"
                            component='h3'
                            color='#000'
                            textAlign='center'>

                            Director

                        </Typography>



                    </Grid>

                </Grid>
            </Grid>


        </Grid>
    )
}

export default TeamSection