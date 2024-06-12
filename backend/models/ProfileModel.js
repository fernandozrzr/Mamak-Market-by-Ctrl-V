const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {                         //Name of the seller or user
        type: String,
        required: true
    },
    username: {                     //Account username
        type: String,
        required: true
    },
    password: {                     //Account password
        type: String,
        required: true
    },
    usergroup: {                    //Seller or User
        type: String,
        required: true
    },
    uen: {                          //Seller UEN (Not required for User)
        type: String
    },
    img: {
        type: String,               //Acc Owner Profile Picture
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);