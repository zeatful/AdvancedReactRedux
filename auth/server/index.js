const express = require('express');
const http = require( 'http');
const bodyParser = require( 'body-parser');
const morgan = require( 'morgan');
const router = require('./router.js');
const mongoose = require( 'mongoose');

const app = express();

// App setup -  express middleware for each request
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app);

mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true });

// Server steup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on ${port}`);
console.log('Well done!');