module.exports.getRoutesBlockOne = (fastifyApp) => {
  fastifyApp.route({
    method: 'GET',
    url: '/queryParams',
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
            helloFromQueryParams: { type: 'string' },
          },
        },
      },
    },
    // this function is executed for every request before the handler is executed
    preHandler: (request, reply, done) => {
      // E.g. check authentication
      done();
    },
    handler: async (request, reply) => {
      request.log.info(
        { queryValue: request.query.name },
        ' 🚀 request.query.name'
      );
      reply.send({ helloFromQueryParams: JSON.parse(request.query.name) });
    },
    });
  	fastifyApp.route({
    	method: 'GET',
    	url: '/pathParams/:name',
    	schema: {
      	// request needs to have a querystring with a `name` parameter
      	params: {
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
            	helloFromQueryParams: { type: 'string' },
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
        try{
      	request.log.info(
     
        { paramValue: request.params.name },
        ' 🚀 request.params.name'
      );
      const ad = request.params.name;
      reply.send({ helloFromQueryParams: ad });
    } catch (error) {
      console.log("🚀 ~ error:", error)
      return error;
    }
    },
  });
  };