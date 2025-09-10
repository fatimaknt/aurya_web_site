import React, { useState, useMemo } from 'react';
import {
    Container,
    Typography,
    TextField,
    Box,
    Chip,
    useTheme,
    useMediaQuery,
    Fade
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { parfums, categories } from '../data/parfums';
import ParfumCard from '../components/ParfumCard';

const ParfumsPage: React.FC = () => {
    const theme = useTheme();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const filteredParfums = useMemo(() => {
        return parfums.filter((parfum) => {
            const matchesSearch = parfum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                parfum.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory = selectedCategories.length === 0 ||
                selectedCategories.some(cat => {
                    if (cat === 'nouveautes') return parfum.isNew;
                    if (cat === 'luxe') return parfum.isLuxury;
                    return parfum.category === cat;
                });

            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategories]);

    const handleCategoryToggle = (categoryValue: string) => {
        setSelectedCategories(prev =>
            prev.includes(categoryValue)
                ? prev.filter(cat => cat !== categoryValue)
                : [...prev, categoryValue]
        );
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                    variant="h2"
                    sx={{
                        mb: 2,
                        color: theme.palette.text.primary,
                        fontWeight: 600
                    }}
                >
                    Nos Parfums
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: 600, mx: 'auto' }}
                >
                    Découvrez notre collection exclusive de fragrances mystérieuses et élégantes au Sénégal
                </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
                <TextField
                    fullWidth
                    placeholder="Rechercher un parfum ou une senteur..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                    sx={{
                        mb: 3,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                                borderColor: theme.palette.secondary.main,
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: theme.palette.secondary.main,
                            },
                        },
                    }}
                />

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {categories.map((category) => (
                        <Chip
                            key={category.id}
                            label={category.name}
                            onClick={() => handleCategoryToggle(category.value)}
                            variant={selectedCategories.includes(category.value) ? 'filled' : 'outlined'}
                            sx={{
                                backgroundColor: selectedCategories.includes(category.value)
                                    ? theme.palette.secondary.main
                                    : 'transparent',
                                color: selectedCategories.includes(category.value)
                                    ? 'black'
                                    : theme.palette.secondary.main,
                                borderColor: theme.palette.secondary.main,
                                '&:hover': {
                                    backgroundColor: selectedCategories.includes(category.value)
                                        ? theme.palette.secondary.dark
                                        : 'rgba(212, 175, 55, 0.1)',
                                },
                                cursor: 'pointer'
                            }}
                        />
                    ))}
                </Box>
            </Box>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)'
                },
                gap: 3
            }}>
                {filteredParfums.map((parfum, index) => (
                    <Fade in timeout={300 + index * 100} key={parfum.id}>
                        <Box>
                            <ParfumCard parfum={parfum} />
                        </Box>
                    </Fade>
                ))}
            </Box>

            {filteredParfums.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="h6" color="text.secondary">
                        Aucun parfum trouvé avec ces critères
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Essayez de modifier vos filtres ou votre recherche
                    </Typography>
                </Box>
            )}
        </Container>
    );
};



export default ParfumsPage;
