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


                <Grid container justifyContent='center' textAlign="center">
                    <Typography noWrap mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        You Imagine, We
                    </Typography>

                    <Typography color='#9CC118' mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        &nbsp;Create
                    </Typography>
                </Grid>


                <Grid container pb={15} pt={10} alignItems='center' justifyContent='center'>


                    {/* ------------------------- Tell your requirements Section ------------------------*/}
                    <Grid mr={5} height={300} width={400} bgcolor="#fff">

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

                                Tell us your Business requirements, thoughts & imaginations about your website and we will fully customize your website, plus we will stay in touch with you and you will get updates about the progress of your project untill it completes.
                            </Typography>
                        </Grid>


                    </Grid>


                    {/* ------------------------- We Plan & design Section ------------------------*/}
                    <Grid mr={5} height={300} width={400} bgcolor="#fff">

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

                                We Analyse and plan it and Our Brilliant Team Will turn your imaginations into reality as per your need regardless of whatever efforts it takes. Depending upon project’s length & complexity the time may vary between 5-15 day.
                            </Typography>
                        </Grid>


                    </Grid>


                    {/* ------------------------- We Deliver & Launch Section ------------------------*/}
                    <Grid height={300} width={400} bgcolor="#fff">

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

                                Our team do their best to launch your website on time. After the successful completion of the project, our team will tell you the features of the website plus if you require any updation, we provide one month’s free maintenence to you.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    )
}

export default YouImagineWeCreate