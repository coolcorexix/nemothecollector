import Hapi from '@hapi/hapi';

async function init() {
    const server = Hapi.server({
        port: 3001,
        host: 'localhost',
    });
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World 313!';
        }
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();