import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Reviews = ({ data }) => {
  const theme = useTheme();

  if (!data) {
    return null; // Render nothing if no data is passed
  }

  const reviews = [
    {
      feedback: data.Review_1,
      name: data.Review_1_name,
      linkedin: data.Review_1_link,
    },
    {
      feedback: data.Review_2,
      name: data.Review_2_name,
      linkedin: data.Review_2_link,
    },
    {
      feedback: data.Review_3,
      name: data.Review_3_name,
      linkedin: data.Review_3_link,
    },
  ];

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          {data.Header}
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          {data.Description_1}
          <br />
          {data.Description_2}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {reviews.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              component={Card}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              boxShadow={0}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography align={'center'} color="text.secondary">
                  {item.feedback}
                </Typography>
              </CardContent>
              <Box flexGrow={1} />
              <Box sx={{ paddingBottom: 2, display: 'flex', alignItems: 'center' }}>
                <Link
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="hover"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Typography variant="body2" sx={{ marginRight: theme.spacing(1) }}>
                    {item.name}
                  </Typography>
                  <LinkedInIcon fontSize="small" color="primary" />
                </Link>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
