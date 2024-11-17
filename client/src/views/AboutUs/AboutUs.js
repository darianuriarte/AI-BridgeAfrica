import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import CircularProgress from '@mui/material/CircularProgress';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Welcome,
  ExpandingHorizons,
  Connection,
  Innovation,
  GlobalExperience,
  Vision,
  DiscoverMore,
} from './components';

const AboutUs = () => {
  const [pageData, setPageData] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/pages/AboutUs');
        if (!response.ok) {
          throw new Error('Failed to fetch page data');
        }
        const data = await response.json();
        setPageData(data.components);
      } catch (error) {
        console.error('Error fetching page data:', error);
      }
    };

    fetchPageData();
  }, []);

  useEffect(() => {
    if (pageData && pageData.images) {
      const images = pageData.images;
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          setImagesLoaded(true);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error loading images:', error);
          setLoading(false);
        });
    }
  }, [pageData]);

  useEffect(() => {
    const jarallaxInit = async () => {
      if (!imagesLoaded) return;

      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  }, [imagesLoaded]);

  const scrollTo = (id) => {
    setTimeout(() => {
      const element = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({ left: 0, top: element.offsetTop, behavior: 'smooth' });
    });
  };

  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });

  if (loading || !pageData) {
    return (
      <Main>
        <Box
          minHeight={'100vh'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <CircularProgress />
        </Box>
      </Main>
    );
  }

  const {
    images,
    Welcome: welcomeData,
    ExpandingHorizons: expandingHorizonsData,
    Innovation: innovationData,
    Vision: visionData,
    GlobalExperience: globalExperienceData,
    Connection: connectionData,
    DiscoverMore: discoverMoreData,
  } = pageData;

  return (
    <Main>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'alternate.main'}
        paddingTop={13}
      >
        <Container>
          <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Welcome data={welcomeData} />
            <Box marginTop={4}>
              <NoSsr>
                <Box
                  component={'svg'}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width={{ xs: 30, sm: 40 }}
                  height={{ xs: 30, sm: 40 }}
                  onClick={() => scrollTo('agency__portfolio-item--js-scroll')}
                  sx={{ cursor: 'pointer' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Box>
              </NoSsr>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        id="agency__portfolio-item--js-scroll"
      >
        <Box className={'jarallax-img'} sx={styles(images[3])} />
        <Container>
          <ExpandingHorizons data={expandingHorizonsData} />
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
      >
        <Box className={'jarallax-img'} sx={styles(images[1])} />
        <Container>
          <Innovation data={innovationData} />
        </Container>
      </Box>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'alternate.main'}
      >
        <Container>
          <Vision data={visionData} />
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
      >
        <Box className={'jarallax-img'} sx={styles(images[2])} />
        <Container>
          <GlobalExperience data={globalExperienceData} />
        </Container>
      </Box>
      <Box
        className={'jarallax'}
        data-jarallax
        data-speed="0.2"
        position={'relative'}
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
      >
        <Box className={'jarallax-img'} sx={styles(images[0])} />
        <Container>
          <Connection data={connectionData} />
        </Container>
      </Box>
      <Box
        minHeight={'100vh'}
        display={'flex'}
        alignItems={'center'}
        bgcolor={'alternate.main'}
      >
        <Container>
          <DiscoverMore data={discoverMoreData} />
        </Container>
      </Box>
    </Main>
  );
};

export default AboutUs;
