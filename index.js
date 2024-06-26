const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const propertyRoutes = require('./routes/property-routes');


const mongoString = process.env.DATABASE_URL

const app = express();
app.use(express.json())

app.use('/api/properties', propertyRoutes);
app.use('/api/properties/:id', propertyRoutes);


mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
