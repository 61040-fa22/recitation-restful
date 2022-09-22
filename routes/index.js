const express = require('express');

const router = express.Router();

/**
 * Serves homepage.
 * 
 * @name GET /
 */
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;