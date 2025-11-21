import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import file from "../../public/png/file.png";
import rocket from "../../public/png/rocket.png";
import lightBulbImg from "../../public/png/lightbulb.png";

import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useMediaQuery, useTheme } from '@mui/material';

const ProcessCard = ({ icon, title, description, index, variants, isInView, isMobile }) => {
    const colors = [
        { primary: '#9CC118', secondary: '#DBD525' },
        { primary: '#01A9F5', secondary: '#0796A1' },
        { primary: '#DBD525', secondary: '#9CC118' },
    ];

    const color = colors[index % colors.length];

    return (
        <motion.div
            variants={variants}
            whileHover={isMobile ? {} : {
                y: -15,
                scale: 1.03,
            }}
            style={{
                transition: 'all 0.3s ease',
                height: '100%',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: { xs: 450, sm: 470, md: 490 },
                    bgcolor: '#fff',
                    borderRadius: '25px',
                    p: { xs: 3, sm: 4 },
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '5px',
                        background: `linear-gradient(90deg, ${color.primary} 0%, ${color.secondary} 100%)`,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.4s ease',
                        borderRadius: '25px 25px 0 0',
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: -100,
                        right: -100,
                        width: 300,
                        height: 300,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${color.primary}10 0%, transparent 70%)`,
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                    },
                    '&:hover': {
                        boxShadow: `0 20px 50px ${color.primary}30`,
                        transform: isMobile ? 'none' : 'translateY(-8px)',
                        border: `1px solid ${color.primary}30`,
                        '&::before': {
                            transform: 'scaleX(1)',
                        },
                        '&::after': {
                            opacity: 1,
                        },
                        '& .process-icon': {
                            transform: isMobile ? 'scale(1.05)' : 'scale(1.15) rotate(5deg)',
                            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                        },
                        '& .process-number': {
                            transform: isMobile ? 'scale(1.05)' : 'scale(1.2)',
                            opacity: 1,
                        }
                    }
                }}
            >
                {/* Step Number */}
                <Box
                    className="process-number"
                    sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${color.primary} 0%, ${color.secondary} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.8,
                        transition: 'all 0.4s ease',
                        boxShadow: `0 5px 15px ${color.primary}40`,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 20,
                            fontFamily: 'poppins-bold',
                            color: '#fff',
                        }}
                    >
                        {index + 1}
                    </Typography>
                </Box>

                {/* Icon Container */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 2,
                        mt: 2,
                        flexShrink: 0,
                    }}
                >
                    <Box
                        className="process-icon"
                        sx={{
                            width: { xs: 130, sm: 150, md: 170 },
                            height: { xs: 130, sm: 150, md: 170 },
                            borderRadius: '25px',
                            background: `linear-gradient(135deg, ${color.primary}15 0%, ${color.secondary}15 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            transition: 'all 0.4s ease',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: -3,
                                borderRadius: '25px',
                                padding: '3px',
                                background: `linear-gradient(135deg, ${color.primary} 0%, ${color.secondary} 100%)`,
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                                opacity: 0,
                                transition: 'opacity 0.4s ease',
                            },
                        }}
                    >
                        <Image
                            src={icon}
                            alt={title}
                            width={120}
                            height={120}
                            style={{
                                objectFit: 'contain',
                                transition: 'all 0.4s ease',
                            }}
                        />
                    </Box>
                </Box>

                {/* Title */}
                <Typography
                    component="h3"
                    fontSize={{ xs: 20, sm: 22, md: 24 }}
                    fontFamily="poppins-bold"
                    color="#27363B"
                    textAlign="center"
                    sx={{
                        mb: 2,
                        mt: 1,
                        fontWeight: 700,
                        flexShrink: 0,
                    }}
                >
                    {title}
                </Typography>

                {/* Description */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        minHeight: 0,
                    }}
                >
                    <Typography
                        component="p"
                        fontSize={{ xs: 14, sm: 15 }}
                        fontFamily="poppins-regular"
                        color="#595959"
                        textAlign="center"
                        sx={{
                            lineHeight: '26px',
                            width: '100%',
                            overflow: 'auto',
                            '&::-webkit-scrollbar': {
                                width: '4px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: 'rgba(0,0,0,0.2)',
                                borderRadius: '2px',
                            },
                        }}
                    >
                        {description}
                    </Typography>
                </Box>
            </Box>
        </motion.div>
    );
};

const YouImagineWeCreate = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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

    const processSteps = [
        {
            icon: lightBulbImg,
            title: "Tell Your Requirements",
            description: "Get the best app and website development services for your business. We specialize in cross-platform mobile applications, website design and development, eCommerce solutions, and SEO services that help you get maximum ROI from internet marketing."
        },
        {
            icon: file,
            title: "We Plan & Design",
            description: "We offer custom-made app and website development services for businesses of all sizes. Our team of developers, designers, and SEO experts will help you create a digital presence that will make your brand stand out from the competition."
        },
        {
            icon: rocket,
            title: "We Deliver & Launch",
            description: "Our team do their best to launch your website on time. After the successful completion of the project, our team will tell you the features of the website plus if you require any updation, we provide one month's free maintenence to you."
        }
    ];

    return (
        <Grid
            bgcolor="#F7F8FA"
            ref={ref}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '200px',
                    background: 'linear-gradient(180deg, rgba(247,248,250,1) 0%, rgba(247,248,250,0.5) 100%)',
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
            <Grid container direction="column" alignItems="center" sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <Typography
                        component="p"
                        mt={10}
                        fontSize={14}
                        fontFamily='poppins-medium'
                        textAlign="center"
                        color="#27363B"
                    >
                        How To Start
                    </Typography>

                    <Grid width={100} height={2} bgcolor="#40536B" sx={{ mt: 1 }}></Grid>

                    <Grid container justifyContent='center' textAlign="center" mt={2} mb={8}>
                        <Typography
                            component="h3"
                            color="#000"
                            noWrap
                            fontSize={{ lg: 50, md: 45, xs: 40 }}
                            fontFamily="poppins-bold"
                            sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                        >
                            You Imagine,
                        </Typography>

                        <Typography
                            component="h3"
                            color='#9CC118'
                            fontSize={{ lg: 50, md: 45, xs: 40 }}
                            fontFamily="poppins-bold"
                            sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                        >
                            &nbsp;We Create
                        </Typography>
                    </Grid>
                </motion.div>


                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{ width: '100%' }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '1400px',
                            mx: 'auto',
                            px: { xs: '20px', sm: '20px', md: '20px', lg: '20px' },
                        }}
                    >
                        <Grid
                            container
                            spacing={{ xs: 4, sm: 4, md: 5 }}
                            justifyContent='center'
                            alignItems='stretch'
                            pb={10}
                            pt={2}
                        >
                            {processSteps.map((step, index) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        height: { xs: 450, sm: 470, md: 490 },
                                        mb: { xs: 2, sm: 0 },
                                        mt: { xs: 2, sm: 0 },
                                    }}
                                >
                                    <ProcessCard
                                        icon={step.icon}
                                        title={step.title}
                                        description={step.description}
                                        index={index}
                                        variants={itemVariants}
                                        isInView={isInView}
                                        isMobile={isMobile}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </motion.div>
            </Grid>
        </Grid>
    )
}

export default YouImagineWeCreate