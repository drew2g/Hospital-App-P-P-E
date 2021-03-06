import swaggerJSDoc from 'swagger-jsdoc';

const init = (port) => {
  const swaggerDefinition = {
    info: {
      title: 'PPE Docs',
      version: '1.0.0',
      description:
        'A way to for hospitals to request PPE and other necessary equipment from the govt.',
    },
    host: `localhost:${port}`,
    basePath: '/',
  };
  const options = {
    swaggerDefinition,
    apis: ['./src/**/*.js'],
  };
  return swaggerJSDoc(options);
};

export default init;
