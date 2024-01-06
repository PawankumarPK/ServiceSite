import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import business from "../../public/png/business.png";
import moneyBack from "../../public/png/money-back.png";
import support from "../../public/png/support.png";

import React from 'react'
import Image from 'next/image';

const Guarantee = () => {
    return (
        <Grid bgcolor="#F7F8FA" id="guarantee">

            <Grid container direction="column" alignItems="center">

                <Typography component="p" mt={10} fontSize={14} fontFamily='poppins-medium' textAlign="center" color="#27363B">
                    What we promise
                </Typography>

                <Grid width={100} height={2} bgcolor="#40536B"></Grid>


                <Grid container justifyContent='center' textAlign="center" mb={5}>
                    <Typography component="h3" color="#000000" noWrap mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        Work With
                    </Typography>

                    <Typography component="h3" color='#9CC118' mt={2} fontSize={45} fontFamily="poppins-semibold" style={{ lineHeight: "60px" }}>
                        &nbsp;Guarantee
                    </Typography>
                </Grid>


                <Grid container={{ lg: true, sm: false }} pb={15} pt={10} alignItems='center' justifyContent='center'>


                    {/* ------------------------- Tell your requirements Section ------------------------*/}
                    <Grid mr={{ lg: 5, md: 5 }} height={350} width={400} mb={5} bgcolor="#fff">

                        <Box
                            sx={{
                                pt: 4,
                                pl: 5,
                                display: "flex",
                            }}>

                            <Image
                                height={120}
                                pt={5}
                                sx={{ position: 'relative', pt: 5 }}
                                src={moneyBack}
                                alt='LightBulb Image'>
                            </Image>

                            <Typography sx={{ position: "absolute", pt: 9, pl: 3 }}
                                variant='h5'
                                fontFamily="poppins-semibold"
                                component='subtitle1'
                                color='#202020'
                                fontWeight='600'
                                textAlign='center'>

                                Refund All Money

                            </Typography>

                        </Box>



                        <Grid pt={2} pb={5}>
                            <Typography sx={{ padding: 2 }}
                                fontSize={13}
                                lineHeight="22px"
                                fontFamily="poppins-regular"
                                component='p'
                                color='#202020'
                                textAlign='center'>

                                We understand that there are risks involved in project management, and we are committed to working with you to deliver a product on time and in the best possible quality. But if we cannot meet your deadline, we will give you a full refund of your money.
                            </Typography>
                        </Grid>


                    </Grid>


                    {/* ------------------------- We Plan & design Section ------------------------*/}
                    <Grid mr={{ lg: 5, md: 5 }} mb={5} height={350} width={400} bgcolor="#fff">

                        <Box
                            sx={{
                                pt: 5,
                                pl: 5,
                                display: "flex",
                            }}>

                            <Image
                                height={120}
                                pt={5}
                                sx={{ position: 'relative', pt: 5 }}
                                src={support}
                                alt='Money Back Image'>
                            </Image>

                            <Typography sx={{ position: "absolute", pt: 9, pl: 3 }}
                                variant='h5'
                                fontFamily="poppins-semibold"
                                component='subtitle1'
                                color='#202020'
                                fontWeight='600'
                                textAlign='center'>

                                Give Free Service

                            </Typography>

                        </Box>



                        <Grid pt={2}>
                            <Typography sx={{ padding: 2 }}
                                fontSize={13}
                                fontFamily="poppins-regular"
                                component='p'
                                lineHeight="22px"
                                color='#595959'
                                textAlign='center'>

                                We are happy to offer a free service for the duration of this project. If we fail to meet the deadline, If we fail to meet the deadline, then you can cancel your order without any penalty. And you will get a full refund amount
                            </Typography>
                        </Grid>


                    </Grid>


                    {/* ------------------------- We Deliver & Launch Section ------------------------*/}
                    <Grid height={350} width={400} mb={5} bgcolor="#fff">

                        <Box
                            sx={{
                                pt: 5,
                                pl: 5,
                                display: "flex",
                            }}>

                            <Image
                                height={120}
                                pt={5}
                                sx={{ position: 'relative', pt: 5 }}
                                src={business}
                                alt='moneyBack Image'>
                            </Image>

                            <Typography sx={{ position: "absolute", pt: 9, pl: 3 }}
                                variant='h5'
                                fontFamily="poppins-semibold"
                                component='subtitle'
                                color='#202020'
                                fontWeight='600'
                                textAlign='center'>

                                Written Agreement

                            </Typography>

                        </Box>



                        <Grid pt={2}>
                            <Typography sx={{ padding: 2 }}
                                fontSize={13}
                                fontFamily="poppins-regular"
                                component='p'
                                lineHeight="22px"
                                color='#595959'
                                textAlign='center'>

                                We are going to give you a detailed description of the conditions that will apply to your project. This includes things like deadlines, refund clauses, and other promises.
                                Everything is on written agreement.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    )
}

export default Guarantee