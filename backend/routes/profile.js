const express = require('express')
const { createProfile, getProfiles, getProfileById, deleteProfile, updateProfile } = require('../controllers/ProfileController');


const router = express.Router()

//router.get('/', getProfiles);         We should be getting only 1 profile. Not needed

router.get('/:id', getProfileById);     //Retrieve infomation based on logged in username and password using ID.

router.post('/', createProfile);        //Create a new Account

//router.delete('/:id', deleteProfile);   I assumed there is no deletion of accounts.

router.patch('/:id', updateProfile)     //Edit user profile

module.exports = router;