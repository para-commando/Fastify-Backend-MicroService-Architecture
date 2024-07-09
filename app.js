const fastify = require('fastify')({ logger: true })
const routes = require('./routes/AllRoutes')
const controlRoomImports = require('./ControlRoom/GetRequestsRoomOne/GetRequestsBlockOne')
// method One
routes.allRoutes(fastify);
// method Two
//the given prefix acts as a basepath for all the routes in that controller
fastify.register(controlRoomImports.GetRequestsBlockOne,{prefix: '/roomOne'});
fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1) 
  }
})

module.exports.fastifyApp = fastify;