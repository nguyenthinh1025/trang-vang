const express = require('express');
const { getCareersType, searchCareersByName } = require('../controllers/CareersType');
const routeCareersType = express.Router();


routeCareersType.get('/getcareerstype', getCareersType)
routeCareersType.get('/getcareersbyname/:name/:location?', searchCareersByName);



module.exports = routeCareersType