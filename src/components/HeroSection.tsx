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
        background: `
          linear-gradient(
            135deg, 
            rgba(0, 0, 0, 0.7) 0%, 
            rgba(26, 26, 26, 0.8) 30%, 
            rgba(0, 0, 0, 0.6) 70%, 
            rgba(0, 0, 0, 0.8) 100%
          ),
          url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80") center/cover
        `,
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
          background: `
            radial-gradient(
              circle at 30% 20%, 
              rgba(212, 175, 55, 0.1) 0%, 
              transparent 50%
            ),
            radial-gradient(
              circle at 70% 80%, 
              rgba(255, 255, 255, 0.05) 0%, 
              transparent 50%
            )
          `,
          zIndex: 1
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(
              45deg,
              transparent 0%,
              rgba(212, 175, 55, 0.03) 25%,
              transparent 50%,
              rgba(255, 255, 255, 0.02) 75%,
              transparent 100%
            )
          `,
          animation: 'shimmer 8s ease-in-out infinite',
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
              textShadow: '3px 3px 6px rgba(0,0,0,0.9)',
              animation: 'fadeInUp 1.2s ease-out',
              fontWeight: 300,
              letterSpacing: '0.1em'
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
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              animation: 'fadeInUp 1.2s ease-out 0.4s both',
              fontWeight: 300,
              letterSpacing: '0.05em'
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
              px: 5,
              py: 2.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '50px',
              textTransform: 'none',
              letterSpacing: '0.05em',
              '&:hover': {
                backgroundColor: theme.palette.secondary.dark,
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 30px rgba(212, 175, 55, 0.5)'
              },
              transition: 'all 0.4s ease',
              animation: 'fadeInUp 1.2s ease-out 0.8s both'
            }}
          >
            Découvrir nos parfums
          </Button>
        </Box>
      </Container>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes shimmer {
            0%, 100% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroSection;
