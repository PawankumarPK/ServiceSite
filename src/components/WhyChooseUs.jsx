import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Grow, Paper, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import folderOpenIcon from "../svg/folderOpenIcon.svg";
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

const WhyChooseUs = () => {
    return (
        <Grid>

            <Grid container direction="column" alignItems="center">

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

                    <Grid pb={10} mr={20}>

                        <Grid mt={5} width={300} bgcolor="#fff" display='flex'>
                            <Grid mt={1} width={53} height={50} bgcolor="#DBBF05" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                                <Image
                                    width={20}
                                    src={chartLineIcon}
                                    alt="Chart Line Icon" />
                            </Grid>

                            <Grid width={250} direction='column' ml={2}>
                                <Typography pt={1} fontSize={14} fontFamily='poppins-regular' fontWeight={400} color="#202020">
                                    All Dynamic Websites
                                </Typography>

                                <Typography lineHeight="20px" pt={1} fontSize={12} fontFamily='poppins-regular' color="#595959" textTransform='none'>
                                    All Websites by default are dynamic and customization can be done as per your business requirements and request.


                                </Typography>

                            </Grid>

                        </Grid>



                        <Grid mt={5} width={300} bgcolor="#fff" display='flex'>
                            <Grid mt={1} width={53} height={50} bgcolor="#9CC118" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                                <Image
                                    width={20}
                                    src={googleIcon}
                                    alt="Folder Open Icon" />
                            </Grid>

                            <Grid width={250} direction='column' ml={2}>
                                <Typography pt={1} fontSize={14} fontFamily='poppins-regular' color="#202020" textTransform='none'>
                                    Search Engine Optimization
                                </Typography>

                                <Typography lineHeight="20px" pt={1} fontSize={12} fontFamily='poppins-regular' color="#595959" textTransform='none'>
                                    SEO is the process of telling a search engine that a new website is launched and thus making it searchable and We do it for you.

                                </Typography>

                            </Grid>

                        </Grid>




                        <Grid mt={5} width={300} bgcolor="#fff" display='flex'>
                            <Grid mt={1} width={53} height={50} bgcolor="#01A9F5" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                                <Image
                                    width={20}
                                    src={magnetIcon}
                                    alt="Folder Open Icon" />
                            </Grid>

                            <Grid width={250} direction='column' ml={2}>
                                <Typography pt={1} fontSize={14} fontFamily='poppins-regular' color="#202020" textTransform='none'>
                                    Lead Magnets
                                </Typography>

                                <Typography lineHeight="20px" pt={1} fontSize={12} fontFamily='poppins-regular' color="#595959" textTransform='none'>
                                    A Lead Magnet generates fresh leads for you without buying the leads from external sources and increases possibilities.

                                </Typography>

                            </Grid>

                        </Grid>



                    </Grid>











                    <Grid pb={10} mr={20}>

                        <Grid mt={5} width={300} bgcolor="#fff" display='flex'>
                            <Grid mt={1} width={53} height={50} bgcolor="#0796A1" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                                <Image
                                    width={20}
                                    src={webIcon}
                                    alt="Web Icon" />
                            </Grid>

                            <Grid width={250} direction='column' ml={2}>
                                <Typography pt={1} fontSize={14} fontFamily='poppins-regular' fontWeight={400} color="#202020">
                                    All Responsive Websites

                                </Typography>

                                <Typography lineHeight="20px" pt={1} fontSize={12} fontFamily='poppins-regular' color="#595959" textTransform='none'>
                                    All Websites by default are Responsive and accessible from any device, No additional charges or request need to be made.



                                </Typography>

                            </Grid>

                        </Grid>



                        <Grid mt={5} width={300} bgcolor="#fff" display='flex'>
                            <Grid mt={1} width={53} height={50} bgcolor="#12A824" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                                <Image
                                    width={20}
                                    src={metroShopIcon}
                                    alt="Metro Shop Icon" />
                            </Grid>

                            <Grid width={250} direction='column' ml={2}>
                                <Typography pt={1} fontSize={14} fontFamily='poppins-regular' color="#202020" textTransform='none'>
                                    Email & Social Marketing

                                </Typography>

                                <Typography lineHeight="20px" pt={1} fontSize={12} fontFamily='poppins-regular' color="#595959" textTransform='none'>
                                    We also run Digital marketing & promotion Campaigns to promote your business. For more info contact any of our agents.

                                </Typography>

                            </Grid>

                        </Grid>




                        <Grid mt={5} width={300} bgcolor="#fff" display='flex'>
                            <Grid mt={1} width={53} height={50} bgcolor="#8F07A1" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                                <Image
                                    width={20}
                                    src={runIcon}
                                    alt="Run Icon" />
                            </Grid>

                            <Grid width={250} direction='column' ml={2}>
                                <Typography pt={1} fontSize={14} fontFamily='poppins-regular' color="#202020" textTransform='none'>
                                    Delivery on Time

                                </Typography>

                                <Typography lineHeight="20px" pt={1} fontSize={12} fontFamily='poppins-regular' color="#595959" textTransform='none'>
                                    We try our best to give you the quality work in time however it also depends upon the complexity and length of the project.

                                </Typography>

                            </Grid>

                        </Grid>



                    </Grid>




                    <Grid pb={10}>

                        <Grid mt={5} width={300} bgcolor="#fff" display='flex'>
                            <Grid mt={1} width={53} height={50} bgcolor="#DBD525" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                                <Image
                                    width={20}
                                    src={newsIcon}
                                    alt="News Icon" />
                            </Grid>

                            <Grid width={250} direction='column' ml={2}>
                                <Typography pt={1} fontSize={14} fontFamily='poppins-regular' fontWeight={400} color="#202020">
                                    Customized Designs & Layouts

                                </Typography>

                                <Typography display="block" lineHeight="20px" pt={1} fontSize={12} fontFamily='poppins-regular' color="#595959">
                                     Choose from a verity of Designs or tell us your custom preference to turn your imaginations into reality imaginations into reality..

                                </Typography>

                            </Grid>

                        </Grid>



                        <Grid mt={5} width={300} bgcolor="#fff" display='flex'>
                            <Grid mt={1} width={53} height={50} bgcolor="#DB4125" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                                <Image
                                    width={20}
                                    src={awardIcon}
                                    alt="Award Icon" />
                            </Grid>

                            <Grid width={250} direction='column' ml={2}>
                                <Typography pt={1} fontSize={14} fontFamily='poppins-regular' color="#202020" textTransform='none'>
                                    Free SSL Certificate for 1 Year
                                </Typography>

                                <Typography lineHeight="20px" pt={1} fontSize={12} fontFamily='poppins-regular' color="#595959" textTransform='none'>
                                    All Domains by default will get a Free SSL Certificate for first year to make your website more secure from security threats.

                                </Typography>

                            </Grid>

                        </Grid>




                        <Grid mt={5} width={300} bgcolor="#fff" display='flex'>
                            <Grid mt={1} width={53} height={50} bgcolor="#25DBBF" sx={{ borderRadius: 20 }} alignItems='center' display='flex' justifyContent='center'>
                                <Image
                                    width={20}
                                    src={homeIcon}
                                    alt="Home Icon" />
                            </Grid>

                            <Grid width={250} direction='column' ml={2}>
                                <Typography pt={1} fontSize={14} fontFamily='poppins-regular' color="#202020" textTransform='none'>
                                    Your One Stop Shop

                                </Typography>

                                <Typography lineHeight="20px" pt={1} fontSize={12} fontFamily='poppins-regular' color="#595959" textTransform='none'>
                                    Right from getting a Domain to create an SEO enabled website leave everything on us so that you can focus on your business.

                                </Typography>

                            </Grid>

                        </Grid>



                    </Grid>

                </Grid>
            </Grid>


        </Grid>
    )
}

export default WhyChooseUs