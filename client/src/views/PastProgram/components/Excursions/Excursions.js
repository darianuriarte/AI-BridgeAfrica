import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const Excursions = ({ data }) => {
  const theme = useTheme();
  const {
    Title,
    Header,
    Description_1,
    Description_2,
    Bullet_1,
    Bullet_1_description,
    bullet_2,
    bullet_2_description,
    bullet_3,
    bullet_3_description,
    bullet_4,
    bullet_4_description,
  } = data;

  const bullets = [
    { title: Bullet_1, subtitle: Bullet_1_description },
    { title: bullet_2, subtitle: bullet_2_description },
    { title: bullet_3, subtitle: bullet_3_description },
    { title: bullet_4, subtitle: bullet_4_description },
  ];

  return (
    <Box>
      <Box marginBottom={4} bgcolor={'primary.main'} py={6}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'white'}
          align={'center'}
        >
          {Title}
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          color="white"
          sx={{
            fontWeight: 700,
          }}
        >
          {Header}
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'white'}
          data-aos={'fade-up'}
        >
          {Description_1}
          <br />
          {Description_2}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {bullets.map((item, i) => (
          <Grid key={i} item xs={12} md={3}>
            <ListItem
              component="div"
              disableGutters
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              sx={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 0,
              }}
            >
              <Box
                component={ListItemAvatar}
                marginBottom={1}
                minWidth={'auto !important'}
              >
                <Box color={theme.palette.secondary.main}>
                  {/* Icon placeholder */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    width={40}
                    height={40}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                </Box>
              </Box>
              <ListItemText
                primary={item.title}
                secondary={item.subtitle}
                primaryTypographyProps={{
                  variant: 'h6',
                  gutterBottom: true,
                  align: 'left',
                }}
                secondaryTypographyProps={{ align: 'left' }}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: 700,
                  },
                  margin: 0,
                }}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Excursions.propTypes = {
  data: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Header: PropTypes.string.isRequired,
    Description_1: PropTypes.string.isRequired,
    Description_2: PropTypes.string.isRequired,
    Bullet_1: PropTypes.string.isRequired,
    Bullet_1_description: PropTypes.string.isRequired,
    bullet_2: PropTypes.string.isRequired,
    bullet_2_description: PropTypes.string.isRequired,
    bullet_3: PropTypes.string.isRequired,
    bullet_3_description: PropTypes.string.isRequired,
    bullet_4: PropTypes.string.isRequired,
    bullet_4_description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Excursions;
