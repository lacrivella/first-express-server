const { Router } = require('express');

const birds = [];

module.exports = Router()
  //POST
  .post('/', (req, res) => {
    const {
      type,
      family,
      color
    } = req.body

    const bird = {
      type,
      family,
      color
    };

    birds.push(bird);
    res.send(bird);
  })

  //GET
  .get('/', (req, res) => {
    res.send(birds)
  })

  //GET by id
  .get('/:id', (req, res) => {
    res.send(birds[req.params.id]);
  })