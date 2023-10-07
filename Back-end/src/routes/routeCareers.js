const express = require('express');
const { getBussinessByCareers, getAllCareers, createCareers, searchCareersBusiness } = require('../controllers/careers');
const routeCareers = express.Router();


routeCareers.get('/getbussinessbycareers/:title', getBussinessByCareers);
routeCareers.get('/getcareers', getAllCareers)
routeCareers.post('/createcareers', createCareers)
routeCareers.put('/careerbusiness/:name', searchCareersBusiness)


module.exports = routeCareers