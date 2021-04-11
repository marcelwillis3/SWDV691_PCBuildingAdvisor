// Create dependencies and useful variables
const express = require('express');
const routes = require('./routes/index');
const app = express();

// Export the Express app to be imported and used in other files
app.use('/', routes);
module.exports = app;

// Serve static files
app.use('/css', express.static(__dirname + '/css'));
app.use('/pics', express.static(__dirname + '/pics'));
app.use('/views', express.static(__dirname + '/views'));