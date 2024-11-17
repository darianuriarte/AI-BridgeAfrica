import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Project1,
  Project2,
  Project3,
  Header,
  Gallery,
  BulletPointsSection,
  AcademicSection,
  Excursions,
} from './components';

const PastProgram = () => {
  const { pageName } = useParams(); 
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPageData = async () => {
      setLoading(true);
      setPageData(null);
      console.log('Fetching data for pageName:', pageName);
      try {
        const response = await fetch(`http://52.2.171.100:5001/api/pages/${pageName}`);
        if (!response.ok) {
          throw new Error('Failed to fetch page data');
        }
        const data = await response.json();
        setPageData(data.components);
      } catch (error) {
        console.error('Error fetching page data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    if (pageName) {
      fetchPageData();
    }
  }, [pageName]); 
  

  if (loading || !pageData) {
    return null; // Or a loading spinner if desired
  }

  return (
    <Main>
      <Header data={pageData.Header} />
      <Container>
        <Gallery data={pageData.Gallery} />
      </Container>
      <Container>
        <BulletPointsSection data={pageData.BulletPointsSection} />
      </Container>
      <Container>
        <AcademicSection data={pageData.AcademicSection} />
      </Container>
      <Container>
        <Excursions data={pageData.Excursions} />
      </Container>
      <Container>
        <Project1 data={pageData.Project1} />
      </Container>
      <Container paddingY={'0 !important'}>
        <Project2 data={pageData.Project2} />
      </Container>
      <Container>
        <Project3 data={pageData.Project3} />
      </Container>
    </Main>
  );
};

export default PastProgram;
