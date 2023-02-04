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
        <Container>

            {/* ----------------------- We are making design section ----------------------- */}
            <Grid
                container={{ lg: true, sm: false }}
                justifyContent="center"
                mt={{ lg: 30, md: 30, sm: 15, xs: 15 }}
                textAlign={{ lg: "start", md: "start", sm: "center", xs: "center" }}
                height={{ lg: 600, sm: 700, }} >


                <Grid width={{ lg: 500, md: 320 }} mr={{ lg: 8, md: 8 }}>
                    <Typography
                        sx={{
                            fontSize: {
                                lg: 20,
                                md: 16,
                                sm: 16,
                                xs: 12
                            }
                        }}
                        color="#595959" fontFamily="poppins">
                        We are technologies company
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: {
                                lg: 45,
                                md: 40,
                                sm: 35,
                                xs: 30
                            }
                        }}
                        mt={1} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        We are making design better for everyone
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: {
                                lg: 17,
                                md: 15,
                                sm: 15,
                                xs: 12
                            }
                        }}
                        mt={4} color="#595959" fontFamily="poppins">
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
                <Grid ml={{ lg: 4, md: 4 }} width={{ lg: 550, md: 450, sm: 450, xs: 400 }} mt={{ sm: 5, xs: 5 }}>
                    <Image
                        layout='responsive'
                        priority
                        src={studyImage}
                        alt='Study Image'>
                    </Image>
                </Grid>

            </Grid>

            {/* ----------------------- Circle design section ----------------------- */}
            <Grid pb={10} container alignItems='center' display='flex' justifyContent='center'>

                <Grid
                    flexDirection='column'
                    alignItems='center'
                    display='flex'
                    md
                    ml={{ lg: 5, md: 5 }}
                    mr={{ lg: 10, sm: 10 }}
                    mt={{ sm: 10, xs: 10 }}
                >

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






                <Grid
                    flexDirection='column'
                    md
                    alignItems='center'
                    display='flex'
                    ml={{ lg: 5, md: 5 }}
                    mr={{ lg: 10, sm: 10 }}
                    mt={{ sm: 10, xs: 10 }}
                >
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


                <Grid
                    flexDirection='column'
                    textAlign="center"
                    md
                    alignItems='center'
                    display='flex'
                    ml={{ lg: 5, md: 5 }}
                    mr={{ lg: 10, sm: 10 }}
                    mt={{ sm: 10, xs: 10 }}>
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



                <Grid
                    flexDirection='column'
                    md
                    alignItems='center'
                    display='flex'
                    ml={{ lg: 5, md: 5 }}
                    mr={{ lg: 10, sm: 10 }}
                    mt={{ sm: 10, xs: 10 }}>
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