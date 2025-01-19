const express = require("express");
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const db = require('./db')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
// const path = require('path')
require('dotenv').config()
const { jwtwebmiddleware, generatetoken } = require('./jwt');

const cors = require('cors');

// Basic route to test HTML file
app.use(cors(
  {
    origin:['http://localhost:5173/'],
    methods:['POST'],
    credentials:true

  }
));
const ProfileSchema= new mongoose.Schema({

   

  username:{
      type:String,
      
  },

  mobileno:{
      type:Number,
  },
  
  Email:{
      type:String,
      required:true,
      unique:true
      
  },

  password:{
      type:String,
      required:true
  },

  

})
ProfileSchema.pre('save', async function(next) {
  const Profile = this;

  try {
      if (!Profile.isModified('password')) return next();

      if (!Profile.password || typeof Profile.password !== 'string' || Profile.password.trim() === '') {
          return next(new Error('Invalid password'));
      }

      const salt = await bcrypt.genSalt(10);
      const hashpassword= await bcrypt.hash(Profile.password, salt);
      Profile.password = hashpassword;
      next();
  } catch (err) {
      console.error('Error during password hashing:', err);
      return next(err);
  }
});




ProfileSchema.methods.camparePassword = async function(candidatePassword){
  try{
    const isMatch = await bcrypt.compare(candidatePassword,this.password)
    return isMatch
  }
  catch(err){
     throw err;

  }
}
const Profile = mongoose.model('Profile',ProfileSchema)

app.post('/signup', async (req, res) => {
  try {
    const data = req.body;
    const newProfile = new Profile(data);
    const response = await newProfile.save();
    
    console.log('Data saved');
    
    const payload = {
      id: response.id,
    };

    console.log(JSON.stringify(payload));

    const token = generatetoken(payload);
    console.log("Token is:", token);
    
    res.status(200).json({ Response: response, Token: token });
  console.log(response)
  //  res.render('login')
  
  } catch (err) {
    console.log(err);
    
  }
});

// Route for login
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Use findOne instead of findById
    const profile = await Profile.findOne({ username: username });

    
    if (!profile || !(await profile.camparePassword(password))) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const payload = {
      id: profile.id, // Use profile.id here
    };

    console.log(JSON.stringify(payload));

    const token = generatetoken(payload);
   

    // Send only one response
    res.status(200).json({ Response: profile, Token: token });
   
   
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/login', async (req, res) => {
  try {
    const  { username, password } = req.body;

    // Use findOne instead of findById
    const profile = await Profile.findOne({ username: username });


    if (!profile || !(await profile.camparePassword(password))) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const payload = {
      id: profile.id, // Use profile.id here
    };

    console.log(JSON.stringify(payload));

    const token = generatetoken(payload);
   

    // Send only one response
    res.status(200).json({ Response: profile, Token: token });
   
   
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/logout',async(res,req) =>{
  try{
      
  }catch(err){
    console.log(err='internal server error')
  }

})



app.listen(8000 ,()=>{
    console.log('port 8000 running successfully')
    
  })

