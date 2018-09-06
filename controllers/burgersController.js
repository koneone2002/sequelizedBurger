var express = require("express");

var router = express.Router();


var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll({
   raw: true

  }).then(function(results) {
    var burgers = {burgers: results};
    
    
    console.log(results);
    
    res.render("index", burgers);
  });

});

router.post("/api/burgers", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(newBurger) {
    res.json(newBurger);
  }).catch(function(err) {
    res.json(err);
  });
 
});

router.put("/api/burgers/:id", function(req, res) {
  db.Burger.update({
    devoured: true } ,{
      where: {id: req.params.id}
    }).then(function(results) {
      res.json(results);
    }).catch(function(err) {
      res.json(err);
    });

  });
      


// Export routes for server.js to use.
module.exports = router;
