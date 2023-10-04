const express = require('express');
const { getListAdvertisements, createAdvertisements } = require('../controllers/advertisements');
const routeAdvertisements = express.Router();


routeAdvertisements.get('/getalladvertisements', getListAdvertisements)
routeAdvertisements.post('/createadvertisements', createAdvertisements)



module.exports = routeAdvertisements