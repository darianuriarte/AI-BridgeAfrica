import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Programs = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  if (!data) {
    return null; // If no data is passed, render nothing
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const programs = [
    {
      media: [data.images[0]],
      title: data.Program_1,
      subtitle: data.Program_1_info,
      link: data.Program_1_link,
    },
    {
      media: [data.images[1]],
      title: data.Program_2,
      subtitle: data.Program_2_info,
      link: data.Program_2_link,
    },
    {
      media: [data.images[2]],
      title: data.Program_3,
      subtitle: data.Program_3_info,
      link: data.Program_3_link,
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
          {data.Description}
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={2}
        >
          <Box
            component={Button}
            variant="outlined"
            color="primary"
            size="large"
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            fullWidth={isMd ? false : true}
            onClick={() => window.location.href = data.Button_Link}
          >
            {data.Button}
          </Box>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {programs.map((item, i) => (
          <Grid
            item
            xs={12}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
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
                sx={{ backgroundImage: 'none' }}
              >
                <CardMedia
                  title={item.title}
                  sx={{
                    position: 'relative',
                    height: { xs: 240, sm: 340, md: 280 },
                    overflow: 'hidden',
                    '& .slick-slide img': {
                      objectFit: 'cover',
                    },
                    '& .slick-prev, & .slick-next': {
                      zIndex: 2,
                      top: 0,
                      bottom: '100%',
                      left: '100%',
                      right: 0,
                      transform: 'translate(-100%, 50%)',
                      marginLeft: theme.spacing(-2),
                      width: 32,
                      height: 32,
                      '&:before': {
                        fontSize: theme.spacing(3),
                      },
                    },
                    '& .slick-prev': {
                      marginLeft: theme.spacing(-6),
                    },
                  }}
                >
                  <Slider {...sliderOpts}>
                    {item.media.map((img, idx) => (
                      <Box
                        key={idx}
                        component={'img'}
                        loading="lazy"
                        src={img}
                        height={{ xs: 240, sm: 340, md: 280 }}
                      />
                    ))}
                  </Slider>
                  <Box
                    component={'svg'}
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1920 100.1"
                    sx={{
                      width: '100%',
                      bottom: 0,
                      position: 'absolute',
                    }}
                  >
                    <path
                      fill={theme.palette.background.default}
                      d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                    ></path>
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                    align={'left'}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    align={'left'}
                    variant={'subtitle2'}
                    color="text.secondary"
                  >
                    {item.subtitle}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button onClick={() => window.location.href = item.link}>
                    Learn more
                  </Button>
                </CardActions>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Programs;
