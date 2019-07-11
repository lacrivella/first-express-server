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
});