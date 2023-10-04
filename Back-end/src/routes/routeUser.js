const express = require('express');
const { login } = require('../controllers/user');
const routeUser = express.Router();


routeUser.post('/login', login)



module.exports = routeUser