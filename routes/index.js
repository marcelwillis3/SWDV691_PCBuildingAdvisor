// Import Express into the route file and use the router to respond to any requests to the root URL.
const express = require('express');
const path = require('path');

const router = express.Router();

/*router.get('/', (req, res) => {
  res.send('It works!');
});*/

// Post the html file
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

module.exports = router;