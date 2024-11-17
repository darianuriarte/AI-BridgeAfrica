import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import Container from 'components/Container';

const Header = ({ data }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (!data || !data.images) return;

    const imagePromises = data.images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((error) => console.error('Error loading images:', error));
  }, [data]);

  if (!data || !imagesLoaded) {
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

  const { Headline_1, Headline_2, Highlight, Link, images } = data;

  const imagesGroups = [
    {
      group: [
        { cover: images[0] },
        { cover: images[1] },
      ],
    },
    {
      group: [
        { cover: images[2] },
        { cover: images[3] },
        { cover: images[4] },
      ],
    },
    {
      group: [
        { cover: images[0] },
        { cover: images[1] },
        { cover: images[2] },
        { cover: images[3] },
      ],
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Typography
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              {Headline_1}
              <br />
              {Headline_2}{' '}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                {Highlight}
              </Typography>
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              marginTop={4}
            >
              <Button
                component={'a'}
                variant="contained"
                color="secondary"
                size="large"
                fullWidth={isMd ? false : true}
                href={Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </Button>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            transform: 'rotate(-20deg)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            display={'flex'}
            width={'50rem'}
            left={'50%'}
            top={0}
            position={'absolute'}
            sx={{ transform: 'translate3d(20%, -50%, 0)' }}
          >
            {imagesGroups.map((item, i) => (
              <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
                {item.group.map((g, j) => (
                  <Box
                    key={j}
                    padding={1}
                    bgcolor={'background.paper'}
                    borderRadius={2}
                    boxShadow={3}
                    marginTop={2}
                  >
                    <Box
                      component={'img'}
                      loading="lazy"
                      src={g.cover}
                      height={1}
                      width={1}
                      maxWidth={320}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default Header;
