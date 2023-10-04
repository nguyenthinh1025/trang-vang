const express = require('express');
const { getBussinessByCareers, getAllCareers, createCareers } = require('../controllers/careers');
const routeCareers = express.Router();


routeCareers.get('/getbussinessbycareers/:title', getBussinessByCareers);
routeCareers.get('/getcareers', getAllCareers)
routeCareers.post('/createcareers', createCareers)


module.exports = routeCareers