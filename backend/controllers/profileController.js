const Profile = require('../models/ProfileModel');
const mongoose = require('mongoose');


// Get a Profile by id

const getProfileById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Profile not found' });
    }

    const Profile = await Profile.findById(id);
    if (!Profile) {
        return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(Profile);
}

// Create a new Profile
const createProfile = async (req, res) => {                                 //Create profile based on the following details (UEN will be left empty if its normal user creation)
    const { user, username, password, usergroup, uen } = req.body;
    try {
        const Profile = await Profile.create({ user, username, password, usergroup, uen });
        res.status(201).json(Profile);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}


// Update a Profile
const updateProfile = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Profile not found' });
    }
    const { title, content } = req.body;

    const Profile = await Profile.findByIdAndUpdate(id, { user, username, password, usergroup, uen }, { new: true });
    if (!Profile) {
        return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(Profile);
}


module.exports = {
    createProfile, getProfileById, updateProfile
}