import React from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";
import bannerImage from "../media/bannerImg.jpg";
import whatsappIcon from "../svg/whatsappIcon.svg";

import facebookIcon from "../svg/facebookIcon.svg";
import instagramIcon from "../svg/instagramIcon.svg";
import linkdinIcon from "../svg/linkedinIcon.svg";
import twitterIcon from "../svg/twitterIcon.svg";
import menuIcon from "../svg/menuIcon.svg";

import { Container } from '@mui/system';
import Image from 'next/image';


///----------------- Navbar common title -----------------
const NavbarTitle = ({ text }) => (
  <Typography
    sx={{
      fontSize: {
        lg: 17,
        md: 17,
        sm: 14,
        xs: 10
      }
    }}
    fontWeight={600}>
    {text}
  </Typography>
)


const Header = () => {

  return (
      <Box sx={{ display: 'flex', alignItems: 'center' }} >
        <Image
          priority
          src={bannerImage}
          layout='fill'
          objectFit='cover'
          alt='Banner Image'>
        </Image>

        <Container maxWidth="lg" sx={{ position: "relative" }}>

          {/* ----------------------- Whatsapp and contact number ----------------------- */}
          <Grid container alignItems='center' spacing={8} pt={6} pb={2}>
            <Grid
              container item xs alignItems='center'>

              <Grid
                sx={{
                  width: {
                    lg: 30,
                    md: 30,
                    sm: 25,
                    xs: 20
                  },
                  height: {
                    lg: 30,
                    md: 30,
                    sm: 25,
                    xs: 20
                  }
                }}>
                <Image
                  layout="responsive"
                  src={whatsappIcon}
                  component="img"
                  alt="Whatsapp logo">
                </Image>
              </Grid>

              <Typography
                sx={{
                  fontSize: {
                    lg: 20,
                    md: 20,
                    sm: 18,
                    xs: 15
                  }
                }}
                pl={1} component="h2"
                fontWeight={500}
                color='common.white'>
                +91 9910765616
              </Typography>
            </Grid>


            {/* ----------------------- Social Media icons ----------------------- */}
            <Grid container item xs="auto" spacing={3}>

              <Grid item
                sx={{
                  width: {
                    lg: 40,
                    md: 40,
                    sm: 37,
                    xs: 35
                  },
                  height: {
                    lg: 40,
                    md: 40,
                    sm: 37,
                    xs: 35
                  }
                }}>
                <Image
                  layout="responsive"
                  src={facebookIcon}
                  alt="Facebook" />
              </Grid>


              <Grid item
                sx={{
                  width: {
                    lg: 53,
                    md: 53,
                    sm: 45,
                    xs: 45
                  },
                  height: {
                    lg: 53,
                    md: 53,
                    sm: 45,
                    xs: 45
                  }
                }}>

                <Image
                  layout="responsive"
                  src={twitterIcon}
                  alt="Twitter" />
              </Grid>

              <Grid item
                sx={{
                  width: {
                    lg: 48,
                    md: 48,
                    sm: 45,
                    xs: 42
                  },
                  height: {
                    lg: 48,
                    md: 48,
                    sm: 45,
                    xs: 42
                  }
                }}>
                <Image
                  layout='responsive'
                  src={instagramIcon}
                  alt="Instagram" />

              </Grid>

              <Grid item
                sx={{
                  width: {
                    lg: 50,
                    md: 48,
                    sm: 45,
                    xs: 42
                  },
                  height: {
                    lg: 50,
                    md: 48,
                    sm: 45,
                    xs: 42
                  }
                }}>
                <Image
                  layout='responsive'
                  src={linkdinIcon}
                  alt="Linkdin" />

              </Grid>
            </Grid>

          </Grid>




          <Grid container alignItems='center' mt={2}>

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
            <Grid item xs>
              <Grid container height={75} bgcolor="#fff" alignContent='center' justifyContent="end">


                <Grid item xs="auto" paddingRight={4}>
                  <NavbarTitle text="HOME" />
                </Grid>


                <Grid item xs="auto" paddingRight={4}>
                  <NavbarTitle text="ABOUT" />
                </Grid>


                <Grid item xs="auto" paddingRight={4}>
                  <NavbarTitle text="PORTFOLIO" />
                </Grid>


                <Grid item xs="auto" paddingRight={4}>
                  <NavbarTitle text="CLIENT" />


                </Grid>

                <Grid item xs="auto" paddingRight={4}>
                  <NavbarTitle text="CONTACT" />

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




          <Grid container justifyContent={{ lg: "end", xs: "end" }} alignItems='center' mt={13}>

            {/* ----------------------- We make beautiful & Resposive text section ----------------------- */}

            <Grid>
              <Typography pr={{ lg: 5, xs: 2 }} fontSize={40} fontFamily="poppins-bold">
                WE MAKE
              </Typography>

              <Typography fontSize={15} fontFamily="poppins" textAlign='center' pr={{ lg: 5, xs: 0 }}>
                Beautiful & Responsive
              </Typography>

            </Grid>


            {/* ----------------------- Creative website & app section ----------------------- */}
            <Grid flexDirection='column' container height={330} width={600} bgcolor="#DBD525">


              <Typography
                fontFamily='poppins'
                fontSize={22}
                color="#fff" mt={4} ml={4}>
                Creative
              </Typography>

              <Typography
                fontFamily='poppins-bold'
                color="#fff" fontSize={40} fontWeight={800} ml={4}>
                WEBSITE & APPS
              </Typography>


              <Typography
                fontSize={15}
                fontFamily='poppins'
                color="#fff" ml={4} mr={4}>
                Replacing a maintains the amount of line. When replacing a selection. help agencies to define. define their new business objectives and then.
              </Typography>


              <Grid ml={4} mt={4}>
                <Button variant="outlined" sx={{ borderRadius: 50 }}
                  style={{
                    color: "#fff",
                    border: '2px solid',
                  }}>
                  <Typography pl={3} pr={3} pb={0.5} pt={0.5} fontFamily='poppins-medium' color="#fff" textTransform='none'>
                    Learn More
                  </Typography>

                </Button>
              </Grid>

            </Grid>

          </Grid>


        </Container >


      </Box >

  )
}


export default Header