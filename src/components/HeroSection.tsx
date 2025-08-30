import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/images/hero-bg.jpg") center/cover',
          opacity: 0.3,
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            textAlign: 'center',
            color: 'white',
            py: { xs: 8, md: 12 }
          }}
        >
          <Typography
            variant={isMobile ? 'h2' : 'h1'}
            sx={{
              mb: 3,
              color: theme.palette.secondary.main,
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              animation: 'fadeInUp 1s ease-out'
            }}
          >
            AURYA ✨
          </Typography>
          
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            sx={{
              mb: 6,
              fontStyle: 'italic',
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              animation: 'fadeInUp 1s ease-out 0.3s both'
            }}
          >
            "L'élégance du mystère en chaque goutte."
          </Typography>
          
          <Button
            component={Link}
            to="/parfums"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: 'black',
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: theme.palette.secondary.dark,
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)'
              },
              transition: 'all 0.3s ease',
              animation: 'fadeInUp 1s ease-out 0.6s both'
            }}
          >
            Voir nos parfums
          </Button>
        </Box>
      </Container>
      
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;
