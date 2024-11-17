import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import UF_LOGO from '../../../../../../assets/custom_logo.svg';
import NavItem from './components/NavItem';

const SidebarNav = ({
  pastProgramsPages,
  currentProjectsPages,
  studentStoriesPages,
  onClose,
}) => {
  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="Home"
          width={{ xs: 100, md: 120 }}
          onClick={onClose}
        >
          <Box component={'img'} src={UF_LOGO} height={1} width={1} />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box marginBottom={2}>
          <NavItem
            title={'Past Programs'}
            id={'past-programs-pages'}
            items={pastProgramsPages}
            onClose={onClose}
          />
        </Box>
        <Box marginBottom={2}>
          <NavItem
            title={'Current Projects'}
            id={'current-projects'}
            items={currentProjectsPages}
            onClose={onClose}
          />
        </Box>
        <Box marginBottom={2}>
          <NavItem
            title={'Student Stories'}
            id={'student-stories'}
            items={studentStoriesPages}
            onClose={onClose}
          />
        </Box>
        <Box marginBottom={2}>
          <Box
            component="a"
            href="/upcoming-program"
            onClick={onClose}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: 1,
            }}
          >
            Upcoming Program
          </Box>
          <Box
            component="a"
            href="/about-us"
            onClick={onClose}
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: 1,
            }}
          >
            About Us
          </Box>
        </Box>
        <Box marginBottom={2}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://ufabroad.internationalcenter.ufl.edu/index.cfm?FuseAction=Programs.ViewProgramAngular&id=14428"
          >
            Apply Today
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pastProgramsPages: PropTypes.array.isRequired,
  currentProjectsPages: PropTypes.array.isRequired,
  studentStoriesPages: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SidebarNav;
