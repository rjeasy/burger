var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
  burgers.create([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) {
  //req.params.id getting value from FE to update DB
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {

      return res.status(404).end();
      
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
