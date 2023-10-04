const express = require('express');
const routeBussiness = require('./routeBussiness');
const routeCareers = require('./routeCareers');
const routeMainCategory = require('./routeMainCategory');
const routeCareersType = require('./routeCareersType');
const { sendEmail } = require('./sendEmail');
const routeUser = require('./routeUser');
const routeServices = require('./routeServices');
const routeCertificate = require('./routeCertificate');
const routeImage = require('./routeImage');
const routeProduct = require('./routeProduct');
const routeAdvertisements = require('./routeAdvertisements');
const routes = express.Router();


routes.use('/bussiness', routeBussiness)
routes.use('/careers', routeCareers)
routes.use('/maincategory', routeMainCategory)
routes.use('/careerstype', routeCareersType)
routes.use('/user', routeUser)
routes.use('/services', routeServices)
routes.use('/certificate', routeCertificate)
routes.use('/image', routeImage)
routes.use('/product', routeProduct)
routes.use('/advertisements', routeAdvertisements)
routes.post('/sendemail', (req, res) => {
    const { to, subject, text } = req.body;
    sendEmail(to, subject, 
        `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Form</title>
            </head>
            <body>
                <form method="POST" action="https://formspree.io/lampv606.test@gmail.com">
                    <input type="email" name="email" placeholder="Your email" />
                    <textarea name="abc" placeholder="Your message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </body>
        </html>
    `
    );
    res.json({ message: 'Email sent successfully' });
});



module.exports = routes