const { schemas } = require('../Schemas/schemas');

module.exports.GetRequestsBlockOne = (fastify, options, done) => {
  //  to access this http://localhost:3000/roomOne/GetReqOne
  // specifying response schema makes the fastify faster
  fastify.get(
    '/GetReqOne',
    { schema: schemas.responseSchemaGetReqOne },
    async (request, reply) => {
      try {
        const [rows, fields] = await fastify.mysql.query(
          'SELECT * FROM Weapons'
        );
        console.log('🚀 ~ handler: ~ rows:', rows);
        reply.send({ weapons: rows });
    } catch (error) {
      console.log('🚀 ~ handler: ~ error:', error);
    }
    }
  );
  done();
};
