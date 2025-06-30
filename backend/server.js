const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const router = express.Router();
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client('295760089034-rtnvk7jcia0rhoa3m5mn2bv7fv9uq3c5.apps.googleusercontent.com');



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
    const {name, email, password} = req.body;
    const hashed = await bcrypt.hash(password,10);
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({error: "Email already registered" });

        }

        const user = new User ({name, email, password: hashed}) ;
        await user.save();

        res.status(201).json({ message: "User registered successfully" });

    } catch (err){
        res.status(500).json({ error: "Server error" });
    }
});

// app.post('/api/google-login', async (req, res )=> {
//     const { token, password } = req.body;
//     try{
//         const ticket = await client.verifyIdToken({
//             idToken: token,
//             audience: '295760089034-rtnvk7jcia0rhoa3m5mn2bv7fv9uq3c5.apps.googleusercontent.com',
//         });

//         const {name, email } = ticket.getPayload();

//         let user = await User.findOne({email});
//         if(!user){
//             const hashed = await bcrypt.hash(password, 10);
//             user = new User({ name, email, password: hashed });
//             await user.save();
//         }
//         res.status(200).json({message: 'Google signup successfully'});

//     } catch (err){
//         res.status(401).json({error: 'Invalid Google token '}); 
//     }
// });

app.listen(5000, () => console.log('Server running on port 5000 '));
