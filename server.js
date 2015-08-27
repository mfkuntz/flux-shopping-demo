// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true,
//   stats: {
//     colors: true
//   }
// }).listen(3000, 'localhost', function (err) {
//   if (err) {
//     console.log(err);
//   }

//   console.log('Listening at localhost:3000');
// });

var express = require('express'),
  exphbs = require('express-handlebars'),
  http = require('http'),
  path = require('path'),
  routes = require('./routes');

var app = express();
var port = process.env.PORT || 8080;

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', routes.index);

app.use("/", express.static(path.join(__dirname, 'static')));

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});