const request = require('supertest');
const app = require('../../src/app');

jest.mock('../../src/services/user.service', () => ({
  getUsers: jest.fn(() => require('../__mocks__/user.mock').userList)
}));

const { userList } = require('../__mocks__/user.mock');

describe('API - /api/users', () => {
  it('GET /api/users should return 200 and a list of users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(userList);
  });
});
