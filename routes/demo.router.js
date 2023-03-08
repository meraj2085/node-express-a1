const express = require("express");
const router = express.Router();

// Import controller
const demoController = require("../controllers/demo.controller");

// Routes
router.get("/", demoController.demo);


module.exports = router;