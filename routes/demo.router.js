const express = require("express");
const router = express.Router();

// Import middleware
const demoCount = require("../middleware/demoMiddleware");

// Import controller
const demoController = require("../controllers/demo.controller");


// Routes
router.get("/", demoCount, demoController.demo);


module.exports = router;