import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import CircularProgress from '@mui/material/CircularProgress';

import { Header, About, ProjectOverview } from './components';

const Project = () => {
  const theme = useTheme();
  const { pageName } = useParams(); // Get pageName from URL parameters
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use pageName in your API endpoint
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
    if (pageName) {
      fetchData();
    }
  }, [pageName]);

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

  const { Header: headerData, About: aboutData, ProjectOverview: projectOverviewData } = pageData;

  return (
    <Main>
      <Box>
        <Header data={headerData} />
        <Container>
          <About data={aboutData} />
        </Container>
        <Container>
          <ProjectOverview data={projectOverviewData} />
        </Container>
        <Container>
          <Divider />
        </Container>

        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            marginBottom: -1,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.alternate.main}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
    </Main>
  );
};

export default Project;
