const { setupTestDB } = require('./db')

module.exports = async () => {
  global.testDB = await setupTestDB()
}
