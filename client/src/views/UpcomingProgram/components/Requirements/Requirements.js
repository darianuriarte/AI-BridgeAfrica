/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const Requirements = ({ data }) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
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

  if (!data) {
    return null; // Handle missing data gracefully
  }

  const { Headline, Description, java_script_code } = data;

  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            {Headline}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            {Description}
          </Typography>
        </Box>
      </Box>
      <Box
        component={SyntaxHighlighter}
        language={'javascript'}
        style={vs2015}
        padding={`${theme.spacing(2)} !important`}
        borderRadius={2}
        margin={`${theme.spacing(0)} !important`}
        bgcolor={'#21325b !important'}
      >
        {java_script_code}
      </Box>
    </Box>
  );
};

export default Requirements;
