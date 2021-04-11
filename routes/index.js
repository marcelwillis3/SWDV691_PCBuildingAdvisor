// Import Express into the route file and use the router to respond to any requests to the root URL.
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('It works!');
});

module.exports = router;