const express = require('express');
const { createProduct } = require('../controllers/product');
const routeProduct = express.Router();


routeProduct.post('/createproduct', createProduct)



module.exports = routeProduct