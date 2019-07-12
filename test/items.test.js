const request = require('supertest');
const app = require('../lib/app');

//REMEMBER CRUD -- CREATE READ UPDATE DELETE

describe('items routes', () => {
  const pathWay = '/api/v1/birds';
  it('create a bird with POST', () => {
    return request(app)
      .post(pathWay)
      .send({ type: 'bluejay', family: 'corvidae', color: 'blue'})
      .then(res => {
        expect(res.body).toEqual({
          type: 'bluejay',
          family: 'corvidae',
          color: 'blue'
        });
      });
  }); 

  it('can get an array of birds with GET', () => {
    return request(app)
      .get(pathWay)
      .then(res => {
        expect(res.body).toEqual([{
          type: 'bluejay',
          family: 'corvidae',
          color: 'blue'
        }]);
      });
  });

  it('can find a bird by id/index', () => {
    return request(app)
    .get(`${pathWay}/0`)
    .then(res => {
      expect(res.body).toEqual({
        type: 'bluejay',
        family: 'corvidae',
        color: 'blue'
      });
    });
  });

  it('can update the list with PUT', () =>{
    const newBird = {
      type: 'kiwi',
      family: 'apterygidae',
      color: 'brown not green'
    };
    return request(app)
    .put(`${pathWay}/0`)
    .send(newBird)
    .then(res => {
      expect(res.body).toEqual({
        type: 'kiwi',
        family: 'apterygidae',
        color: 'brown not green'
      });
    });
  });

  it('deletes a bird by index', () => {
    return request(app)
      .delete(`${pathWay}/0`)
      .then(res => {
        expect(res.body).toEqual({
          type: 'kiwi',
          family: 'apterygidae',
          color: 'brown not green'
      });
    });
  });
});