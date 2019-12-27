(function () {
    'use strict';

    module.exports = {
        init
    }

    const mongoose = require('mongoose');
    const mongodbConfig = require('../../config/mongodb-config').mongodb;

    function init() {
        const options = {
            useNewUrlParser: true,
            authSource: 'admin'
        };
        const connectionString = prepareConnectionString(mongodbConfig);
        
        mongoose.connect(connectionString, options)
            .then((result) => {
                console.log('MongoDB connection successful. DB: ' + connectionString);
            })
            .catch((error) => {
                console.log(error.message);
                console.log('Error occurred while connecting to DB: ' + connectionString);
            });
    }

    function prepareConnectionString(config) {
        let connectionString = 'mongodb+srv://';

        if (config.user) {
            connectionString += config.user + ':' + config.password + '@';
        }

        connectionString += config.server + '/' + config.database + '?retryWrites=true';

        return connectionString;
    }

})()