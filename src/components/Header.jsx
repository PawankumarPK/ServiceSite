import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Typography, Drawer } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@mui/system';

import calling from '../svg/calling.svg';
import emailBlack from '../svg/emailBlack.svg';
import menuIcon from '../svg/menu.svg';
import ownLogo from '../../public/png/ownLogo.png';
import popupWhatsapp from '../../public/png/popup-whatsapp.png';
import upArrow from '../../public/png/up-arrow.png';

import DrawerItem from './Drawer';

// Same nav as screenshot: Home, Services, Solutions, Industries, Sports, Company
const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'Sports', href: '#sports' },
  { label: 'Company', href: '#about' },
];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () =>
    window.open(
      `https://wa.me/+919587867258?text=${encodeURIComponent("Hi! I'm interested in your services.")}`,
      '_blank'
    );

  return (
    <>
      {/* ----------------------- Top Bar (same as screenshot) ----------------------- */}
      <Box sx={{ bgcolor: '#fff', borderBottom: '1px solid rgba(0,0,0,0.06)', py: 0.75 }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center">
            <Grid item xs={12} sm="auto">
              <Grid container alignItems="center" spacing={2} flexWrap="nowrap">
                <Grid item>
                  <Link
                    href="mailto:sales@comfygen.com?subject=Enquiry"
                    passHref
                    style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#000' }}
                  >
                    <Image src={emailBlack} alt="" width={18} height={18} />
                    <Typography component="span" sx={{ ml: 1, fontSize: 14 }} color="#000">
                      sales@comfygen.com
                    </Typography>
                  </Link>
                </Grid>
                <Grid item sx={{ pl: 2 }}>
                  <Box
                    component="a"
                    href="tel:+919587867258"
                    sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#000', cursor: 'pointer' }}
                  >
                    <Image src={calling} alt="" width={18} height={18} />
                    <Typography component="span" sx={{ ml: 1, fontSize: 14 }} color="#000">
                      +91 9587867258
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ----------------------- Main Navigation (same as screenshot) ----------------------- */}
      <Box sx={{ bgcolor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', position: 'sticky', top: 0, zIndex: 1100 }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" sx={{ minHeight: 72 }}>
            {/* Logo - same as footer: icon + OWN + Technologies */}
            <Grid item xs={6} md={3}>
              <Link href="#home" passHref style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <Image src={ownLogo} alt="OWN Technologies" width={48} height={48} />
                <Box sx={{ ml: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: { xs: 22, sm: 26 },
                      fontWeight: 700,
                      color: '#27363B',
                      fontFamily: 'var(--font-poppins), sans-serif',
                      lineHeight: 1.1,
                    }}
                  >
                    OWN
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: { xs: 11, sm: 13 },
                      fontWeight: 400,
                      color: '#27363B',
                      fontFamily: 'var(--font-poppins), sans-serif',
                      lineHeight: 1.2,
                    }}
                  >
                    Technologies
                  </Typography>
                </Box>
              </Link>
            </Grid>

            {/* Nav links - same as screenshot: Home, Services, Solutions, Industries, Sports, Company */}
            <Grid item xs={0} md={6} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <Grid container spacing={0} justifyContent="center">
                {NAV_LINKS.map((link) => (
                  <Grid item key={link.href}>
                    <Link href={link.href} passHref style={{ textDecoration: 'none' }}>
                      <Typography
                        component="span"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          fontSize: 14,
                          fontWeight: 500,
                          color: '#000',
                          fontFamily: 'var(--font-poppins), sans-serif',
                          display: 'inline-flex',
                          alignItems: 'center',
                          '&:hover': { color: '#2563eb' },
                        }}
                      >
                        {link.label}
                        <Box component="span" sx={{ ml: 0.25, fontSize: 10, opacity: 0.8 }}>▼</Box>
                      </Typography>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Get a Quote button - blue with arrow */}
            <Grid item xs={6} md={3} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Button
                href="#contact"
                component={Link}
                scroll
                variant="contained"
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  borderRadius: '8px',
                  bgcolor: '#2563eb',
                  px: 2.5,
                  py: 1,
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: 'var(--font-poppins), sans-serif',
                  textTransform: 'none',
                  boxShadow: '0 2px 8px rgba(37,99,235,0.35)',
                  '&:hover': { bgcolor: '#1d4ed8', boxShadow: '0 4px 12px rgba(37,99,235,0.4)' },
                }}
              >
                Get a Quote
                <Box component="span" sx={{ ml: 0.75, fontSize: 16 }}>↗</Box>
              </Button>
              <Box
                onClick={() => setIsDrawerOpen(true)}
                sx={{ display: { xs: 'block', md: 'none' }, cursor: 'pointer', p: 1 }}
                aria-label="Menu"
              >
                <Image src={menuIcon} alt="Menu" width={28} height={28} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ----------------------- Hero Section (same as screenshot) ----------------------- */}
      <Box
        id="home"
        sx={{ position: 'relative', minHeight: { xs: '85vh', sm: '90vh', md: '100vh' }, width: '100%', overflow: 'hidden' }}
      >
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image priority src="/png/banner.jpg" alt="Hero background" fill style={{ objectFit: 'cover' }} sizes="100vw" />
        </Box>
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(30, 58, 95, 0.48)', zIndex: 1 }} />

        {/* Floating social - same as screenshot: WhatsApp, Microsoft Teams, Telegram */}
        <Box
          sx={{
            position: 'absolute',
            right: { xs: 12, md: 24 },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          <Box
            onClick={openWhatsApp}
            sx={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              bgcolor: '#25D366',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(37,211,102,0.45)',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.1)' },
            }}
          >
            <Image src={popupWhatsapp} alt="WhatsApp" width={28} height={28} style={{ filter: 'brightness(0) invert(1)' }} />
          </Box>
          <Box
            component="a"
            href="https://www.microsoft.com/microsoft-teams"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              bgcolor: '#5B5FC7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(91,95,199,0.4)',
              transition: 'transform 0.2s',
              textDecoration: 'none',
              color: '#fff',
              fontSize: 18,
              fontWeight: 700,
              fontFamily: 'var(--font-poppins), sans-serif',
              '&:hover': { transform: 'scale(1.1)' },
            }}
          >
            T
          </Box>
          <Box
            component="a"
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              bgcolor: '#0088CC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,136,204,0.4)',
              transition: 'transform 0.2s',
              textDecoration: 'none',
              color: '#fff',
              fontSize: 20,
              '&:hover': { transform: 'scale(1.1)' },
            }}
          >
            ✈
          </Box>
        </Box>

        {/* Hero content - same as screenshot */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, height: '100%', pl: { xs: 1.5, sm: 2, md: 2 }, pr: { xs: 2, sm: 3 } }}>
          <Grid
            container
            alignItems="center"
            justifyContent="flex-start"
            sx={{ minHeight: { xs: '85vh', sm: '90vh', md: '100vh' }, py: { xs: 6, md: 8 } }}
          >
            <Grid item xs={12} md={10} lg={8}>
              <Typography
                component="h1"
                sx={{
                  color: '#fff',
                  fontSize: { xs: 26, sm: 32, md: 38, lg: 44 },
                  fontWeight: 700,
                  fontFamily: 'var(--font-poppins), sans-serif',
                  lineHeight: 1.25,
                  mb: 2,
                  textTransform: 'capitalize',
                }}
              >
                AI-Based Mobile App & Web Development Company
              </Typography>
              <Typography
                component="p"
                sx={{
                  color: 'rgba(255,255,255,0.92)',
                  fontSize: { xs: 14, sm: 15, md: 16 },
                  lineHeight: 1.75,
                  maxWidth: 560,
                  mb: 3,
                  fontFamily: 'var(--font-poppins), sans-serif',
                }}
              >
                Are you looking to build powerful mobile application? Comfygen is a trusted AI-based mobile app & web development company. We design and build mobile apps and websites with AI-powered solutions tailored for startups, enterprises, and global businesses.
              </Typography>
              <Button
                onClick={openWhatsApp}
                variant="contained"
                sx={{
                  borderRadius: '50px',
                  bgcolor: '#fff',
                  color: '#1a1a1a',
                  px: 3,
                  py: 1.5,
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'var(--font-poppins), sans-serif',
                  textTransform: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  '&:hover': { bgcolor: '#f5f5f5', boxShadow: '0 6px 24px rgba(0,0,0,0.2)' },
                }}
              >
                Talk to an expert!
                <Box
                  component="span"
                  sx={{
                    ml: 1.5,
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    bgcolor: '#2563eb',
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 18,
                  }}
                >
                  →
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerItem chooseMessage={() => setIsDrawerOpen(false)} />
      </Drawer>

      {/* Floating WhatsApp */}
      <Box
        onClick={openWhatsApp}
        sx={{
          position: 'fixed',
          right: { lg: '2%', md: '3%', sm: '5%', xs: '5%' },
          bottom: { lg: 120, md: 120, sm: 100, xs: 100 },
          width: { lg: 56, md: 60, sm: 54, xs: 50 },
          height: { lg: 56, md: 60, sm: 54, xs: 50 },
          borderRadius: '50%',
          bgcolor: '#25D366',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          cursor: 'pointer',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image src={popupWhatsapp} alt="WhatsApp" width={32} height={32} style={{ filter: 'brightness(0) invert(1)' }} />
      </Box>

      {showScrollButton && (
        <Box
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{
            position: 'fixed',
            right: { lg: '2%', md: '3%', sm: '5%', xs: '5%' },
            bottom: { lg: 40, md: 40, sm: 20, xs: 20 },
            width: 48,
            height: 48,
            borderRadius: '50%',
            bgcolor: '#2563eb',
            boxShadow: '0 4px 15px rgba(37,99,235,0.4)',
            cursor: 'pointer',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': { bgcolor: '#1d4ed8' },
          }}
        >
          <Image src={upArrow} alt="Scroll to top" width={24} height={24} style={{ transform: 'rotate(180deg)' }} />
        </Box>
      )}
    </>
  );
};

export default Header;
