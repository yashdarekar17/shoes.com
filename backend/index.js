const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt= require("bcrypt")
require("dotenv").config();
const cors = require("cors");
const db = require("./db");
const path = require("path");
const { jwtwebmiddleware, generatetoken } = require("./jwt");
const Razorpay=require("razorpay");
//node -r dotenv/config index.js




const app = express();
app.use(cors())
     // Correctly resolve _dirname

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve static files from 'shoes1/dist'
const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, "shoes1", "dist"))); // Corrected path
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "shoes1", "dist", "index.html")); // Corrected path
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Your Razorpay Key ID
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Your Razorpay Key Secret
});

app.get('/razorpay-key', (req, res) => {
  res.json({ key: process.env.RAZORPAY_KEY_ID });
});

// Create Razorpay order
app.post("/create-order", async (req, res) => {
  console.log("Create order request received", req.body);

  try {
    const { amount, currency, receipt } = req.body;

    if (!amount || !currency || !receipt) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt,
    });

    console.log("Order created:", order);
    res.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
});


// Profile Schema
const ProfileSchema = new mongoose.Schema({
  username: { type: String, required: false },
  mobileno: { type: Number },
  Email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving
ProfileSchema.pre("save", async function (next) {
  const profile = this;
  try {
    if (!profile.isModified("password")) return next();
    if (!profile.password || typeof profile.password !== "string" || profile.password.trim() === "") {
      return next(new Error("Invalid password"));
    }
    const salt = await bcrypt.genSalt(10);
    profile.password = await bcrypt.hash(profile.password, salt);
    next();
  } catch (err) {
    console.error("Error during password hashing:", err);
    return next(err);
  }
});

// Password comparison method
ProfileSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (err) {
    throw err;
  }
};

const Profile = mongoose.model("Profile", ProfileSchema);

// **Signup Route**
app.post("/signup", async (req, res) => {
  try {
    const data = req.body;

    // Check if email already exists
    const existingUser = await Profile.findOne({ Email: data.Email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const newProfile = new Profile(data);
    const response = await newProfile.save();
    console.log("Data saved:", response);

    const token = generatetoken({ id: response.id });
    res.status(200).json({ Response: response, Token: token });
  } catch (err) {
    console.log("Signup Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// **Login Route**
app.post("/login", async (req, res) => {
  try {
    const { Email, password } = req.body;

    // Find user by Email
    const profile = await Profile.findOne({ Email });
    if (!profile || !(await profile.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = generatetoken({ id: profile.id });
    res.status(200).json({ Response: profile, Token: token });
  } catch (err) {
    console.log("Login Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// **Fetch All Users Route** 
app.get("/users", async (req, res) => {
  try {
    const data = await Profile.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log("Error fetching data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// **Logout Route**
app.post("/logout", (req, res) => {
  try {
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.log("Logout Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// **Start Server**
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
