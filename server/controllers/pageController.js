// controllers/pageController.js

const Page = require('../models/Page'); // Import the Page model

// Controller to get a page by name
const getPageByName = async (req, res) => {
  try {
    const { pageName } = req.params;
    const page = await Page.findOne({ pageName });
    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }
    res.json(page);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getPageByName };
