import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const Column = ({ data }) => {
  const theme = useTheme();
  return (
    <Box>
      {data.map((item, i) => (
        <Box
          key={i}
          sx={{
            marginBottom: { xs: 2, sm: 3 },
            '&:last-child': { marginBottom: 0 },
          }}
        >
          <Box
            boxShadow={1}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              height: 400,
              '&:hover': {
                '& img': {
                  transform: 'scale(1.2)',
                },
              },
            }}
          >
            <Box
              component={'img'}
              loading="lazy"
              src={item}
              alt="Gallery Image"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform .7s ease !important',
                transform: 'scale(1.0)',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

Column.propTypes = {
  data: PropTypes.array.isRequired,
};

const Gallery = ({ data }) => {
  const gridColumns = [[], [], []];
  data.images.forEach((image, index) => {
    gridColumns[index % 3].push(image);
  });

  return (
    <Box>
      <Grid container spacing={4}>
        {gridColumns.map((columnData, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Column data={columnData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Gallery.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Gallery;
