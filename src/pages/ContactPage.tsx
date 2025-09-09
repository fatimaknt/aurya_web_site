import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    useTheme,
    useMediaQuery,
    Fade,
    Paper
} from '@mui/material';
import {
    WhatsApp as WhatsAppIcon,
    Instagram as InstagramIcon,
    Facebook as FacebookIcon,
    Send as SendIcon,
    MusicNote as TikTokIcon
} from '@mui/icons-material';

const ContactPage: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Créer le message WhatsApp avec les données du formulaire
            const whatsappMessage = `Nouveau message de contact AURYA:
            
Nom: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}

Répondre rapidement pour ne pas perdre le client.`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            window.open(`https://wa.me/770874619?text=${encodedMessage}`, '_blank');

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleWhatsApp = () => {
        const message = encodeURIComponent("Bonjour ! Je souhaite en savoir plus sur vos parfums AURYA.");
        window.open(`https://wa.me/770874619?text=${message}`, '_blank');
    };

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
                            Contactez-nous
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ maxWidth: 600, mx: 'auto' }}
                        >
                            Nous sommes là pour répondre à toutes vos questions et vous accompagner
                            dans votre découverte des parfums AURYA
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
                        <Box sx={{ flex: 1 }}>
                            <Fade in timeout={700}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 4,
                                        borderRadius: 2,
                                        backgroundColor: 'rgba(255,255,255,0.9)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            mb: 3,
                                            color: theme.palette.text.primary,
                                            fontWeight: 600
                                        }}
                                    >
                                        Envoyez-nous un message
                                    </Typography>

                                    <Box component="form" onSubmit={handleSubmit}>
                                        <TextField
                                            fullWidth
                                            label="Nom complet"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            sx={{ mb: 3 }}
                                        />

                                        <TextField
                                            fullWidth
                                            label="Email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            sx={{ mb: 3 }}
                                        />

                                        <TextField
                                            fullWidth
                                            label="Message"
                                            name="message"
                                            multiline
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            sx={{ mb: 3 }}
                                        />

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            size="large"
                                            disabled={isSubmitting}
                                            endIcon={<SendIcon />}
                                            sx={{
                                                backgroundColor: theme.palette.secondary.main,
                                                color: 'black',
                                                py: 1.5,
                                                '&:hover': {
                                                    backgroundColor: theme.palette.secondary.dark,
                                                },
                                                '&:disabled': {
                                                    backgroundColor: theme.palette.grey[400],
                                                }
                                            }}
                                        >
                                            {isSubmitting ? 'Envoi en cours...' : 'Envoyer via WhatsApp'}
                                        </Button>

                                        {submitStatus === 'success' && (
                                            <Typography
                                                variant="body2"
                                                color="success.main"
                                                sx={{ mt: 2, textAlign: 'center' }}
                                            >
                                                ✅ Message envoyé ! Vous allez être redirigé vers WhatsApp.
                                            </Typography>
                                        )}

                                        {submitStatus === 'error' && (
                                            <Typography
                                                variant="body2"
                                                color="error.main"
                                                sx={{ mt: 2, textAlign: 'center' }}
                                            >
                                                ❌ Erreur lors de l'envoi. Veuillez réessayer.
                                            </Typography>
                                        )}
                                    </Box>
                                </Paper>
                            </Fade>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Fade in timeout={900}>
                                <Box>

                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 4,
                                            borderRadius: 2,
                                            backgroundColor: 'rgba(255,255,255,0.9)',
                                            backdropFilter: 'blur(10px)'
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                mb: 3,
                                                color: theme.palette.text.primary,
                                                fontWeight: 600
                                            }}
                                        >
                                            Suivez-nous
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{ mb: 3, lineHeight: 1.6 }}
                                        >
                                            Restez connectés avec AURYA et découvrez nos dernières créations,
                                            conseils et inspirations.
                                        </Typography>

                                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                            <Button
                                                variant="outlined"
                                                startIcon={<TikTokIcon />}
                                                onClick={() => window.open('https://www.tiktok.com/@fatim.parfumluxe', '_blank')}
                                                sx={{
                                                    borderColor: '#000000',
                                                    color: '#000000',
                                                    '&:hover': {
                                                        borderColor: '#333333',
                                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                                    }
                                                }}
                                            >
                                                TikTok
                                            </Button>
                                        </Box>
                                    </Paper>
                                </Box>
                            </Fade>
                        </Box>
                    </Box>

                    <Box sx={{ mt: 8, textAlign: 'center' }}>
                        <Fade in timeout={1100}>
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mb: 2,
                                        color: theme.palette.text.primary,
                                        fontWeight: 500
                                    }}
                                >
                                    Notre équipe vous répondra dans les plus brefs délais
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Merci de votre intérêt pour AURYA ✨
                                </Typography>
                            </Box>
                        </Fade>
                    </Box>
                </Box>
            </Fade>
        </Container>
    );
};

export default ContactPage;
