import { Box, Button, Grid, Link, Typography } from '@mui/material'
import { Container } from '@mui/system'
import studyImage from "../../public/png/girl.png";
import folderOpenIcon from "../svg/folderOpenIcon.svg";
import editIcon from "../svg/editIcon.svg";
import codeIcon from "../svg/codeIcon.svg";
import settingsIcon from "../svg/settingsIcon.svg";

import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';


const FeatureCard = ({ icon, title, bgColor, index, variants }) => (
    <motion.div
        variants={variants}
        whileHover={{ 
            y: -12,
            scale: 1.05,
        }}
        style={{ 
            transition: 'all 0.3s ease',
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 3,
                borderRadius: '20px',
                bgcolor: '#fff',
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                transition: 'all 0.4s ease',
                border: '1px solid rgba(0,0,0,0.05)',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: bgColor,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s ease',
                },
                '&:hover': {
                    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                    transform: 'translateY(-8px)',
                    '&::before': {
                        transform: 'scaleX(1)',
                    },
                    '& .feature-icon': {
                        transform: 'scale(1.15) rotate(5deg)',
                        boxShadow: `0 10px 30px ${bgColor}50`,
                    }
                }
            }}
        >
            <Box
                className="feature-icon"
                sx={{
                    width: 90,
                    height: 90,
                    borderRadius: '20px',
                    bgcolor: bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    transition: 'all 0.4s ease',
                    boxShadow: `0 5px 20px ${bgColor}30`,
                }}
            >
                <Image
                    width={35}
                    src={icon}
                    alt={title}
                    style={{
                        filter: 'brightness(0) invert(1)',
                    }}
                />
            </Box>
            <Typography 
                component="p" 
                fontSize={14} 
                fontFamily='poppins-semibold' 
                textAlign="center" 
                color="#27363B"
                sx={{
                    lineHeight: '1.5',
                }}
            >
                {title}
            </Typography>
        </Box>
    </motion.div>
);

const MakeDesignBetter = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        hidden: { opacity: 0, y: 30, scale: 0.9 },
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

    const features = [
        { icon: folderOpenIcon, title: "World leader in consulting and finance", bgColor: "#01A9F5" },
        { icon: codeIcon, title: "A focused team with a specialized skill", bgColor: "#40536B" },
        { icon: settingsIcon, title: "Trusted and professional advisors for you", bgColor: "#DBBF05" },
        { icon: editIcon, title: "Experience to give you a better results", bgColor: "#9CC118" },
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
            <Box sx={{ position: 'relative', zIndex: 1 }}>
                {/* ----------------------- We are making design section ----------------------- */}
                <Box
                    sx={{
                        maxWidth: '1400px',
                        mx: 'auto',
                        width: '100%',
                        px: { xs: '20px', sm: '20px', md: '20px', lg: '20px' },
                        pt: { lg: 15, md: 12, sm: 10, xs: 8 },
                        pb: { lg: 8, md: 6, sm: 5, xs: 4 },
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                pt: { xs: 3, sm: 4, md: 5, lg: 6 },
                                px: { xs: 3, sm: 4, md: 5, lg: 6 },
                                pb: 0,
                                borderRadius: '30px',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(247,248,250,0.95) 100%)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: '0 25px 70px rgba(0,0,0,0.12)',
                                border: '1px solid rgba(156,193,24,0.15)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '6px',
                                    background: 'linear-gradient(90deg, #9CC118 0%, #DBD525 25%, #9CC118 50%, #DBD525 75%, #9CC118 100%)',
                                    backgroundSize: '200% 100%',
                                    animation: 'gradientFlow 2s linear infinite',
                                    zIndex: 3,
                                    borderRadius: '30px 30px 0 0',
                                },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '100%',
                                    background: 'linear-gradient(180deg, rgba(156,193,24,0.15) 0%, rgba(219,213,37,0.1) 25%, rgba(156,193,24,0.08) 50%, rgba(219,213,37,0.05) 75%, transparent 100%)',
                                    backgroundSize: '100% 200%',
                                    animation: 'gradientWave 4s ease-in-out infinite',
                                    zIndex: 0,
                                    pointerEvents: 'none',
                                },
                                '@keyframes gradientFlow': {
                                    '0%': {
                                        backgroundPosition: '0% 0%',
                                    },
                                    '100%': {
                                        backgroundPosition: '200% 0%',
                                    },
                                },
                                '@keyframes gradientWave': {
                                    '0%': {
                                        backgroundPosition: '0% 0%',
                                        opacity: 0.8,
                                    },
                                    '50%': {
                                        backgroundPosition: '0% 100%',
                                        opacity: 1,
                                    },
                                    '100%': {
                                        backgroundPosition: '0% 0%',
                                        opacity: 0.8,
                                    },
                                },
                                '& .gradient-overlay': {
                                    position: 'absolute',
                                    top: 0,
                                    left: '-100%',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(156,193,24,0.25) 50%, transparent 100%)',
                                    animation: 'shimmer 3s ease-in-out infinite',
                                    zIndex: 1,
                                    pointerEvents: 'none',
                                },
                                '@keyframes shimmer': {
                                    '0%': {
                                        left: '-100%',
                                    },
                                    '100%': {
                                        left: '100%',
                                    },
                                },
                            }}
                        >
                            {/* Animated Gradient Overlay - Shimmer Effect */}
                            <Box className="gradient-overlay" />
                            
                            <Grid
                                container
                                spacing={{ xs: 4, md: 6, lg: 6 }}
                                alignItems="flex-end"
                                id="about"
                                sx={{
                                    flex: 1,
                                    mb: 0,
                                    pb: 0,
                                    position: 'relative',
                                    zIndex: 2,
                                    '& .MuiGrid-item': {
                                        paddingBottom: 0,
                                    }
                                }}
                            >
                                {/* Left Content */}
                                <Grid 
                                    item 
                                    xs={12} 
                                    lg={7}
                                    sx={{
                                        position: 'relative',
                                        zIndex: 1,
                                        pb: 0,
                                    }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        <Typography
                                            component="p"
                                            fontSize={{ lg: 16, md: 15, xs: 13 }}
                                            color="#9CC118"
                                            fontFamily="poppins-semibold"
                                            sx={{ 
                                                mb: 2,
                                                textTransform: 'uppercase',
                                                letterSpacing: '2px',
                                            }}
                                        >
                                            Your trusted technology partner
                                        </Typography>

                                        <Typography
                                            component="h2"
                                            fontSize={{ lg: 48, md: 40, sm: 34, xs: 28 }}
                                            fontFamily="poppins-bold"
                                            color="#000"
                                            sx={{
                                                lineHeight: { lg: "1.2", xs: "1.3" },
                                                mb: 4,
                                            }}
                                        >
                                            Transforming ideas into{' '}
                                            <Box
                                                component="span"
                                                sx={{
                                                    position: 'relative',
                                                    display: 'inline-block',
                                                    '&::after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        bottom: 8,
                                                        left: 0,
                                                        right: 0,
                                                        height: '12px',
                                                        background: 'linear-gradient(135deg, rgba(156,193,24,0.3) 0%, rgba(219,213,37,0.3) 100%)',
                                                        borderRadius: '2px',
                                                        zIndex: -1,
                                                    }
                                                }}
                                            >
                                                digital excellence
                                            </Box>
                                        </Typography>

                                        <Box
                                            sx={{
                                                pl: { xs: 0, md: 3 },
                                                borderLeft: { xs: 'none', md: '4px solid #9CC118' },
                                                mb: { xs: 3, md: 4 },
                                            }}
                                        >
                                            <Typography
                                                component="p"
                                                fontSize={{ lg: 16, md: 15, xs: 14 }}
                                                color="#595959"
                                                fontFamily="poppins-regular"
                                                sx={{
                                                    lineHeight: '28px',
                                                    mb: 2.5,
                                                }}
                                            >
                                                We craft powerful digital experiences that captivate audiences and drive measurable business growth. Every project we deliver is designed to give your brand a cutting-edge advantage and maximize your return on investment.
                                            </Typography>

                                            <Typography
                                                component="p"
                                                fontSize={{ lg: 16, md: 15, xs: 14 }}
                                                color="#595959"
                                                fontFamily="poppins-regular"
                                                sx={{
                                                    lineHeight: '28px',
                                                    mb: 2.5,
                                                }}
                                            >
                                                Our powerhouse team combines the expertise of visionary architects, creative designers, skilled developers, and strategic project managers. Together, we build solutions that are not just functional—they're forward-thinking, user-centric, and built to last.
                                            </Typography>

                                            <Typography
                                                component="p"
                                                fontSize={{ lg: 16, md: 15, xs: 14 }}
                                                color="#595959"
                                                fontFamily="poppins-regular"
                                                sx={{
                                                    lineHeight: '28px',
                                                }}
                                            >
                                                Leveraging cutting-edge tech stacks, we create solutions that help you reach your objectives faster and smarter, without breaking the bank. Innovation meets affordability, every single time.
                                            </Typography>
                                        </Box>

                                        <Box>
                                            <Button 
                                                onClick={() => window.open(`https://wa.me/+919910765616?text=${encodeURIComponent("Hi! I'm interested in starting a project with you. Can you please provide more details?")}`)} 
                                                variant="contained" 
                                                sx={{
                                                    borderRadius: '50px',
                                                    bgcolor: "#27363B",
                                                    px: 5,
                                                    py: 2,
                                                    fontSize: 16,
                                                    fontFamily: 'poppins-semibold',
                                                    textTransform: 'none',
                                                    boxShadow: '0 8px 25px rgba(39,54,59,0.3)',
                                                    transition: 'all 0.3s ease',
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    mb: 4,
                                                    '&::before': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: '-100%',
                                                        width: '100%',
                                                        height: '100%',
                                                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                                                        transition: 'left 0.5s ease',
                                                    },
                                                    '&:hover': {
                                                        bgcolor: '#9CC118',
                                                        boxShadow: '0 12px 35px rgba(156,193,24,0.4)',
                                                        transform: 'translateY(-2px)',
                                                        '&::before': {
                                                            left: '100%',
                                                        }
                                                    },
                                                }}
                                            >
                                                Start your project
                                            </Button>
                                        </Box>
                                    </motion.div>
                                </Grid>

                                {/* Right Image - Inside Same Card */}
                                <Grid 
                                    item 
                                    xs={12} 
                                    lg={5}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'flex-end',
                                        position: 'relative',
                                        zIndex: 1,
                                        alignSelf: 'flex-end',
                                        pb: 0,
                                        mb: 0,
                                    }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { 
                                            opacity: 1, 
                                            y: 0,
                                        } : { 
                                            opacity: 0, 
                                            y: 30,
                                        }}
                                        transition={{ 
                                            duration: 0.6, 
                                            delay: 0.4,
                                        }}
                                        style={{ 
                                            width: '100%',
                                            marginBottom: 0,
                                            paddingBottom: 0,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: '100%',
                                                maxWidth: { xs: 300, sm: 320, md: 340, lg: 360 },
                                                mx: 'auto',
                                                mb: 0,
                                                pb: 0,
                                            }}
                                        >
                                            <Image
                                                width={360}
                                                height={420}
                                                src={studyImage}
                                                alt='study image'
                                                style={{
                                                    display: 'block',
                                                    width: '100%',
                                                    height: 'auto',
                                                    objectFit: 'contain',
                                                }}
                                            />
                                        </Box>
                                    </motion.div>
                                </Grid>
                            </Grid>
                        </Box>
                    </motion.div>
                </Box>

                {/* ----------------------- Features section ----------------------- */}
                <Box
                    sx={{
                        maxWidth: '1400px',
                        mx: 'auto',
                        width: '100%',
                        px: { xs: '20px', sm: '20px', md: '20px', lg: '20px' },
                        pb: 10,
                    }}
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <Grid 
                            container 
                            spacing={{ xs: 3, sm: 4, md: 4 }}
                            justifyContent='center'
                        >
                            {features.map((feature, index) => (
                                <Grid 
                                    item 
                                    xs={6} 
                                    sm={6} 
                                    md={3} 
                                    key={index}
                                >
                                    <FeatureCard
                                        icon={feature.icon}
                                        title={feature.title}
                                        bgColor={feature.bgColor}
                                        index={index}
                                        variants={itemVariants}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Box>
            </Box>
        </Grid>
    )
}

export default MakeDesignBetter