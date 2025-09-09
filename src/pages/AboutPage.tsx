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
                            "Des parfums d'exception pour votre quotidien"
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, mb: 8 }}>
                        <Box sx={{ flex: 1 }}>
                            <Fade in timeout={700}>
                                <Box>
                                    <img
                                         src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                         alt="AURYA - Collection de parfums de luxe"
                                         style={{
                                             width: '100%',
                                             height: 'auto',
                                             borderRadius: 12,
                                             boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                         }}
                                     />Weight: 600
                            
                         
                                
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
                                        AURYA est votre destination privilégiée pour découvrir les plus belles
                                        fragrances du marché. Nous sélectionnons avec soin des parfums d'exception
                                        qui s'adaptent à tous les goûts et toutes les occasions.
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{ mb: 3, lineHeight: 1.7 }}
                                    >
                                        Notre mission est de vous offrir un accès facile aux parfums de qualité,
                                        avec des prix compétitifs et un service client exceptionnel. Chaque parfum
                                        de notre collection est choisi pour sa qualité et son rapport qualité-prix.
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
                                            Qualité ✨
                                        </Typography>
                                        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                                            Nous sélectionnons uniquement des parfums de marques reconnues
                                            pour leur excellence et leur durabilité.
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
                                            Accessibilité ✨
                                        </Typography>
                                        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                                            Des prix compétitifs et une livraison rapide pour rendre
                                            les parfums de qualité accessibles à tous.
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
                                            Service ✨
                                        </Typography>
                                        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                                            Un service client personnalisé et des conseils experts
                                            pour vous aider à trouver le parfum parfait.
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
                                    Découvrez notre collection de parfums et trouvez celui qui vous correspond.
                                    AURYA vous accompagne dans votre recherche du parfum parfait.
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
