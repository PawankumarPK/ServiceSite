import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Grow, Link, Paper, Stack, Typography } from '@mui/material'
import teamOne from "../../public/png/team1.png";
import teamTwo from "../../public/png/team2.png";
import teamThree from "../../public/png/team3.png";


import teamBgOne from "../../public/png/teamBg1.png";

import teamBgTwo from "../../public/png/teamBg2.png";

import teamBgThree from "../../public/png/teamBg3.png";
import React from 'react'
import Image from 'next/image';
import { textAlign } from '@mui/system';

///----------------- Team common sections -----------------
const Teams = ({ name, designation, img, nameBg, altName }) => (
    <Grid mt={10} mr={{ lg: 6, md: 7, sm: 5, xs: 5 }} ml={{ lg: 6, md: 7, sm: 5 }}>
        <Grid justifyContent='center' alignItems="center" display='flex'>
            <Image
                width={200}
                src={img}
                alt={altName} />
        </Grid>

        <Box
            sx={{
                pt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>

            <Image
                height={40}
                sx={{ position: 'relative' }}
                src={nameBg}
                alt='Team BG One Image'>
            </Image>

            <Typography sx={{ position: "absolute" }}
                fontSize={15}
                fontFamily="poppins-semibold"
                component='h4'
                color='#fff'
                textAlign='center'>

                {name}

            </Typography>

        </Box>

        <Typography
            mt={1}
            fontSize={15}
            fontFamily="poppins-regular"
            component='p'
            color='#000'
            textAlign='center'>

            {designation}

        </Typography>


    </Grid>
)

const TeamSection = () => {
    return (


        <Grid bgcolor="#fff" container direction="column" alignItems="center" id="team">

            <Typography mt={10} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B">
                We are own technologies company

            </Typography>

            <Grid width={260} height={2} bgcolor="#40536B"></Grid>


            <Grid container justifyContent='center' textAlign="center">
                <Typography component='h3' color="#000" noWrap mt={2} fontSize={{ lg: 45, md: 40, sm: 40, xs: 30 }} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                    We have some
                </Typography>

                {/* <Typography component='h3' color='#9CC118' mt={2} fontSize={{ lg: 45, md: 40, sm: 40, xs: 40 }} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                    &nbsp;great
                </Typography> */}
            </Grid>

            <Typography component='h4' color="#9CC118" noWrap mt={{ lg: 1, xs: 0 }} fontSize={{ lg: 45, md: 40, sm: 40, xs: 30 }} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                great talented staff
            </Typography>


            <Grid width={{ lg: 400, md: 400, sm: 300, xs: 300 }}>
                <Typography component='p' mt={2} fontSize={12} fontFamily='poppins-regular' textAlign="center" color="#595959">
                    Experience own technologies like never before, with injected alterations that bring a new level of clarity to your work.
                </Typography>
            </Grid>



            <Grid container={{ lg: false, md: true, sm: false, xs: false }} justifyContent='center' pb={10}>



                <Link href="https://www.linkedin.com/in/pawan-kumar-yadav/" scroll={true} passHref target="_blank">
                    <Teams
                        name="Pawan Yadav"
                        designation="Director"
                        nameBg={teamBgOne}
                        img={teamOne}
                        altName="team Member One">

                    </Teams>
                </Link>


                <Teams
                    name="Keshav"
                    designation="Frontend Developer"
                    nameBg={teamBgTwo}
                    img={teamTwo}
                    altName="team Member Two">

                </Teams>



                <Teams
                    name="Vipul"
                    designation="Backend Developer"
                    nameBg={teamBgThree}
                    img={teamThree}
                    altName="team Member Three">

                </Teams>

                <Teams
                    name="Tejsavi"
                    designation="Frontend Developer"
                    nameBg={teamBgTwo}
                    img={teamTwo}
                    altName="team Member Three">

                </Teams>


            </Grid>
        </Grid>



    )
}

export default TeamSection