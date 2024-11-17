// routes/pageRoutes.js

const express = require('express');
const { createPage, getPageByName } = require('../controllers/pageController');

const router = express.Router();

// New route to get a page by name
router.get('/:pageName', getPageByName);

module.exports = router;
