process.env['PORT'] = '3000';
process.env['NODE_ENV'] = 'development';
process.env['CLIENT_API_PATH'] = '/api';
process.env['APPSECRET'] = 'sOmeCrAzYhAsH894372';
process.env['REDIS_URL'] = 'redis://localhost:6379';
process.env['MONGO_URL'] = 'mongodb://admin:pass@localhost:27017/testmydb';
require("./app.js");
