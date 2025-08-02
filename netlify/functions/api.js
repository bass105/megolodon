const serverless = require('serverless-http');
const { app } = require('../../server/index.ts');

const handler = serverless(app);
module.exports = { handler };