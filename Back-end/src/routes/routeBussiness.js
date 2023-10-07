const express = require('express');
const { getBussiness, getListBussiness, createBusiness, getBussinessById, updateStatusActiveBussiness, updateBusiness, createImageBussiness, searchBusinessByName,  } = require('../controllers/bussiness');
const routeBussiness = express.Router();


routeBussiness.get('/getallbussiness', getBussiness)
routeBussiness.get('/getlistbussiness', getListBussiness)
routeBussiness.post('/createbussiness', createBusiness)
routeBussiness.get('/getbussinessbyid/:id', getBussinessById)
routeBussiness.put('/updatebusiness/:id', updateBusiness)
routeBussiness.put('/changeactivebusiness/:id', updateStatusActiveBussiness)
routeBussiness.get('/getbusinessname/:name/:location?', searchBusinessByName)
// routeBussiness.post('/createimagebusiness', createImageBussiness)


module.exports = routeBussiness