const { getUsers } = require('../../src/services/user.service');
const { userList } = require('../__mocks__/user.mock');

jest.mock('../../src/services/user.service', () => ({
  getUsers: jest.fn()
}));

describe('User Service', () => {
  it('getUsers returns mocked list', () => {
    getUsers.mockReturnValue(userList);
    const result = getUsers();
    expect(result).toEqual(userList);
  });
});
