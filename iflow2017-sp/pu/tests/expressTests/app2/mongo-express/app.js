var
    express = require('express')
  , http = require('http')
  ;

var app = express();
var policy = require("./Policy.js")(__dirname, app);

var
    config = require('./config')
  , middleware = require('./middleware')
  ;


app.use('/', middleware(config));
app.listen(config.site.port, function() {
  console.log("Mongo Express server listening on port " + (config.site.port || 80));
});
