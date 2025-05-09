import { Grid, Typography, Box, Paper } from '@mui/material';
import Image from 'next/image';

const ClientFeedbackCard = ({ imageSrc, altName, name, nameBg, designation, message }) => (

    <Grid>

       
        <Grid
            mt={8}
            mr={{ lg: 0, md: 7, sm: 5, xs: 5 }}
            ml={{ lg: 0, md: 7, sm: 5, xs: 5 }}
            mb={5}
            width={280}
            component={Paper}
            elevation={4}
            borderRadius={4}
            p={3}
            sx={{
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-5px)' },
                height: 450, // Set fixed height here
                overflow: 'hidden', // Hide content that overflows (if any)


            }}
        >
            {/* Client Image */}
            <Grid justifyContent="center" alignItems="center" display="flex" mb={2}>
                <Image
                    width={120}
                    height={120}
                    src={imageSrc}
                    alt={altName}
                    style={{ borderRadius: '50%' }}
                />
            </Grid>

            {/* Name BG */}
            <Box
                sx={{
                    pt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    height: 40,
                }}
            >
                <Image
                    height={40}
                    width={160}
                    src={nameBg}
                    alt="Name background"
                    style={{ objectFit: 'contain' }}
                />
                <Typography
                    sx={{
                        position: 'absolute',
                        fontSize: 15,
                        fontFamily: 'poppins-semibold',
                        color: '#fff',
                        
                    }}
                    component="h4"
                >
                    {name}
                </Typography>
            </Box>

            {/* Designation */}
            <Typography
                mt={1}
                fontSize={14}
                fontFamily="poppins-regular"
                color="#555"
                textAlign="center"
            >
                {designation}
            </Typography>

            {/* Message */}
            <Typography
                mt={2}
                pb={2}
                fontSize={15}
                fontFamily="poppins-regular"
                textAlign="center"
                color="#333"
                sx={{ fontStyle: 'italic' }}
            >
                “{message}”
            </Typography>
        </Grid>
    </Grid>
);

export default ClientFeedbackCard;
