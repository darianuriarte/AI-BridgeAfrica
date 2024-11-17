import React, { useEffect, useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  GetStarted,
  Features,
  QuickStart,
  GeneralInfo,
  Benefits,
  Header,
  Contacts,
} from './components';

const UpcomingProgram = () => {
  const theme = useTheme();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const response = await fetch(
          'http://http://52.2.171.100:5001/api/pages/UpcomingProgram'
        );
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

    fetchPageData();
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

  const {
    Header: headerData,
    GeneralInfo: generalInfoData,
    Requirements: requirementsData,
    Location: locationData,
    AcademicCosts: academicCostsData,
    PastExperience: pastExperienceData,
    Contacts: contactsData,
  } = pageData;

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Main bgcolor={'background.paper'}>
        <Header data={headerData} />
        <Container>
          <GeneralInfo data={generalInfoData} />
        </Container>
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
          <Container maxWidth={600}>
            <QuickStart data={requirementsData} />
          </Container>
          <Container>
            <Features data={locationData} />
          </Container>
          <Container>
            <Benefits data={academicCostsData} />
          </Container>
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
        <Container>
          <GetStarted data={pastExperienceData} />
        </Container>
        <Container>
          <Contacts data={contactsData} />
        </Container>
      </Main>
    </Box>
  );
};

export default UpcomingProgram;
