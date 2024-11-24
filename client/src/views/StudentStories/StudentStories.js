import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';

import Main from 'layouts/Main';
import Container from 'components/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { Header, Main as MainSection, Redirect } from './components';

const StudentStories = () => {
  const theme = useTheme();
  const { pageName } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/pages/${pageName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch page data');
        }
        const data = await response.json();
        setPageData(data.components);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching page data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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

  const { Header: headerData, Main: mainData, Redirect: redirectData } = pageData;

  return (
    <Main>
      <Container>
        <Header data={headerData} />
        <MainSection data={mainData} />
      </Container>
      <Box
        position={'relative'}
        marginTop={{ xs: 4, md: 6 }}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 2,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
        <Container>
          <Redirect data={redirectData} />
        </Container>
      </Box>
    </Main>
  );
};

export default StudentStories;
