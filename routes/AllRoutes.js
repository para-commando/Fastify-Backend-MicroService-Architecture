const getRoutesBlockOne = require('./GetRoutes/getRoutesBlockOne')

module.exports.allRoutes = (fastifyApp) => {
    getRoutesBlockOne.getRoutesBlockOne(fastifyApp);
}

