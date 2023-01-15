import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Paper, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import file from "../../public/png/file.png";
import rocket from "../../public/png/rocket.png";
import lightBulbImg from "../../public/png/lightbulb.png";
import editIcon from "../svg/editBlack.svg";


import React from 'react'
import Image from 'next/image';

const WhatWeOffer = () => {
    return (
        <Grid bgcolor="#F7F8FA" >

            <Grid container direction="column" alignItems="center" >

                <Typography mt={10} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B">
                    Our Services
                </Typography>

                <Grid width={100} height={2} bgcolor="#40536B"></Grid>


                <Grid container justifyContent='center' textAlign="center">
                    <Typography noWrap mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        What We
                    </Typography>

                    <Typography color='#9CC118' mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        &nbsp;Offer
                    </Typography>
                </Grid>


                <Grid container justifyContent='center' mt={10}>
                    <Grid mb={10} mr={5}>
                        <Card elevation={3} container>


                            {/* ------------------------- Web Design Section ------------------------*/}
                            <Grid mt={5} mr={5} height={300} width={250} bgcolor="#fff">



                                <Grid ml={2} mt={2}>
                                    <Image
                                        width={40}
                                        src={editIcon}
                                        alt="Folder Open Icon" />
                                </Grid>

                                <Typography
                                    ml={2}
                                    variant='p'
                                    fontFamily="poppins-regular"
                                    component='p2'
                                    color='#202020'>

                                    Web Designing




                                </Typography>




                                <Grid pt={1} pb={5}>
                                    <Typography sx={{ padding: 2 }}
                                        fontSize={13}
                                        lineHeight="25px"
                                        fontFamily="poppins-regular"
                                        component='p'
                                        color='#595959'
                                    >

                                        We Provide a wide array of web designing services from individual, portfolio websites to commercial websites or fully customized websites.



                                    </Typography>
                                </Grid>


                            </Grid>

                        </Card>
                    </Grid>




                    <Grid mr={5}>
                        <Card elevation={3} container>


                            <Grid mt={5} mr={5} height={300} width={250} bgcolor="#fff">



                                <Grid ml={2} mt={2} mb={2}>
                                    <Image
                                        width={40}
                                        src={editIcon}
                                        alt="Folder Open Icon" />
                                </Grid>

                                <Typography
                                    ml={2}
                                    variant='p'
                                    fontFamily="poppins-regular"
                                    component='p2'
                                    color='#202020'>

                                    Front End Development



                                </Typography>




                                <Grid pt={1} pb={5}>
                                    <Typography sx={{ padding: 2 }}
                                        fontSize={13}
                                        lineHeight="25px"
                                        fontFamily="poppins-regular"
                                        component='p'
                                        color='#595959'
                                    >

                                        Front-End Development is related to the User Interface and User Experience (UI/UX). And We provide top quality Frond End developing service to our clients.



                                    </Typography>
                                </Grid>


                            </Grid>





                        </Card>
                    </Grid>




                    <Grid mr={5}>
                        <Card elevation={3} container>


                            <Grid mt={5} mr={5} height={300} width={250} bgcolor="#fff">



                                <Grid ml={2} mt={2} mb={2}>
                                    <Image
                                        width={40}
                                        src={editIcon}
                                        alt="Folder Open Icon" />
                                </Grid>

                                <Typography
                                    ml={2}
                                    variant='p'
                                    fontFamily="poppins-regular"
                                    component='p2'
                                    color='#202020'>

                                    Back End Development



                                </Typography>




                                <Grid pt={1} pb={5}>
                                    <Typography sx={{ padding: 2 }}
                                        fontSize={13}
                                        lineHeight="25px"
                                        fontFamily="poppins-regular"
                                        component='p'
                                        color='#595959'
                                    >

                                        Back-end concepts are related with Coding and Programing to create a website. We Majorly Use HTML, CSS, JAVA, JavaScript, J-Query and C++ To create Stunning Results.


                                    </Typography>
                                </Grid>


                            </Grid>





                        </Card>
                    </Grid>

                    <Grid mb={10}>
                        <Card elevation={3} container>


                            <Grid mt={5} mr={5} height={300} width={250} bgcolor="#fff">



                                <Grid ml={2} mt={2} mb={2}>
                                    <Image
                                        width={40}
                                        src={editIcon}
                                        alt="Folder Open Icon" />
                                </Grid>

                                <Typography
                                    ml={2}
                                    variant='p'
                                    fontFamily="poppins-regular"
                                    component='p2'
                                    color='#202020'>

                                    Android App Development



                                </Typography>




                                <Grid pt={1} pb={5}>
                                    <Typography sx={{ padding: 2 }}
                                        fontSize={13}
                                        lineHeight="25px"
                                        fontFamily="poppins-regular"
                                        component='p'
                                        color='#595959'
                                    >

                                        Back-end concepts are related with Coding and Programing to create a website. We Majorly Use HTML, CSS, JAVA, JavaScript, J-Query and C++ To create Stunning Results.


                                    </Typography>
                                </Grid>


                            </Grid>





                        </Card>
                    </Grid>
                </Grid>






                <Grid container justifyContent='center'>
                    <Grid mr={5}>
                        <Card elevation={3} container>


                            {/* ------------------------- Web Design Section ------------------------*/}
                            <Grid mt={5} mr={5} height={300} width={250} bgcolor="#fff">



                                <Grid ml={2} mt={2} mb={2}>
                                    <Image
                                        width={40}
                                        src={editIcon}
                                        alt="Folder Open Icon" />
                                </Grid>

                                <Typography
                                    ml={2}
                                    variant='p'
                                    fontFamily="poppins-regular"
                                    component='p2'
                                    color='#202020'>

                                    IOS App Development


                                </Typography>




                                <Grid pt={1} pb={5}>
                                    <Typography sx={{ padding: 2 }}
                                        fontSize={13}
                                        lineHeight="25px"
                                        fontFamily="poppins-regular"
                                        component='p'
                                        color='#595959'
                                    >

                                        We Provide a wide array of web designing services from individual, portfolio websites to commercial websites or fully customized websites.


                                    </Typography>
                                </Grid>


                            </Grid>

                        </Card>
                    </Grid>




                    <Grid mb={10} mr={5}>
                        <Card elevation={3} container>


                            <Grid mt={5} mr={5} height={300} width={250} bgcolor="#fff">



                                <Grid ml={2} mt={2} mb={2}>
                                    <Image
                                        width={40}
                                        src={editIcon}
                                        alt="Folder Open Icon" />
                                </Grid>

                                <Typography
                                    ml={2}
                                    variant='p'
                                    fontFamily="poppins-regular"
                                    component='p2'
                                    color='#202020'>

                                    Updation & Maintenance



                                </Typography>




                                <Grid pt={1} pb={5}>
                                    <Typography sx={{ padding: 2 }}
                                        fontSize={13}
                                        lineHeight="25px"
                                        fontFamily="poppins-regular"
                                        component='p'
                                        color='#595959'
                                    >

                                        New or Existing, All Websites need updation & Maintenance on time to time and We do it for you so that you can focus on your work.

                                    </Typography>
                                </Grid>


                            </Grid>





                        </Card>
                    </Grid>




                    <Grid mb={10} mr={5}>
                        <Card elevation={3} container>


                            <Grid mt={5} mr={5} height={300} width={250} bgcolor="#fff">



                                <Grid ml={2} mt={2} mb={2}>
                                    <Image
                                        width={40}
                                        src={editIcon}
                                        alt="Folder Open Icon" />
                                </Grid>

                                <Typography
                                    ml={2}
                                    variant='p'
                                    fontFamily="poppins-regular"
                                    component='p2'
                                    color='#202020'>

                                    SEO & Promotion


                                </Typography>




                                <Grid pt={1} pb={5}>
                                    <Typography sx={{ padding: 2 }}
                                        fontSize={13}
                                        lineHeight="25px"
                                        fontFamily="poppins-regular"
                                        component='p'
                                        color='#595959'
                                    >

                                        We also provide SEO Services and Promotional Campaigns to boost your business and get you more organic clients.


                                    </Typography>
                                </Grid>


                            </Grid>





                        </Card>
                    </Grid>

                    <Grid mb={10}>
                        <Card elevation={3} container>


                            <Grid mt={5} mr={5} height={300} width={250} bgcolor="#fff">



                                <Grid ml={2} mt={2} mb={2}>
                                    <Image
                                        width={40}
                                        src={editIcon}
                                        alt="Folder Open Icon" />
                                </Grid>

                                <Typography
                                    ml={2}
                                    variant='p'
                                    fontFamily="poppins-regular"
                                    component='p2'
                                    color='#202020'>

                                    Business Emails




                                </Typography>




                                <Grid pt={1} pb={5}>
                                    <Typography sx={{ padding: 2 }}
                                        fontSize={13}
                                        lineHeight="25px"
                                        fontFamily="poppins-regular"
                                        component='p'
                                        color='#595959'
                                    >

                                        Sending an Official Email is always a Profesional way to intract with your Customers. Get multiple official emails with our Service.



                                    </Typography>
                                </Grid>


                            </Grid>





                        </Card>
                    </Grid>
                </Grid>








                <Grid container justifyContent='center'>
                    <Grid mr={5}>
                        <Card elevation={3} container>


                            {/* ------------------------- Web Design Section ------------------------*/}
                            <Grid mt={5} mr={5} height={300} width={250} bgcolor="#fff">



                                <Grid ml={2} mt={2} mb={2}>
                                    <Image
                                        width={40}
                                        src={editIcon}
                                        alt="Folder Open Icon" />
                                </Grid>

                                <Typography
                                    ml={2}
                                    variant='p'
                                    fontFamily="poppins-regular"
                                    component='p2'
                                    color='#202020'>

                                    Social & Email Marketing



                                </Typography>




                                <Grid pt={1} pb={5}>
                                    <Typography sx={{ padding: 2 }}
                                        fontSize={13}
                                        lineHeight="25px"
                                        fontFamily="poppins-regular"
                                        component='p'
                                        color='#595959'
                                    >

                                        Entering in the crowd of new digital era of Internet, Social Media and Emails, It seems a good way to generate leads and procespects for your business and our team does it for you.




                                    </Typography>
                                </Grid>


                            </Grid>

                        </Card>
                    </Grid>




                    <Grid mb={10} mr={5}>
                        <Card elevation={3} container>


                            <Grid mt={5} mr={5} height={300} width={250} bgcolor="#fff">



                                <Grid ml={2} mt={2} mb={2}>
                                    <Image
                                        width={40}
                                        src={editIcon}
                                        alt="Folder Open Icon" />
                                </Grid>

                                <Typography
                                    ml={2}
                                    variant='p'
                                    fontFamily="poppins-regular"
                                    component='p2'
                                    color='#202020'>

                                    eCommerce


                                </Typography>




                                <Grid pt={1} pb={5}>
                                    <Typography sx={{ padding: 2 }}
                                        fontSize={13}
                                        lineHeight="25px"
                                        fontFamily="poppins-regular"
                                        component='p'
                                        color='#595959'
                                    >

                                        If you want to sell your products online, We can build a professional Online Store for your products to sell them globaly and receive the payments directly to your Bank and Wallets etc.


                                    </Typography>
                                </Grid>


                            </Grid>





                        </Card>
                    </Grid>




                    <Grid mb={10} mr={5}>
                        <Card elevation={3} container>


                            <Grid mt={5} mr={5} height={300} width={250} bgcolor="#fff">



                                <Grid ml={2} mt={2} mb={2}>
                                    <Image
                                        width={40}
                                        src={editIcon}
                                        alt="Folder Open Icon" />
                                </Grid>

                                <Typography
                                    ml={2}
                                    variant='p'
                                    fontFamily="poppins-regular"
                                    component='p2'
                                    color='#202020'>

                                    Training & Support


                                </Typography>




                                <Grid pt={1} pb={5}>
                                    <Typography sx={{ padding: 2 }}
                                        fontSize={13}
                                        lineHeight="25px"
                                        fontFamily="poppins-regular"
                                        component='p'
                                        color='#595959'
                                    >

                                        Whether you are facing any issue to operate our application, software or website, don’t hesitate to call, you can even call for repetative training or share your ideas, complains and suggestion to us.


                                    </Typography>
                                </Grid>


                            </Grid>





                        </Card>
                    </Grid>

                    <Grid mb={10}>
                        <Card elevation={3} container>


                            <Grid mt={5} mr={5} height={300} width={250} bgcolor="#fff">



                                <Grid ml={2} mt={2} mb={2}>
                                    <Image
                                        width={40}
                                        src={editIcon}
                                        alt="Folder Open Icon" />
                                </Grid>

                                <Typography
                                    ml={2}
                                    variant='p'
                                    fontFamily="poppins-regular"
                                    component='p2'
                                    color='#202020'>

                                    Video Promotions


                                </Typography>




                                <Grid pt={1} pb={5}>
                                    <Typography sx={{ padding: 2 }}
                                        fontSize={13}
                                        lineHeight="25px"
                                        fontFamily="poppins-regular"
                                        component='p'
                                        color='#595959'
                                    >

                                        Sending an Official Email is always a Profesional way to intract with your Customers. Get multiple official emails with our Service.


                                    </Typography>
                                </Grid>


                            </Grid>





                        </Card>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default WhatWeOffer