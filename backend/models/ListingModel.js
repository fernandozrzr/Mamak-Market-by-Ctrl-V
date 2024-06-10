const mongoose = require('mongoose')

const Schema = mongoose.Schema

const listingSchema = new Schema({
    user: {                         //The owner(Shop Name) of this item
        type: String,
        required: true
    },
    item: {                         //Item name
        type: String,
        required: true
    },
    description: {                  //Item description
        type: String,
        required: true
    },
    expirydate: {                   //Item expiry date
        type: String,
        required: true
    },
    cost: {                         //Item usual cost
        type: Number,
        required: true
    },
    quantity: {                     //Item quantity
        type: Number,
        required: true
    },
    img: { 
        type: Buffer,
        required: true
     }

}, { timestamps: true })

module.exports = mongoose.model('Listing', listingSchema)