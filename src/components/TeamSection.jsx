import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Grow, Link, Paper, Stack, Typography } from '@mui/material'
import pawan from "../../public/team/pawan.jpeg";
import rohan from "../../public/team/rohan.jpg";
import aarav from "../../public/team/aarav.jpg";
import vihaan from "../../public/team/vihaan.jpg";
import meera from "../../public/team/meera.jpg";
import ananya from "../../public/team/ananya.jpg";
import armaan from "../../public/team/armaan.jpg";
import teamTwo from "../../public/png/team2.png";
import teamThree from "../../public/png/team3.png";


import teamBgOne from "../../public/png/teamBg1.png";

import teamBgTwo from "../../public/png/teamBg2.png";

import teamBgThree from "../../public/png/teamBg3.png";
import React, { useRef } from 'react'
import Image from 'next/image';
import { textAlign } from '@mui/system';
import ClientFeedbackCard from './ClientFeedbackCard';
import { motion, useInView } from 'framer-motion';

///----------------- Team common sections -----------------
const Teams = ({ name, designation, img, nameBg, altName, variants }) => (
    <motion.div
        variants={variants}
        whileHover={{
            scale: 1.05,
            y: -10,
        }}
        style={{
            transition: 'all 0.3s ease',
            height: '100%',
            width: '100%'
        }}
    >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    mb: 2,
                    width: { xs: 140, sm: 160, md: 190, lg: 220 },
                    height: { xs: 140, sm: 160, md: 190, lg: 220 },
                }}
            >
                {/* Gradient Border Effect */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #9CC118, #DBD525, #9CC118)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: 1,
                        '&:hover': {
                            opacity: 0.2,
                        }
                    }}
                />

                {/* Main Image Container with Creative Shape */}
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        zIndex: 2,
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, rgba(156,193,24,0.1) 0%, rgba(219,213,37,0.1) 100%)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            zIndex: 1,
                        },
                        '&:hover': {
                            boxShadow: '0 20px 50px rgba(156,193,24,0.4)',
                            transform: 'translateY(-5px)',
                            '&::before': {
                                opacity: 1,
                            }
                        }
                    }}
                >
                    {/* Decorative Corner Elements */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '30px',
                            height: '30px',
                            borderTop: '3px solid #9CC118',
                            borderLeft: '3px solid #9CC118',
                            borderRadius: '20px 0 0 0',
                            zIndex: 2,
                            opacity: 0.6,
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: '30px',
                            height: '30px',
                            borderBottom: '3px solid #DBD525',
                            borderRight: '3px solid #DBD525',
                            borderRadius: '0 0 20px 0',
                            zIndex: 2,
                            opacity: 0.6,
                        }}
                    />

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Image
                            src={img}
                            alt={altName}
                            width={220}
                            height={220}
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                                borderRadius: '20px',
                            }}
                        />
                    </motion.div>
                </Box>
            </Box>

            <Box
                sx={{
                    pt: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: 'relative',
                    width: '100%',
                    maxWidth: '100%',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: { xs: '90%', sm: '85%', md: '80%', lg: '200px' },
                        maxWidth: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Image
                        height={35}
                        width={200}
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                        }}
                        src={nameBg}
                        alt='Team BG Image'
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                        }}
                    >
                    </Image>

                    <Typography
                        sx={{
                            position: "absolute",
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '90%',
                            maxWidth: '180px',
                        }}
                        fontSize={{ xs: 11, sm: 12, md: 14, lg: 16 }}
                        fontFamily="poppins-semibold"
                        component='h4'
                        color='#fff'
                        textAlign='center'
                        noWrap
                    >
                        {name}
                    </Typography>
                </Box>
            </Box>

            <Typography
                mt={1.5}
                fontSize={{ xs: 12, sm: 13, md: 14 }}
                fontFamily="poppins-regular"
                component='p'
                color='#595959'
                textAlign='center'
                sx={{
                    fontWeight: 500,
                }}
            >
                {designation}
            </Typography>
        </Box>
    </motion.div>
)

const TeamSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, });

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
        hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -10 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <Grid
            bgcolor="#fff"
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
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '150px',
                    background: 'linear-gradient(0deg, rgba(247,248,250,1) 0%, rgba(247,248,250,0) 100%)',
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
                        fontFamily='poppins-medium'
                        textAlign="center"
                        color="#27363B"
                    >
                        We are own technologies company
                    </Typography>

                    <Grid width={260} height={2} bgcolor="#40536B" sx={{ mt: 1 }}></Grid>

                    <Grid container justifyContent='center' textAlign="center" mt={2}>
                        <Typography
                            component='h3'
                            color="#000"
                            noWrap
                            fontSize={{ lg: 50, md: 45, sm: 40, xs: 32 }}
                            fontFamily="poppins-bold"
                            sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                        >
                            We have some
                        </Typography>
                    </Grid>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Typography
                            component='h4'
                            color="#9CC118"
                            mt={0}
                            fontSize={{ lg: 50, md: 45, sm: 40, xs: 32 }}
                            fontFamily="poppins-bold"
                            sx={{
                                lineHeight: { lg: "60px", xs: "1.2" },
                            }}
                        >
                            great talented staff
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Grid width={{ lg: 500, md: 450, sm: 350, xs: '90%' }} sx={{ maxWidth: '100%', px: { xs: 2 } }}>
                            <Typography
                                component='p'
                                mt={3}
                                fontSize={{ lg: 15, md: 14, xs: 13 }}
                                fontFamily='poppins-regular'
                                textAlign="center"
                                color="#595959"
                                sx={{ lineHeight: '1.8' }}
                            >
                                Experience own technologies like never before, with injected alterations that bring a new level of clarity to your work.
                            </Typography>
                        </Grid>
                    </motion.div>
                </motion.div>



                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{ width: '100%' }}
                >
                    <Grid
                        container
                        spacing={{ xs: 3, sm: 4, md: 4 }}
                        justifyContent='center'
                        sx={{ maxWidth: '1400px', margin: '0 auto', px: { xs: 2, sm: 3, md: 4 } }}
                        pb={10}
                        pt={6}
                    >
                        <Grid item xs={6} sm={4} md={3} lg={2.4}>
                            <Box
                                sx={{
                                    bgcolor: '#fff',
                                    borderRadius: '20px',
                                    p: 3,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    '&:hover': {
                                        boxShadow: '0 20px 50px rgba(156,193,24,0.2)',
                                    }
                                }}
                            >
                                <Link href="https://www.linkedin.com/in/pawan-kumar-yadav/" scroll={true} passHref target="_blank" style={{ textDecoration: 'none' }}>
                                    <Teams
                                        name="Pawan"
                                        designation="Captain"
                                        nameBg={teamBgOne}
                                        img={pawan}
                                        altName="team Member One"
                                        variants={itemVariants}
                                    />
                                </Link>
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={4} md={3} lg={2.4}>
                            <Box
                                sx={{
                                    bgcolor: '#fff',
                                    borderRadius: '20px',
                                    p: 3,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    '&:hover': {
                                        boxShadow: '0 20px 50px rgba(156,193,24,0.2)',
                                    }
                                }}
                            >
                                <Teams
                                    name="Rohan"
                                    designation="Frontend Developer"
                                    nameBg={teamBgTwo}
                                    img={rohan}
                                    altName="team Member Two"
                                    variants={itemVariants}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={4} md={3} lg={2.4}>
                            <Box
                                sx={{
                                    bgcolor: '#fff',
                                    borderRadius: '20px',
                                    p: 3,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    '&:hover': {
                                        boxShadow: '0 20px 50px rgba(156,193,24,0.2)',
                                    }
                                }}
                            >
                                <Teams
                                    name="Aarav"
                                    designation="Backend Developer"
                                    nameBg={teamBgThree}
                                    img={aarav}
                                    altName="team Member Three"
                                    variants={itemVariants}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={4} md={3} lg={2.4}>
                            <Box
                                sx={{
                                    bgcolor: '#fff',
                                    borderRadius: '20px',
                                    p: 3,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    '&:hover': {
                                        boxShadow: '0 20px 50px rgba(156,193,24,0.2)',
                                    }
                                }}
                            >
                                <Teams
                                    name="Vihaan"
                                    designation="FullStack Developer"
                                    nameBg={teamBgTwo}
                                    img={vihaan}
                                    altName="team Member Four"
                                    variants={itemVariants}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={4} md={3} lg={2.4}>
                            <Box
                                sx={{
                                    bgcolor: '#fff',
                                    borderRadius: '20px',
                                    p: 3,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    '&:hover': {
                                        boxShadow: '0 20px 50px rgba(156,193,24,0.2)',
                                    }
                                }}
                            >
                                <Teams
                                    name="Meera"
                                    designation="DevOps Engineer"
                                    nameBg={teamBgOne}
                                    img={meera}
                                    altName="team Member Five"
                                    variants={itemVariants}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={4} md={3} lg={2.4}>
                            <Box
                                sx={{
                                    bgcolor: '#fff',
                                    borderRadius: '20px',
                                    p: 3,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    '&:hover': {
                                        boxShadow: '0 20px 50px rgba(156,193,24,0.2)',
                                    }
                                }}
                            >
                                <Teams
                                    name="Ananya"
                                    designation="UI/UX Designer"
                                    nameBg={teamBgTwo}
                                    img={ananya}
                                    altName="team Member Six"
                                    variants={itemVariants}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={6} sm={4} md={3} lg={2.4}>
                            <Box
                                sx={{
                                    bgcolor: '#fff',
                                    borderRadius: '20px',
                                    p: 3,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s ease',
                                    height: '100%',
                                    '&:hover': {
                                        boxShadow: '0 20px 50px rgba(156,193,24,0.2)',
                                    }
                                }}
                            >
                                <Teams
                                    name="Armaan"
                                    designation="FullStack Developer"
                                    nameBg={teamBgThree}
                                    img={armaan}
                                    altName="team Member Seven"
                                    variants={itemVariants}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </motion.div>
            </Box>
        </Grid>
    )
}

export default TeamSection