const log = require('pino')({ level: 'info' })
const fastify = require('fastify')({ logger: log })
const routes = require('./routes/AllRoutes')
const controlRoomImports = require('./ControlRoom/GetRequestsRoomOne/GetRequestsBlockOne')

// onRequest hook: runs before a request is processed
fastify.addHook('onRequest', async (request, reply) => {
  request.log.info('onRequest hook called')
  // Log request information
  request.log.info(`Incoming request: ${request.method} ${request.url}`)
})

// preParsing hook: runs before parsing the request
fastify.addHook('preParsing', async (request, reply, payload) => {
  request.log.info('preParsing hook called')
  // Modify the request payload (example: trim all string payloads)
  if (typeof payload === 'string') {
    payload = payload.trim()
  }
  return payload
})

// preValidation hook: runs before validating the request
fastify.addHook('preValidation', async (request, reply) => {
  request.log.info('preValidation hook called')
  // Perform additional validation (example: check if a custom header is present)
  // if (!request.headers['x-custom-header']) {
  //   reply.status(400).send({ error: 'x-custom-header is required' })
  // }
})

// preHandler hook: runs before handling the request
fastify.addHook('preHandler', async (request, reply) => {
  request.log.info('preHandler hook called')
  // Perform actions before handler (example: check user authentication)
  if (!request.headers['authorization']) {
    reply.status(401).send({ error: 'Unauthorized' })
  }
})

// preSerialization hook: runs before serializing the response
fastify.addHook('preSerialization', async (request, reply, payload) => {
  request.log.info('preSerialization hook called')
  // Modify the response payload (example: add a timestamp to the response)
  payload.timestamp = Date.now()
  return payload
})

// onSend hook: runs before sending the response
fastify.addHook('onSend', async (request, reply, payload) => {
  request.log.info('onSend hook called')
  // Perform actions before sending (example: log the response payload)
 // request.log.info(`Response payload: ${JSON.stringify(payload)}`)
  return payload
})

// onResponse hook: runs after the response is sent
fastify.addHook('onResponse', async (request, reply) => {
  request.log.info('onResponse hook called')
  // Log that the response has been sent
  request.log.info(`Response sent for request: ${request.method} ${request.url}`)
})


// method One
routes.allRoutes(fastify);
// method Two
//the given prefix acts as a basepath for all the routes in that controller
fastify.register(controlRoomImports.GetRequestsBlockOne,{prefix: '/roomOne'});
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    log.error(err,"Error occurred while starting server");
    process.exit(1) 
  }
})
module.exports.fastifyApp = fastify;