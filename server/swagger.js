const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'MERN Stack API Documentation',
      version: '1.0.0',
      description: 'Documentation for MERN Stack API',
    },
    servers: [
      {
        url: 'http://localhost:1080',
        description: 'Development server',
      },
    ],
  },
  apis: ['./Routes/*.js'], // Path to the API routes folder
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
