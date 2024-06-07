const Listing = require('../models/ListingModel');
const mongoose = require('mongoose');

// Get all Listings

const getListings = async (req, res) => {
    try {
        const Listings = await Listing.find({}).sort({ createdAt: -1 });
        res.status(200).json(Listings);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }

}

// Get a Listing by id

const getListingById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Listing not found' });
    }

    const Listing = await Listing.findById(id);
    if (!Listing) {
        return res.status(404).json({ message: 'Listing not found' });
    }
    res.status(200).json(Listing);
}

// Create a new Listing
const createListing = async (req, res) => {
    const { user, item, description, expirydate, cost, quantity } = req.body;
    try {
        const Listing = await Listing.create({ user, item, description, expirydate, cost, quantity });
        res.status(201).json(Listing);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete a Listing

const deleteListing = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Listing not found' });
    }
    const Listing = await Listing.findByIdAndDelete(id);

    if (!Listing) {
        return res.status(404).json({ message: 'Listing not found' });
    }
    res.json({ Listing });
}

// Update a Listing
const updateListing = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Listing not found' });
    }
    const {item, description, expirydate, cost, quantity } = req.body;

    const Listing = await Listing.findByIdAndUpdate(id, { item, description, expirydate, cost, quantity }, { new: true });
    if (!Listing) {
        return res.status(404).json({ message: 'Listing not found' });
    }
    res.json(Listing);
}


module.exports = {
    createListing, getListings, getListingById, deleteListing, updateListing
}