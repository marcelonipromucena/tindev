const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();
server.use(express.json());
server.use(routes);

server.listen(3333);
