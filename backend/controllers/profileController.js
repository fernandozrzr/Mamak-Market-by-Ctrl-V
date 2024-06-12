const Profile = require('../models/ProfileModel');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// Get All Profile (LoginUser)
// const getAllProfiles = async (req, res) => {
//     try {
//         const profiles = await Profile.find(); // Retrieve all profiles
//         res.status(200).json(profiles);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// }

// // Get a Profile by id
// const getProfileById = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ message: 'Profile not found' });
//     }

//     const Profile = await Profile.findById(id);
//     if (!Profile) {
//         return res.status(404).json({ message: 'Profile not found' });
//     }
//     res.status(200).json(Profile);
// }

// // Create a new Profile (SignUp User)
// const createProfile = async (req, res) => {                                 //Create profile based on the following details (UEN will be left empty if its normal user creation)
//     const { user, username, password, usergroup, uen } = req.body;
//     try {
//         const profile = await Profile.create({ user, username, password, usergroup, uen });
//         res.status(201).json(profile);
//     }
//     catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }


// // Update a Profile
// const updateProfile = async (req, res) => {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).json({ message: 'Profile not found' });
//     }
//     const { title, content } = req.body;

//     const Profile = await Profile.findByIdAndUpdate(id, { user, username, password, usergroup, uen }, { new: true });
//     if (!Profile) {
//         return res.status(404).json({ message: 'Profile not found' });
//     }
//     res.json(Profile);
// }

// module.exports = {
//     createProfile, getProfileById, updateProfile, getAllProfiles,
// }


const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "3d"})
}

// Login User
const loginUser = async (req, res) => {
    const {username, password, usergroup} = req.body

    try {
        const profile = await Profile.login(username, password, usergroup)
        
        // Create a Token
        const token = createToken(profile._id)
        
        res.status(200).json({ status: "ok", username, token});
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}


const signupUser = async (req, res) => {
    const { name, username, password, usergroup, uen } = req.body

    try {
        const profile = await Profile.signup(name, username, password, usergroup, uen);
        
        // Create a Token
        const token = createToken(profile._id);
        
        res.status(200).json({ status: "ok", name, username, token});
    } catch (error) {
        res.status(500).json({ message: error.message || "An unexpected error occurred" });
    }
}


module.exports = {signupUser, loginUser}