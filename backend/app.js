require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html', 'home.html'));
});

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error('Could not connect to MongoDB:', err));

// Define Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

// Define Model
const User = mongoose.model('User', userSchema);

// Routes
app.post('/submit', async (req, res) => {
    const { name, email } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: 'Email already exists' });
        }

        // Save the new user
        const newUser = new User({ name, email });
        await newUser.save();
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'An error occurred' });
    }
});


// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
