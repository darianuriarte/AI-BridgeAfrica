/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const Location = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <Box
        minHeight="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!data) {
    return null; // Gracefully handle missing data
  }

  const { Headline, Description, Bullet_1, Bullet_2, Bullet_3, image } = data;

  const bullets = [Bullet_1, Bullet_2, Bullet_3];

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              {Headline}
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              {Description}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {bullets.map((bullet, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography color="text.secondary" component="p">
                  {bullet}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image={image}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Location;
