const express = require("express");
const router = express.Router();


// Import controller
const usersController = require("../controllers/users.controller");


// Routes
router.get("/random", usersController.randomUser);
router.get("/all", usersController.allUsers);
router.post("/save", usersController.newUser);
router.patch("/update/:id", usersController.updateUser);
router.delete("/delete/:id", usersController.deleteUser);


module.exports = router;