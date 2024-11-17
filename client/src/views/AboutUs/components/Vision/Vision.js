/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Vision = ({ data }) => {
  const theme = useTheme();

  if (!data) {
    return null; // Avoid rendering if data is missing
  }

  const { Headline, Description, Bullet_1, Bullet_1_Description, logo } = data;

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box
        component="img"
        height={1}
        width={1}
        src={logo}
        alt="..."
        maxWidth={{ xs: 80, sm: 100, md: 120 }}
        marginBottom={2}
        sx={{
          filter:
            theme.palette.mode === 'dark'
              ? 'brightness(0) invert(0.7)'
              : 'none',
        }}
      />
      <Typography variant={'h6'} component={'p'} align={'center'}>
        {Headline}
        <br />
        {Description}
      </Typography>
      <Box marginTop={{ xs: 2, sm: 4 }}>
        <Typography variant={'h6'} sx={{ fontWeight: 700 }} align={'center'}>
          {Bullet_1}
        </Typography>
        <Typography color="text.secondary" align={'center'}>
          {Bullet_1_Description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Vision;
