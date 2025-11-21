'use client';
import Link from 'next/link';


import React, { useState } from 'react';
import Image from 'next/image';
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import portfolio_8 from "../../public/png/portfolio_8.png";
import teamBgOne from "../../public/png/teamBg1.png";
import teamBgTwo from "../../public/png/teamBg2.png";
import teamBgThree from "../../public/png/teamBg3.png";


// Replace with actual course images
const categorizedCourseData = [
    {
        parent: "Websites",
        content: [
            {
                id: 1,
                name: "Cleansip Water",
                description: "Cleansip Water",
                image: "../projects/cleansip.jpg",
                nameBg: "../../png/teamBg2.png",
                location: "New Delhi",
                link: "https://cleansipwater.com/"
            },
            {
                id: 1,
                name: "Rimus Tech",
                description: "Rimus Tech",
                image: "../projects/rimus-tech.jpg",
                nameBg: "../../png/teamBg3.png",
                location: "New Delhi",
                link: "https://rimus-tech.com/"
            },
            {
                id: 1,
                name: "Aarogya Global",
                description: "Aarogya Global",
                image: "../projects/aarogya-global.jpg",
                nameBg: "../../png/teamBg1.png",
                location: "New Delhi",
                link: "https://aarogyaglobal.com/"
            },
            {
                id: 1,
                name: "CITE Lifestyle",
                description: "CITE Lifestyle",
                image: "../projects/cite.jpg",
                nameBg: "../../png/teamBg2.png",
                location: "New Delhi",
                link: "https://citelifestyle.com/"
            },
            {
                id: 1,
                name: "ASAP Institute",
                description: "ASAP Institute",
                image: "../projects/asap.png",
                nameBg: "../../png/teamBg1.png",
                location: "New Delhi",
                link: "https://asapinstitute.com/"
            },
            {
                id: 2,
                name: "BKS MyGold",
                description: "BKS MyGold",
                image: "../projects/bks-mygold.png",
                nameBg: "../../png/teamBg2.png",
                location: "Uttar Pradesh",
                link: "https://bksmygold.com/"
            },
            {
                id: 3,
                name: "Urban Venue",
                description: "Urban Venue",
                image: "../projects/urban-venue.png",
                nameBg: "../../png/teamBg3.png",
                location: "Delhi",
                link: "https://urbanvenue.in/"

            },
            {
                id: 4,
                name: "Solaris Robots",
                description: "Solaris Robots",
                image: "../projects/solaris.png",
                nameBg: "../../png/teamBg2.png",
                location: "Canada",
                link: "https://solarisrobots.com/"

            },
            {
                id: 5,
                name: "Givan Academy",
                description: "Givan Academy",
                image: "../projects/givan.png",
                nameBg: "../../png/teamBg1.png",
                location: "Delhi",
                link: "https://givanacademy.com/"

            },
            {
                id: 6,
                name: "IGNTI",
                description: "IGNTI",
                image: "../projects/ignti.png",
                nameBg: "../../png/teamBg3.png",
                location: "Delhi",
                link: "https://ignti.in/"

            },
            {
                id: 7,
                name: "LifeTrip",
                description: "LifeTrip",
                image: "../projects/lifetrip.png",
                nameBg: "../../png/teamBg2.png",
                location: "Delhi",
                link: "https://booking.owntechnologies.in/"

            },
            {
                id: 8,
                name: "Blup",
                description: "Blup",
                image: "../projects/blup.png",
                nameBg: "../../png/teamBg1.png",
                location: "Noida",
                link: "https://www.blup.in/"

            },
            {
                id: 9,
                name: "Artivatic",
                description: "Artivatic",
                image: "../projects/artivatic.png",
                nameBg: "../../png/teamBg3.png",
                location: "Noida",
                link: "https://artivatic.ai/"

            },
            {
                id: 10,
                name: "Technocom",
                description: "Technocom",
                image: "../projects/technocom.png",
                nameBg: "../../png/teamBg2.png",
                location: "Noida",
                link: "https://www.technocomsolutions.com/"

            }
        ]
    },
    {
        parent: "Mobile Apps",
        content: [
            {
                id: 1,
                name: "Tender",
                description: "Tender",
                image: "../projects/mobileProjects/tender.png",
                nameBg: "../../png/teamBg1.png",
                location: "Mumbai",
                link: "https://play.google.com/store/apps/details?id=com.client.tenderu.android"

            },
            {
                id: 2,
                name: "GIG",
                description: "GIG",
                image: "../projects/mobileProjects/gig.png",
                nameBg: "../../png/teamBg2.png",
                location: "Mumbai",
                link: "https://drive.google.com/file/d/1WlyO7B6VzPNblP8T_IhmSUAEkZJRQ_TH/view?usp=sharing"

            },

            {
                id: 3,
                name: "BKS MyGold",
                description: "BKS MyGold",
                image: "../projects/mobileProjects/bks-app.png",
                nameBg: "../../png/teamBg3.png",
                location: "Noida",
                link: "https://play.google.com/store/apps/details?id=bks.mygold.user"

            },
            {
                id: 4,
                name: "Ownsafe",
                description: "Ownsafe",
                image: "../projects/mobileProjects/ownsafe.png",
                nameBg: "../../png/teamBg2.png",
                location: "Mumbai",
                link: "https://ownsafe.in/appDownload"

            },
            {
                id: 5,
                name: "Quiz App",
                description: "Quiz App",
                image: "../projects/mobileProjects/quiz-app-2.png",
                nameBg: "../../png/teamBg1.png",
                location: "Mumbai",
                link: "https://play.google.com/store/search?q=trivia%20master&c=apps"

            },

            {
                id: 6,
                name: "Quiz Game",
                description: "Quiz Game",
                image: "../projects/mobileProjects/quiz-game-2.png",
                nameBg: "../../png/teamBg3.png",
                location: "Delhi",
                link: "https://play.google.com/store/quiz-game"

            },




        ]
    },
    {
        parent: "Admin Panels",
        content: [
            {
                id: 1,
                name: "UV Connect",
                description: "UV Connect",
                image: "../projects/adminPanel/uv-connect.png",
                nameBg: "../../png/teamBg1.png",
                location: "Delhi",
                link: "https://uvconnect.urbanvenue.in/"
            },
            {
                id: 2,
                name: "Solaris Portal",
                description: "Solaris Portal",
                image: "../projects/adminPanel/solaris-portal.png",
                nameBg: "../../png/teamBg2.png",
                location: "Canada",
                link: "https://solarisrobots.in/auth/login"

            },
            {
                id: 3,
                name: "IGNTI Portal",
                description: "Solaris Portal",
                image: "../projects/adminPanel/ignti-portal.png",
                nameBg: "../../png/teamBg3.png",
                location: "Delhi",
                link: "https://ignti.in/"

            }
        ]
    },
    {
        parent: "AI/ML",
        content: [
            {
                id: 1,
                name: "Healthcare Robots",
                description: "Healthcare Robots",
                image: "../projects/ai/jetbrain.png",
                nameBg: "../../png/teamBg1.png",
                location: "Gurugram",
                link: "https://www.youtube.com/watch?v=uNMA7h-OZ1o&t=3s&ab_channel=JetbrainRobotics"

            },
            {
                id: 2,
                name: "UV Disinfection Robot",
                description: "UV Disinfection Robot",
                image: "../projects/ai/uv-disinfect.png",
                nameBg: "../../png/teamBg2.png",
                location: "Gurugram",
                link: "https://www.youtube.com/watch?v=q_fqQ1YuB9I&ab_channel=JetbrainRobotics"

            },
            {
                id: 3,
                name: "Solaris Lytbot",
                description: "Solaris Lytbot",
                image: "../projects/ai/solaris-lytbot.png",
                nameBg: "../../png/teamBg3.png",
                location: "Canada",
                link: "https://www.youtube.com/watch?v=wJfNTI-5NHU&ab_channel=SolarisRobots"

            }
        ]
    },
    {
        parent: "Video Editing",
        content: [
            {
                id: 1,
                name: "Navirego",
                description: "Navirego",
                image: "../projects/videoEditing/navirego.png",
                nameBg: "../../png/teamBg1.png",
                location: "Delhi",
                link: "https://www.youtube.com/watch?v=8ZaOyh9cBT0&t=45s&ab_channel=Navirego"

            },
            {
                id: 2,
                name: "ASAP Institute",
                description: "ASAP",
                image: "../projects/videoEditing/asap-video.png",
                nameBg: "../../png/teamBg2.png",
                location: "Delhi",
                link: "https://www.youtube.com/@ASAPChemistry"

            },
            {
                id: 3,
                name: "Solaris",
                description: "Solaris",
                image: "../projects/videoEditing/solaris-video.png",
                nameBg: "../../png/teamBg3.png",
                location: "Canada",
                link: "https://www.youtube.com/watch?v=rggzH7Fb2nw&ab_channel=SolarisRobots"

            },
            {
                id: 4,
                name: "ARDS",
                description: "ARDS",
                image: "../projects/videoEditing/ards.png",
                nameBg: "../../png/teamBg1.png",
                location: "Delhi",
                link: "https://drive.google.com/file/d/1fge9irbcnb8jOVsPaRZvWQpqyNumdgxR/view?usp=sharing"

            },
            {
                id: 5,
                name: "WUS",
                description: "WUS",
                image: "../projects/videoEditing/wus.png",
                nameBg: "../../png/teamBg2.png",
                location: "Delhi",
                link: "https://drive.google.com/file/d/1_2JFvgry9SKUtzchxQ1JrIU4qYz8OV2L/view?usp=drive_link"

            },
            {
                id: 6,
                name: "BMW Car",
                description: "BMW Car",
                image: "../projects/videoEditing/bmw.png",
                nameBg: "../../png/teamBg3.png",
                location: "Delhi",
                link: "https://drive.google.com/file/d/1Flilxlj1Mq9kqReoyYRzcaSqfAuUn4D3/view?usp=sharing"

            }

        ]
    },


];


///----------------- Team common sections -----------------
const PortfolioDesc = ({ name, img, nameBg, altName, isMobileApp, link }) => (
    <motion.div
        whileHover={{
            y: -15,
            scale: 1.02,
        }}
        style={{
            transition: 'all 0.3s ease',
            height: '100%',
        }}
    >
        <Box
            sx={{
                bgcolor: '#fff',
                borderRadius: '25px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.4s ease',
                position: 'relative',
                border: '1px solid rgba(0,0,0,0.05)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
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
                    zIndex: 1,
                },
                '&:hover': {
                    boxShadow: '0 20px 50px rgba(156,193,24,0.25)',
                    transform: 'translateY(-8px)',
                    border: '1px solid rgba(156,193,24,0.3)',
                    '&::before': {
                        transform: 'scaleX(1)',
                    },
                    '& .portfolio-image': {
                        transform: 'scale(1.08)',
                    },
                    '& .portfolio-overlay': {
                        opacity: 1,
                    },
                    '& .portfolio-name': {
                        transform: 'translateY(-5px)',
                    }
                }
            }}
        >
            <Link href={link} passHref target="_blank" style={{ textDecoration: 'none', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        bgcolor: '#f8f9fa',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        px: { xs: 2, sm: 2.5 },
                        py: { xs: 0.5, sm: 1 },
                        minHeight: isMobileApp ? 240 : 220,
                        maxHeight: isMobileApp ? 240 : 220,
                    }}
                >
                    <Box
                        className="portfolio-overlay"
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(135deg, rgba(156,193,24,0.15) 0%, rgba(219,213,37,0.15) 100%)',
                            opacity: 0,
                            transition: 'opacity 0.4s ease',
                            zIndex: 1,
                        }}
                    />
                    <Box
                        className="portfolio-image"
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            transition: 'transform 0.5s ease',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            width={isMobileApp ? 400 : 500}
                            height={isMobileApp ? 200 : 200}
                            src={img}
                            alt={altName}
                            style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                maxHeight: '100%',
                            }}
                        />
                    </Box>
                </Box>

                <Box
                    className="portfolio-name"
                    sx={{
                        pt: 2,
                        pb: 2.5,
                        px: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: 'relative',
                        transition: 'transform 0.4s ease',
                        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(247,248,250,1) 100%)',
                    }}
                >
                    <Image
                        width={250}
                        height={45}
                        src={nameBg}
                        alt='Team BG One Image'
                        style={{ position: 'relative' }}
                    />
                    <Typography
                        sx={{
                            position: "absolute",
                            fontSize: { xs: 15, sm: 16 },
                            fontFamily: "poppins-semibold",
                            color: '#fff',
                            fontWeight: 600,
                        }}
                        component='h4'
                        textAlign='center'
                    >
                        {name}
                    </Typography>
                </Box>
            </Link>
        </Box>
    </motion.div>
)


const FilteredCourses = () => {
    const [selectedTab, setSelectedTab] = useState("Websites");

    const handleTabChange = (_event, newValue) => {
        setSelectedTab(newValue);
    };

    const filteredData = categorizedCourseData.find(item => item.parent === selectedTab)?.content || [];

    return (
        <Box
            sx={{
                pb: 10,
                pt: 2,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 0,
                    mb: 6,
                    px: { xs: 2, sm: 3, md: 4 },
                }}
            >
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    allowScrollButtonsMobile
                    sx={{
                        background: 'linear-gradient(135deg, rgba(156,193,24,0.15) 0%, rgba(219,213,37,0.15) 100%)',
                        borderRadius: '30px',
                        padding: '6px',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                        width: {
                            xs: '100%',
                            sm: '100%',
                            md: '100%',
                            lg: 'auto',
                            xl: 'auto',
                        },
                        maxWidth: {
                            xs: 700,
                            sm: 700,
                            md: 700,
                            lg: 'none',
                            xl: 'none',
                        }
                    }}
                    TabIndicatorProps={{ style: { display: 'none' } }}
                >
                    {categorizedCourseData.map((category) => (
                        <Tab
                            key={category.parent}
                            value={category.parent}
                            label={category.parent}
                            sx={{
                                borderRadius: '30px',
                                textTransform: 'none',
                                fontWeight: 600,
                                px: { xs: 2, sm: 3 },
                                py: 1.5,
                                color: '#27363B',
                                backgroundColor: 'transparent',
                                fontFamily: 'poppins-semibold',
                                fontSize: { xs: 13, sm: 14 },
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(156,193,24,0.1)',
                                },
                                '&.Mui-selected': {
                                    color: '#fff',
                                    background: 'linear-gradient(135deg, #9CC118 0%, #DBD525 100%)',
                                    boxShadow: '0 5px 15px rgba(156,193,24,0.3)',
                                },
                            }}
                        />
                    ))}
                </Tabs>
            </Box>

            <Box
                sx={{
                    maxWidth: '1400px',
                    mx: 'auto',
                    px: { xs: '20px', sm: '20px', md: '20px', lg: '20px' },
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Grid
                            container
                            spacing={{ xs: 3, sm: 4, md: 4 }}
                            justifyContent="center"
                            sx={{ mb: 10 }}
                        >
                            {filteredData.map((course, index) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                    key={course.id}
                                    sx={{ display: 'flex' }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        style={{ width: '100%' }}
                                    >
                                        <PortfolioDesc
                                            name={course.name}
                                            nameBg={course.nameBg}
                                            img={course.image}
                                            altName={course.name}
                                            isMobileApp={selectedTab === 'Mobile Apps'}
                                            link={course.link}
                                        />
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </AnimatePresence>
            </Box>
        </Box>
    );
};

export default FilteredCourses;
