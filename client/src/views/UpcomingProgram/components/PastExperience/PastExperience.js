/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';

const PastExperience = ({ data }) => {
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
    return null; // Gracefully handle missing or undefined data
  }

  return (
    <Box>
      <Typography
        variant="h4"
        color="text.primary"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >
        {data.Headline}
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ fontWeight: 400 }}
        align={'center'}
      >
        {data.Description}
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'center' }}
        justifyContent={'center'}
        marginTop={4}
      >
        <Button
          component={'a'}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          href={data.Button_1_link}
        >
          View Past Experience
        </Button>
        <Button
          component={'a'}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          href={data.Button_2_link}
          sx={{
            marginTop: { xs: 2, sm: 0 },
            marginLeft: { sm: 2 },
          }}
        >
          Student Stories
        </Button>
      </Box>
    </Box>
  );
};

export default PastExperience;
