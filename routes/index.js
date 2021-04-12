var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'PC Building Advisor' });
});

/* GET how-to page. */
router.get('/howtouse', function(req, res, next) {
  res.render('howtouse', {title: 'PC Building Advisor'})
});

/* GET contact page. */
router.get('/contactus', function(req, res, next) {
  res.render('contactus', {title: 'PC Building Advisor'})
});

module.exports = router;
