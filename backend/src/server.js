const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-vnaya.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  },
);

const server = express();
server.use(express.json());
server.use(routes);

server.listen(3333);
