import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Parfum } from '../types/parfum';

interface ParfumCardProps {
  parfum: Parfum;
}

const ParfumCard: React.FC<ParfumCardProps> = ({ parfum }) => {
  const theme = useTheme();

  return (
    <Card
      component={Link}
      to={`/parfum/${parfum.id}`}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        position: 'relative',
        overflow: 'visible'
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="300"
          image={parfum.image}
          alt={parfum.name}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}
        >
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
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            mb: 1,
            fontWeight: 600,
            color: theme.palette.text.primary,
            lineHeight: 1.2
          }}
        >
          {parfum.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            flexGrow: 1,
            lineHeight: 1.5
          }}
        >
          {parfum.shortDescription}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip
            label={parfum.category === 'homme' ? 'Homme' : parfum.category === 'femme' ? 'Femme' : 'Mixte'}
            size="small"
            variant="outlined"
            sx={{
              borderColor: theme.palette.secondary.main,
              color: theme.palette.secondary.main
            }}
          />

          {parfum.price && (
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 600
              }}
            >
              {parfum.price.toLocaleString('fr-FR')} FCFA
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ParfumCard;
