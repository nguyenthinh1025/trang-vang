const express = require('express');
const mysql2 = require('mysql2')
const cors = require('cors');
const routes = require('./src/routes');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static("."));
app.listen(5000, () => {
    console.log('Server run 5000');
})
app.use('/api/v1', routes)
const options = {
    definition: {
        info: {
            title: "Swagger Trang Vàng",
            version: "1.0.0"
        }
    },
    apis: ["src/swagger/index.js"]
}

const specs = swaggerJsDoc(options);

app.use("/api-swagger", swaggerUi.serve, swaggerUi.setup(specs));


