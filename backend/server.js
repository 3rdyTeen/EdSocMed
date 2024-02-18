require('dotenv').config();
require('express-async-errors');

const http = require('http') // 
const app = require('./app')

const server = http.createServer(app);

const connectDB = require('./src/db/connectDB')

const port = process.env.PORT || 8800;

connectDB();

server.listen(port, () => {
    console.log(`App running on port ${port} ...`);
});
