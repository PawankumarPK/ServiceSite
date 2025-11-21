'use client';

import React, { useRef } from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClientFeedbackCard from './ClientFeedbackCard';
import { motion, useInView } from 'framer-motion';

const feedbackData = [
    {
        imageSrc: '/testimonial/ajay-chemtime.png',
        altName: 'Ajay Krishna',
        name: 'Ajay Krishna',
        nameBg: '../../png/teamBg1.png',
        designation: 'ASAP, Director',
        message: 'Working with OwnTechnologies has been an absolute game-changer. Their innovative solutions and professional team helped us scale our marketing campaigns seamlessly. Highly recommend!',
    },
    {
        imageSrc: '/testimonial/amit-chemtime.png',
        altName: 'Amit Kumar',
        name: 'Amit Kumar',
        nameBg: '../../png/teamBg2.png',
        designation: 'ASAP, Director',
        message: 'Pawan and his team were instrumental in the success of our product launch. Their attention to detail and timely delivery made the entire process smooth and stress-free.',
    },
    {
        imageSrc: '/testimonial/indian-girl.jpg',
        altName: 'Client Riya',
        name: 'Riya Kapoor',
        nameBg: '../../png/teamBg3.png',
        designation: 'Brand Consultant',
        message: 'From the initial concept to final execution, OwnTechnologies provided exceptional service. Their creative input has truly elevated our brand identity.',
    },
    {
        imageSrc: '/testimonial/ajay-solaris.jpg',
        altName: 'Ajay Vishnu',
        name: 'Ajay Vishnu',
        nameBg: '../../png/teamBg1.png',
        designation: 'Solaris, CTO',
        message: 'OwnTechnologies helped us refine our strategy and design, delivering stunning solutions that have significantly improved our outreach. A team of true professionals!',
    },
    {
        imageSrc: '/testimonial/shivjeet.jpeg',
        altName: 'Shivjeet kullar',
        name: 'Shivjeet kullar',
        nameBg: '../../png/teamBg2.png',
        designation: 'GIG, Founder',
        message: 'The collaboration with Pawan and his team was seamless. They understood our goals and implemented innovative solutions that enhanced our overall product experience.',
    },
    {
        imageSrc: '/testimonial/munib-saad.jpg',
        altName: 'Munib-saad',
        name: 'Munib Saad',
        nameBg: '../../png/teamBg3.png',
        designation: 'Operations Head',
        message: 'OwnTechnologies efficiency in streamlining our operational processes was remarkable. Their technical expertise has played a key role in improving our bottom line.',
    },
    {
        imageSrc: '/testimonial/urbanvenue.png',
        altName: 'Urban Venue',
        name: 'Urban Venue',
        nameBg: '../../png/teamBg1.png',
        designation: 'Event Organiser',
        message: 'The user experience enhancements that Pawan and his team introduced have been game-changing. We’ve received positive feedback from our customers ever since the launch.',
    },
    {
        imageSrc: '/testimonial/indian-1.jpg',
        altName: 'Alex Foster',
        name: 'Alex Foster',
        nameBg: '../../png/teamBg2.png',
        designation: 'Tech Lead',
        message: 'Working with OwnTechnologies was an outstanding experience. They delivered beyond expectations with their innovative technology solutions, and their support was top-notch.',
    },
    {
        imageSrc: '/testimonial/ignti.jpeg',
        altName: 'IGNTI',
        name: 'IGNTI',
        nameBg: '../../png/teamBg3.png',
        designation: 'Director,IGNTI',
        message: 'Pawan and his team at OwnTechnologies delivered a robust backend infrastructure for our institute. Their precision and code quality stood out throughout the project.',
    },
    {
        imageSrc: '/testimonial/givan-academy.png',
        altName: 'Givan Academy',
        name: 'Givan Academy',
        nameBg: '../../png/teamBg2.png',
        designation: 'Founder, Givan Academy',
        message: 'We collaborated with OwnTechnologies for a website. Their UI/UX clarity and backend stability really impressed our entire marketing team.',
    },
    {
        imageSrc: '/testimonial/bks.png',
        altName: 'Amol Bansal',
        name: 'Amol Bansal',
        nameBg: '../../png/teamBg1.png',
        designation: 'Founder',
        message: 'What sets Pawan apart is not just technical skills but also empathy. He understood the sensitivity of our health product and built accordingly. Truly trustworthy.',
    },

];

const ClientFeedback = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Grid 
            bgcolor="#F7F8FA" 
            container 
            direction="column" 
            alignItems="center" 
            id="team"
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
                    height: '250px',
                    background: 'linear-gradient(180deg, rgba(247,248,250,1) 0%, rgba(247,248,250,0.5) 100%)',
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
                        fontFamily="poppins-medium" 
                        textAlign="center" 
                        color="#27363B"
                    >
                        Testimonials
                    </Typography>

                    <Grid width={100} height={2} bgcolor="#40536B" mb={2} sx={{ mt: 1 }}></Grid>

                    <Grid container justifyContent="center" textAlign="center" mt={2} mb={6}>
                        <Typography
                            component="h3"
                            color="#000"
                            noWrap
                            fontSize={{ lg: 50, md: 45, sm: 40, xs: 35 }}
                            fontFamily="poppins-bold"
                            sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                        >
                            Kind Word,
                        </Typography>

                        <Typography
                            component="h3"
                            color="#9CC118"
                            fontSize={{ lg: 50, md: 45, sm: 40, xs: 35 }}
                            fontFamily="poppins-bold"
                            sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                        >
                            &nbsp;Big Impact
                        </Typography>
                    </Grid>
                </motion.div>




                {/* Slider */}
                <Box
                    ref={scrollRef}
                    sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        scrollBehavior: 'smooth',
                        gap: 3,
                        py: 2,
                        px: { xs: 2, sm: 4, md: 6, lg: 8 },
                        width: '100%',
                        maxWidth: '1600px',
                        mx: 'auto',
                        '&::-webkit-scrollbar': {
                            height: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'rgba(0,0,0,0.05)',
                            borderRadius: '10px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'linear-gradient(90deg, #9CC118 0%, #DBD525 100%)',
                            borderRadius: '10px',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #8BB017 0%, #CBC025 100%)',
                            },
                        },
                    }}
                >
                    {feedbackData.map((feedback, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <ClientFeedbackCard {...feedback} />
                        </motion.div>
                    ))}
                </Box>

                {/* Navigation Arrows */}
                <Box display="flex" justifyContent="center" mt={4} mb={8} sx={{ position: 'relative', zIndex: 1 }}>
                    <IconButton
                        onClick={() => scroll('left')}
                        sx={{
                            mx: 1,
                            background: 'linear-gradient(135deg, #9CC118 0%, #DBD525 100%)',
                            color: '#fff',
                            borderRadius: '50%',
                            p: 2,
                            width: 50,
                            height: 50,
                            boxShadow: '0 5px 20px rgba(156,193,24,0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #8BB017 0%, #CBC025 100%)',
                                transform: 'scale(1.1)',
                                boxShadow: '0 8px 25px rgba(156,193,24,0.4)',
                            },
                        }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    <IconButton
                        onClick={() => scroll('right')}
                        sx={{
                            mx: 1,
                            background: 'linear-gradient(135deg, #9CC118 0%, #DBD525 100%)',
                            color: '#fff',
                            borderRadius: '50%',
                            p: 2,
                            width: 50,
                            height: 50,
                            boxShadow: '0 5px 20px rgba(156,193,24,0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #8BB017 0%, #CBC025 100%)',
                                transform: 'scale(1.1)',
                                boxShadow: '0 8px 25px rgba(156,193,24,0.4)',
                            },
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </Box>
        </Grid>
    );
};

export default ClientFeedback;
