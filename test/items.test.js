const request = require('supertest');
const app = require('../lib/app');

//REMEMBER CRUD -- CREATE READ UPDATE DELETE

describe('items routes', () => {
  it('create a bird with POST', () => {
    return request(app)
      .post('/api/v1/birds')
      .send({ type: 'bluejay', family: 'corvidae', color: 'blue'})
      .then(res => {
        expect(res.body).toEqual({
          type: 'bluejay',
          family: 'corvidae',
          color: 'blue'
        });
      });
  }); 

  it('can getan array of birds with GET', () => {
    return request(app)
      .get('/api/v1/birds')
      .then(res => {
        expect(res.body).toEqual([{
          type: 'bluejay',
          family: 'corvidae',
          color: 'blue'
        }]);
      });
  });


  
});