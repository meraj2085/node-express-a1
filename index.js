const express = require("express");
const cors = require("cors");
const colors = require('colors');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Import routes
const randomUser = require("./routes/users.router");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/user", randomUser);

// Start server
app.listen(port, () => {
     console.log(`Server is running on port ${port}...`.underline.gray.italic);
});