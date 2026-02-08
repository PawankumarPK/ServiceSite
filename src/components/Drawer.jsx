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

                        <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }} onClick={() => { chooseMessage(false) }}>
                            <Link href="#home" scroll={true} passHref style={{ textDecoration: 'none' }}>
                                <NavbarTitle text="Home" />
                            </Link>
                        </Grid>

                        <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }} onClick={() => { chooseMessage(false) }}>
                            <Link href="#services" scroll={true} passHref style={{ textDecoration: 'none' }}>
                                <NavbarTitle text="Services" />
                            </Link>
                        </Grid>

                        <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }} onClick={() => { chooseMessage(false) }}>
                            <Link href="#solutions" scroll={true} passHref style={{ textDecoration: 'none' }}>
                                <NavbarTitle text="Solutions" />
                            </Link>
                        </Grid>

                        <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }} onClick={() => { chooseMessage(false) }}>
                            <Link href="#industries" scroll={true} passHref style={{ textDecoration: 'none' }}>
                                <NavbarTitle text="Industries" />
                            </Link>
                        </Grid>

                        <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }} onClick={() => { chooseMessage(false) }}>
                            <Link href="#sports" scroll={true} passHref style={{ textDecoration: 'none' }}>
                                <NavbarTitle text="Sports" />
                            </Link>
                        </Grid>

                        <Grid item xs="auto" paddingRight={{ lg: 4, xs: 2 }} onClick={() => { chooseMessage(false) }}>
                            <Link href="#about" scroll={true} passHref style={{ textDecoration: 'none' }}>
                                <NavbarTitle text="Company" />
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