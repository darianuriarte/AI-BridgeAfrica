import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = ({ data }) => {
  if (!data) {
    return null; // Handle missing data gracefully
  }

  const { Headline, Description_1, Description_2 } = data;

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h3"
          color="text.primary"
          align={'center'}
          sx={{
            fontWeight: 700,
          }}
        >
          {Headline}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          align={'center'}
          gutterBottom
          sx={{ fontWeight: 400 }}
        >
          {Description_1}
          <br />
          {Description_2}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
