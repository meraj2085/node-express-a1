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
          const { limit, page } = req.query;
          const data = USERS;
          if (limit && page) {
               const startIndex = (page - 1) * limit;
               const endIndex = page * limit;
               const users = data.slice(startIndex, endIndex);
               res.status(200).json({ success: true, message: "All demo users", data: users });
          } else {
               res.status(200).json({ success: true, message: "All demo users", data: data });
          }
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

// Update a user
module.exports.updateUser = async (req, res) => {
     try {
          const data = USERS;
          const { id } = req.params;
          const { name, gender, contact, address, photoUrl } = req.body;
          const user = data.find((user) => user.id == id);
          if (name) user.name = name;
          if (gender) user.email = gender;
          if (contact) user.contact = contact;
          if (address) user.address = address;
          if (photoUrl) user.photoUrl = photoUrl;
          res.status(200).json({ success: true, message: `Updated demo user ${id}`, data: user });
     } catch (error) {
          res.status(404).json({ success: false, message: error.message });
     }
}

// Delete a user
module.exports.deleteUser = async (req, res) => {
     try {
          const data = USERS;
          const { id } = req.params;
          const user = data.find((user) => user.id == id);
          const index = data.indexOf(user);
          data.splice(index, 1);
          res.status(200).json({ success: true, message: `Deleted demo user ${id}`, data: user });
     } catch (error) {
          res.status(404).json({ success: false, message: error.message });
     }
}