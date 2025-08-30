import React from 'react';
import {
    Container,
    Typography,
    Box,
    Chip,
    useTheme,
    useMediaQuery,
    Fade,
    Divider
} from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { parfums } from '../data/parfums';

const ParfumDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const parfum = parfums.find(p => p.id === id);

    if (!parfum) {
        return (
            <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    Parfum non trouvé
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Le parfum que vous recherchez n'existe pas.
                </Typography>
                <Link to="/parfums" style={{ color: theme.palette.secondary.main }}>
                    Retour aux parfums
                </Link>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Fade in timeout={500}>
                <Box>
                    <Box sx={{ mb: 4 }}>
                        <Link
                            to="/parfums"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                color: theme.palette.secondary.main,
                                textDecoration: 'none',
                                marginBottom: 16
                            }}
                        >
                            <ArrowBackIcon sx={{ mr: 1 }} />
                            Retour aux parfums
                        </Link>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
                        <Box sx={{ flex: 1 }}>
                            <Fade in timeout={700}>
                                <Box>
                                    <img
                                        src={parfum.image}
                                        alt={parfum.name}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: 8,
                                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                        }}
                                    />
                                </Box>
                            </Fade>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Fade in timeout={900}>
                                <Box>
                                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                                        {parfum.isNew && (
                                            <Chip
                                                label="Nouveau"
                                                size="small"
                                                sx={{
                                                    backgroundColor: theme.palette.secondary.main,
                                                    color: 'black',
                                                    fontWeight: 600
                                                }}
                                            />
                                        )}
                                        {parfum.isLuxury && (
                                            <Chip
                                                label="Luxe"
                                                size="small"
                                                sx={{
                                                    backgroundColor: 'black',
                                                    color: theme.palette.secondary.main,
                                                    fontWeight: 600
                                                }}
                                            />
                                        )}
                                        <Chip
                                            label={parfum.category === 'homme' ? 'Homme' : parfum.category === 'femme' ? 'Femme' : 'Mixte'}
                                            variant="outlined"
                                            size="small"
                                            sx={{
                                                borderColor: theme.palette.secondary.main,
                                                color: theme.palette.secondary.main
                                            }}
                                        />
                                    </Box>

                                    <Typography
                                        variant={isMobile ? 'h3' : 'h2'}
                                        sx={{
                                            mb: 2,
                                            color: theme.palette.text.primary,
                                            fontWeight: 600
                                        }}
                                    >
                                        {parfum.name}
                                    </Typography>

                                    <Typography
                                        variant="h6"
                                        color="text.secondary"
                                        sx={{ mb: 3, fontStyle: 'italic' }}
                                    >
                                        {parfum.shortDescription}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{ mb: 4, lineHeight: 1.7 }}
                                    >
                                        {parfum.description}
                                    </Typography>

                                    {parfum.price && (
                                        <Box sx={{ mb: 4 }}>
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    color: theme.palette.secondary.main,
                                                    fontWeight: 600
                                                }}
                                            >
                                                {parfum.price.toLocaleString('fr-FR')} FCFA
                                            </Typography>
                                        </Box>
                                    )}

                                    <Divider sx={{ my: 4 }} />

                                    <Typography
                                        variant="h5"
                                        sx={{
                                            mb: 3,
                                            color: theme.palette.text.primary,
                                            fontWeight: 600
                                        }}
                                    >
                                        Notes Olfactives
                                    </Typography>

                                    <Box sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                                        gap: 3
                                    }}>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: theme.palette.secondary.main,
                                                    fontWeight: 600,
                                                    mb: 2
                                                }}
                                            >
                                                Tête
                                            </Typography>
                                            {parfum.notes.tete.map((note, index) => (
                                                <Typography
                                                    key={index}
                                                    variant="body2"
                                                    sx={{ mb: 0.5 }}
                                                >
                                                    {note}
                                                </Typography>
                                            ))}
                                        </Box>

                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: theme.palette.secondary.main,
                                                    fontWeight: 600,
                                                    mb: 2
                                                }}
                                            >
                                                Cœur
                                            </Typography>
                                            {parfum.notes.coeur.map((note, index) => (
                                                <Typography
                                                    key={index}
                                                    variant="body2"
                                                    sx={{ mb: 0.5 }}
                                                >
                                                    {note}
                                                </Typography>
                                            ))}
                                        </Box>

                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: theme.palette.secondary.main,
                                                    fontWeight: 600,
                                                    mb: 2
                                                }}
                                            >
                                                Fond
                                            </Typography>
                                            {parfum.notes.fond.map((note, index) => (
                                                <Typography
                                                    key={index}
                                                    variant="body2"
                                                    sx={{ mb: 0.5 }}
                                                >
                                                    {note}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Fade>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Container>
    );
};

export default ParfumDetailPage;
