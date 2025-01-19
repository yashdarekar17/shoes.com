const mongoose= require('mongoose');

const mongoUrl= 'mongodb://localhost:27017/shoes-com'

mongoose.connect(mongoUrl, 
    //  { useNewUrlParser: true,
    //   useUnifiedTopology: true }
     )

const db= mongoose.connection;

db.on('connected',()=>{
 console.log("your db is connected to shoes-com website")
})

db.on('error',()=>{
    console.log('error');
})


module.exports= db;