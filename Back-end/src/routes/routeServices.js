const express = require('express');
const { updateServices, createServices } = require('../controllers/services');
const routeServices = express.Router();


routeServices.post('/updateservices', updateServices)
routeServices.post('/createservices', createServices)



module.exports = routeServices