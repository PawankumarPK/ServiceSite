'use client';

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
import teamBgTwo from "../../public/png/teamBg2.png";
import portfolio_8 from "../../public/png/portfolio_8.png";


// Replace with actual course images
const categorizedCourseData = [
    {
        parent: "Websites",
        content: [
            {
                id: 1,
                name: "Portfolio 1",
                description: "CSIR NET - Chemistry",
                image: "../png/portfolio_8.png",
                batch: "Morning Batch",
                location: "Uttar Pradesh"
            },
            {
                id: 2,
                name: "Portfolio 2",
                description: "CSIR NET - Physics",
                image: "../png/portfolio_8.png",
                location: "Delhi"
            },
            {
                id: 3,
                name: "Portfolio 3",
                description: "CSIR NET - Physics",
                image: "../png/portfolio_8.png",
                location: "Delhi"
            }
        ]
    },
    {
        parent: "Mobile Apps",
        content: [
            {
                id: 4,
                name: "App Design 1",
                description: "Android Development",
                image: "../png/portfolio_8.png",
                location: "Bangalore"
            },
            {
                id: 5,
                name: "App Design 2",
                description: "iOS Development",
                image: "../png/portfolio_8.png",
                location: "Mumbai"
            }
        ]
    },
    {
        parent: "Video Editing",
        content: [
            {
                id: 6,
                name: "Video Edit 1",
                description: "Premiere Pro Basics",
                image: "../png/portfolio_8.png",
                location: "Online"
            }
        ]
    },
    {
        parent: "AI/ML",
        content: [
            {
                id: 7,
                name: "AI Model Training",
                description: "Train custom models",
                image: "../png/portfolio_8.png",
                location: "Hyderabad"
            },
            {
                id: 8,
                name: "ML Workshop",
                description: "Machine Learning bootcamp",
                image: "../png/portfolio_8.png",
                location: "Pune"
            }
        ]
    }
];


///----------------- Team common sections -----------------
const PortfolioDesc = ({ name, img, nameBg, altName }) => (
    <Grid mt={6} >

        <Grid justifyContent='center' alignItems="center" display='flex'>

            <Box
                sx={{
                    border: '2px solid #707070', // adjust border color and thickness
                    borderRadius: '1px',     // optional: rounded corners
                }}
            >
                <Image
                    width={300}
                    height={0} // You can remove this or set "auto" if needed
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
                                    nameBg={teamBgTwo}
                                    img={course.image}
                                    altName={course.name}
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
