'use strict';

const Hapi = require('@hapi/hapi');


const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.register({
        register: require('hapi-router'),
        options:{
            routes: 'src/**/routes.js'
        }
    })

    const routes = require('./../routes');
    server.route(routes);

    // $lab:coverage:off$
    if(require.main === module){
        await server.start();
        console.log('Server running on %s', server.info.uri);
    } else {
        module.exports = server
    }
    // $lab:coverage:on$
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();