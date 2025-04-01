process.env.NODE_ENV = 'test'
process.env.DB_NAME = 'testdb'

global.generateFakeUser = () => ({
  username: 'testuser_' + Math.random().toString(36).substring(7),
  email: `test_${Math.random().toString(36).substring(7)}@example.com`,
  password: 'Test@1234'
})
