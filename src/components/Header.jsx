import React from 'react'
import { Box, Button, Grid, Typography } from "@mui/material";
import bannerImage from "../media/bannerImg.jpg";
import whatsappIcon from "../svg/whatsappIcon.svg";

import facebookIcon from "../svg/facebookIcon.svg";
import instagramIcon from "../svg/instagramIcon.svg";
import linkdinIcon from "../svg/linkedinIcon.svg";
import twitterIcon from "../svg/twitterIcon.svg";
import menuIcon from "../svg/menuIcon.svg";



import { Container, height, width } from '@mui/system';
import Image from 'next/image';



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
        <Grid container alignItems='center' spacing={8} pt={6} pb={3}>
          <Grid container item xs>
            <Image
              width={22}
              src={whatsappIcon}
              layout='intrinsic'
              alt="Netflix logo" />

            <Typography pl={1}
              fontSize={22}
              fontWeight={500}
              color='common.white'>
              +91 9910765616
            </Typography>
          </Grid>


          {/* ----------------------- Social Media icons ----------------------- */}
          <Grid container item xs="auto" mr={15} spacing={3}>

            <Grid item xs="auto">
              <Image
                width={15}
                src={facebookIcon}
                alt="Facebook" />
            </Grid>


            <Grid item xs="auto" mt="5px">
              <Image
                width={25}
                src={twitterIcon}
                alt="Twitter" />
            </Grid>

            <Grid item xs="auto" mt="4px">
              <Image
                width={23}
                src={instagramIcon}
                alt="Instagram" />

            </Grid>

            <Grid item xs="auto" mt="3px">
              <Image
                width={23}
                src={linkdinIcon}
                alt="Linkdin" />

            </Grid>
          </Grid>


        </Grid>




        <Grid container alignItems='center' mt={2}>

          {/* ----------------------- Own button section ----------------------- */}

          <Grid width={140} height={75} display='flex' alignItems='center' justifyContent='center' bgcolor='#27363B'>

            <Typography color='#fff' fontSize={40} fontWeight='700'>
              OWN
            </Typography>

          </Grid>


          {/* ----------------------- Navbar section ----------------------- */}
          <Grid item xs>
            <Grid container height={75} bgcolor="#fff" alignContent='center' justifyContent="end">


              <Grid item xs="auto" paddingRight={4}>
                <Typography fontWeight={600} fontSize={17}>
                  HOME
                </Typography>
              </Grid>


              <Grid item xs="auto" paddingRight={4}>
                <Typography fontWeight={600} fontSize={17}>
                  ABOUT
                </Typography>
              </Grid>


              <Grid item xs="auto" paddingRight={4}>
                <Typography fontWeight={600} fontSize={17}>
                  PORTFOLIO
                </Typography>
              </Grid>


              <Grid item xs="auto" paddingRight={4}>
                <Typography fontWeight={600} fontSize={17}>
                  CLIENT
                </Typography>
              </Grid>

              <Grid item xs="auto" paddingRight={4}>
                <Typography fontWeight={600} fontSize={17}>
                  CONTACT
                </Typography>
              </Grid>

            </Grid>
          </Grid>

          <Grid marginLeft={10} justifyContent="center" alignContent='center'>
            <Image
              width={40}
              src={menuIcon}
              layout='intrinsic'
              alt="Menu" />
          </Grid>

        </Grid>




        <Grid container justifyContent='end' alignItems='center' mt={13}>

          {/* ----------------------- We make beautiful & Resposive text section ----------------------- */}

          <Grid>
            <Typography pr={5} fontSize={40} fontFamily="poppins-bold">
              WE MAKE
            </Typography>

            <Typography fontSize={15} fontFamily="poppins" textAlign='center' pr={5}>
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