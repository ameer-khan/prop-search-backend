const mongoose = require('mongoose');


const listingSchema = new mongoose.Schema({
 
    _id : String,
    favouritesCount : { type: Number, default: 0 }
 
}, {collection: 'listingsAndReviews'})
const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing