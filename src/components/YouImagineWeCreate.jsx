import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Paper, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import file from "../../public/png/file.png";
import rocket from "../../public/png/rocket.png";
import lightBulbImg from "../../public/png/lightbulb.png";

import React from 'react'
import Image from 'next/image';

const YouImagineWeCreate = () => {
    return (
        <Grid bgcolor="#F7F8FA">

            <Grid container direction="column" alignItems="center">

                <Typography mt={10} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B">
                    How To Start
                </Typography>

                <Grid width={100} height={2} bgcolor="#40536B"></Grid>


                <Grid container justifyContent='center' textAlign="center" mb={5}>
                    <Typography noWrap mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        You Imagine, We
                    </Typography>

                    <Typography color='#9CC118' mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        &nbsp;Create
                    </Typography>
                </Grid>


                <Grid container={{ lg: true, sm: false }} pb={15} pt={10} alignItems='center' justifyContent='center'>


                    {/* ------------------------- Tell your requirements Section ------------------------*/}
                    <Grid mr={{ lg: 5, md: 5 }} height={350} width={400} mb={5} bgcolor="#fff">

                        <Box
                            sx={{
                                pt: 2,
                                pl: 5,
                                display: "flex",
                            }}>

                            <Image
                                height={120}
                                pt={5}
                                sx={{ position: 'relative', pt: 5 }}
                                src={lightBulbImg}
                                alt='LightBulb Image'>
                            </Image>

                            <Typography sx={{ position: "absolute", pt: 9, pl: 3 }}
                                variant='h5'
                                fontFamily="poppins-semibold"
                                component='h3'
                                color='#202020'
                                fontWeight='600'
                                textAlign='center'>

                                Tell Your Requirements

                            </Typography>

                        </Box>



                        <Grid pt={1} pb={5}>
                            <Typography sx={{ padding: 2 }}
                                fontSize={13}
                                lineHeight="22px"
                                fontFamily="poppins-regular"
                                component='p'
                                color='#202020'
                                textAlign='center'>

                                Tell us your goals and we will help you build a website that speaks to your brand, customers, and audience. From content strategy to design, we'll work closely with you to create an online presence that reflects your values and elevates the products and services you offer.
                            </Typography>
                        </Grid>


                    </Grid>


                    {/* ------------------------- We Plan & design Section ------------------------*/}
                    <Grid mr={{ lg: 5, md: 5 }} mb={5} height={350} width={400} bgcolor="#fff">

                        <Box
                            sx={{
                                pt: 2,
                                pl: 5,
                                display: "flex",
                            }}>

                            <Image
                                height={120}
                                pt={5}
                                sx={{ position: 'relative', pt: 5 }}
                                src={file}
                                alt='File Image'>
                            </Image>

                            <Typography sx={{ position: "absolute", pt: 9, pl: 3 }}
                                variant='h5'
                                fontFamily="poppins-semibold"
                                component='h3'
                                color='#202020'
                                fontWeight='600'
                                textAlign='center'>

                                We Plan & Design

                            </Typography>

                        </Box>



                        <Grid pt={2}>
                            <Typography sx={{ padding: 2 }}
                                fontSize={13}
                                fontFamily="poppins-regular"
                                component='p'
                                lineHeight="22px"
                                color='#595959'
                                textAlign='center'>

                                We plan, design and develop web projects from scratch. We analyse the needs of our clients, who may be small to medium sized businesses or government bodies, and produce solutions that meet their requirements. Our aim is to help you achieve your goals as quickly as possible by offering a high-quality service at reasonable costs.
                            </Typography>
                        </Grid>


                    </Grid>


                    {/* ------------------------- We Deliver & Launch Section ------------------------*/}
                    <Grid height={350} width={400} mb={5} bgcolor="#fff">

                        <Box
                            sx={{
                                pt: 2,
                                pl: 5,
                                display: "flex",
                            }}>

                            <Image
                                height={120}
                                pt={5}
                                sx={{ position: 'relative', pt: 5 }}
                                src={rocket}
                                alt='Rocket Image'>
                            </Image>

                            <Typography sx={{ position: "absolute", pt: 9, pl: 3 }}
                                variant='h5'
                                fontFamily="poppins-semibold"
                                component='h3'
                                color='#202020'
                                fontWeight='600'
                                textAlign='center'>

                                We Deliver & Launch

                            </Typography>

                        </Box>



                        <Grid pt={2}>
                            <Typography sx={{ padding: 2 }}
                                fontSize={13}
                                fontFamily="poppins-regular"
                                component='p'
                                lineHeight="22px"
                                color='#595959'
                                textAlign='center'>

                                We have a team of skilled professionals who will take care of your project from designing and development to launch. After the successful completion of the project, our team will tell you the features of the website plus if you require any updation, we provide one month's free maintenance to you.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    )
}

export default YouImagineWeCreate