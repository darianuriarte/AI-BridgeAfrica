import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Redirect = ({ data }) => {
  if (!data) {
    return null; // Handle missing data gracefully
  }

  const { Headline, Description, Button_name, link } = data;

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          fontWeight={700}
          variant={'h4'}
          align={'center'}
          gutterBottom
        >
          {Headline}
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          {Description}
        </Typography>
      </Box>
      <Box maxWidth={600} margin={'0 auto'}>
        <Box
          component={'form'}
          noValidate
          autoComplete="off"
          sx={{
            '& .MuiInputBase-input.MuiOutlinedInput-input': {
              bgcolor: 'background.paper',
            },
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            justifyContent={{ xs: 'center' }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              height={54}
              marginTop={{ xs: 2, md: 0 }}
              marginLeft={{ md: 2 }}
              href={link}
            >
              {Button_name}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Redirect;
