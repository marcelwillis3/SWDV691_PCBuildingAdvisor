var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res) {
  var db = req.db;
  var mobo_collection = db.get('Motherboards');
  var cpu_collection = db.get('CPUs');
  var gpu_collection = db.get('GPUs');
  var psu_collection = db.get('PSUs');

  // Find the data in each collection and store in variable to render the page
  mobo_collection.find({}, {}, function(err, mobo_docs) {
    if (err) {
      console.log(err);
    } else {
      cpu_collection.find({}, {}, function(err, cpu_docs) {
        if (err) {
          console.log(err);
        } else {
          gpu_collection.find({}, {}, function(err, gpu_docs) {
            if (err) {
              console.log(err);
            } else {
              psu_collection.find({}, {}, function(err, psu_docs) {
                if (err) {
                  console.log(err);
                } else {
                  res.render('home', {
                    title: 'PC Building Advisor',
                    mobos: mobo_docs,
                    cpus: cpu_docs,
                    gpus: gpu_docs,
                    psus: psu_docs
                  });
                  }
              });
              }
          });
          }
      });
      }
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
