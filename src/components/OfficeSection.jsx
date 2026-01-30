import { Box, Grid, Typography } from '@mui/material'
import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useMediaQuery, useTheme } from '@mui/material';

import officeImg1 from "../../public/office/office-img-1.jpg";
import officeImg2 from "../../public/office/office-img-2.jpg";
import officeImg3 from "../../public/office/office-img-3.jpg";
import officeImg4 from "../../public/office/office-img-4.jpg";
import officeImg5 from "../../public/office/office-img-5.jpg";
import officeImg6 from "../../public/office/office-img-6.jpg";

const OfficeSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
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
                duration: 0.7,
                type: "spring",
                stiffness: 100
            }
        }
    };

    const officeImages = [
        { src: officeImg1, alt: 'Office workspace 1' },
        { src: officeImg2, alt: 'Office workspace 2' },
        { src: officeImg3, alt: 'Office workspace 3' },
        { src: officeImg4, alt: 'Office workspace 4' },
        { src: officeImg5, alt: 'Office workspace 5' },
        { src: officeImg6, alt: 'Office workspace 6' },
    ];

    return (
        <Grid
            bgcolor="#fff"
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
                    background: 'linear-gradient(180deg, rgba(247,248,250,1) 0%, rgba(247,248,250,0.5) 50%, rgba(247,248,250,0) 100%)',
                    zIndex: 0,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '150px',
                    background: 'linear-gradient(0deg, rgba(156,193,24,0.05) 0%, transparent 100%)',
                    zIndex: 0,
                }
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
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
                        fontFamily="var(--font-poppins), sans-serif" fontWeight={500}
                        textAlign="center"
                        color="#27363B"
                    >
                        Our Workspace
                    </Typography>

                    <Grid width={100} height={2} bgcolor="#40536B" sx={{ mt: 1 }}></Grid>

                    <Grid container justifyContent='center' alignItems='center' textAlign="center" mt={2} mb={6}>
                        <Typography
                            component="h3"
                            color="#000"
                            fontSize={{ lg: 50, md: 45, xs: 40 }}
                            fontFamily="var(--font-poppins), sans-serif" fontWeight={700}
                            sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                        >
                            Where Innovation
                        </Typography>
                        <Typography
                            component="h3"
                            color='#9CC118'
                            fontSize={{ lg: 50, md: 45, xs: 40 }}
                            fontFamily="var(--font-poppins), sans-serif" fontWeight={700}
                            sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                        >
                            &nbsp;Happens
                        </Typography>
                    </Grid>
                </motion.div>

                {/* Office Images Grid */}
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '1400px',
                        mx: 'auto',
                        px: { xs: '20px', sm: '20px', md: '20px', lg: '20px' },
                    }}
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        style={{ width: '100%' }}
                    >
                        <Grid
                            container
                            spacing={{ xs: 2, sm: 3, md: 3 }}
                            justifyContent='center'
                            pb={10}
                            pt={2}
                        >
                            {officeImages.map((image, index) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={index === 0 || index === 4 ? 6 : 6}
                                    lg={index === 0 || index === 4 ? 6 : 6}
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={isMobile ? {} : { 
                                            scale: 1.05,
                                            y: -10,
                                            transition: { duration: 0.3 }
                                        }}
                                        style={{ width: '100%', height: '100%' }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: '100%',
                                                height: { xs: 250, sm: 300, md: 350, lg: 400 },
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                                                transition: 'all 0.4s ease',
                                                cursor: 'pointer',
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: '5px',
                                                    background: 'linear-gradient(90deg, #9CC118 0%, #DBD525 50%, #9CC118 100%)',
                                                    zIndex: 2,
                                                    transform: 'scaleX(0)',
                                                    transformOrigin: 'left',
                                                    transition: 'transform 0.4s ease',
                                                },
                                                '&:hover': {
                                                    boxShadow: '0 20px 60px rgba(156,193,24,0.3)',
                                                    '&::before': {
                                                        transform: 'scaleX(1)',
                                                    },
                                                    '& .office-image': {
                                                        transform: 'scale(1.1)',
                                                    }
                                                }
                                            }}
                                        >
                                            <Box
                                                className="office-image"
                                                sx={{
                                                    position: 'relative',
                                                    width: '100%',
                                                    height: '100%',
                                                    transition: 'transform 0.6s ease',
                                                }}
                                            >
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    style={{
                                                        objectFit: 'cover',
                                                    }}
                                                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                                                />
                                            </Box>
                                            
                                            {/* Gradient Overlay on Hover */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: 'linear-gradient(180deg, transparent 0%, rgba(156,193,24,0.1) 100%)',
                                                    opacity: 0,
                                                    transition: 'opacity 0.4s ease',
                                                    zIndex: 1,
                                                    '&:hover': {
                                                        opacity: 1,
                                                    }
                                                }}
                                            />
                                        </Box>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Box>

                {/* Description Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '900px',
                            mx: 'auto',
                            px: { xs: '20px', sm: '20px', md: '20px', lg: '20px' },
                            pb: 10,
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            component="p"
                            fontSize={{ lg: 16, md: 15, xs: 14 }}
                            color="#595959"
                            fontFamily="var(--font-poppins), sans-serif" fontWeight={400}
                            sx={{
                                lineHeight: '28px',
                            }}
                        >
                            Step into our modern workspace where creativity meets technology. Our office is designed to foster collaboration, innovation, and productivity. From collaborative spaces to quiet zones, every corner is crafted to inspire our team to deliver exceptional results for our clients worldwide.
                        </Typography>
                    </Box>
                </motion.div>
            </Box>
        </Grid>
    )
}

export default OfficeSection

