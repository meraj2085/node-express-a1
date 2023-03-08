const express = require("express");
const cors = require("cors");
const colors = require('colors');
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Import routes
const demoRouter = require("./routes/demo.router");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {res.sendFile(__dirname + "/views/demo.html")});
app.use("/api/v1/demo", demoRouter);

// Start server
app.listen(port, () => {
     console.log(`Server is running on port ${port}...`.underline.gray.italic);
});