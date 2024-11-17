import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AcademicSection = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const { Header, Description, images } = data;

  return (
    <Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box
            component={'img'}
            loading="lazy"
            src={images?.[0]}
            width={1}
            height={1}
            maxWidth={400}
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              data-aos={'fade-up'}
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              {Header}
            </Typography>
            <Typography data-aos={'fade-up'}>{Description}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

AcademicSection.propTypes = {
  data: PropTypes.shape({
    Header: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default AcademicSection;
