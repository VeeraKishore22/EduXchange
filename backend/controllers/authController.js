const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userReg");

const JWT_SECRET = process.env.JWT_SECRET;

// **Register User**
exports.register = async (req, res) => {
  const { name, email, password, phone, exam, prefix } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // ✅ Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({ 
      name, 
      email, 
      password: hashedPassword,  // ✅ Save hashed password
      phone, 
      exam, 
      prefix 
    });

    res.status(201).json({ message: "User registered successfully", userId: newUser.id });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};



// **Login User**
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // **Check hashed password**
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // **Generate JWT with role included**
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role }, // Include role in payload
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token, role: user.role }); // Send role
  } catch (error) {
    console.log("error:",error);
    res.status(500).json({ message: "Server error", error });
  }
};

// **Get User Profile**
exports.getProfile = async (req, res) => {
  try {
    console.log("Authenticated User ID:", req.user.id); // Debug log

    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
    });

    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};