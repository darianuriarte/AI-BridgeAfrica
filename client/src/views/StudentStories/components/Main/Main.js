import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Main = ({ data }) => {
  const theme = useTheme();

  if (!data) {
    return null; // Handle missing data gracefully
  }

  // Map the data to an array of student objects
  const students = Object.keys(data)
    .filter((key) => key.startsWith('Student_'))
    .map((key, index) => ({
      title: data[key],
      url: data[`Link_${index + 1}`],
    }));

  return (
    <Box>
      <Grid container spacing={4}>
        {students.map((student, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={'a'}
              href={student.url}
              target="_blank"
              rel="noopener noreferrer"
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <Box
                  component={'iframe'}
                  src={student.url}
                  title={student.title}
                  sx={{
                    height: { xs: 340, md: 400 },
                    width: '100%',
                    border: 0,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
                <Box component={CardContent}>
                  <Typography variant={'h6'} fontWeight={700} gutterBottom>
                    {student.title}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'flex-start'}>
                  <Button
                    size="large"
                    endIcon={
                      <svg
                        width={16}
                        height={16}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    }
                  >
                    Visit Site
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Main;
