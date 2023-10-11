const express = require('express');
const { getListAdvertisements, createAdvertisements, updateStatusAdvertisements, updateAdvertisements, deleteAdvertisements } = require('../controllers/advertisements');
const routeAdvertisements = express.Router();


routeAdvertisements.get('/getalladvertisements', getListAdvertisements)
routeAdvertisements.post('/createadvertisements', createAdvertisements)
routeAdvertisements.put('/updateadvertisements/:id', updateStatusAdvertisements)
routeAdvertisements.delete('/deleteadvertisements/:id', deleteAdvertisements)
routeAdvertisements.post('/activeadvertisements', updateAdvertisements)



module.exports = routeAdvertisements