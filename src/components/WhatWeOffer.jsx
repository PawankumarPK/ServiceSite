import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Paper, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import editIcon from "../svg/editBlack.svg";
import androidIcon from "../svg/android.svg";
import appStoreIos from "../svg/appStoreIos.svg";
import bookmarkIcon from "../svg/bookmark.svg";
import creditCardIcon from "../svg/creditCard.svg";
import domainIcon from "../svg/domain.svg";
import emailIcon from "../svg/email.svg";
import flightIcon from "../svg/flight.svg";
import headsetIcon from "../svg/headset.svg";
import photoVideoIcon from "../svg/photoVideo.svg";
import serverIcon from "../svg/server.svg";
import webIcon from "../svg/web.svg";


import React from 'react'
import Image from 'next/image';


///----------------- Services common title -----------------
const ServicesOffer = ({ title, description, icon }) => (
    <Grid mb={{lg:10, md:10, sm:5, xs:5}} mr={{lg:5,md:1,sm:5}}>
        <Card elevation={2} container>

            <Grid mt={5} mr={1} height={300} width={250} bgcolor="#fff">
                <Grid ml={2} mt={2} mb={2}>
                    <Image
                        width={40}
                        src={icon}
                        alt="Folder Open Icon" />
                </Grid>

                <Typography
                    ml={2}
                    variant='p'
                    fontFamily="poppins-regular"
                    component='p2'
                    color='#202020'>

                    {title}

                </Typography>


                <Grid pt={1} pb={5}>
                    <Typography sx={{ padding: 2 }}
                        fontSize={13}
                        lineHeight="25px"
                        fontFamily="poppins-regular"
                        component='p'
                        color='#595959'>

                        {description}

                    </Typography>
                </Grid>
            </Grid>
        </Card>
    </Grid>
)

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

                    <ServicesOffer
                        title="Web Designing"
                        description="We Provide a wide array of web designing services from individual, portfolio websites to commercial websites or fully customized websites."
                        icon={editIcon}>
                    </ServicesOffer>



                    <ServicesOffer
                        title="Front End Development"
                        description="Front-End Development is related to the User Interface and User Experience (UI/UX). And We provide top quality Frond End developing service to our clients."
                        icon={webIcon}>
                    </ServicesOffer>



                    <ServicesOffer
                        title="Back End Development"
                        description="Back-end concepts are related with Coding and Programing to create a website. We Majorly Use HTML, CSS, JAVA, JavaScript, J-Query and C++ To create Stunning Results."
                        icon={serverIcon}>
                    </ServicesOffer>


                    <ServicesOffer
                        title="Android App Development"
                        description="Back-end concepts are related with Coding and Programing to create a website. We Majorly Use HTML, CSS, JAVA, JavaScript, J-Query and C++ To create Stunning Results."
                        icon={androidIcon}>
                    </ServicesOffer>

                </Grid>









                <Grid container justifyContent='center'>
                  

                    <ServicesOffer
                        title="IOS App Development"
                        description="We Provide a wide array of web designing services from individual, portfolio websites to commercial websites or fully customized websites."
                        icon={appStoreIos}>
                    </ServicesOffer>




                    <ServicesOffer
                        title="Updation & Maintenance"
                        description="New or Existing, All Websites need updation & Maintenance on time to time and We do it for you so that you can focus on your work."
                        icon={domainIcon}>
                    </ServicesOffer>



                    <ServicesOffer
                        title="SEO & Promotion"
                        description="We also provide SEO Services and Promotional Campaigns to boost your business and get you more organic clients."
                        icon={flightIcon}>
                    </ServicesOffer>


                    <ServicesOffer
                        title="Business Emails"
                        description="Sending an Official Email is always a Profesional way to intract with your Customers. Get multiple official emails with our Service."
                        icon={emailIcon}>
                    </ServicesOffer>

                </Grid>





                <Grid container justifyContent='center'>
                    

                    <ServicesOffer
                        title="Social & Email Marketing"
                        description="Entering in the crowd of new digital era of Internet, Social Media and Emails, It seems a good way to generate leads and procespects for your business and our team does it for you."
                        icon={bookmarkIcon}>
                    </ServicesOffer>



                    <ServicesOffer
                        title="eCommerce"
                        description="If you want to sell your products online, We can build a professional Online Store for your products to sell them globaly and receive the payments directly to your Bank and Wallets etc."
                        icon={creditCardIcon}>
                    </ServicesOffer>


                    <ServicesOffer
                        title="Training & Support"
                        description="Whether you are facing any issue to operate our application, software or website, don’t hesitate to call, you can even call for repetative training or share your ideas, complains and suggestion to us."
                        icon={headsetIcon}>
                    </ServicesOffer>


                    <ServicesOffer
                        title="Video Promotions"
                        description="Sending an Official Email is always a Profesional way to intract with your Customers. Get multiple official emails with our Service."
                        icon={photoVideoIcon}>
                    </ServicesOffer>

                </Grid>

            </Grid>
        </Grid>
    )
}

export default WhatWeOffer