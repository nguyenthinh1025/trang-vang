const express = require('express');
const { getMainCategory, searchMainCategoryByName } = require('../controllers/mainCategory');
const routeMainCategory = express.Router();


routeMainCategory.get('/getmaincategory', getMainCategory)
routeMainCategory.get('/getmaincategorytitle/:name', searchMainCategoryByName)



module.exports = routeMainCategory