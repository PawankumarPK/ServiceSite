import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Grow, Link, Paper, Stack, Typography } from '@mui/material'
import pawan from "../../public/team/pawan.jpeg";
import rohan from "../../public/team/rohan.jpg";
import aarav from "../../public/team/aarav.jpg";
import vihaan from "../../public/team/vihaan.jpg";
import meera from "../../public/team/meera.jpg";
import ananya from "../../public/team/ananya.jpg";
import teamTwo from "../../public/png/team2.png";
import teamThree from "../../public/png/team3.png";
import teamBgOne from "../../public/png/teamBg1.png";
import teamBgTwo from "../../public/png/teamBg2.png";
import teamBgThree from "../../public/png/teamBg3.png";
import React from 'react'
import Image from 'next/image';
import { textAlign } from '@mui/system';
import ClientFeedbackCard from './ClientFeedbackCard';

///----------------- Team common sections -----------------
const Teams = ({ name, designation, img, nameBg, altName }) => (
    <Grid mt={5} mr={{ lg: 1, md: 7, sm: 5, xs: 5 }} ml={{ lg: 1, md: 7, sm: 5, xs: 5 }}>
        <Grid justifyContent="center" alignItems="center" display="flex">
            <Box
                sx={{
                    width: 180,
                    height: 180,
                    overflow: 'hidden',
                    borderRadius: '10%',
                }}
            >
                <Image
                    src={img}
                    alt={altName}
                    width={180}
                    height={180}
                    style={{ objectFit: 'cover' }}
                />
            </Box>
        </Grid>

        <Box
            sx={{
                pt: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>

            <Image
                height={30}
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

            <Typography component='h4' color="#9CC118" mt={{ lg: 0, xs: 0 }} fontSize={{ lg: 45, md: 40, sm: 40, xs: 30 }} fontFamily="poppins-semibold" sx={{
                lineHeight: {
                    xs: '30px',
                    sm: '30px',
                    md: '60px',
                },
            }}>
                great talented staff
            </Typography>


            <Grid width={{ lg: 400, md: 400, sm: 300, xs: 300 }}>
                <Typography component='p' mt={2} fontSize={12} fontFamily='poppins-regular' textAlign="center" color="#595959">
                    Experience own technologies like never before, with injected alterations that bring a new level of clarity to your work.
                </Typography>
            </Grid>



            <Grid container justifyContent='center' pb={5}>



                <Link href="https://www.linkedin.com/in/pawan-kumar-yadav/" scroll={true} passHref target="_blank">
                    <Teams
                        name="Pawan"
                        designation="Captain"
                        nameBg={teamBgOne}
                        img={pawan}
                        altName="team Member One">

                    </Teams>
                </Link>


                <Teams
                    name="Rohan"
                    designation="Frontend Developer"
                    nameBg={teamBgTwo}
                    img={rohan}
                    altName="team Member Two">

                </Teams>



                <Teams
                    name="Aarav"
                    designation="Backend Developer"
                    nameBg={teamBgThree}
                    img={aarav}
                    altName="team Member Three">

                </Teams>

                <Teams
                    name="Vihaan"
                    designation="FullStack Developer"
                    nameBg={teamBgTwo}
                    img={vihaan}
                    altName="team Member Three">

                </Teams>

                <Teams
                    name="Meera"
                    designation="DevOps Engineer"
                    nameBg={teamBgOne}
                    img={meera}
                    altName="team Member Three">

                </Teams>

                <Teams
                    name="Ananya"
                    designation="UI/UX Designer"
                    nameBg={teamBgTwo}
                    img={ananya}
                    altName="team Member Three">

                </Teams>




            </Grid>






        </Grid>



    )
}

export default TeamSection