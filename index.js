const express = require('express')
const mongoose = require('mongoose');
const User = require('./models/users')
const app = express()
app.use(express.json())
app.get('/', (req, res)=> {
    res.send("Hello We connected to mongo DB")
  });

//get users

app.get('/api/users', async (req, res)=> {
    try {
     const users =  await User.find({})
     res.status(200).json(users)
    }
    catch(error) {
        res.status(500).json({error: error.message})
    }
});

// single user product
app.get('/api/user/:id', async (req, res)=> {
    try {
        const {id} = req.params;
     const users =  await User.findById(id);
     res.status(200).json(users)
    }
    catch(error) {
        res.status(500).json({error: error.message})
    }
});

//update one user


app.put('/api/user/:id', async (req, res)=> {
    try {
        const {id} = req.params;
     const users =  await User.findByIdAndUpdate(id, req.body);
     const updateUser =  await User.findById(id);
     res.status(200).json(updateUser)
    }
    catch(error) {
        res.status(500).json({error: error.message})
    }
});

//product deleted API
app.delete('/api/user/:id', async(req, res)=> {
    try {
        const {id} = req.params;
        const users =  await User.findByIdAndDelete(id);
        if(!users) {
            res.status(404).json("Message is not deletd")
        }
       
        res.status(200).json("deleted")
    }
    catch(error) {
        res.status(500).json({error:error.message + 'dhanu'})
    }
  
  })



  app.post('/api/users', async(req, res)=> {
    try {
        const data = await User.create(req.body)
        res.status(200).json(data)
    }
    catch(error) {
        res.status(500).json({error:error.message + 'dhanu'})
    }
  
  })


mongoose.connect('mongodb+srv://parshantconnect:n1QtcedBGV9PSzz1@userdetails.vd3h9.mongodb.net/myUsers?retryWrites=true&w=majority&appName=UserDetails')
  .then(()=>{
    console.log('Connected!')
   
    app.listen(3000)
  }).catch(()=> {
console.log('Connection failed')
  })
    
  
