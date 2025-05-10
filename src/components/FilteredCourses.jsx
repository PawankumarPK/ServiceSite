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
                nameBg: "../../png/teamBg3.png",
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
                nameBg: "../../png/teamBg2.png",
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
                nameBg: "../../png/teamBg3.png",
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

];


///----------------- Team common sections -----------------
const PortfolioDesc = ({ name, img, nameBg, altName, isMobileApp, link }) => (
    <Grid mt={6} >

        <Link href={link} passHref target="_blank">

            <Grid justifyContent='center' alignItems="center" display='flex'>

                <Box
                    sx={{
                        border: isMobileApp ? 'none' : '2px solid #707070',
                        mr: "20px"
                    }}
                >
                    <Image
                        width={isMobileApp ? 200 : 400}
                        height={isMobileApp ? 400 : 300}
                        layout="intrinsic"
                        src={img}
                        alt={altName}
                    />
                </Box>

            </Grid>


            <Box


                sx={{
                    pt: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>

                <Image
                    width={250}
                    height={40}
                    sx={{ position: 'relative' }}
                    src={nameBg}
                    alt='Team BG One Image'>
                </Image>

                <Typography sx={{ position: "absolute" }}
                    fontSize={15}
                    fontFamily="poppins-semibold"
                    component='h4'
                    color='#fff'
                    textAlign='center'>

                    {name}

                </Typography>
            </Box>
        </Link>
    </Grid>
)


const FilteredCourses = () => {
    const [selectedTab, setSelectedTab] = useState("Websites");

    const handleTabChange = (_event, newValue) => {
        setSelectedTab(newValue);
    };

    const filteredData = categorizedCourseData.find(item => item.parent === selectedTab)?.content || [];

    return (
        <Box sx={{ p: 2 }}>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    sx={{
                        backgroundColor: '#DFF2A1',
                        borderRadius: '30px',
                        padding: '4px',
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
                                px: 5,
                                color: 'black',
                                backgroundColor: 'transparent',
                                fontFamily: "poppins-semibold",
                                '&.Mui-selected': {
                                    color: 'white',
                                    backgroundColor: '#000',
                                }
                            }}
                        />
                    ))}
                </Tabs>
            </Box>

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <Grid container spacing={0} justifyContent="center" mb={20}>
                        {filteredData.map((course) => (
                            <Grid item xs={12} sm={6} md={3.5} key={course.id}>
                                <PortfolioDesc
                                    name={course.name}
                                    nameBg={course.nameBg}
                                    img={course.image}
                                    altName={course.name}
                                    isMobileApp={selectedTab === "Mobile Apps"}
                                    link={course.link}

                                />
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </AnimatePresence>

        </Box>
    );
};

export default FilteredCourses;
