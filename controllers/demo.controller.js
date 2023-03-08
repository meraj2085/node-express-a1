module.exports.demo = async (req, res) => {
     try {
          const data = [
               {'name': 'John Doe', 'age': 30},
               {'name': 'Emma Smith', 'age': 28}
          ];
          res.status(200).json({ success: true, message: "All demo users", data: data });
     } catch (error) {
          res.status(404).json({ success: false, message: error.message });
     }
   };