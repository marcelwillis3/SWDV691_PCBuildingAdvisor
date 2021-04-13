var express = require('express');
var router = express.Router();

// GET home page
// TODO: figure out how to render multiple collections
router.get('/', function(req, res) {
  var db = req.db;
  var mobo_collection = db.get('Motherboards');
  mobo_collection.find({}, {}, function(err, docs) {
    res.render('home', {
      title: 'PC Building Advisor',
      mobos: docs
    });
  });
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
