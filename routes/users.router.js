const express = require("express");
const router = express.Router();


// Import controller
const usersController = require("../controllers/users.controller");


// Routes
router.get("/random", usersController.randomUser);


module.exports = router;