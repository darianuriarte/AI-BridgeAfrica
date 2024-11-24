import React, { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Advantages,
  Header,
  Innovation,
  MapHero,
  Reviews,
  Programs,
} from './components';

const LandingPage = () => {
  const theme = useTheme();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch('/api/pages/LandingPage');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPageData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching page data:', error);
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pageData || !pageData.components) {
    return <div>Error loading page data.</div>;
  }

  return (
    <Main>
      <Header data={pageData.components.Header} />
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Advantages data={pageData.components.Advantages} />
        </Container>
      </Box>
      <Container>
  <Programs data={pageData.components.Programs} />
</Container>

      <Divider />
      <Container>
  <Innovation data={pageData.components.Innovation} />
</Container>

      <Box bgcolor={theme.palette.alternate.main}>
      <MapHero data={pageData.components.Map} />
      </Box>
      <Container>
  <Reviews data={pageData.components.Reviews} />
</Container>

    </Main>
  );
};

export default LandingPage;
