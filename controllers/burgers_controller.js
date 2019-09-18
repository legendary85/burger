const express = require("express");
const router = express.Router();

//Import the model (burger.js) to use it's database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

//Exports routes for server.js to use.
module.exports = router;
