const path = require('path');

const dotenv = require('dotenv').config( {
    path: path.join(__dirname, '.env'),
} );

module.exports = dotenv.parsed.ENV === 'development'
    ? require ('./webpack.config.dev')
    : require ('./webpack.config.prod');
