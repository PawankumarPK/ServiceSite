import { Box, Grid, Typography, Container } from '@mui/material'
import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const CountriesServed = () => {
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
        hidden: { opacity: 0, y: 50, scale: 0.8 },
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

    const countries = [
        { name: 'INDIA', code: 'IN', flag: 'https://flagcdn.com/w320/in.png' },
        { name: 'NORWAY', code: 'NO', flag: 'https://flagcdn.com/w320/no.png' },
        { name: 'ICELAND', code: 'IS', flag: 'https://flagcdn.com/w320/is.png' },
        { name: 'USA', code: 'US', flag: 'https://flagcdn.com/w320/us.png' },
        { name: 'DUBAI', code: 'AE', flag: 'https://flagcdn.com/w320/ae.png' },
        { name: 'CANADA', code: 'CA', flag: 'https://flagcdn.com/w320/ca.png' },
    ];

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
                    height: '200px',
                    background: 'linear-gradient(180deg, rgba(247,248,250,1) 0%, rgba(247,248,250,0.8) 100%)',
                    zIndex: 0,
                }
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    px: { xs: '20px', sm: '20px', md: '20px', lg: '20px' },
                    mx: 'auto',
                }}
            >
                <Grid container direction="column" alignItems="center">
                    {/* Header Section */}
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
                            Global Presence
                        </Typography>

                        <Grid width={100} height={2} bgcolor="#40536B"></Grid>

                        <Grid container justifyContent='center' alignItems='center' textAlign="center" mt={2}>
                            <Typography
                                component="h3"
                                color="#000"
                                noWrap
                                fontSize={{ lg: 45, md: 45, xs: 40 }}
                                fontFamily="poppins-semibold"
                                style={{ lineHeight: "60px" }}
                            >
                                Countries We
                            </Typography>

                            <Typography
                                component="h3"
                                color='#9CC118'
                                fontSize={{ lg: 45, md: 45, xs: 40 }}
                                fontFamily="poppins-semibold"
                                style={{ lineHeight: "60px" }}
                            >
                                &nbsp;Serve
                            </Typography>
                        </Grid>
                    </motion.div>

                    {/* Main Content Section with Tagline */}
                    <Grid container justifyContent='center' alignItems='center' mt={5}>
                        <Grid item xs={12} lg={10} sx={{ width: '100%' }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Box
                                    sx={{
                                        bgcolor: '#fff',
                                        borderRadius: '20px',
                                        p: { xs: 4, sm: 5, md: 6 },
                                        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                                        textAlign: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: 'linear-gradient(90deg, #9CC118 0%, #DBD525 50%, #9CC118 100%)',
                                        }
                                    }}
                                >
                                    <Typography
                                        component="h2"
                                        fontSize={{ lg: 32, md: 28, xs: 24 }}
                                        fontFamily="poppins-semibold"
                                        color="#27363B"
                                        sx={{
                                            lineHeight: { lg: '1.4', xs: '1.3' },
                                            mb: 2
                                        }}
                                    >
                                        Serving Clients Across 6 Countries Worldwide
                                    </Typography>
                                    <Typography
                                        component="p"
                                        fontSize={{ lg: 16, md: 15, xs: 14 }}
                                        fontFamily="poppins-regular"
                                        color="#595959"
                                        sx={{
                                            lineHeight: '1.8',
                                            maxWidth: '800px',
                                            mx: 'auto'
                                        }}
                                    >
                                        As a leading web and mobile app development company, we proudly serve clients across India, Norway, Iceland, USA, Dubai (UAE), and Canada. Our global presence enables us to deliver world-class website development, mobile app development, and digital solutions tailored to diverse international markets. Whether you're a startup in Mumbai, a tech company in Silicon Valley, or an enterprise in Toronto, we bring expertise in React, Flutter, Next.js, and cutting-edge technologies to transform your digital presence.
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>

                    {/* Countries Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        style={{ width: '100%' }}
                    >
                        <Grid
                            container
                            spacing={{ xs: 2, sm: 3, md: 4 }}
                            justifyContent='center'
                            alignItems='center'
                            pb={10}
                            pt={5}
                        >
                            {countries.map((country, index) => (
                                <Grid
                                    item
                                    xs={6}
                                    sm={4}
                                    md={3}
                                    lg={2}
                                    key={country.code}
                                >
                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.15,
                                            y: -15,
                                            rotate: [0, -5, 5, -5, 0],
                                        }}
                                        style={{ transition: 'all 0.3s ease' }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                bgcolor: '#fff',
                                                borderRadius: '20px',
                                                p: { xs: 2.5, sm: 3 },
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                transition: 'all 0.3s ease',
                                                height: '100%',
                                                minHeight: { xs: 200, sm: 220 },
                                                position: 'relative',
                                                overflow: 'hidden',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: '3px',
                                                    background: `linear-gradient(90deg, #9CC118 0%, #DBD525 100%)`,
                                                    transform: 'scaleX(0)',
                                                    transformOrigin: 'left',
                                                    transition: 'transform 0.3s ease',
                                                },
                                                '&:hover': {
                                                    boxShadow: '0 20px 50px rgba(156,193,24,0.2)',
                                                    bgcolor: '#f9f9f9',
                                                    '&::before': {
                                                        transform: 'scaleX(1)',
                                                    }
                                                }
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: { xs: 90, sm: 110, md: 130 },
                                                    height: { xs: 70, sm: 85, md: 100 },
                                                    borderRadius: '12px',
                                                    overflow: 'hidden',
                                                    mb: 2,
                                                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                                                    position: 'relative',
                                                    '&::after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        inset: 0,
                                                        borderRadius: '12px',
                                                        border: '2px solid transparent',
                                                        background: 'linear-gradient(135deg, rgba(156,193,24,0.3), rgba(219,213,37,0.3))',
                                                        opacity: 0,
                                                        transition: 'opacity 0.3s ease',
                                                    },
                                                    '&:hover::after': {
                                                        opacity: 1,
                                                    }
                                                }}
                                            >
                                                <Image
                                                    src={country.flag}
                                                    alt={`${country.name} flag`}
                                                    width={130}
                                                    height={100}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                    }}
                                                    unoptimized
                                                />
                                            </Box>
                                            <Typography
                                                component="subtitle1"
                                                fontSize={14}
                                                fontFamily="poppins-semibold"
                                                color="#27363B"
                                                textAlign="center"
                                                sx={{
                                                    fontWeight: 600,
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                {country.name}
                                            </Typography>
                                        </Box>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Grid>
            </Container>
        </Grid>
    )
}

export default CountriesServed

