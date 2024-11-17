import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';

const Header = ({ data }) => {
  const theme = useTheme();

  if (!data) {
    return null; // Handle missing data gracefully
  }

  const { Header: headline, Description, images } = data;

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.alternate.main,
        backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
        marginTop: -13,
        paddingTop: 13,
      }}
    >
      <Container>
        <Box>
          <Box
            marginBottom={{ xs: 0, sm: 4 }}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Typography
              variant="h3"
              gutterBottom
              align={'center'}
              sx={{
                fontWeight: 900,
              }}
            >
              {headline}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              align={'center'}
              sx={{ marginBottom: 2 }}
            >
              {Description}
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            {images &&
              images.map((image, index) => (
                <Grid
                  item
                  container
                  xs={index % 3 === 0 ? 4 : 8}
                  justifyContent={index % 2 === 0 ? 'flex-end' : 'flex-start'}
                  alignItems={index < 2 ? 'flex-end' : 'flex-start'}
                  key={index}
                >
                  <Box
                    component={'img'}
                    loading="lazy"
                    height={1}
                    width={1}
                    borderRadius={2}
                    src={image}
                    alt={`Image ${index + 1}`}
                    sx={{
                      objectFit: 'cover',
                      filter:
                        theme.palette.mode === 'dark' ? 'brightness(0.6)' : 'none',
                    }}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
