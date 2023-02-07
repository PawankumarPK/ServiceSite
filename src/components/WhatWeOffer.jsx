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
    <Grid mb={{ lg: 10, md: 10, sm: 5, xs: 5 }} mr={{ lg: 5, md: 1, sm: 5 }} id="services">
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
                        description="From individual and portfolio websites to commercial or custom sites, we have you covered with our wide array of web design services. Let us craft something special just for you."
                        icon={editIcon}>
                    </ServicesOffer>



                    <ServicesOffer
                        title="UI/UX Designing"
                        description="We create user and customer experiences that engage, inspire, and drive tangible business results — all through beautiful UI design."
                        icon={webIcon}>
                    </ServicesOffer>



                    <ServicesOffer
                        title="Back End Development"
                        description="Back-end concepts come alive with coding and programming — HTML, CSS, Java, JavaScript, jQuery, and C++ are just some of the tools you’ll use to create stunning results."
                        icon={serverIcon}>
                    </ServicesOffer>


                    <ServicesOffer
                        title="Android App Development"
                        description="We specialize in Android app development and provide top-notch services for our clients. Get the perfect user interface and user experience with us, so you can take your apps to the next level."
                        icon={androidIcon}>
                    </ServicesOffer>

                </Grid>









                <Grid container justifyContent='center'>


                    <ServicesOffer
                        title="IOS App Development"
                        description="We specialize in iOS app development, helping you get the perfect user interface and experience — so you can take your apps to the next level."
                        icon={appStoreIos}>
                    </ServicesOffer>




                    <ServicesOffer
                        title="Updation & Maintenance"
                        description="New or Existing, All Websites need updation & Maintenance on time to time and We do it for you so that you can focus on your work."
                        icon={domainIcon}>
                    </ServicesOffer>



                    <ServicesOffer
                        title="SEO & Promotion"
                        description="Get your business noticed with our SEO Services and Promotional Campaigns, designed to help you reach more organic customers and boost your bottom line."
                        icon={flightIcon}>
                    </ServicesOffer>


                    <ServicesOffer
                        title="Business Emails"
                        description="Make an impact with every message you send. Get multiple official emails with our service — and make sure your customers know they're dealing with the real deal."
                        icon={emailIcon}>
                    </ServicesOffer>

                </Grid>





                <Grid container justifyContent='center'>


                    <ServicesOffer
                        title="Social & Email Marketing"
                        description="Entering the new digital era of Internet, Social Media and Emails? Our team will help you generate leads and prospects for your business — so you can stay ahead of the competition."
                        icon={bookmarkIcon}>
                    </ServicesOffer>



                    <ServicesOffer
                        title="eCommerce"
                        description="Open up your business to the world with our professional Online Store, and start selling products globally — all while receiving payments directly in your bank or wallet of choice."
                        icon={creditCardIcon}>
                    </ServicesOffer>


                    <ServicesOffer
                        title="Training & Support"
                        description="For any issue you have with our application, software or website — don't hesitate to call. Plus, get personalized training and share your ideas, complaints and suggestions with us."
                        icon={headsetIcon}>
                    </ServicesOffer>


                    <ServicesOffer
                        title="Video Promotions"
                        description="Share vital information with a promo video. Discount codes, dates and times for events, or deadlines for the end of a sale. Get your message out fast and make sure everyone knows what's going on."
                        icon={photoVideoIcon}>
                    </ServicesOffer>

                </Grid>

            </Grid>
        </Grid>
    )
}

export default WhatWeOffer