import { Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ClientFeedbackCard = ({ imageSrc, altName, name, nameBg, designation, message }) => (
    <motion.div
        whileHover={{ 
            y: -12, 
            scale: 1.02,
        }}
        style={{ 
            transition: 'all 0.3s ease',
        }}
    >
        <Box
            sx={{
                width: { xs: 280, sm: 300, md: 320 },
                minWidth: { xs: 280, sm: 300, md: 320 },
                bgcolor: '#fff',
                borderRadius: '25px',
                p: 4,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.05)',
                height: '100%',
                minHeight: 480,
                display: 'flex',
                flexDirection: 'column',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #9CC118 0%, #DBD525 50%, #9CC118 100%)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s ease',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(156,193,24,0.05) 0%, transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                },
                '&:hover': {
                    boxShadow: '0 20px 50px rgba(156,193,24,0.25)',
                    transform: 'translateY(-8px)',
                    border: '1px solid rgba(156,193,24,0.2)',
                    '&::before': {
                        transform: 'scaleX(1)',
                    },
                    '&::after': {
                        opacity: 1,
                    },
                    '& .client-image': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 10px 30px rgba(156,193,24,0.3)',
                    }
                }
            }}
        >
            {/* Quote Icon */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(156,193,24,0.1) 0%, rgba(219,213,37,0.1) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                }}
            >
                <Typography
                    sx={{
                        fontSize: 30,
                        color: '#9CC118',
                        fontFamily: 'serif',
                        lineHeight: 1,
                    }}
                >
                    &ldquo;
                </Typography>
            </Box>

            {/* Client Image */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 3,
                    mt: 2,
                }}
            >
                <Box
                    className="client-image"
                    sx={{
                        position: 'relative',
                        width: { xs: 110, sm: 120 },
                        height: { xs: 110, sm: 120 },
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid #fff',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                        transition: 'all 0.4s ease',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: -4,
                            borderRadius: '50%',
                            padding: '4px',
                            background: 'linear-gradient(135deg, #9CC118 0%, #DBD525 100%)',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            maskComposite: 'exclude',
                            opacity: 0,
                            transition: 'opacity 0.4s ease',
                        },
                    }}
                >
                    <Image
                        width={120}
                        height={120}
                        src={imageSrc}
                        alt={altName}
                        style={{ 
                            borderRadius: '50%',
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Box>
            </Box>

            {/* Name BG */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    height: 45,
                    mb: 2,
                }}
            >
                <Image
                    height={45}
                    width={180}
                    src={nameBg}
                    alt="Name background"
                    style={{ objectFit: 'contain' }}
                />
                <Typography
                    sx={{
                        position: 'absolute',
                        fontSize: { xs: 14, sm: 16 },
                        fontFamily: 'var(--font-poppins), sans-serif',
                        fontWeight: 600,
                        color: '#fff',
                        textAlign: 'center',
                        width: '100%',
                    }}
                    component="h4"
                >
                    {name}
                </Typography>
            </Box>

            {/* Designation */}
            <Typography
                fontSize={{ xs: 13, sm: 14 }}
                fontFamily="var(--font-poppins), sans-serif" fontWeight={500}
                color="#595959"
                textAlign="center"
                sx={{ mb: 3 }}
            >
                {designation}
            </Typography>

            {/* Message */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    fontSize={{ xs: 14, sm: 15 }}
                    fontFamily="var(--font-poppins), sans-serif" fontWeight={400}
                    textAlign="center"
                    color="#333"
                    sx={{
                        fontStyle: 'italic',
                        lineHeight: '26px',
                        position: 'relative',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -10,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 40,
                            height: 2,
                            background: 'linear-gradient(90deg, #9CC118 0%, #DBD525 100%)',
                        }
                    }}
                >
                    &ldquo;{message}&rdquo;
                </Typography>
            </Box>
        </Box>
    </motion.div>
);

export default ClientFeedbackCard;
