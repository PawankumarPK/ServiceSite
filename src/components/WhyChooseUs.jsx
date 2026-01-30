import { Box, Grid, Typography } from '@mui/material'
import awardIcon from "../svg/awardIcon.svg";
import chartLineIcon from "../svg/chartLineIcon.svg";
import newsIcon from "../svg/newsIcon.svg";
import googleIcon from "../svg/googleIcon.svg";
import homeIcon from "../svg/homeIcon.svg";
import magnetIcon from "../svg/magnetIcon.svg";
import metroShopIcon from "../svg/metroShopIcon.svg";
import runIcon from "../svg/runIcon.svg";
import webIcon from "../svg/webIcon.svg";


import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useMediaQuery, useTheme } from '@mui/material';

///----------------- Services common title -----------------
const Services = ({ title, description, icon, bgColor, altTag, variants, isMobile }) => (
    <motion.div
        variants={variants}
        whileHover={isMobile ? {} : { 
            y: -10, 
            scale: 1.02,
        }}
        style={{ 
            transition: 'all 0.3s ease',
            height: '100%',
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                bgcolor: '#fff',
                borderRadius: '20px',
                p: 3,
                mb: 3,
                height: { xs: '100%', sm: 200, md: 220 },
                minHeight: { xs: 180, sm: 200, md: 220 },
                boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.05)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: `linear-gradient(180deg, ${bgColor} 0%, ${bgColor}dd 100%)`,
                    transform: 'scaleY(0)',
                    transformOrigin: 'top',
                    transition: 'transform 0.4s ease',
                },
                '&:hover': {
                    boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                    transform: isMobile ? 'none' : 'translateY(-5px)',
                    border: `1px solid ${bgColor}40`,
                    '&::before': {
                        transform: 'scaleY(1)',
                    },
                    '& .icon-container': {
                        transform: isMobile ? 'scale(1.05)' : 'scale(1.1) rotate(5deg)',
                        boxShadow: `0 8px 20px ${bgColor}50`,
                    }
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    width: '100%',
                    flex: 1,
                }}
            >
                <Box
                    className="icon-container"
                    sx={{
                        width: { xs: 50, sm: 60 },
                        height: { xs: 50, sm: 60 },
                        minWidth: { xs: 50, sm: 60 },
                        borderRadius: '15px',
                        background: `linear-gradient(135deg, ${bgColor} 0%, ${bgColor}dd 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: 2.5,
                        transition: 'all 0.4s ease',
                        boxShadow: `0 5px 15px ${bgColor}30`,
                        flexShrink: 0,
                    }}
                >
                    <Image
                        width={24}
                        height={24}
                        src={icon}
                        alt={altTag}
                        style={{
                            filter: 'brightness(0) invert(1)',
                        }}
                    />
                </Box>

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Typography 
                        component="h4" 
                        fontSize={{ xs: 15, sm: 16 }} 
                        fontFamily="var(--font-poppins), sans-serif" fontWeight={600} 
                        fontWeight={600} 
                        color="#27363B"
                        sx={{ mb: 1.5 }}
                    >
                        {title}
                    </Typography>

                    <Typography 
                        component="p" 
                        lineHeight="24px" 
                        fontSize={{ xs: 13, sm: 14 }} 
                        fontFamily="var(--font-poppins), sans-serif" fontWeight={400} 
                        color="#595959"
                        sx={{
                            textTransform: 'none',
                            flex: 1,
                            display: 'flex',
                            alignItems: 'flex-start',
                        }}
                    >
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    </motion.div>
)

const WhyChooseUs = () => {
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
        hidden: { opacity: 0, x: isMobile ? -10 : -30, scale: isMobile ? 0.98 : 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: isMobile ? 0.4 : 0.6,
                type: "spring",
                stiffness: isMobile ? 120 : 100
            }
        }
    };

    return (
        <Grid 
            bgcolor="#fff" 
            container 
            direction="column" 
            alignItems="center" 
            id="features"
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
                    background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(247,248,250,0.5) 100%)',
                    zIndex: 0,
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '150px',
                    background: 'linear-gradient(0deg, rgba(156,193,24,0.03) 0%, transparent 100%)',
                    zIndex: 0,
                }
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <Typography 
                        mt={10} 
                        fontSize={14} 
                        fontFamily="var(--font-poppins), sans-serif" fontWeight={500} 
                        textAlign="center" 
                        color="#27363B"
                    >
                        How To Start
                    </Typography>

                    <Grid width={100} height={2} bgcolor="#40536B" sx={{ mt: 1 }}></Grid>

                    <Grid container justifyContent='center' textAlign="center" mt={2} mb={6}>
                        <Typography 
                            component="h3" 
                            color="#000" 
                            noWrap 
                            fontSize={{lg:50,md:45,xs:40}} 
                            fontFamily="var(--font-poppins), sans-serif" fontWeight={700} 
                            sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                        >
                            Why Choose
                        </Typography>

                        <Typography  
                            component="h3" 
                            color='#9CC118' 
                            fontSize={{lg:50,md:45,xs:40}} 
                            fontFamily="var(--font-poppins), sans-serif" fontWeight={700} 
                            sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                        >
                            &nbsp;Us
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
                            justifyContent='center' 
                            spacing={{ xs: 2, sm: 3, md: 4 }}
                            pb={10}
                        >
                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex' }}>
                            <Services
                                title="All Dynamic Websites"
                                description="All Websites by default are dynamic and customization can be done as per your business requirements and request."
                                icon={chartLineIcon}
                                bgColor="#9CC118"
                                altTag="Chart Line Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex' }}>
                            <Services
                                icon={googleIcon}
                                title="Search Engine Optimization"
                                description="SEO is the process of telling a search engine that a new website is launched and thus making it searchable and We do it for you."
                                bgColor="#DBBF05"
                                altTag="Google Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex' }}>
                            <Services
                                icon={magnetIcon}
                                title="Lead Magnets"
                                description="Generate fresh leads with a Lead Magnet and open up new possibilities for marketing success. No need to buy leads from external sources"
                                bgColor="#01A9F5"
                                altTag="Lead Magnet Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex' }}>
                            <Services
                                icon={webIcon}
                                title="All Responsive Websites"
                                description="Websites by default are now Responsive and accessible from any device — no extra charges or requests needed."
                                bgColor="#0796A1"
                                altTag="Web Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex' }}>
                            <Services
                                icon={metroShopIcon}
                                title="Email & Social Marketing"
                                description="Our digital marketing strategies and plans are designed to help your business get the greatest exposure possible, resulting in a better online presence & higher sales metrics."
                                bgColor="#12A824"
                                altTag="Social Marketing Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex' }}>
                            <Services
                                icon={runIcon}
                                title="Delivery on Time"
                                description="We try our best to give you the quality work in time however it also depends upon the complexity and length of the project."
                                bgColor="#8F07A1"
                                altTag="Delivery On Time Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex' }}>
                            <Services
                                icon={newsIcon}
                                title="Customized Designs & Layouts"
                                description="Choose from a verity of Designs or tell us your custom preference to turn your imaginations into reality imaginations into reality.."
                                bgColor="#DBD525"
                                altTag="Customized Designs Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex' }}>
                            <Services
                                icon={awardIcon}
                                title="Free SSL Certificate for 1 Year"
                                description="Make sure your website is secure with a Free SSL Certificate for the first year of every domain you register. Keep out security threats and protect what matters most."
                                bgColor="#DB4125"
                                altTag="Award Winning Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ display: 'flex' }}>
                            <Services
                                icon={homeIcon}
                                title="Your One Stop Shop"
                                description="Get your Domain and create an SEO-enabled website with ease — so you can focus on your business."
                                bgColor="#25DBBF"
                                altTag="Home Icon"
                                variants={itemVariants}
                                isMobile={isMobile}
                            />
                        </Grid>
                        </Grid>
                    </Box>
                </motion.div>
            </Box>
        </Grid>


    )
}

export default WhyChooseUs