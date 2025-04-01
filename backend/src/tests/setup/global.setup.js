const { setupTestDB } = require('./db')

module.exports = async () => {
  console.log('\nSetting up test environment...')
  global.testDB = await setupTestDB()
}
