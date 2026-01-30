import React, { useState } from 'react'
import { Box, Button, Grid, Typography, Drawer, IconButton, createTheme, useTheme, useMediaQuery, } from "@mui/material";
import bannerImage from "../media/bannerImg.jpg";
import calling from "../svg/calling.svg";
import popupWhatsapp from "../../public/png/popup-whatsapp.png";
import upArrow from "../../public/png/up-arrow.png";

import facebookIcon from "../svg/facebookIcon.svg";
import instagramIcon from "../svg/instagramIcon.svg";
import linkdinIcon from "../svg/linkedinIcon.svg";
import twitterIcon from "../svg/twitterIcon.svg";
import menuIcon from "../svg/menu.svg";

import { Container } from '@mui/system';
import Image from 'next/image';

import DrawerItem from './Drawer';
import { useEffect } from 'react';
import Link from 'next/link';

/// ----------------- Navbar common title -----------------
const NavbarTitle = ({ text }) => (
  <Typography
    display={{ xs: 'none', sm: 'block', md: 'block', lg: 'block' }}
    component="p"
    sx={{
      fontSize: {
        lg: 17,
        md: 17,
        sm: 14,
        xs: 6
      }
    }}
    fontWeight={600}
    color="#000">
    {text}
  </Typography>
)


const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)

  const chooseMessage = (message) => {
    setIsDrawerOpen(message);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down more than 300px
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
    <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        minHeight: { xs: '100vh', sm: '100vh', md: '100vh', lg: '100vh' },
        width: '100%',
        overflow: 'hidden'
      }} 
      id="home" 
      bgcolor="#F7F8FA">
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <Image
          priority
          src={bannerImage}
          layout='fill'
          objectFit='cover'
          alt='Banner Image'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}>
        </Image>
      </Box>

      <Container sx={{ position: "relative", zIndex: 1, width: '100%' }}>

        {/* ----------------------- Whatsapp and contact number ----------------------- */}
        <Grid container alignItems='center' spacing={8} pt={6} pb={2}>
          <Grid
            onClick={() => window.open(`tel:9910765616`)}
            container item xs alignItems='center'>
            <Grid

              sx={{
                cursor: 'pointer',
                width: {
                  lg: 22,
                  md: 22,
                  sm: 22,
                  xs: 20
                },
                height: {
                  lg: 22,
                  md: 22,
                  sm: 22,
                  xs: 20
                }
              }}>
              <Image
                layout="responsive"
                src={calling}
                component="img"
                alt="Calling logo">
              </Image>
            </Grid>

            <Typography
                component="p"
                sx={{
                  cursor: 'pointer',
                  fontSize: {
                    lg: 18,
                    md: 18,
                    sm: 18,
                    xs: 15
                  }
                }}
                pl={1}
                fontWeight={500}
                color='common.white'>
                +91-9910765616
              </Typography>
          </Grid>


          {/* ----------------------- Social Media icons ----------------------- */}
          <Grid container item xs="auto" spacing={3}>

            <Grid item
              sx={{
                width: {
                  lg: 35,
                  md: 35,
                  sm: 32,
                  xs: 32
                },
                height: {
                  lg: 35,
                  md: 35,
                  sm: 32,
                  xs: 32
                }
              }}>
              <Link href="https://www.facebook.com/profile.php?id=100091625195907" target='_blank' passHref>
                <Image
                  layout='responsive'
                  src={facebookIcon}
                  alt="Facebook icon" />
              </Link>
            </Grid>

            <Grid item
              sx={{
                width: {
                  lg: 42,
                  md: 42,
                  sm: 42,
                  xs: 42
                },
                height: {
                  lg: 42,
                  md: 42,
                  sm: 42,
                  xs: 42
                }
              }}>
              <Link href="https://www.instagram.com/own_technologies/?next=%2F" target='_blank' passHref>
                <Image
                  layout='responsive'
                  src={instagramIcon}
                  alt="instagram icon" />
              </Link>

            </Grid>

            <Grid item
              sx={{
                width: {
                  lg: 42,
                  md: 42,
                  sm: 42,
                  xs: 42
                },
                height: {
                  lg: 42,
                  md: 42,
                  sm: 42,
                  xs: 42
                }
              }}>
              <Link href="https://www.linkedin.com/company/own-technologies/?viewAsMember=true" target='_blank' passHref>
                <Image
                  layout='responsive'
                  src={linkdinIcon}
                  alt="linkdin icon" />
              </Link>
            </Grid>
          </Grid>

        </Grid>




        <Grid container alignItems='center' pt={2}>

          {/* ----------------------- Own button section ----------------------- */}

          <Grid
              sx={{
                width: {
                  lg: 140,
                  md: 130,
                  sm: 100,
                  xs: 80
                },
                height: {
                  lg: 75,
                  md: 75,
                  sm: 75,
                  xs: 75
                }
              }}

              display='flex' alignItems='center' justifyContent='center' bgcolor='#27363B'>

              <Typography
                component="h3"
                sx={{
                  fontSize: {
                    lg: 40,
                    md: 30,
                    sm: 30,
                    xs: 20
                  }
                }}
                color='#fff' fontWeight='700'>
                OWN
              </Typography>

            </Grid>


          {/* ----------------------- Navbar section ----------------------- */}
          <Grid item xs >
            <Grid container height={75} bgcolor="#fff" alignContent='center' justifyContent="end">


              {/* <Grid item xs="auto" paddingRight={4}>
                <Link href="#home" scroll={true} passHref>
                  <NavbarTitle text="HOME" />
                </Link>
              </Grid> */}


              <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }}>
                <Link href="#services" scroll={true} passHref>
                  <NavbarTitle text="SERVICES" />
                </Link>
              </Grid>

              <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }}>
                <Link href="#portfolio" scroll={true} passHref>
                  <NavbarTitle text="PORTFOLIO" />
                </Link>
              </Grid>

              <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }}>
                <Link href="#features" scroll={true} passHref>
                  <NavbarTitle text="FEATURES" />
                </Link>
              </Grid>

              <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }}>
                <Link href="#guarantee" scroll={true} passHref>
                  <NavbarTitle text="GUARANTEE" />
                </Link>
              </Grid>

              <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }}>
                <Link href="#contact" scroll={true} passHref>
                  <NavbarTitle text="CONTACT" />
                </Link>
              </Grid>

              <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }}>
                <Link href="https://blog.owntechnologies.in/" target='_blank' scroll={true} passHref>
                  <NavbarTitle text="BLOGS" />
                </Link>
              </Grid>

              {/* Drawer */}



              <Grid display={{ xs: 'block', sm: 'none', md: 'none', lg: 'none' }} paddingRight={{ lg: 4, xs: 2 }}>

                <Grid width={30}>
                  <Image
                    onClick={() => setIsDrawerOpen(true)}
                    layout="responsive"
                    src={menuIcon}
                    component="img"
                    alt="Menu Icon">
                  </Image>
                </Grid>



                {/* <DrawerNav /> */}

                <Drawer
                  anchor='left'
                  open={isDrawerOpen}
                  onClose={() => {
                    setIsDrawerOpen(chooseMessage)
                  }
                  }>

                  <DrawerItem chooseMessage={chooseMessage} />

                </Drawer>

              </Grid>


            </Grid>
          </Grid>

          {/* <Grid marginLeft={10} justifyContent="center" alignContent='center'>
              <Image
                width={40}
                src={menuIcon}
                layout='intrinsic'
                alt="Menu" />
            </Grid> */}

        </Grid>




        <Grid 
          container 
          justifyContent={{ lg: "end", xs: "center" }} 
          alignItems='center' 
          pt={13}
          sx={{
            px: { xs: 2, sm: 2, md: 0 },
            overflow: 'hidden',
            width: '100%',
          }}
        >

          {/* ----------------------- We make beautiful & Resposive text section ----------------------- */}

          <Grid>
            <Typography component="h3" color="#000" pr={{ lg: 5, xs: 2 }} mt={-10} fontSize={40} fontFamily="poppins-bold">
              WE BUILD
            </Typography>

            <Typography component="h3" color="#000" fontSize={15} fontFamily="poppins" textAlign='center' pr={{ lg: 5, xs: 0 }}>
              Modern & Scalable
            </Typography>

          </Grid>


          {/* ----------------------- Creative website & app section ----------------------- */}
          <Box
              height={{ lg: 'auto', xs: 'auto' }}
              width={{ lg: 550, md: 400, sm: '100%', xs: '100%' }}
              maxWidth={{ lg: 550, md: 400, sm: 400, xs: '100%' }}
              mt={-3}
              bgcolor="#DBD525"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                px: { xs: 3, sm: 4, md: 4, lg: 4 },
                py: { xs: 3, sm: 4 },
                overflow: 'visible',
                boxSizing: 'border-box',
                minHeight: { lg: 350, xs: 'auto' },
              }}
            >

              <Typography
                component="h1"
                fontFamily='poppins'
                fontSize={22}
                color="#fff" 
                pt={4}
                sx={{ textAlign: 'left' }}>
                Innovative
              </Typography>

              <Typography
                component="h1"
                fontFamily='poppins-bold'
                color="#fff" 
                fontSize={{ lg: 40, xs: 30 }} 
                fontWeight={800}
                sx={{ textAlign: 'left' }}>
                WEBSITE & APPS
              </Typography>


              <Typography
                  component="subtitle1"
                  fontSize={{ lg: 15, xs: 11 }}
                  fontFamily='poppins'
                  color="#fff" 
                  pt={2}
                  pb={2}
                  sx={{ 
                    textAlign: 'left',
                    width: '100%',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    maxWidth: '100%',
                  }}>
                  Ready to elevate your digital presence? We craft stunning websites and powerful mobile applications that combine speed, functionality, and exceptional user experience. Our expert team transforms your vision into reality, delivering custom solutions that drive engagement and boost your business growth.
                </Typography>


              <Box 
                pt={2} 
                pb={2} 
                sx={{ 
                  width: '100%', 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}
              >
                <Button 
                    href="#about" 
                    scroll={true} 
                    variant="outlined" 
                    sx={{ 
                      borderRadius: 50,
                      py: 1,
                      px: { xs: 2, sm: 3, md: 3, lg: 3 },
                      display: 'inline-flex',
                      whiteSpace: 'nowrap',
                    }}
                    style={{
                      color: "#fff",
                      border: '2px solid #fff',
                    }}
                  >
                    <Typography
                      component="p"
                      fontFamily='poppins-medium'
                      color="#fff"
                      textTransform='none'
                      fontSize={{ xs: 13, sm: 14, md: 15, lg: 16 }}
                    >
                      Learn More
                    </Typography>
                  </Button>
              </Box>
            </Box>


            {/* Up Arrow Icon */}
            {/* <Grid
              p={1}
              position="fixed"
              display='flex'
              justifyContent="end"
              left='78%'
              top='85%'
              container
              sx={{
                cursor: 'pointer',
                left: {
                  lg: '90.3%',
                  md: '90.3%',
                  sm: '80.3%',
                  xs: '81%'
                },
                width: {
                  lg: 75,
                  md: 75,
                  sm: 70,
                  xs: 65
                },

              }}>

              <Link href="#" scroll={true} passHref>
                <Grid
                  paddingTop={2}
                  sx={{
                    cursor: 'pointer',
                  }}>
                  <Image
                    layout="responsive"
                    src={upArrow}
                    component="img"
                    alt="Up Arrow">
                  </Image>
                </Grid>
              </Link>
            </Grid> */}

          </Grid>

      </Container >

    </Box>

    {/* Whatsapp Icon - Outside all containers */}
    <Box
      onClick={() => window.open(`https://wa.me/+919910765616?text=${encodeURIComponent("Hi! I'm interested in your services. Can you please help me?")}`)}
      sx={{
        position: 'fixed',
        cursor: 'pointer',
        right: {
          lg: '2%',
          md: '3%',
          sm: '5%',
          xs: '5%'
        },
        bottom: {
          lg: '120px',
          md: '120px',
          sm: '100px',
          xs: '100px'
        },
        width: {
          lg: 60,
          md: 80,
          sm: 70,
          xs: 55
        },
        height: {
          lg: 60,
          md: 80,
          sm: 70,
          xs: 55
        },
        borderRadius: '50%',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'auto',
      }}
    >
      <Image
        layout="responsive"
        src={popupWhatsapp}
        component="img"
        alt="Whatsapp logo"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
        }}>
      </Image>
    </Box>

    {/* Scroll to Top Icon - Outside all containers */}
    {showScrollButton && (
      <Box
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        sx={{
          position: 'fixed',
          cursor: 'pointer',
          right: {
            lg: '2%',
            md: '3%',
            sm: '5%',
            xs: '5%'
          },
          bottom: {
            lg: '40px',
            md: '40px',
            sm: '20px',
            xs: '20px'
          },
          width: {
            lg: 50,
            md: 60,
            sm: 60,
            xs: 55
          },
          height: {
            lg: 50,
            md: 60,
            sm: 60,
            xs: 55
          },
          borderRadius: '50%',
          bgcolor: '#9CC118',
          zIndex: 999999,
          boxShadow: '0 4px 15px rgba(156,193,24,0.4)',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'auto',
          opacity: showScrollButton ? 1 : 0,
          transform: showScrollButton ? 'translateY(0)' : 'translateY(20px)',
          '&:hover': {
            bgcolor: '#DBD525',
            transform: 'translateY(-3px)',
            boxShadow: '0 6px 20px rgba(156,193,24,0.6)',
          }
        }}
      >
        <Image
          layout="responsive"
          src={upArrow}
          component="img"
          alt="Scroll to top"
          style={{
            width: '60%',
            height: '60%',
          }}>
        </Image>
      </Box>
    )}
    </>
  )
}


export default Header