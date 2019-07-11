const { Router } = require('express');

const birds = [];

module.exports = Router()
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

