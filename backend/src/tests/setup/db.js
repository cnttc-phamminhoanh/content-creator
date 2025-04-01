const { newDb } = require('pg-mem')
const { DataSource } = require('typeorm')

const setupTestDB = async () => {
  // Tạo PostgreSQL in-memory instance
  const db = newDb({
    autoCreateForeignKeyIndices: true
  })

  // Mock PostgreSQL functions
  db.public.registerFunction({
    name: 'current_timestamp',
    implementation: () => new Date(),
  })

  // Tạo TypeORM connection
  const dataSource = new DataSource({
    type: 'postgres', // Vẫn giữ là postgres dù dùng pg-mem
    entities: [
      require('../../entities/user'),
      require('../../entities/transcript')
    ],
    synchronize: true
  })

  // Kết nối với pg-mem
  const connection = await db.adapters.createTypeormConnection(dataSource)
  await connection.initialize()

  return connection
}

module.exports = {
  setupTestDB,
}
