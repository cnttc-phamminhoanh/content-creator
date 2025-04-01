module.exports = async () => {
  console.log('\nTearing down test environment...')
  if (global.testDB) {
    await global.testDB.close()
  }
}
