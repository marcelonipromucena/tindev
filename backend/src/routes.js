const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

routes.get('/', (req, res) => {
  req.query.name;
  return res.json({ message: `Olá ${req.query.name}` });
});

routes.post('/devs', DevController.store);

module.exports = routes;
