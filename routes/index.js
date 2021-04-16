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

/* POST to Add Motherboard Service */
router.post('/addMobo', function(req, res) {
  
  // Set internal DB variable
  var db = req.db;

  // Get our form values.
  var mobo_brand = req.body.moboBrand;
  var mobo_model = req.body.moboModel;
  var mobo_scket = req.body.moboSocket;

  // Set the collection
  var collection = db.get('Motherboards');

  // Submit to the DB
  collection.insert({
    "type": "motherboard",
    "brand": mobo_brand,
    "model": mobo_model,
    "socket": mobo_scket
  }, function(err, doc) {
    if (err) {
      // Return error if database insert failed
      res.send("There was an issue trying to enter your motherboard into the database.");
    } else {
      // Forward to success page
      res.redirect("/");
    }
  });
});

/* POST to Add CPU Service */
router.post('/addCpu', function(req, res) {
  
  // Set internal DB variable
  var db = req.db;

  // Get our form values.
  var cpu_brand = req.body.cpuBrand;
  var cpu_name = req.body.cpuName;
  var cpu_scket = req.body.cpuSocket;

  // Set the collection
  var collection = db.get('CPUs');

  // Submit to the DB
  collection.insert({
    "type": "cpu",
    "brand": cpu_brand,
    "name": cpu_name,
    "socket": cpu_scket
  }, function(err, doc) {
    if (err) {
      // Return error if database insert failed
      res.send("There was an issue trying to enter your CPU into the database.");
    } else {
      // Forward to success page
      res.redirect("/");
    }
  });
});

/* POST to Add GPU Service */
router.post('/addGpu', function(req, res) {
  
  // Set internal DB variable
  var db = req.db;

  // Get our form values.
  var gpu_brand = req.body.gpuBrand;
  var gpu_model = req.body.gpuModel;
  var gpu_watts = req.body.gpuWatts;

  // Set the collection
  var collection = db.get('GPUs');

  // Submit to the DB
  collection.insert({
    "type": "gpu",
    "brand": gpu_brand,
    "model": gpu_model,
    "recommend_watts": gpu_watts
  }, function(err, doc) {
    if (err) {
      // Return error if database insert failed
      res.send("There was an issue trying to enter your GPU into the database.");
    } else {
      // Forward to success page
      res.redirect("/");
    }
  });
});

/* POST to Add PSU Service */
router.post('/addPsu', function(req, res) {
  
  // Set internal DB variable
  var db = req.db;

  // Get our form values.
  var psu_brand = req.body.psuBrand;
  var psu_model = req.body.psuModel;
  var psu_watts = req.body.psuWatts;

  // Set the collection
  var collection = db.get('PSUs');

  // Submit to the DB
  collection.insert({
    "type": "psu",
    "brand": psu_brand,
    "model": psu_model,
    "max_watts": psu_watts
  }, function(err, doc) {
    if (err) {
      // Return error if database insert failed
      res.send("There was an issue trying to enter your PSU into the database.");
    } else {
      // Forward to success page
      res.redirect("/");
    }
  });
});

module.exports = router;
