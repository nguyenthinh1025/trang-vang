const express = require('express');
const { CreateImageBusiness, UpdateAvatarBusiness } = require('../controllers/images');
const routeImage = express.Router();


routeImage.post('/createimagebusiness', CreateImageBusiness)
routeImage.post('/updateavatarbusiness', UpdateAvatarBusiness)



module.exports = routeImage