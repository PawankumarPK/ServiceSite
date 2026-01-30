import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import facebookIcon from "../svg/facebookBlack.svg";
import instagramIcon from "../svg/instagramBlack.svg";
import linkdinIcon from "../svg/linkedinBlack.svg";
import twitterIcon from "../svg/twitterBlack.svg";

import callIcon from "../svg/call.svg";
import emailIcon from "../svg/emailBlack.svg";
import locationIcon from "../svg/location.svg";

import flowerPot from "../../public/png/flowerPot.png"

import ownLogo from "../../public/png/ownLogo.png"

import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';


const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <Grid
            bgcolor="#fff"
            id="contact"
            ref={ref}
            sx={{ position: 'relative', overflow: 'hidden' }}
        >
            {/* Watermark */}
            <Box
                sx={{
                    position: 'absolute',
                    left: '50%',
                    top: { lg: '52%', md: '52%', sm: '55%', xs: '57%' },
                    transform: 'translate(-50%, -50%) rotate(-18deg)',
                    fontSize: { lg: 100, md: 95, sm: 85, xs: 28 },
                    fontFamily: 'var(--font-poppins), sans-serif',
                    fontWeight: 700,
                    color: 'rgba(39, 54, 59, 0.08)',
                    letterSpacing: { lg: 1, md: 1, xs: 0.5 },
                    userSelect: 'none',
                    pointerEvents: 'none',
                    textTransform: 'uppercase',
                    whiteSpace: { xs: 'normal', sm: 'nowrap' },
                    maxWidth: { xs: '85vw', sm: '80vw' },
                    width: { xs: 'max-content', sm: 'auto' },
                    textAlign: 'center',
                    lineHeight: 1.2,
                }}
            >
                CodeAndClick Pvt. Ltd
            </Box>

            <Grid
                mb={8}
                justifyContent={{ lg: "center", md: "start", sm: "start", xs: "start" }}
                container={{ lg: true, md: false, sm: false, xs: false }}>

                <Grid ml={{ md: 2, sm: 2, xs: 2 }}>



                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        style={{ width: '100%' }}
                    >
                        <Grid container mt={10} >

                            <motion.div variants={itemVariants}>
                                <Grid>
                                    <Image
                                        width={80}
                                        src={ownLogo}
                                        alt="Logo" />
                                </Grid>
                            </motion.div>

                            <Grid justifyContent='center' >
                                {/* --------------------- OWN text ------------------------- */}
                                <motion.div variants={itemVariants}>
                                    <Grid container
                                        width={150}
                                        height={45}
                                        ml={{ lg: 1, md: 1, sm: 1, xs: 1 }}
                                    >

                                        <Typography component="h6" color="#27363B" textAlign='center' fontSize={{ lg: 40, xs: 35 }} fontFamily="var(--font-poppins), sans-serif" fontWeight={700}>
                                            OWN
                                        </Typography>

                                    </Grid>
                                </motion.div>

                                {/* --------------------- Technologies text ------------------------- */}
                                <motion.div variants={itemVariants}>
                                    <Grid
                                        component="body1"
                                        color="#27363B"
                                        container
                                        width={105}
                                        justifyContent="center"
                                        ml={{ lg: 1, md: 1, sm: 1, xs: 1 }}
                                    >


                                        <Typography textAlign='center' fontSize={{ lg: 15, xs: 15 }} fontFamily="var(--font-poppins), sans-serif" fontWeight={400}>
                                            Technologies
                                        </Typography>

                                    </Grid>
                                </motion.div>



                            </Grid>

                            {/* ///--------- All Textfield ----------------------  */}
                            {/* <Grid container >
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

                        </Grid> */}
                        </Grid>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Grid
                            width={250}
                            justifyContent="center"
                            mt={3}>


                            <Typography component="subtitle1" color="#000" textAlign='start' fontSize={{ lg: 15, xs: 15 }} fontFamily="var(--font-poppins), sans-serif" fontWeight={400}>
                                Accelerate your online presence
                            </Typography>

                        </Grid>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Grid

                            color="#27363B"
                            container
                            width={{ lg: 400, xs: 300 }}
                            justifyContent="center"
                            mt={1}>


                            <Typography component="body1"
                                color="#838788" textAlign='start' fontSize={{ lg: 15, xs: 15 }} fontFamily="var(--font-poppins), sans-serif" fontWeight={400}>
                                We have been helping businesses reach their full potential — and beyond. Our agency offers a wide array of services to get you there. Explore our website for more info, and see how far you can go!
                            </Typography>

                        </Grid>
                    </motion.div>




                </Grid>


                {/* /// ------------------- Contact section ------------------ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Grid ml={{ lg: 8, md: 0, sm: 2, xs: 2 }}>
                        <Grid

                            color="#27363B"
                            width={{ lg: 400, md: 300, sm: 250 }}
                            mt={10}
                        >


                            <Typography component="h4"
                                textAlign='start' fontSize={{ lg: 20, xs: 15 }} fontFamily="var(--font-poppins), sans-serif" fontWeight={600}>
                                Contact Us

                            </Typography>

                        </Grid>

                        <Grid
                            color="#27363B"
                            width={{ lg: 400, md: 200, sm: 250 }}
                            mt={1}>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Grid alignItems='center' display='flex' mt={5}
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => window.open(`tel:9910765616`)}>
                                    <Image
                                        width={18}
                                        src={callIcon}
                                        alt="call Icon" />
                                    <Typography component="subtitle1" ml={2} fontFamily="var(--font-poppins), sans-serif" fontWeight={400} color="#000" textTransform='none'>
                                        +91-9910765616
                                    </Typography>

                                </Grid>
                            </motion.div>



                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Grid alignItems='center' display='flex' mt={5}
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => window.open(`mailto:hello@owntechnologies.in?subject=Enquiry`)}>

                                    <Image
                                        width={18}
                                        src={emailIcon}
                                        alt="email Icon" />

                                    <Typography component="subtitle1" ml={2} fontFamily="var(--font-poppins), sans-serif" fontWeight={400} color="#000" textTransform='none'>
                                        hello@owntechnologies.in
                                    </Typography>

                                </Grid>
                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            >
                                <Grid alignItems='center' display='flex' mt={5}
                                    sx={{
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => window.open(`mailto:pyadav.workmail@gmail.com?subject=Enquiry`)}>

                                    <Image
                                        width={18}
                                        src={emailIcon}
                                        alt="email Icon" />

                                    <Typography component="subtitle1" ml={2} fontFamily="var(--font-poppins), sans-serif" fontWeight={400} color="#000" textTransform='none'>
                                        pyadav.workmail@gmail.com
                                    </Typography>

                                </Grid>
                            </motion.div>

                        </Grid>
                    </Grid>
                </motion.div>



                {/* /// ------------------- Address section ------------------ */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Grid ml={{ sm: 2, xs: 2 }}>
                        <Grid

                            color="#27363B"
                            width={100}
                            mt={10}
                            ml={{ lg: 0, md: 2, sm: 0 }}>


                            <Typography component="h4" textAlign='start' fontSize={{ lg: 20, xs: 15 }} fontFamily="var(--font-poppins), sans-serif" fontWeight={600}>
                                Address

                            </Typography>

                        </Grid>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    mt: 5,
                                    ml: { lg: 0, md: 2, sm: 0 },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        pt: 0.5,
                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        width={18}
                                        src={locationIcon}
                                        alt="location icon" />
                                </Box>

                                <Box
                                    sx={{
                                        ml: 2,
                                        flex: 1,
                                        width: { lg: 270, md: 300, sm: 'auto', xs: 'auto' },
                                        maxWidth: { lg: 270, md: 300, sm: '100%', xs: '100%' },
                                    }}
                                >
                                    <Typography
                                        component="subtitle1"
                                        fontFamily="var(--font-poppins), sans-serif" fontWeight={400}
                                        color="#000"
                                        sx={{
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word',
                                        }}
                                    >
                                        10, Poorvi Marg, DLF Phase 2, Sector 25, Gurugram, Haryana 122022
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
                            transition={{ duration: 0.7, delay: 0.9, type: "spring" }}
                            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.2 } }}
                        >
                            <Grid mt={10} width={{ lg: 300, md: 250, }}>
                                <Image
                                    layout='responsive'
                                    src={flowerPot}
                                    alt="Flower Pot" />
                            </Grid>
                        </motion.div>


                    </Grid>
                </motion.div>
            </Grid>



            {/* ----------------------- Social Media icons ----------------------- */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <Box
                    sx={{
                        width: { lg: 400, xs: 'auto' },
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: { lg: 'center', md: "flex-start", sm: "flex-start", xs: "flex-start" },
                        ml: { lg: 0, md: 2, sm: 2, xs: 2 },
                        mt: 8,
                        gap: 3,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -180 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.2 } }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Link href="https://www.facebook.com/profile.php?id=100091625195907" target='_blank'>
                            <Image
                                width={20}
                                src={facebookIcon}
                                alt="Facebook" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -180 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.2 } }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Link href="https://www.instagram.com/own_technologies/?next=%2F" target='_blank'>
                            <Image
                                width={23}
                                src={instagramIcon}
                                alt="Instagram" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -180 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.2 } }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Link href="https://www.linkedin.com/company/own-technologies/?viewAsMember=true" target='_blank'>
                            <Image
                                width={23}
                                src={linkdinIcon}
                                alt="LinkedIn" />
                        </Link>
                    </motion.div>
                </Box>
            </motion.div>


            {/* ----------------------- Copyright text ----------------------- */}

            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
            >
                <Grid
                    textAlign={{ lg: 'center', md: "center", sm: "start", xs: "start" }}
                    pb={5}
                    ml={{ lg: 0, md: 2, sm: 2, xs: 2 }}
                >
                    <Box
                        sx={{
                            mt: 8,
                            pt: 3,
                            borderTop: '1px solid rgba(131, 135, 136, 0.25)',
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: 'center',
                            justifyContent: { lg: 'center', md: 'center', sm: 'flex-start', xs: 'flex-start' },
                            gap: { xs: 0.5, sm: 1.5 },
                        }}
                    >
                        <Typography
                            component="p"
                            fontSize={12}
                            fontFamily="var(--font-poppins), sans-serif" fontWeight={400}
                            color="#838788"
                            textTransform='none'
                        >
                            Copyright © 2025-26
                        </Typography>

                        <Typography
                            component="p"
                            fontSize={12}
                            fontFamily="var(--font-poppins), sans-serif" fontWeight={400}
                            color="#838788"
                            textTransform='none'
                        >
                            <Box component="span" sx={{ mx: 0.5, color: '#B0B5BA' }}>|</Box>
                            Government-authorised digital partner:
                            <Box
                                component="span"
                                sx={{
                                    ml: 0.5,
                                    fontFamily: 'var(--font-poppins), sans-serif',
                                    fontWeight: 600,
                                    letterSpacing: 0.4,
                                    color: '#9CC118',
                                }}
                            >
                                CodeAndClick Pvt. Ltd.
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
            </motion.div>






        </Grid>
    )
}

export default Footer