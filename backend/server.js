require('dotenv').config();
const express = require('express');

const app = express();
const feedRoutes = require('./routes/feed');


// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.use('/api/feed', feedRoutes);

// listen to request
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})