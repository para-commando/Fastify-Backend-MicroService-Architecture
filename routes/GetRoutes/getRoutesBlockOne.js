module.exports.getRoutesBlockOne = (fastifyApp) => {
  console.log('adsfaaaaaaaaaaaaaaaaaaaaaaaaaa');
  
  fastifyApp.route({
    method: 'GET',
    url: '/a',
    schema: {
      // request needs to have a querystring with a `name` parameter
      querystring: {
        type: 'object',
        properties: {
          name: { type: 'string' },
        },
        required: ['name'],
      },
      // the response needs to be an object with an `hello` property of type 'string'
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' },
          },
        },
      },
    },
    // this function is executed for every request before the handler is executed
    preHandler: (request, reply, done) => {
      // E.g. check authentication
      done();
    },
    handler: (request, reply) => {
      console.log("🚀 ~ request:", request)
      reply.send({ hello: JSON.parse(request.query.name) });
    },
  });
  
};
