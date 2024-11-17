import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { SidebarNav } from './components';

const Sidebar = ({ open, variant, onClose }) => {
  // State variables for navigation items
  const [currentProjectsPages, setCurrentProjectsPages] = useState([]);
  const [pastProgramsPages, setPastProgramsPages] = useState([]);
  const [studentStoriesPages, setStudentStoriesPages] = useState([]);
  const [navBarApplyLink, setNavBarApplyLink] = useState('');

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        // Fetch current projects
        const currentProjectsResponse = await fetch(
          'http://52.2.171.100:5001/api/settings/currentProjects',
        );
        const currentProjectsData = await currentProjectsResponse.json();
        const currentProjects = currentProjectsData.currentProjects;
        const currentProjectsArray = Object.keys(currentProjects).map((key) => ({
          title: key,
          href: `/project/${currentProjects[key]}`,
        }));
        setCurrentProjectsPages(currentProjectsArray);

        // Fetch past programs
        const pastProgramsResponse = await fetch(
          'http://52.2.171.100:5001/api/settings/pastPrograms',
        );
        const pastProgramsData = await pastProgramsResponse.json();
        const pastPrograms = pastProgramsData.pastPrograms;
        const pastProgramsArray = Object.keys(pastPrograms).map((key) => ({
          title: key,
          href: `/program/${pastPrograms[key]}`,
        }));
        setPastProgramsPages(pastProgramsArray);

        // Fetch student stories
        const studentStoriesResponse = await fetch(
          'http://52.2.171.100:5001/api/settings/studentStories',
        );
        const studentStoriesData = await studentStoriesResponse.json();
        const studentStories = studentStoriesData.studentStories;
        const studentStoriesArray = Object.keys(studentStories).map((key) => ({
          title: key,
          href: `/student-stories/${studentStories[key]}`,
        }));
        setStudentStoriesPages(studentStoriesArray);

        // Fetch Apply Link
        const navBarLinkResponse = await fetch(
          'http://52.2.171.100:5001/api/settings/navBarLink',
        );
        const navBarLinkData = await navBarLinkResponse.json();
        setNavBarApplyLink(navBarLinkData.navBarApplyLink);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 280,
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: 1,
        }}
      >
        <SidebarNav
          pastProgramsPages={pastProgramsPages}
          currentProjectsPages={currentProjectsPages}
          studentStoriesPages={studentStoriesPages}
          onClose={onClose}
        />
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
