require('dotenv').config();
const express = require('express');

const app = express();
const feedRoutes = require('./routes/feed');
const listingRoutes = require('./routes/listing');
const profileRoutes = require('./routes/profile');
const { default: mongoose } = require('mongoose');
app.use(express.json());

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})



// Routes
app.use('/api/feed', feedRoutes);
app.use('/api/listing', listingRoutes);                 //Not sure if this is the right way to call the routes. Do we combine all 3 into 1 route?
app.use('/api/profile', profileRoutes);
// Connect to database
mongoose.connect(process.env.MONGO_URI).then(() => {
    // listen to request
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch((error) => { console.log(error) });


