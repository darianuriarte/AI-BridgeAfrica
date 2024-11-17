import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import logo from '../../../../assets/custom_logo_simple.svg';

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the footer data from the API
    const fetchFooterData = async () => {
      try {
        const response = await fetch('http://http://52.2.171.100:5001/api/pages/Footer');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFooterData(data.components);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching footer data:', error);
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  if (loading || !footerData) {
    return null; // Or a loading spinner if desired
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={80}
          >
            <Box component={'img'} src={logo} height={1} width={1} />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href={footerData.Button_1_Link}
                color="text.primary"
                variant={'subtitle2'}
              >
                {footerData.Button_1}
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href={footerData.Button_2_link}
                target={'blank'}
                color="text.primary"
                variant={'subtitle2'}
              >
                {footerData.Button_2}
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                href={footerData.Button_3_Link}
                size="small"
              >
                {footerData.Button_3}
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; {footerData.Copyright}
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          {footerData.Description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
