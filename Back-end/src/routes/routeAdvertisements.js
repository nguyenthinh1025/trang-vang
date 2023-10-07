const express = require('express');
const { getListAdvertisements, createAdvertisements, updateStatusAdvertisements, updateAdvertisements } = require('../controllers/advertisements');
const routeAdvertisements = express.Router();


routeAdvertisements.get('/getalladvertisements', getListAdvertisements)
routeAdvertisements.post('/createadvertisements', createAdvertisements)
routeAdvertisements.put('/updateadvertisements/:id', updateStatusAdvertisements)
routeAdvertisements.post('/activeadvertisements', updateAdvertisements)



module.exports = routeAdvertisements