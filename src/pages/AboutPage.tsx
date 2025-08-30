import React from 'react';
import {
    Container,
    Typography,
    Box,
    useTheme,
    useMediaQuery,
    Fade
} from '@mui/material';

const AboutPage: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Fade in timeout={500}>
                <Box>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant={isMobile ? 'h3' : 'h2'}
                            sx={{
                                mb: 3,
                                color: theme.palette.text.primary,
                                fontWeight: 600
                            }}
                        >
                            À Propos d'AURYA
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ maxWidth: 700, mx: 'auto', fontStyle: 'italic' }}
                        >
                            "L'élégance du mystère en chaque goutte"
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, mb: 8 }}>
                        <Box sx={{ flex: 1 }}>
                            <Fade in timeout={700}>
                                <Box>
                                    <img
                                        src="/images/about-lifestyle.jpg"
                                        alt="AURYA - Lifestyle et parfums"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: 12,
                                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                        }}
                                    />
                                </Box>
                            </Fade>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Fade in timeout={900}>
                                <Box>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            mb: 3,
                                            color: theme.palette.text.primary,
                                            fontWeight: 600
                                        }}
                                    >
                                        Notre Histoire
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{ mb: 3, lineHeight: 1.7 }}
                                    >
                                        AURYA est née d'une passion pour l'art du parfum et d'une vision unique :
                                        créer des fragrances qui transcendent le simple plaisir olfactif pour devenir
                                        de véritables expériences sensorielles.
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{ mb: 3, lineHeight: 1.7 }}
                                    >
                                        Chaque parfum AURYA est conçu comme une œuvre d'art, une invitation à
                                        découvrir des mondes mystérieux et élégants. Nous croyons que la beauté
                                        réside dans l'équilibre parfait entre la sophistication et l'accessibilité.
                                    </Typography>
                                </Box>
                            </Fade>
                        </Box>
                    </Box>

                    <Box sx={{ mt: 8 }}>
                        <Fade in timeout={1100}>
                            <Box sx={{ textAlign: 'center', mb: 6 }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        mb: 3,
                                        color: theme.palette.text.primary,
                                        fontWeight: 600
                                    }}
                                >
                                    Notre Vision
                                </Typography>
                            </Box>
                        </Fade>

                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                            <Box sx={{ flex: 1 }}>
                                <Fade in timeout={1300}>
                                    <Box sx={{ textAlign: 'center', p: 3 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                mb: 2,
                                                color: theme.palette.secondary.main,
                                                fontWeight: 600
                                            }}
                                        >
                                            Mystère ✨
                                        </Typography>
                                        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                                            Chaque parfum raconte une histoire unique, révélant ses secrets
                                            progressivement au fil du temps.
                                        </Typography>
                                    </Box>
                                </Fade>
                            </Box>

                            <Box sx={{ flex: 1 }}>
                                <Fade in timeout={1500}>
                                    <Box sx={{ textAlign: 'center', p: 3 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                mb: 2,
                                                color: theme.palette.secondary.main,
                                                fontWeight: 600
                                            }}
                                        >
                                            Élégance ✨
                                        </Typography>
                                        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                                            Une sophistication intemporelle qui s'exprime à travers des
                                            compositions raffinées et des matières premières d'exception.
                                        </Typography>
                                    </Box>
                                </Fade>
                            </Box>

                            <Box sx={{ flex: 1 }}>
                                <Fade in timeout={1700}>
                                    <Box sx={{ textAlign: 'center', p: 3 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                mb: 2,
                                                color: theme.palette.secondary.main,
                                                fontWeight: 600
                                            }}
                                        >
                                            Unicité ✨
                                        </Typography>
                                        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                                            Des créations qui se distinguent par leur caractère distinctif
                                            et leur capacité à s'adapter à chaque personnalité.
                                        </Typography>
                                    </Box>
                                </Fade>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ mt: 8, textAlign: 'center' }}>
                        <Fade in timeout={1900}>
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        mb: 3,
                                        color: theme.palette.text.primary,
                                        fontWeight: 500
                                    }}
                                >
                                    Rejoignez l'univers AURYA
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
                                >
                                    Découvrez notre collection exclusive et laissez-vous porter par
                                    l'élégance mystérieuse qui caractérise chaque création AURYA.
                                </Typography>
                            </Box>
                        </Fade>
                    </Box>
                </Box>
            </Fade>
        </Container>
    );
};

export default AboutPage;
