const express = require('express');
const Property = require('../models/Property');
const Listing = require('../models/Listing');


const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const data = await Property.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/listings', async (req, res) => {
    try{
        const data = await Listing.find().limit(20);
        console.log("Listings",data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/:id', async(req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/add', async (req, res) => {
    console.log(req.body)
    const data = new Property({
        title: req.body.title,
        description: req.body.description,
        imageUrl : req.body.imageUrl,
        price : req.body.price,
        location: req.body.location
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;