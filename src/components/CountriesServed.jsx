import { Box, Grid, Typography } from '@mui/material'
import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const CountriesServed = () => {
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
                duration: 0.5
            }
        }
    };

    const countries = [
        { name: 'INDIA', code: 'IN', flag: 'https://flagcdn.com/w320/in.png' },
        { name: 'NORWAY', code: 'NO', flag: 'https://flagcdn.com/w320/no.png' },
        { name: 'ICELAND', code: 'IS', flag: 'https://flagcdn.com/w320/is.png' },
        { name: 'USA', code: 'US', flag: 'https://flagcdn.com/w320/us.png' },
        { name: 'DUBAI', code: 'AE', flag: 'https://flagcdn.com/w320/ae.png' },
        { name: 'CANADA', code: 'CA', flag: 'https://flagcdn.com/w320/ca.png' },
    ];

    return (
        <Grid bgcolor="#F7F8FA" ref={ref}>
            <Grid container direction="column" alignItems="center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <Typography 
                        component="subtitle2" 
                        mt={10} 
                        fontSize={14} 
                        fontFamily='poppins-medium' 
                        textAlign="center" 
                        color="#27363B"
                    >
                        Global Presence
                    </Typography>

                    <Grid width={100} height={2} bgcolor="#40536B"></Grid>

                    <Grid container justifyContent='center' alignItems='center' textAlign="center">
                        <Typography 
                            component="h3" 
                            color="#000" 
                            noWrap 
                            mt={2} 
                            fontSize={{ lg: 45, md: 45, xs: 40 }} 
                            fontFamily="poppins-semibold" 
                            style={{ lineHeight: "60px" }}
                        >
                            Countries We
                        </Typography>

                        <Typography 
                            component="h3" 
                            color='#9CC118' 
                            mt={2} 
                            fontSize={{ lg: 45, md: 45, xs: 40 }} 
                            fontFamily="poppins-semibold" 
                            style={{ lineHeight: "60px" }}
                        >
                            &nbsp;Serve
                        </Typography>
                    </Grid>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    style={{ width: '100%' }}
                >
                    <Grid 
                        container 
                        spacing={4} 
                        justifyContent='center' 
                        alignItems='center' 
                        pb={10} 
                        pt={5}
                        sx={{ px: { xs: 2, sm: 3, md: 4 } }}
                    >
                        {countries.map((country, index) => (
                            <Grid 
                                item 
                                xs={6} 
                                sm={4} 
                                md={3} 
                                lg={2} 
                                key={country.code}
                            >
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1, y: -10 }}
                                    style={{ transition: 'all 0.3s ease' }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            bgcolor: '#fff',
                                            borderRadius: '15px',
                                            p: 3,
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                            transition: 'all 0.3s ease',
                                            height: '100%',
                                            minHeight: { xs: 180, sm: 200 },
                                            '&:hover': {
                                                boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                                                bgcolor: '#f9f9f9',
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: { xs: 80, sm: 100, md: 120 },
                                                height: { xs: 60, sm: 75, md: 90 },
                                                borderRadius: '8px',
                                                overflow: 'hidden',
                                                mb: 2,
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                            }}
                                        >
                                            <Image
                                                src={country.flag}
                                                alt={`${country.name} flag`}
                                                width={120}
                                                height={90}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                                unoptimized
                                            />
                                        </Box>
                                        <Typography
                                            component="subtitle1"
                                            fontSize={14}
                                            fontFamily="poppins-regular"
                                            color="#202020"
                                            textAlign="center"
                                        >
                                            {country.name}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Grid>
        </Grid>
    )
}

export default CountriesServed

