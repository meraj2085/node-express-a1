const USERS = require("../public/user_data.json");

// Get random user
module.exports.randomUser = async (req, res) => {
     try {
          const data = USERS;
          const randomUser = data[Math.floor(Math.random() * data.length)];
          res.status(200).json({ success: true, message: "Random demo user", data: randomUser });
     } catch (error) {
          res.status(404).json({ success: false, message: error.message });
     }
};

// Get all users
module.exports.allUsers = async (req, res) => {
     try {
          const data = USERS;
          res.status(200).json({ success: true, message: "All demo users", data: data });
     } catch (error) {
          res.status(404).json({ success: false, message: error.message });
     }
};

// Create new user
module.exports.newUser = async (req, res) => {
     try {
          const data = USERS;
          const newUser = req.body;
          data.push(newUser);
          res.status(200).json({ success: true, message: "New demo user", data: newUser });
     } catch (error) {
          res.status(404).json({ success: false, message: error.message });
     }
}