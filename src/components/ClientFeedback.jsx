'use client';

import React, { useRef } from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ClientFeedbackCard from './ClientFeedbackCard';

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

    return (
        <Grid bgcolor="#fff" container direction="column" alignItems="center" id="team">
            <Typography mt={10} fontSize={14} fontFamily="poppins-medium" textAlign="center" color="#27363B">
                Testimonials
            </Typography>

            <Grid width={100} height={2} bgcolor="#40536B" mb={2}></Grid>

            <Grid container justifyContent="center" textAlign="center">
                <Typography
                    component="h3"
                    color="#000"
                    noWrap
                    mt={2}
                    fontSize={{ lg: 45, md: 40, sm: 40, xs: 30 }}
                    fontFamily="poppins-semibold"
                    sx={{ lineHeight: '60px' }}
                >
                    Kind Word,
                </Typography>

                <Typography
                    component="h3"
                    color="#9CC118"
                    sx={{
                        mt: {
                            xs: 0,
                            sm: 0,
                            md: 2,
                        }
                    }}
                    fontSize={{ lg: 45, md: 40, sm: 40, xs: 40 }}
                    fontFamily="poppins-semibold"
                    // sx={{ lineHeight: '60px' }}
                >
                    &nbsp;Big Impact
                </Typography>
            </Grid>




            {/* Slider */}
            <Box
                ref={scrollRef}
                sx={{
                    display: 'flex',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    gap: 2,
                    py: 1,
                    px: { xs: 2, sm: 4, md: 6 },
                    width: '100%',
                }}
            >
                {feedbackData.map((feedback, i) => (
                    <ClientFeedbackCard key={i} {...feedback} />
                ))}
            </Box>

            {/* Navigation Arrows */}
            <Box display="flex" justifyContent="center" mt={2}>
                <IconButton
                    onClick={() => scroll('left')}
                    sx={{
                        mx: 1,
                        backgroundColor: '#4CAF50', // Green
                        color: '#fff',
                        borderRadius: '50%',
                        p: 1.5,
                        '&:hover': {
                            backgroundColor: '#45A049',
                        },
                    }}
                >
                    <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>

                <IconButton
                    onClick={() => scroll('right')}
                    sx={{
                        mx: 1,
                        backgroundColor: '#4CAF50', // Green
                        color: '#fff',
                        borderRadius: '50%',
                        p: 1.5,
                        '&:hover': {
                            backgroundColor: '#45A049',
                        },
                    }}
                >
                    <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
            </Box>
        </Grid>
    );
};

export default ClientFeedback;
