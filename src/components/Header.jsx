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



///----------------- Navbar common title -----------------
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

  const chooseMessage = (message) => {
    setIsDrawerOpen(message);
  };

  return (

    <Box sx={{ display: 'flex', alignItems: 'center' }} id="home" bgcolor="#F7F8FA">
      <Image
        priority
        src={bannerImage}
        layout='fill'
        objectFit='cover'
        alt='Banner Image'>
      </Image>

      <Container sx={{ position: "relative" }}>

        {/* ----------------------- Whatsapp and contact number ----------------------- */}
        <Grid container alignItems='center' spacing={8} pt={6} pb={2}>
          <Grid
            onClick={() => window.open(`tel:+9910765616`)}
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

            {/* <Grid item
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
              <Image
                layout="responsive"
                src={facebookIcon}
                alt="Facebook" />
            </Grid> */}


            {/* <Grid item
              sx={{
                width: {
                  lg: 45,
                  md: 45,
                  sm: 45,
                  xs: 45
                },
                height: {
                  lg: 45,
                  md: 45,
                  sm: 45,
                  xs: 45
                }
              }}>

              <Image
                layout="responsive"
                src={twitterIcon}
                alt="Twitter" />
            </Grid> */}

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
                <Link href="#guarantee" scroll={true} passHref>
                  <NavbarTitle text="GUARANTEE" />
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
                <Link href="https://blog.owntechnologies.com/" target='_blank' scroll={true} passHref>
                  <NavbarTitle text="BLOGS" />
                </Link>
              </Grid>




              <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }}>
                <Link href="#contact" scroll={true} passHref>
                  <NavbarTitle text="CONTACT" />
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




        <Grid container justifyContent={{ lg: "end", xs: "end" }} alignItems='center' pt={13}>

          {/* ----------------------- We make beautiful & Resposive text section ----------------------- */}

          <Grid>
            <Typography component="h3" color="#000" pr={{ lg: 5, xs: 2 }} fontSize={40} fontFamily="poppins-bold">
              WE MAKE
            </Typography>

            <Typography component="h3" color="#000" fontSize={15} fontFamily="poppins" textAlign='center' pr={{ lg: 5, xs: 0 }}>
              Beautiful & Responsive
            </Typography>

          </Grid>


          {/* ----------------------- Creative website & app section ----------------------- */}
          <Grid
            flexDirection='column'
            container height={{ lg: 350, xs: 330 }}
            width={{ lg: 600, md: 400, sm: 400, xs: 400 }}
            bgcolor="#DBD525"

          >


            <Typography
              component="h1"
              fontFamily='poppins'
              fontSize={22}
              color="#fff" pt={4} pl={4}>
              Creative
            </Typography>

            <Typography
              component="h1"
              fontFamily='poppins-bold'
              color="#fff" fontSize={{ lg: 40, xs: 30 }} fontWeight={800} pl={4}>
              WEBSITE & APPS
            </Typography>


            <Typography
              component="subtitle1"
              fontSize={{ lg: 15, xs: 11 }}
              fontFamily='poppins'
              color="#fff" pl={4} pr={4}>
              Are you looking for a rapid but high performance web design or application development? Look no further, we are an advanced digital agency with a team of professional web designers and developers who have worked on countless projects for startups, companies and agencies alike.
            </Typography>


            <Grid pl={4} pt={4} pb={0}>
              <Button href="#about" scroll={true} variant="outlined" sx={{ borderRadius: 50 }}
                style={{
                  color: "#fff",
                  border: '2px solid',
                }}>
                <Typography
                  component="p"
                  pl={{ lg: 3, xs: 1 }} pr={3} pb={{ lg: 0.5 }} pt={0.5}
                  fontFamily='poppins-medium'
                  color="#fff"
                  textTransform='none'>

                  Learn More

                </Typography>

              </Button>
            </Grid>

            {/* Whatsapp Icon */}
            <Grid
              onClick={() => window.open(`https://wa.me/+919650636804?text=`)}
              p={1}
              position="fixed"
              display='flex'
              justifyContent="end"
              left='78%'
              top='75%'
              container
              sx={{
                cursor: 'pointer',
                left: {
                  lg: '90%',
                  md: '90%',
                  sm: '80%',
                  xs: '80%'
                },
                width: {
                  lg: 80,
                  md: 80,
                  sm: 80,
                  xs: 70
                },

              }}>
              <Image
                layout="responsive"
                src={popupWhatsapp}
                component="img"
                alt="Whatsapp logo">
              </Image>

            </Grid>

            {/* Up Arrow Icon */}
            <Grid
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
            </Grid>

          </Grid>





        </Grid>


      </Container >


    </Box >

  )
}


export default Header