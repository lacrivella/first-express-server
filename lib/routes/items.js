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

  //PUT
  .put('/:id', (req, res) => {
    const {
      type,
      family,
      color
    } = req.body

    const newBird = {
      type,
      family,
      color
    };

    birds[req.params.id] = newBird;
    res.send(birds[req.params.id]);
  })
  
    //DELETE
    .delete('/:id', (req, res) => {
      const deleted = birds.splice(req.params.id, 1);
      res.send(deleted[0]);
    })