/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

const Innovation = ({ data }) => {
  const theme = useTheme();

  if (!data) {
    return null; // Render nothing if no data is passed
  }

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Box marginBottom={2}>
              <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                {data.Header}
              </Typography>
              <Typography color="text.secondary">{data.Description}</Typography>
            </Box>
            <Grid container spacing={1}>
              {[data.Bullet_1, data.Bullet_2, data.Bullet_3, data.Bullet_4, data.Bullet_5, data.Bullet_6].map(
                (item, i) => (
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
                      <ListItemText primary={item} />
                    </Box>
                  </Grid>
                )
              )}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box height={1} width={1} display={'flex'} flexDirection={'column'}>
            <Box
              component={'img'}
              src={data.images[0]}
              alt="Innovation Image 1"
              width={160}
              height={160}
              marginLeft={'calc(60% - 160px)'}
              zIndex={3}
              borderRadius={'100%'}
              boxShadow={4}
              data-aos={'fade-up'}
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
              }}
            />
            <Box
              component={'img'}
              width={200}
              height={200}
              src={data.images[1]}
              alt="Innovation Image 2"
              marginTop={'-8%'}
              zIndex={2}
              borderRadius={'100%'}
              boxShadow={4}
              data-aos={'fade-up'}
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
              }}
            />
            <Box
              component={'img'}
              width={300}
              height={300}
              src={data.images[2]}
              alt="Innovation Image 3"
              marginTop={'-20%'}
              marginLeft={'calc(100% - 300px)'}
              zIndex={1}
              borderRadius={'100%'}
              boxShadow={4}
              data-aos={'fade-up'}
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Innovation;
