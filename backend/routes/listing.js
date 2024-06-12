const express = require('express')
const { createListing, getListings, getListingById, deleteListing, updateListing, getListingByName } = require('../controllers/listingController');


const router = express.Router()

router.get('/', getListings);
router.get('/search', getListingByName);
router.get('/:id', getListingById);



router.post('/', createListing);

router.delete('/:id', deleteListing);

router.patch('/:id', updateListing)

module.exports = router;