require("dotenv").config();
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = process.env.PORT || 1080;

//middleware for data commig from the frontend will converted into json form
app.use(express.json());

// to avoid the cores error
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server start ar Port No :${PORT}`);
});
