const fastify = require('fastify')({ logger: true })
const routes = require('./routes/AllRoutes')
// method One
routes.allRoutes(fastify);

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1) 
  }
})

module.exports.fastifyApp = fastify;