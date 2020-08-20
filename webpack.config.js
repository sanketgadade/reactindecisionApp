// assign your entry output so webpack can directly target this file.

const path =require('path');


//console.log('your path of project is',__dirname); //get root directory
//console.log(path.join(__dirname,'public'));   // get absolute path

module.exports= {
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module: {
        rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        }]
      }

};