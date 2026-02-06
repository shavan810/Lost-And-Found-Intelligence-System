const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require("../config/mailer"); // ADD THIS


// ================= REGISTER =================
router.post("/register", async (req, res) => {
  try {
    const {
      name, gender, registerNumber,
      faculty, phone, username,
      email, password
    } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      name, gender, registerNumber,
      faculty, phone, username,
      email, password: hashed
    });

    await user.save();
    res.json("User Registered");

  } catch (err) {
    res.status(500).json(err.message);
  }
});


// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json("Wrong password");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ token, user });

  } catch (err) {
    res.status(500).json(err);
  }
});


// ================= FORGOT PASSWORD =================
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json("Email not registered");

    const otp = Math.floor(100000 + Math.random()*900000).toString();

    user.otp = otp;
    user.otpExpire = Date.now() + 5*60*1000; // 5 min
    await user.save();

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP is ${otp}`
    });

    res.json("OTP sent to email");

  } catch (err) {
    res.status(500).json(err.message);
  }
});


// ================= VERIFY OTP =================
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.otp !== otp || user.otpExpire < Date.now()) {
      return res.json("Invalid or expired OTP");
    }

    res.json("OTP verified");

  } catch (err) {
    res.status(500).json(err.message);
  }
});


// ================= RESET PASSWORD =================
router.post("/reset-password", async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const user = await User.findOne({ email });

    const hashed = await bcrypt.hash(newPassword,10);

    user.password = hashed;
    user.otp = null;
    user.otpExpire = null;

    await user.save();

    res.json("Password reset successful");

  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;






// const router = require("express").Router();
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// // REGISTER
// router.post("/register", async (req, res) => {
//   try {
//     const {
//       name,
//       gender,
//       registerNumber,
//       faculty,
//       phone,
//       username,
//       email,
//       password
//     } = req.body;

//     const hashed = await bcrypt.hash(password, 10);

//     const user = new User({
//       name,
//       gender,
//       registerNumber,
//       faculty,
//       phone,
//       username,
//       email,
//       password: hashed
//     });

//     await user.save();
//     res.json("User Registered");
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// });


// // LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json("User not found");

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json("Wrong password");

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

//     res.json({ token, user });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
