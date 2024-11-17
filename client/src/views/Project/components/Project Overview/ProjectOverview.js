import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ProjectOverview = ({ data }) => {
  if (!data) {
    return null; // Handle missing data gracefully
  }

  const { Title, Headline, ...bullets } = data;

  // Convert the bullet points into an array for mapping
  const bulletArray = Object.keys(bullets)
    .filter((key) => key.startsWith('bullet_'))
    .map((key, index) => ({
      title: bullets[`bullet_${index + 1}`],
      subtitle: bullets[`bullet_${index + 1}_description`],
    }));

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
        {bulletArray.map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Typography variant={'h6'} fontWeight={600} gutterBottom>
              {item.title}
            </Typography>
            <Typography color="text.secondary">{item.subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectOverview;
