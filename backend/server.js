const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

// conntect to mongoDB
mongoose.connect('mongodb+srv://siam12:uWlfNq2Z8gdFmYNd@cluster0.qxwljgq.mongodb.net/healthMonitor?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// use schema 

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique:true},
    password: String,
});

const User = mongoose.model('User', userSchema);

// Register route 
app.post('/api/register', async (req, res) => {
    const {name, email. password} = req.body;
    const hashed = await bcrypt.hash(password,10);
    try{
        const user = new User({name , email , password:hashed});
        await user.save();
        res.json({message:"User registered"});
    } catch (err){
        res.status(400).json({error: " Email already Exists"});
    }
});

app

