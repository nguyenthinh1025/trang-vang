const express = require('express');
const { getListAdvertisements, createAdvertisements, updateStatusAdvertisements } = require('../controllers/advertisements');
const routeAdvertisements = express.Router();


routeAdvertisements.get('/getalladvertisements', getListAdvertisements)
routeAdvertisements.post('/createadvertisements', createAdvertisements)
routeAdvertisements.put('/updateadvertisements/:id', updateStatusAdvertisements)



module.exports = routeAdvertisements