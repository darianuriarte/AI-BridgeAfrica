import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';

// Import Material UI icons
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import WorkIcon from '@mui/icons-material/Work';

const iconMap = {
  'Community Collaboration': <GroupIcon fontSize="large" />,
  'Flexible Learning Experience': <SchoolIcon fontSize="large" />,
  'All-Inclusive Support': <HomeWorkIcon fontSize="large" />,
  'Professional Growth': <WorkIcon fontSize="large" />,
};

const Advantages = ({ data }) => {
  const theme = useTheme();

  if (!data) {
    return null; // If no data is passed, render nothing
  }

  const bullets = [
    {
      title: data.bullet_1,
      subtitle: data.bullet_1_details,
      icon: iconMap['Community Collaboration'],
    },
    {
      title: data.bullet_2,
      subtitle: data.bullet_2_details,
      icon: iconMap['Flexible Learning Experience'],
    },
    {
      title: data.bullet_3,
      subtitle: data.bullet_3_info,
      icon: iconMap['All-Inclusive Support'],
    },
    {
      title: data.bullet_4,
      subtitle: data.bullet_4_info,
      icon: iconMap['Professional Growth'],
    },
  ];

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          {data.Title}
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
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
                alignItems: 'center',
                padding: 0,
              }}
            >
              <Box
                component={ListItemAvatar}
                marginBottom={1}
                minWidth={'auto !important'}
              >
                <Box color={theme.palette.primary.main}>{item.icon}</Box>
              </Box>
              <ListItemText
                primary={item.title}
                secondary={item.subtitle}
                primaryTypographyProps={{
                  variant: 'h6',
                  gutterBottom: true,
                  align: 'center',
                }}
                secondaryTypographyProps={{ align: 'center' }}
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

export default Advantages;
