const EntitySchema = require('typeorm').EntitySchema

const User = new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    user_id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid',
    },
    username: {
      type: 'varchar',
      length: 50,
      unique:true,
    },
    email: {
      type: 'varchar',
      length: 100,
      unique: true,
    },
    password_hash: {
      type: 'varchar',
      length: 255,
    },
    created_at: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
  },
  relations: {
    transcripts: {
      type: 'one-to-many',
      target: 'Transcript',
      inverseSide: 'user',
    },
  },
})

module.exports = User
