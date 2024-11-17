import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

const BulletPointsSection = ({ data }) => {
  const theme = useTheme();

  return (
    <Box bgcolor={'primary.main'} py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper 
            elevation={0} 
            sx={{ 
              bgcolor: 'transparent',
              p: 4,
            }}
          >
            <Box marginBottom={4}>
              <Typography
                variant={'h4'}
                sx={{ fontWeight: 700, color: 'common.white' }}
                gutterBottom
                align="center"
              >
                {data.Header}
              </Typography>
              <Typography 
                sx={{ color: 'common.white' }} 
                variant={'h6'} 
                align="center"
              >
                {data.Description}
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {[
                data.bullet_1,
                data.bullet_2,
                data.bullet_3,
                data.bullet_4,
              ].map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width={'auto'}
                    padding={0}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth={'auto !important'}
                      marginRight={2}
                    >
                      <Box
                        component={Avatar}
                        bgcolor={theme.palette.secondary.main}
                        width={20}
                        height={20}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ 
                        color: 'common.white',
                        sx: {
                          lineHeight: 1.4,
                        }
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

BulletPointsSection.propTypes = {
  data: PropTypes.shape({
    Header: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    bullet_1: PropTypes.string.isRequired,
    bullet_2: PropTypes.string.isRequired,
    bullet_3: PropTypes.string.isRequired,
    bullet_4: PropTypes.string.isRequired,
  }).isRequired,
};

export default BulletPointsSection;
