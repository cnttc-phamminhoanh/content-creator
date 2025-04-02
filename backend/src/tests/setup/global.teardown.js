module.exports = async () => {
  if (global.testDB) {
    await global.testDB.close()
  }
}
