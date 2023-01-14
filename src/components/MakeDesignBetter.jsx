import { Box, Button, Grid, Typography } from '@mui/material'
import { bgcolor, Container } from '@mui/system'
import studyImage from "../../public/png/study.png";
import folderOpenIcon from "../svg/folderOpenIcon.svg";
import editIcon from "../svg/editIcon.svg";
import codeIcon from "../svg/codeIcon.svg";
import settingsIcon from "../svg/settingsIcon.svg";

import React from 'react'
import Image from 'next/image';

const MakeDesignBetter = () => {
    return (
        <Container maxWidth="lg" sx={{ position: "relative" }}>

            {/* ----------------------- We are making design section ----------------------- */}
            <Grid container mt={30} height={600} spacing={5}>


                <Grid width={600}>
                    <Typography fontSize={20} color="#595959" fontFamily="poppins">
                        We are technologies company
                    </Typography>

                    <Typography mt={1} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        We are making design better for everyone
                    </Typography>

                    <Typography mt={4} fontSize={17} color="#595959" fontFamily="poppins">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                    </Typography>

                    <Grid mt={5}>
                        <Button variant="contained" sx={{ borderRadius: 50, bgcolor: "#27363B" }}
                            style={{
                                color: "#000",
                            }}>
                            <Typography pl={3} pr={3} pb={1} pt={1} fontFamily='poppins-medium' color="#fff" textTransform='none'>
                                Start your project
                            </Typography>

                        </Button>
                    </Grid>
                </Grid>

          {/* ----------------------- Study image ----------------------- */}
                <Grid ml={4}>
                    <Image
                        width={550}
                        priority
                        src={studyImage}
                        alt='Study Image'>
                    </Image>
                </Grid>

            </Grid>

          {/* ----------------------- Circle design section ----------------------- */}
            <Grid pb={10} container alignItems='center' display='flex' justifyContent='center'>

                <Grid flexDirection='column' spacing={10} md alignItems='center' display='flex' ml={5} mr={10}>
                    <Grid width={90} height={90} bgcolor="#01A9F5" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                        <Image
                            width={35}
                            src={folderOpenIcon}
                            alt="Folder Open Icon" />
                    </Grid>

                    <Typography pt={1} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B" textTransform='none'>
                        World leader in consulting and finance
                    </Typography>

                </Grid>






                <Grid flexDirection='column' md alignItems='center' display='flex' mr={10}>
                    <Grid width={90} height={90} bgcolor="#40536B" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                        <Image
                            width={35}
                            src={codeIcon}
                            alt="Code Icon" />
                    </Grid>

                    <Typography pt={1} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B" textTransform='none'>
                        A focused team with a specialized skill

                    </Typography>

                </Grid>


                <Grid flexDirection='column' textAlign="center" md alignItems='center' display='flex' mr={10}>
                    <Grid width={90} height={90} bgcolor="#DBBF05" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                        <Image
                            width={35}
                            src={settingsIcon}
                            alt="Settings Icon" />
                    </Grid>

                    <Typography pt={1} fontSize={14} fontFamily='poppins-medium' color="#27363B" textTransform='none'>
                        Trusted and professional advisors for you
                    </Typography>

                </Grid>



                <Grid flexDirection='column' md alignItems='center' display='flex' mr={10}>
                    <Grid width={90} height={90} bgcolor="#9CC118" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                        <Image
                            width={35}
                            src={editIcon}
                            alt="Edit Icon" />
                    </Grid>

                    <Typography pt={1} fontSize={14} textAlign="center" fontFamily='poppins-medium' color="#27363B" textTransform='none'>
                        Experience to give you a better results
                    </Typography>

                </Grid>


            </Grid>

        </Container>
    )
}

export default MakeDesignBetter