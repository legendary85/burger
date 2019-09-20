const express = require("express");
const router = express.Router();

//Import the model (burger.js) to use it's database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// router.get("/", function(req, res) {
//   res.redirect("/index");
// });

//selectAll
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//We create a burger here
router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      //send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

//updatOne Devour a burger
router.put("/api/burgers/:id", function(req, res) {
  var conditon = "id = " + req.params.id;

  console.log("condition", conditon);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    conditon,
    function(result) {
      if (result.changedRows == 0) {
        //If no rows were changed, the the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

//delete
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//Exports routes for server.js to use.
module.exports = router;
