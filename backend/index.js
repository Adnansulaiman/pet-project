const port = 4000;
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./authentication');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Express App is Running");
});

// MongoDB code //
// Database connect with MongoDB
mongoose.connect("mongodb+srv://supportingpaws:spaws@cluster0.cccxbbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error("Error while connecting to MongoDB:", error);
});

db.once('open', () => {
    console.log("Connected to MongoDB successfully");
});

// Schema creating for User model
const Users = mongoose.model('Users', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
});

// Schema for Creating Booking
const BookingDetails = mongoose.model("BookingDetails", {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    animal: {
        type: String,
        required: true
    },
    message: {
        type: String,
    }
}, 
);

// MongoDb code End  //

// Frontend Endpoints   //

// Creating endpoint for user signup
app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, errors: "Existing user found with this email" });
    }

    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    await user.save();
    const data = {
        user: {
            id: user._id,
            email:user.email
        }
    };

    const token = jwt.sign(data, 'secret_supportingpaws');
    res.json({ success: true, token });
});

// Creating endpoint for user login
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user._id,
                    email:user.email
                }
            };
            const token = jwt.sign(data, 'secret_supportingpaws');
            res.json({ success: true, token });
        } else {
            res.json({ success: false, error: "Wrong Password" });
        }
    } else {
        res.json({ success: false, errors: "Wrong Email Id" });
    }
});

// Creating API for getting all users
app.get('/allusers', async (req, res) => {
    let users = await Users.find({});
    console.log("All users fetched");
    res.json(users);
});

// Creating Endpoint for create Booking Details
app.post('/booking-details', async (req, res) => {
    
   
    const newBooking = new BookingDetails({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        time: req.body.time,
        date: req.body.date,
        animal: req.body.animal,
        message: req.body.message,
    });
console.log(newBooking);
    (await newBooking.save());
    res.json({ success: true, newBooking });
});
// Protected route to get user's bookings
app.get('/mybookings',authenticateToken, async (req, res) => {
    
    try {
        const bookings = await BookingDetails.find({ email: req.user.email });
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
});

// Creating Endpoint for delete Booking Details
app.post('/deletebooking', async (req, res) => {
    
    const deletedBooking = await BookingDetails.findOneAndDelete({_id:req.body._id});
    res.json(deletedBooking);
});

// Creating API for getting all booking Details
app.get('/allbookings', async (req, res) => {
    let bookings = await BookingDetails.find({});
    res.json(bookings);
});

app.listen(port, (error) => {
    if (!error) {
        console.log("Server is running on port " + port);
    } else {
        console.log("Error while server is running: " + error);
    }
});
