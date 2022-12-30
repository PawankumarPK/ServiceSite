import { Box, Button, Grid, Typography } from '@mui/material'
import { bgcolor, Container } from '@mui/system'
import studyImage from "../../public/png/study.png";

import React from 'react'
import Image from 'next/image';

const MakeDesignBetter = () => {
    return (
        <Container maxWidth="lg" sx={{ position: "relative" }}>

            <Grid container mt={30} height={600} spacing={5}>


                <Grid width={600}>
                    <Typography fontSize={20} color="#595959" fontFamily="poppins">
                        We are technologies company
                    </Typography>

                    <Typography mt={1} fontSize={45} fontFamily="poppins-semibold" style={{lineHeight: "60px"}}>
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

                <Grid ml={4}>
                    <Image
                        width={550}
                        priority
                        src={studyImage}
                        alt='Banner Image'>
                    </Image>
                </Grid>




            </Grid>

        </Container>
    )
}

export default MakeDesignBetter