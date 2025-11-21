import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Paper, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
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


import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';


///----------------- Services common title -----------------
const ServicesOffer = ({ title, description, icon, altName, variants, isMobile }) => (
    <motion.div
        variants={variants}
        whileHover={isMobile ? {} : { 
            y: -8, 
            scale: 1.02,
        }}
        style={{ 
            transition: 'all 0.3s ease',
            height: '100%',
        }}
    >
        <Grid 
            mb={{ lg: 3, md: 3, sm: 2.5, xs: 2.5 }} 
            mt={{ lg: 2, md: 2, sm: 1.5, xs: 1.5 }}
            mx={{ lg: 1, md: 0.5, sm: 0.5, xs: 0.5 }} 
            id="services"
            sx={{ height: '100%' }}
        >
            <Card 
                elevation={0}
                sx={{
                    height: '100%',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(156,193,24,0.1)',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #9CC118 0%, #DBD525 50%, #9CC118 100%)',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.4s ease',
                    },
                    '&:hover': {
                        boxShadow: '0 20px 50px rgba(156,193,24,0.25)',
                        transform: 'translateY(-3px)',
                        background: 'linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)',
                        border: '1px solid rgba(156,193,24,0.3)',
                        '&::before': {
                            transform: 'scaleX(1)',
                        },
                        '& .icon-container': {
                            background: 'linear-gradient(135deg, #9CC118 0%, #DBD525 100%)',
                            transform: 'scale(1.1) rotate(5deg)',
                        },
                        '& .icon-image': {
                            filter: 'brightness(0) invert(1)',
                        }
                    }
                }}
            >
                <Grid 
                    height={{ lg: 320, md: 300, xs: 'auto' }} 
                    width={{ lg: 280, md: 260, xs: '100%' }} 
                    bgcolor="transparent"
                    sx={{ p: 3 }}
                >
                    <Box
                        className="icon-container"
                        sx={{
                            width: 70,
                            height: 70,
                            borderRadius: '15px',
                            background: 'linear-gradient(135deg, rgba(156,193,24,0.1) 0%, rgba(219,213,37,0.1) 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 3,
                            transition: 'all 0.4s ease',
                            boxShadow: '0 5px 15px rgba(156,193,24,0.2)',
                        }}
                    >
                        <Image
                            className="icon-image"
                            width={35}
                            height={35}
                            src={icon}
                            alt={altName}
                            style={{
                                transition: 'all 0.4s ease',
                            }}
                        />
                    </Box>

                    <Typography
                        variant='p'
                        fontFamily="poppins-semibold"
                        component='subtitle1'
                        color='#27363B'
                        fontSize={{ lg: 18, md: 16, xs: 16 }}
                        sx={{
                            mb: 2,
                            fontWeight: 600,
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography 
                        sx={{ 
                            fontSize: { lg: 14, md: 13, xs: 12 },
                            lineHeight: "24px",
                            color: '#595959',
                        }}
                        fontFamily="poppins-regular"
                        component='p'
                    >
                        {description}
                    </Typography>
                </Grid>
            </Card>
        </Grid>
    </motion.div>
)

const WhatWeOffer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <Grid 
            bgcolor="#F7F8FA"
            ref={ref}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '300px',
                    background: 'linear-gradient(180deg, rgba(247,248,250,1) 0%, rgba(247,248,250,0.5) 50%, rgba(247,248,250,0) 100%)',
                    zIndex: 0,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '200px',
                    background: 'linear-gradient(0deg, rgba(156,193,24,0.05) 0%, rgba(219,213,37,0.05) 50%, transparent 100%)',
                    zIndex: 0,
                }
            }}
        >
            <Grid container direction="column" alignItems="center" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <Typography 
                        component="subtitle2" 
                        mt={10} 
                        fontSize={14} 
                        fontFamily='poppins-medium' 
                        textAlign="center" 
                        color="#27363B"
                    >
                        Our Services
                    </Typography>

                    <Grid width={100} height={2} bgcolor="#40536B" sx={{ mt: 1 }}></Grid>

                    <Grid container justifyContent='center' alignItems='center' textAlign="center" mt={2} mb={4}>
                        <Typography 
                            component="h3" 
                            color="#000" 
                            noWrap 
                            fontSize={{ lg: 50, md: 45, xs: 40 }} 
                            fontFamily="poppins-bold" 
                            sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                        >
                            What We
                        </Typography>

                        <Typography 
                            component="h3" 
                            color='#9CC118' 
                            fontSize={{ lg: 50, md: 45, xs: 40 }} 
                            fontFamily="poppins-bold" 
                            sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                        >
                            &nbsp;Offer
                        </Typography>
                    </Grid>
                </motion.div>


                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{ width: '100%' }}
                >
                    <Grid 
                        container 
                        justifyContent='center' 
                        mt={8}
                        mb={8}
                        spacing={{ xs: 1.5, sm: 2, md: 2.5 }}
                        sx={{ px: { xs: 2, sm: 3, md: 4 } }}
                    >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ServicesOffer
                                title="Web Designing"
                                description="From individual and portfolio websites to commercial or custom sites, we have you covered with our wide array of web design services. Let us craft something special just for you."
                                icon={editIcon}
                                altName="Edit Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ServicesOffer
                                title="UI/UX Designing"
                                description="We create user and customer experiences that engage, inspire, and drive tangible business results — all through beautiful UI design."
                                icon={webIcon}
                                altName="web Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ServicesOffer
                                title="Back End Development"
                                description="Back-end concepts come alive with coding and programming — HTML, CSS, Java, JavaScript, jQuery, and C++ are just some of the tools you'll use to create stunning results."
                                icon={serverIcon}
                                altName="server Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ServicesOffer
                                title="Android App Development"
                                description="We specialize in Android app development and provide top-notch services for our clients. Get the perfect user interface and user experience with us, so you can take your apps to the next level."
                                icon={androidIcon}
                                altName="android Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ServicesOffer
                                title="IOS App Development"
                                description="We specialize in iOS app development, helping you get the perfect user interface and experience — so you can take your apps to the next level."
                                icon={appStoreIos}
                                altName="appStoreIos Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ServicesOffer
                                title="Updation & Maintenance"
                                description="New or Existing, All Websites need updation & Maintenance on time to time and We do it for you so that you can focus on your work."
                                icon={domainIcon}
                                altName="domain Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ServicesOffer
                                title="SEO & Promotion"
                                description="Get your business noticed with our SEO Services and Promotional Campaigns, designed to help you reach more organic customers and boost your bottom line."
                                icon={flightIcon}
                                altName="flight Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ServicesOffer
                                title="Business Emails"
                                description="Make an impact with every message you send. Get multiple official emails with our service — and make sure your customers know they're dealing with the real deal."
                                icon={emailIcon}
                                altName="Business Emails Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ServicesOffer
                                title="Social & Email Marketing"
                                description="Entering the new digital era of Internet, Social Media and Emails? Our team will help you generate leads and prospects for your business — so you can stay ahead of the competition."
                                icon={bookmarkIcon}
                                altName="Bookmark Icon Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ServicesOffer
                                title="eCommerce"
                                description="Open up your business to the world with our professional Online Store, and start selling products globally — all while receiving payments directly in your bank or wallet of choice."
                                icon={creditCardIcon}
                                altName="creditCard Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ServicesOffer
                                title="Training & Support"
                                description="For any issue you have with our application, software or website — don't hesitate to call. Plus, get personalized training and share your ideas, complaints and suggestions with us."
                                icon={headsetIcon}
                                altName="headset Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <ServicesOffer
                                title="Video Promotions"
                                description="Share vital information with a promo video. Discount codes, dates and times for events, or deadlines for the end of a sale. Get your message out fast and make sure everyone knows what's going on."
                                icon={photoVideoIcon}
                                altName="photo Video Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>
                    </Grid>
                </motion.div>

            </Grid>
        </Grid>
    )
}

export default WhatWeOffer