const Settings = require('../models/Settings');

const getCurrentProjects = async (req, res) => {
  try {
    const settings = await Settings.findOne();
    if (!settings) {
      return res.status(404).json({ message: 'Settings not found' });
    }
    res.json({ currentProjects: settings.currentProjects });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getPastPrograms = async (req, res) => {
    try {
      const settings = await Settings.findOne();
      if (!settings) {
        return res.status(404).json({ message: 'Settings not found' });
      }
      res.json({ pastPrograms: settings.pastPrograms });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  const getStudentStories = async (req, res) => {
    try {
      const settings = await Settings.findOne();
      if (!settings) {
        return res.status(404).json({ message: 'Settings not found' });
      }
      res.json({ studentStories: settings.studentStories });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  const getNavBarApplyLink = async (req, res) => {
    try {
      const settings = await Settings.findOne();
      if (!settings) {
        return res.status(404).json({ message: 'Settings not found' });
      }
      res.json({ navBarApplyLink: settings.navBarApplyLink });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

module.exports = { getCurrentProjects, getPastPrograms, getStudentStories,getNavBarApplyLink };
