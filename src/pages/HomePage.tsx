import React from 'react';
import {
    Container,
    Typography,
    Box,
    Button,
    useTheme,
    useMediaQuery,
    Fade
} from '@mui/material';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ParfumCard from '../components/ParfumCard';
import { parfums } from '../data/parfums';

const HomePage: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const featuredParfums = parfums.slice(0, 4);

    return (
        <Box>
            <HeroSection />

            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Fade in timeout={500}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant={isMobile ? 'h3' : 'h2'}
                            sx={{
                                mb: 3,
                                color: theme.palette.text.primary,
                                fontWeight: 600
                            }}
                        >
                            Découvrez nos parfums
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}
                        >
                            Une sélection exclusive de fragrances mystérieuses et élégantes,
                            créées pour révéler votre personnalité unique
                        </Typography>

                        <Button
                            component={Link}
                            to="/parfums"
                            variant="outlined"
                            size="large"
                            sx={{
                                borderColor: theme.palette.secondary.main,
                                color: theme.palette.secondary.main,
                                px: 4,
                                py: 2,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                '&:hover': {
                                    borderColor: theme.palette.secondary.dark,
                                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                                }
                            }}
                        >
                            Voir toute la collection
                        </Button>
                    </Box>
                </Fade>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)'
                    },
                    gap: 4,
                    mb: 8
                }}>
                    {featuredParfums.map((parfum, index) => (
                        <Fade in timeout={700 + index * 200} key={parfum.id}>
                            <Box>
                                <ParfumCard parfum={parfum} />
                            </Box>
                        </Fade>
                    ))}
                </Box>

                <Box sx={{ mt: 8, textAlign: 'center' }}>
                    <Fade in timeout={1500}>
                        <Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 3,
                                    color: theme.palette.text.primary,
                                    fontWeight: 500
                                }}
                            >
                                L'élégance du mystère en chaque goutte
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
                            >
                                Chaque parfum AURYA est une invitation à découvrir des mondes
                                mystérieux et élégants, où la sophistication rencontre l'unicité.
                            </Typography>
                        </Box>
                    </Fade>
                </Box>
            </Container>
        </Box>
    );
};

export default HomePage;
