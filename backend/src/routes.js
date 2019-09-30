const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  req.query.name;
  return res.json({ message: `Olá ${req.query.name}` });
});

routes.post('/devs', (req, res) => {
  return res.json(req.body);
});

module.exports = routes;
