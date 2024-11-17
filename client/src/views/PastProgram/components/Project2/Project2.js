import React from 'react';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const Project2 = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  if (!data) {
    return null;
  }

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      bgcolor={theme.palette.mode === 'light' ? colors.amber[50] : '#DEB22F'}
      data-aos={'fade-up'}
    >
      <Grid
        container
        spacing={isMd ? 4 : 2}
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid item xs={12} md={8}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12}>
              <Box
                component={'img'}
                loading="lazy"
                height={1}
                width={1}
                src={data.images[1]}
                alt="Project App Screenshot"
                borderRadius={2}
                maxWidth={1}
                maxHeight={400}
                sx={{
                  objectFit: 'cover',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                {data.bullet_1}
              </Typography>
              <Typography component={'p'}>
                {data.bullet_1_description}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                {data.bullet_2}
              </Typography>
              <Typography component={'p'}>
                {data.bullet_2_description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={{ xs: 'flex-start', md: 'space-between' }}
            height={1}
          >
            <Box>
              <Typography variant={'h4'} fontWeight={700} gutterBottom>
                {data.Header}
              </Typography>
              <Typography
                color={
                  theme.palette.mode === 'light'
                    ? 'text.secondary'
                    : 'text.primary'
                }
              >
                {data.Description}
              </Typography>
            </Box>
            <Box
              component={Card}
              marginTop={{ xs: 2, md: 0 }}
              boxShadow={0}
              borderRadius={2}
            >
              <CardContent sx={{ padding: { xs: 2, sm: 4 } }}>
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={data.images[0]}
                  alt="Organization Logo"
                  maxWidth={80}
                  marginBottom={2}
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0.7)'
                        : 'none',
                  }}
                />
                <Typography component={'p'}>
                  {data.organization}
                </Typography>
                <Box marginTop={{ xs: 2, sm: 4 }}>
                  <Typography variant={'subtitle1'} sx={{ fontWeight: 700 }}>
                    {data.organization_info_1}
                  </Typography>
                  <Typography color="text.secondary">
                    {data.organization_info_2}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project2;
