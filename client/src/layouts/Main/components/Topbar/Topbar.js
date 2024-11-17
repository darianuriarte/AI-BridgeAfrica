import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import UF_LOGO from '../../../../assets/custom_logo.svg';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();

  // State for current projects
  const [currentProjectsPages, setCurrentProjectsPages] = useState([]);

  // State for past programs
  const [pastProgramsPages, setPastProgramsPages] = useState([]);

  // State for student stories
  const [studentStoriesPages, setStudentStoriesPages] = useState([]);

  const [navBarApplyLink, setNavBarApplyLink] = useState('');

  useEffect(() => {
    // Fetch current projects from the API
    const fetchCurrentProjects = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/settings/currentProjects');
        if (!response.ok) {
          throw new Error('Failed to fetch current projects');
        }
        const data = await response.json();
        const projects = data.currentProjects;
  
        // Convert projects object to array of { title, href }
        const projectsArray = Object.keys(projects).map((key) => ({
          title: key,
          href: `/project/${projects[key]}`,
        }));
        setCurrentProjectsPages(projectsArray);
      } catch (error) {
        console.error('Error fetching current projects:', error);
      }
    };
  
    // Fetch Past Programs from API
    const fetchPastPrograms = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/settings/pastPrograms');
        if (!response.ok) {
          throw new Error('Failed to fetch past programs');
        }
        const data = await response.json();
        const programs = data.pastPrograms;
  
        // Convert programs object to array of { title, href }
        const programsArray = Object.keys(programs).map((key) => ({
          title: key,
          href: `/program/${programs[key]}`,
        }));
        setPastProgramsPages(programsArray);
      } catch (error) {
        console.error('Error fetching past programs:', error);
      }
    };
    // Fetch Student Stories from API
    const fetchStudentStories = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/settings/studentStories');
        if (!response.ok) {
          throw new Error('Failed to fetch student stories');
        }
        const data = await response.json();
        const stories = data.studentStories;
  
        // Convert stories object to array of { title, href }
        const storiesArray = Object.keys(stories).map((key) => ({
          title: key,
          href: `/student-stories/${stories[key]}`,
        }));
        setStudentStoriesPages(storiesArray);
      } catch (error) {
        console.error('Error fetching student stories:', error);
      }
    };

    
    const fetchNavBarApplyLink = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/settings/navBarLink');
        if (!response.ok) {
          throw new Error('Failed to fetch navBarApplyLink');
        }
        const data = await response.json();
        setNavBarApplyLink(data.navBarApplyLink);
      } catch (error) {
        console.error('Error fetching navBarApplyLink:', error);
      }
    };

    fetchNavBarApplyLink();  
    fetchStudentStories();
    fetchCurrentProjects();
    fetchPastPrograms();
  }, []);
  

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          marginLeft={4}
          marginTop={1}
          component={'img'}
          src={
            UF_LOGO
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <NavItem
            title={'Past Programs'}
            id={'past-programs-pages'}
            items={pastProgramsPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Current Projects'}
            id={'current-projects'}
            items={currentProjectsPages}
            colorInvert={colorInvert}
          />
        </Box>
        

        <Box marginLeft={4}>
          <NavItem
            title={'Student Stories'}
            id={'student-stories'}
            items={studentStoriesPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
  <Box
    component="a"
    href="/upcoming-program"
    sx={{
      textDecoration: 'none',
      color: colorInvert ? 'common.white' : 'text.primary',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    Upcoming Program
  </Box>
</Box>
        <Box marginLeft={4}>
          <Box
            component="a"
            href="/about-us"
            sx={{
              textDecoration: 'none',
              color: colorInvert ? 'common.white' : 'text.primary',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            About Us
          </Box>
        </Box>
        <Box marginLeft={4}>
        <Button
    variant="contained"
    color="primary"
    component="a"
    target="blank"
    href={navBarApplyLink || '#'}
    size="large"
  >
    Apply Today
  </Button>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
