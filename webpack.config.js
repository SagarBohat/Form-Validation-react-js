const path = require('path');

module.exports= {

    entry: path.resolve(__dirname,'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dir') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module : {
        rules : [
            {
             test: /\.js$/,
             include : path.resolve(__dirname, 'src'),
             loader: "babel-loader",
             query :{
                 presets :  ['react','es2015','stage-2']
             }
            }
    ]
    }
}