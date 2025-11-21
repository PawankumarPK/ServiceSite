import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import business from "../../public/png/business.png";
import moneyBack from "../../public/png/money-back.png";
import support from "../../public/png/support.png";

import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const GuaranteeCard = ({ icon, title, description, index, variants, isInView }) => {
    const colors = [
        { primary: '#9CC118', secondary: '#7BA015', accent: '#DBD525', light: '#F0F8D8' },
        { primary: '#01A9F5', secondary: '#0178B8', accent: '#0796A1', light: '#E0F5FF' },
        { primary: '#DB4125', secondary: '#B8351E', accent: '#FF6B4A', light: '#FFE8E3' },
    ];
    
    const color = colors[index % colors.length];

    return (
        <motion.div
            variants={variants}
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
                    width: '100%',
                    bgcolor: '#fff',
                    borderRadius: '24px',
                    p: { xs: 3.5, sm: 4.5 },
                    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: { xs: 380, sm: 400, md: 420 },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '5px',
                        background: `linear-gradient(90deg, ${color.primary} 0%, ${color.secondary} 50%, ${color.accent} 100%)`,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: -100,
                        right: -100,
                        width: 250,
                        height: 250,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${color.primary}08 0%, transparent 70%)`,
                        opacity: 0,
                        transition: 'opacity 0.5s ease',
                        zIndex: 0,
                    },
                    '&:hover': {
                        boxShadow: `0 20px 50px ${color.primary}25`,
                        transform: 'translateY(-10px)',
                        border: `1px solid ${color.primary}50`,
                        '&::before': {
                            transform: 'scaleX(1)',
                        },
                        '&::after': {
                            opacity: 1,
                        },
                        '& .guarantee-icon-wrapper': {
                            transform: 'translateY(-8px)',
                            '&::before': {
                                opacity: 1,
                                transform: 'scale(1.2)',
                            },
                            '&::after': {
                                opacity: 1,
                            }
                        },
                        '& .guarantee-icon': {
                            transform: 'scale(1.12) rotate(5deg)',
                            background: `linear-gradient(135deg, ${color.primary}15 0%, ${color.secondary}15 100%)`,
                            border: `2px solid ${color.primary}40`,
                            boxShadow: `0 10px 30px ${color.primary}30`,
                        },
                        '& .guarantee-number': {
                            transform: 'scale(1.15) rotate(5deg)',
                            background: `linear-gradient(135deg, ${color.primary} 0%, ${color.secondary} 100%)`,
                            boxShadow: `0 8px 25px ${color.primary}40`,
                            '& .guarantee-number-text': {
                                color: '#fff',
                            }
                        },
                        '& .guarantee-shine': {
                            transform: 'translateX(100%)',
                        }
                    }
                }}
            >
                {/* Shine Effect */}
                <Box
                    className="guarantee-shine"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                        transform: 'skewX(-20deg)',
                        transition: 'transform 0.8s ease',
                        zIndex: 1,
                    }}
                />

                {/* Decorative Corner Elements */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 60,
                        height: 60,
                        background: `linear-gradient(135deg, ${color.primary}10 0%, transparent 100%)`,
                        borderRadius: '0 0 100% 0',
                        zIndex: 0,
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: 80,
                        height: 80,
                        background: `linear-gradient(315deg, ${color.secondary}08 0%, transparent 100%)`,
                        borderRadius: '100% 0 0 0',
                        zIndex: 0,
                    }}
                />

                {/* Number Badge */}
                <Box
                    className="guarantee-number"
                    sx={{
                        position: 'absolute',
                        top: 24,
                        right: 24,
                        width: 52,
                        height: 52,
                        borderRadius: '14px',
                        background: `linear-gradient(135deg, ${color.primary}15 0%, ${color.secondary}15 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        border: `2px solid ${color.primary}30`,
                        zIndex: 2,
                        boxShadow: `0 4px 15px ${color.primary}20`,
                    }}
                >
                    <Typography
                        className="guarantee-number-text"
                        sx={{
                            fontSize: 20,
                            fontFamily: 'poppins-bold',
                            color: color.primary,
                            transition: 'color 0.4s ease',
                        }}
                    >
                        {index + 1}
                    </Typography>
                </Box>

                {/* Icon Section */}
                <Box
                    className="guarantee-icon-wrapper"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 3.5,
                        mt: 3,
                        position: 'relative',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 1,
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: -20,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${color.primary}12 0%, transparent 70%)`,
                            opacity: 0,
                            transition: 'all 0.5s ease',
                            zIndex: -1,
                        },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            border: `3px solid ${color.primary}20`,
                            opacity: 0,
                            transition: 'opacity 0.5s ease',
                            zIndex: -1,
                        }
                    }}
                >
                    <Box
                        className="guarantee-icon"
                        sx={{
                            width: { xs: 120, sm: 140, md: 160 },
                            height: { xs: 120, sm: 140, md: 160 },
                            borderRadius: '22px',
                            background: `linear-gradient(135deg, ${color.light} 0%, ${color.primary}05 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            border: `2px solid ${color.primary}20`,
                            boxShadow: `0 6px 20px ${color.primary}15`,
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                inset: -2,
                                borderRadius: '22px',
                                background: `linear-gradient(135deg, ${color.primary} 0%, ${color.secondary} 100%)`,
                                opacity: 0,
                                transition: 'opacity 0.5s ease',
                                zIndex: -1,
                            }
                        }}
                    >
                        <Image
                            src={icon}
                            alt={title}
                            width={95}
                            height={95}
                            style={{
                                objectFit: 'contain',
                                transition: 'all 0.5s ease',
                                filter: `drop-shadow(0 4px 12px ${color.primary}25)`,
                            }}
                        />
                    </Box>
                </Box>

                {/* Title */}
                <Typography
                    component="h3"
                    fontSize={{ xs: 21, sm: 23, md: 25 }}
                    fontFamily="poppins-bold"
                    color="#27363B"
                    textAlign="center"
                    sx={{
                        mb: 3,
                        fontWeight: 700,
                        flexShrink: 0,
                        lineHeight: 1.3,
                        position: 'relative',
                        zIndex: 1,
                        transition: 'color 0.3s ease',
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
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <Typography
                        component="p"
                        fontSize={{ xs: 14, sm: 15 }}
                        fontFamily="poppins-regular"
                        color="#595959"
                        textAlign="center"
                        sx={{
                            lineHeight: '27px',
                            width: '100%',
                        }}
                    >
                        {description}
                    </Typography>
                </Box>
            </Box>
        </motion.div>
    );
};

const Guarantee = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    const guaranteeItems = [
        {
            icon: moneyBack,
            title: "Refund All Money",
            description: "We understand that there are risks involved in project management, and we are committed to working with you to deliver a product on time and in the best possible quality. But if we cannot meet your deadline, we will give you a full refund of your money."
        },
        {
            icon: support,
            title: "Give Free Service",
            description: "We are happy to offer a free service for the duration of this project. If we fail to meet the deadline, then you can cancel your order without any penalty. And you will get a full refund amount."
        },
        {
            icon: business,
            title: "Written Agreement",
            description: "We are going to give you a detailed description of the conditions that will apply to your project. This includes things like deadlines, refund clauses, and other promises. Everything is on written agreement."
        }
    ];

    return (
        <Grid 
            bgcolor="#F7F8FA" 
            id="guarantee"
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
            <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <Grid container direction="column" alignItems="center">
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
                            What we promise
                        </Typography>

                        <Grid width={100} height={2} bgcolor="#40536B" sx={{ mt: 1 }} />

                        <Grid container justifyContent='center' textAlign="center" mt={2} mb={8}>
                            <Typography 
                                component="h3" 
                                color="#000" 
                                fontSize={{ lg: 50, md: 45, xs: 40 }} 
                                fontFamily="poppins-bold" 
                                sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                            >
                                Work With
                            </Typography>

                            <Typography 
                                component="h3" 
                                color='#9CC118' 
                                fontSize={{ lg: 50, md: 45, xs: 40 }} 
                                fontFamily="poppins-bold" 
                                sx={{ lineHeight: { lg: "60px", xs: "1.2" } }}
                            >
                                &nbsp;Guarantee
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
                                spacing={{ xs: 3, sm: 4, md: 5 }}
                                justifyContent='center'
                                alignItems='stretch'
                                pb={10}
                                pt={2}
                            >
                                {guaranteeItems.map((item, index) => (
                                    <Grid 
                                        item 
                                        xs={12} 
                                        sm={6} 
                                        md={4} 
                                        key={index}
                                        sx={{ display: 'flex' }}
                                    >
                                        <GuaranteeCard
                                            icon={item.icon}
                                            title={item.title}
                                            description={item.description}
                                            index={index}
                                            variants={itemVariants}
                                            isInView={isInView}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </motion.div>
                </Grid>
            </Box>
        </Grid>
    )
}

export default Guarantee