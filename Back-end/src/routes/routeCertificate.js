const express = require('express');
const { updateCertificates } = require('../controllers/certificates');
const routeCertificate = express.Router();


routeCertificate.post('/updatecertificate', updateCertificates)



module.exports = routeCertificate