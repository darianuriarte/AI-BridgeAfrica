const express = require('express');
const { getCurrentProjects, getPastPrograms, getStudentStories, getNavBarApplyLink  } = require('../controllers/settingsController');

const router = express.Router();

router.get('/currentProjects', getCurrentProjects);
router.get('/pastPrograms',getPastPrograms );
router.get('/studentStories',getStudentStories );
router.get('/navBarLink',getNavBarApplyLink );

module.exports = router;
