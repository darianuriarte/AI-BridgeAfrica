import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';

const Contacts = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <Box
        minHeight="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!data) {
    return null; // Handle missing data gracefully
  }

  const {
    name_1,
    title_1,
    email_1,
    name_2,
    title_2,
    email_2,
    images,
  } = data;

  const contacts = [
    {
      name: name_1,
      title: title_1,
      email: email_1,
      avatar: images[0],
    },
    {
      name: name_2,
      title: title_2,
      email: email_2,
      avatar: images[1],
    },
  ];

  return (
    <Box>
      <Grid container spacing={2}>
        {contacts.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Card
              sx={{
                boxShadow: 0,
                background: 'transparent',
                backgroundImage: 'none',
              }}
            >
              <Box
                component={CardMedia}
                borderRadius={2}
                width={1}
                height={1}
                minHeight={320}
                image={item.avatar}
              />
              <Box
                component={CardContent}
                bgcolor={'transparent'}
                marginTop={-5}
              >
                <Box component={Card}>
                  <CardContent>
                    <ListItemText 
                      primary={item.name} 
                      secondary={
                        <React.Fragment>
                          <Typography component="span" display="block">{item.title}</Typography>
                          <Typography component="span" display="block" color="primary">
                            {item.email}
                          </Typography>
                        </React.Fragment>
                      } 
                    />
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contacts;
