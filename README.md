# API Testing Starter (Express + Jest + Supertest)

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tests](https://github.com/FernandoZnga/api-testing-starter/actions/workflows/test.yml/badge.svg)](https://github.com/FernandoZnga/api-testing-starter/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/FernandoZnga/api-testing-starter/branch/main/graph/badge.svg)](https://codecov.io/gh/FernandoZnga/api-testing-starter)
[![Jest](https://img.shields.io/badge/tested%20with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)

This is a simple boilerplate for building and testing APIs using **Express.js**, **Jest**, and **Supertest**.

## 📁 Project Structure

```
src/                # Source code
  app.js            # Express app
  routes/           # API routes
  controllers/      # Route handlers
  services/         # Business logic

tests/              # All tests
  integration/      # API endpoint tests
  unit/             # Unit tests (services)
  __mocks__/        # Static mocks for testing
```

## 🧪 Run Tests

```bash
npm install
npm test
```

## ✅ Example Test

```js
const request = require('supertest');
const app = require('../../src/app');

describe('GET /api/users', () => {
  it('should return 200 and a list of users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
```

## 📦 Dependencies

- Express
- Jest
- Supertest

## 📄 License

MIT
