const hapi = require('hapi')


const mockMovie = require('./mock_movie')

const server = new hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/movie/{id}',
    handler: function (request, reply) {
        console.log(request.params.id)
        reply(mockMovie);
    }
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});