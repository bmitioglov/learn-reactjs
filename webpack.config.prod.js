const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './src/App.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'app_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'production',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        })
    ],
    optimization: {
        minimize: true
    }

}
