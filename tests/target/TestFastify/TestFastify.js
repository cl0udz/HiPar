"use strict"; // Require the framework and instantiate it

var fastify = require('fastify')({
  logger: true
}); // Declare a route


fastify.post('/', function (request, reply) {
  console.log(request.body);
  reply.send("post successfully!");
});
fastify.get('/', function (request, reply) {
  reply.send({
    hello: 'world'
  });
}); // Run the server!


fastify.listen(3000, function (err, address) {
  if (err) throw err;
  fastify.log.info("server listening on ".concat(address));
  utils.whatWeDoThisTime(test, user_input, __dirname);
});

var utils = require('../TestcaseUtils');

var user_input = {
  'username': 'a'
};

function test(user_input) {
  user_input = JSON.stringify(user_input);
  utils.sendViaWebRequest('post', user_input, '/', 3000, '127.0.0.1');
}