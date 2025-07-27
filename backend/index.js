const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt= require("bcryptjs")
require("dotenv").config();
const cors = require("cors");
const db = require("./db");
const path = require("path");
const { jwtwebmiddleware, generatetoken } = require("./jwt");
const Razorpay=require("razorpay");
const crypto=require("crypto");


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





// Create Razorpay order
app.post("/create-order", async (req, res) => {
 try{
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, // Your Razorpay Key ID
    key_secret: process.env.RAZORPAY_KEY_SECRET, // Your Razorpay Key Secret
  });
  const option=req.body;
  const order=await razorpay.orders.create(option);
  if(!order){
    return res.status(500).send("error");
  }

  res.json(order);
 }catch(err){
  res.status(500).json(err);
 }

  
});

app.post("/create-order/validate",async(req,res)=>{
const{razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;
const sha=crypto.createHmac("sha256",process.env.RAZORPAY_KEY_SECRET);
sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
const digest =sha.digest("hex");
if(digest!== razorpay_signature){
  return res.status(400).json({msg:"transtion is not leget!"});
}

res.json({
  msg:"success",
  orderId:razorpay_order_id,
  paymentID:razorpay_payment_id,
})
})


// Profile Schema
const ProfileSchema = new mongoose.Schema({
  username: { type: String, required: false },
  mobileno: { type: Number },
  Email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  cart: {
    page1: [{ productId: String, quantity: Number }],
    page2: [{ productId: String, quantity: Number }],
    page3: [{ productId: String, quantity: Number }],
    page4: [{ productId: String, quantity: Number }],
    page5: [{ productId: String, quantity: Number }],
  },
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

    const token = generatetoken({ Email: response.Email });
    res.status(200).json({ Response: response, Token: token });
    console.log('response:',response,'token:',token);
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

    const token = generatetoken({ Email: profile.Email });
    res.status(200).json({ Response: profile, Token: token });
    console.log('response:',Response,'token:',token);
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
    // const data = await Profile.
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.log("Logout Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/update-cart",jwtwebmiddleware, async (req, res) => {
  const { Email, cart } = req.body;

  if (!Email || !cart) {
    return res.status(400).json({ message: "Email and cart are required." });
  }

  try {
    const user = await Profile.findOneAndUpdate(
      { Email },
      { $set: { cart } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Cart updated", cart: user.cart });

  } catch (err) {
    console.error("Update cart error:", err);
    res.status(500).json({ message: "Error updating cart", error: err });
  }
});


app.get('/cart/:email', jwtwebmiddleware, async (req, res) => {
  try {
    const user = await Profile.findOne({ Email: req.params.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // 🚨 Security check: only allow access to own cart
    if (req.user.id !== user.id) {
      return res.status(403).json({ message: 'Access denied' });
    }

    res.json(user.cart || {
      page1: [], page2: [], page3: [], page4: [], page5: []
    });
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.use(express.static(path.join(__dirname, 'shoes1', 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'shoes1', 'dist', 'index.html'));
});

// **Start Server**
app.listen(8000, () => {
  console.log("Server running on port 8000");
});