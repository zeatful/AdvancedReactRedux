import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './router.mjs';

const app = express();

// App setup -  express middleware for each request
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app);

// Server steup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on ${port}`);
console.log('Well done!');