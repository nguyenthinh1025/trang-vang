const express = require('express');
const { getBussinessByCareers, getAllCareers, createCareers, searchCareersBusiness, updateCareer, deleteCareer } = require('../controllers/careers');
const routeCareers = express.Router();


routeCareers.get('/getbussinessbycareers/:title', getBussinessByCareers);
routeCareers.get('/getcareers', getAllCareers)
routeCareers.post('/createcareers', createCareers)
routeCareers.put('/careerbusiness/:name', searchCareersBusiness)
routeCareers.put('/updatecareer', updateCareer)
routeCareers.delete('/deletecareer/:id', deleteCareer)


module.exports = routeCareers