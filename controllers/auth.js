const User = require("../models/User");

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
      if (!existingUser) {
      return res.json({ success: false, message: "Email Doesnot Exists" });
    }

    if (existingUser?.password !== password) {
      return res.json({ success: false, message: "Password Is Invalid" });
    }

    res.json({ success: true, message: existingUser });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = { login };
