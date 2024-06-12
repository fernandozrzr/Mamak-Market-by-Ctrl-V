const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const validator = require('validator');


// const profileSchema = new Schema({
//     user: {                         //Name of the seller or user
//         type: String,
//         required: true
//     },
//     username: {                     //Account username
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {                     //Account password
//         type: String,
//         required: true
//     },
//     usergroup: {                    //Seller or User
//         type: String,
//         required: true
//     },
//     uen: {                          //Seller UEN (Not required for User)
//         type: String
//     }
// }, { timestamps: true });

// Static Signup Method (Create a new Profile)
// profileSchema.static.signup = async (user, password, usergroup) => {

// }

// module.exports = mongoose.model('Profile', profileSchema);


const profileSchema = new Schema({
    name: {                         //Name of the seller or user
        type: String,
        required: true,
        unique: true
    },
    username: {                     //Account username
        type: String,
        required: true,
        unique: true
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
})

// Static Signup Method
// profileSchema.statics.signup = async function(name, username, password, usergroup, uen) {

//     //Validation
//     if(!name || !username || !password || !usergroup) {
//         throw Error("All fields must be filled")
//     }

//     if(!validator.isStrongPassword(password)) {
//         throw Error("Password not strong enough")
//     }


//     const exists = await this.findOne ({
//         $or: [
//             { username: username },
//             { name: name }
//         ]
//     })

//     if (exists) {
//         throw Error("Username or name already in use")
//     }

//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(password, salt)

//     const profile = await this.create({name, username, password: hash, usergroup, uen })

//     return profile
// }

profileSchema.statics.signup = async function(name, username, password, usergroup, uen) {

    //Validation
    if(!name || !username || !password) {
        throw Error("All fields must be filled")
    }

    if(!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough")
    }


    const exists = await this.findOne ({
        $or: [
            { username: username },
            { name: name }
        ]
    })

    if (exists) {
        throw Error("Username or name already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const profile = await this.create({name, username, password: hash, usergroup, uen})

    return profile
}


// Static Login Method
profileSchema.statics.login = async function(username, password, usergroup){

    //Validation
    if(!username || !password || !usergroup) {
        throw Error("All fields must be filled")
    }

    const profile = await this.findOne({username})

    if (!profile) {
        throw Error("Incorrect username")
    }

    if (profile.usergroup !== usergroup) {
        throw Error("Incorrect usergroup");
    }

    // Plaintext password and Hash Password
    const match = await bcrypt.compare(password, profile.password);
    
    if(!match) {
        throw Error("Incorrect Password")
    }

    return profile

}

module.exports = mongoose.model('Profile', profileSchema);