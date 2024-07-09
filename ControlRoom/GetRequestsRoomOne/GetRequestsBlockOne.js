const { schemas } = require('../Schemas/schemas');

module.exports.GetRequestsBlockOne = (fastify, options, done) => {
  //  to access this http://localhost:3000/roomOne/GetReqOne
  // specifying response schema makes the fastify faster
  fastify.get(
    '/GetReqOne',
    { schema: schemas.responseSchemaGetReqOne },
    (request, reply) => {
      reply.send({ message: 'Hello from roomOne' });
    }
  );
  done();
};
