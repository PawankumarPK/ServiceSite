import React, { useState } from 'react'
import { Box, Grid, Link, Typography } from "@mui/material";

// import MenuIcon from '@mui/icons-material/Menu'


///----------------- Navbar common title -----------------
const NavbarTitle = ({ text }) => (
    <Typography
        display={{ xs: 'block', sm: 'block', md: 'block', lg: 'block' }}
        component="p"
        sx={{
            fontSize: {
                lg: 17,
                md: 17,
                sm: 14,
                xs: 18
            }
        }}
        fontWeight={600}
        paddingTop={3}
        color="#000">
        {text}
    </Typography>
)


const DrawerItem = ({ chooseMessage }) => {
    return (
        <>
            <Box p={2} width="250px" bgcolor="#F7F8FA">
                <Grid item xs>
                    <Grid height={75}>

                        <Grid  item xs="auto" paddingRight={{ lg: 4, xs: 2 }} onClick={() => { chooseMessage(false) }}>
                            <Link isDrawerOpen={false} href="#services" scroll={true} passHref style={{ textDecoration: 'none' }}
                            >
                                <NavbarTitle text="SERVICES" />
                            </Link>
                        </Grid>

                        <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }} onClick={() => { chooseMessage(false) }}>
                            <Link href="#guarantee" scroll={true} passHref style={{ textDecoration: 'none' }}>
                                <NavbarTitle text="GUARANTEE" />
                            </Link>
                        </Grid>


                        <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }} onClick={() => { chooseMessage(false) }}>
                            <Link href="#portfolio" scroll={true} passHref style={{ textDecoration: 'none' }}>
                                <NavbarTitle text="PORTFOLIO" />
                            </Link>
                        </Grid>


                        <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }} onClick={() => { chooseMessage(false) }}>
                            <Link href="#features" scroll={true} passHref style={{ textDecoration: 'none' }}>
                                <NavbarTitle text="FEATURES" />
                            </Link>
                        </Grid>

                        <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }} onClick={() => { chooseMessage(false) }}>
                            <Link href="https://blog.owntechnologies.com/" target='_blank' scroll={true} passHref style={{ textDecoration: 'none' }}>
                                <NavbarTitle text="BLOGS" />
                            </Link>
                        </Grid>




                        <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }} onClick={() => { chooseMessage(false) }}>
                            <Link href="#contact" scroll={true} passHref style={{ textDecoration: 'none' }}>
                                <NavbarTitle text="CONTACT" />
                            </Link>
                        </Grid>

                        {/* Drawer */}








                    </Grid>
                </Grid>

            </Box>

        </>
    )
}

export default DrawerItem