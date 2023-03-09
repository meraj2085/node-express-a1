const USERS = require("../public/user_data.json");

module.exports.randomUser = async (req, res) => {
     try {
          const data = USERS;
          const randomUser = data[Math.floor(Math.random() * data.length)];
          res.status(200).json({ success: true, message: "Random demo user", data: randomUser });
     } catch (error) {
          res.status(404).json({ success: false, message: error.message });
     }
};

module.exports.allUsers = async (req, res) => {
     try {
          const data = USERS;
          res.status(200).json({ success: true, message: "All demo users", data: data });
     } catch (error) {
          res.status(404).json({ success: false, message: error.message });
     }
};