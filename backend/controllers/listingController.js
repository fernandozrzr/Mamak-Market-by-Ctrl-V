const ListingModel = require('../models/ListingModel'); // Renamed the imported model to ListingModel
const mongoose = require('mongoose');

// Get all Listings
const getListings = async (req, res) => {
    try {
        const listings = await ListingModel.find({}).sort({ createdAt: -1 }); // Renamed variable to listings
        res.status(200).json(listings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get a Listing by id
const getListingById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Listing not found' });
    }

    const listing = await ListingModel.findById(id); // Renamed variable to listing
    if (!listing) {
        return res.status(404).json({ message: 'Listing not found' });
    }
    res.status(200).json(listing);
}

const getListingByName = async (req, res) => {
    const { user } = req.query;

    if (!user) {
        return res.status(400).json({ message: 'Username is required' });
    }

    try {
        const listings = await ListingModel.find({ user }).sort({ createdAt: -1 });
        res.status(200).json(listings);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create a new Listing
const createListing = async (req, res) => {
    const { user, item, description, expirydate, cost, quantity, img } = req.body;
    try {
        const newListing = await ListingModel.create({ user, item, description, expirydate, cost, quantity, img }); // Renamed variable to newListing
        res.status(201).json(newListing);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete a Listing
const deleteListing = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Listing not found' });
    }
    const deletedListing = await ListingModel.findByIdAndDelete(id); // Renamed variable to deletedListing

    if (!deletedListing) {
        return res.status(404).json({ message: 'Listing not found' });
    }
    res.json({ deletedListing });
}

// Update a Listing
const updateListing = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Listing not found' });
    }
    const { item, description, expirydate, cost, quantity, img } = req.body;

    const updatedListing = await ListingModel.findByIdAndUpdate(id, { item, description, expirydate, cost, quantity, img }, { new: true }); // Renamed variable to updatedListing
    if (!updatedListing) {
        return res.status(404).json({ message: 'Listing not found' });
    }
    res.json(updatedListing);
}

module.exports = {
    createListing,
    getListings,
    getListingById,
    deleteListing,
    updateListing,
    getListingByName
}
