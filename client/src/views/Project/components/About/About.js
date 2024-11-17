import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const About = ({ data }) => {
  const theme = useTheme();

  if (!data) {
    return null; // Handle missing data gracefully
  }

  const { Title, Headline, Bullet_1, Bullet_2, image } = data;

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          align={'center'}
          color={'text.secondary'}
          sx={{ textTransform: 'uppercase' }}
          variant={'subtitle2'}
          fontWeight={600}
        >
          {Title}
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          {Headline}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid
          item
          container
          justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
          xs={12}
          md={6}
        >
          <Typography color={'text.secondary'}>{Bullet_1}</Typography>
        </Grid>
        <Grid item container xs={12} md={6}>
          <Typography color={'text.secondary'}>{Bullet_2}</Typography>
        </Grid>
        {image && (
          <Grid item container xs={12}>
            <Box
              component={'img'}
              loading="lazy"
              height={1}
              width={1}
              maxHeight={{ xs: 300, sm: 400, md: 520 }}
              borderRadius={2}
              src={image}
              alt="About Image"
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default About;
