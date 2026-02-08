'use client';

import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '919910765616';
const WHATSAPP_OFFER_MESSAGE = "Hi! I'd like to reveal the exclusive digital marketing offer. Please share the details.";

const MarketingPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const seen = sessionStorage.getItem('marketing_popup_seen');
      if (!seen) setIsOpen(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const openPopup = () => setIsOpen(true);
    window.addEventListener('openMarketingPopup', openPopup);
    return () => window.removeEventListener('openMarketingPopup', openPopup);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('marketing_popup_seen', 'true');
  };

  const handlePosterClick = () => {
    const url = `https://wa.me/+${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_OFFER_MESSAGE)}`;
    window.open(url, '_blank');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(6px)',
              zIndex: 999998,
              cursor: 'pointer',
            }}
          />
          {/* Modal - centered via flex wrapper so Framer transform doesn't break centering */}
          <Box
            sx={{
              position: 'fixed',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 999999,
              pointerEvents: 'none',
              p: 2,
            }}
          >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 28,
            }}
            style={{
              width: '100%',
              maxWidth: 420,
              pointerEvents: 'auto',
            }}
          >
            <Box
              sx={{
                pointerEvents: 'auto',
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.1)',
              }}
            >
              {/* Close button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}
              >
                <IconButton
                  onClick={handleClose}
                  sx={{
                    bgcolor: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' },
                    width: 40,
                    height: 40,
                  }}
                  size="small"
                  aria-label="Close"
                >
                  ✕
                </IconButton>
              </motion.div>

              {/* Poster - clickable */}
              <motion.div
                onClick={handlePosterClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                style={{
                  cursor: 'pointer',
                  display: 'block',
                  position: 'relative',
                  width: '100%',
                  lineHeight: 0,
                }}
              >
                <Image
                  src="/png/digital-marketing-poster.jpg"
                  alt="Digital Marketing Offer"
                  width={420}
                  height={560}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    verticalAlign: 'middle',
                  }}
                  unoptimized
                />
              </motion.div>

              {/* CTA strip */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                onClick={handlePosterClick}
                whileHover={{ opacity: 0.95 }}
                whileTap={{ scale: 0.99 }}
                style={{
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  padding: '14px 20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: 'var(--font-poppins), sans-serif',
                  }}
                >
                  Click to reveal offer on WhatsApp →
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
          </Box>
        </>
      )}
    </AnimatePresence>
  );
};

export default MarketingPopup;
