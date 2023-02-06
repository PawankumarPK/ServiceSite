import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Paper, Stack, Typography } from '@mui/material'
import awardIcon from "../svg/awardIcon.svg";
import chartLineIcon from "../svg/chartLineIcon.svg";
import newsIcon from "../svg/newsIcon.svg";
import googleIcon from "../svg/googleIcon.svg";
import homeIcon from "../svg/homeIcon.svg";
import magnetIcon from "../svg/magnetIcon.svg";
import metroShopIcon from "../svg/metroShopIcon.svg";
import runIcon from "../svg/runIcon.svg";
import webIcon from "../svg/webIcon.svg";


import React from 'react'
import Image from 'next/image';

///----------------- Services common title -----------------
const Services = ({ title, description, icon, bgColor }) => (
    <Grid mt={5} width={300} bgcolor="#fff" display='flex'>
        <Grid mt={1} width={53} height={50} bgcolor={bgColor} sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
            <Image
                width={20}
                src={icon}
                alt="Chart Line Icon" />
        </Grid>

        <Grid width={250} direction='column' ml={2}>
            <Typography pt={1} fontSize={14} fontFamily='poppins-regular' fontWeight={400} color="#202020">
                {title}
            </Typography>

            <Typography lineHeight="20px" pt={1} fontSize={12} fontFamily='poppins-regular' color="#595959" textTransform='none'>
                {description}


            </Typography>

        </Grid>

    </Grid>
)

const WhyChooseUs = () => {
    return (

            <Grid  container direction="column" alignItems="center" id="description">

                <Typography mt={10} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B">
                    How To Start
                </Typography>

                <Grid width={100} height={2} bgcolor="#40536B"></Grid>


                <Grid container justifyContent='center' textAlign="center">
                    <Typography noWrap mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        Why Choose
                    </Typography>

                    <Typography color='#9CC118' mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        &nbsp;Us
                    </Typography>
                </Grid>




                <Grid container justifyContent='center' mt={5}>

                    <Grid pb={10} mr={{ lg: 20, md: 5 , sm:2 }}>

                        <Services
                            title="All Dynamic Websites"
                            description="All Websites by default are dynamic and customization can be done as per your business requirements and request."
                            icon={chartLineIcon}
                            bgColor="#9CC118" />

                        <Services
                            icon={googleIcon}
                            title="Search Engine Optimization"
                            description="SEO is the process of telling a search engine that a new website is launched and thus making it searchable and We do it for you."
                            bgColor="#DBBF05"
                        />

                        <Services
                            icon={magnetIcon}
                            title="Lead Magnets"
                            description="A Lead Magnet generates fresh leads for you without buying the leads from external sources and increases possibilities."
                            bgColor="#01A9F5"
                        />


                    </Grid>


                    <Grid pb={10} mr={{ lg: 20, md: 5 , sm:2 }}>

                        <Services
                            icon={webIcon}
                            title="All Responsive Websites"
                            description="All Websites by default are Responsive and accessible from any device, No additional charges or request need to be made."
                            bgColor="#0796A1"
                        />

                        <Services
                            icon={metroShopIcon}
                            title="Email & Social Marketing"
                            description="We also run Digital marketing & promotion Campaigns to promote your business. For more info contact any of our agents."
                            bgColor="#12A824"
                        />

                        <Services
                            icon={runIcon}
                            title="Delivery on Time"
                            description="We try our best to give you the quality work in time however it also depends upon the complexity and length of the project."
                            bgColor="#8F07A1"
                        />

                    </Grid>


                    <Grid pb={10} >

                        <Services
                            icon={newsIcon}
                            title="Customized Designs & Layouts"
                            description="Choose from a verity of Designs or tell us your custom preference to turn your imaginations into reality imaginations into reality.."
                            bgColor="#DBD525"
                        />

                        <Services
                            icon={awardIcon}
                            title="Free SSL Certificate for 1 Year"
                            description="All Domains by default will get a Free SSL Certificate for first year to make your website more secure from security threats."
                            bgColor="#DB4125"
                        />

                        <Services
                            icon={homeIcon}
                            title="Your One Stop Shop"
                            description="Right from getting a Domain to create an SEO enabled website leave everything on us so that you can focus on your business."
                            bgColor="#25DBBF"
                        />



                    </Grid>

                </Grid>
            </Grid>


    )
}

export default WhyChooseUs