const EntitySchema = require('typeorm').EntitySchema

const Transcript = new EntitySchema({
  name: 'Transcript',
  tableName: 'transcripts',
  columns: {
    transcript_id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid'
    },
    user_id: {
      type: 'uuid'
    },
    text: {
      type: 'text'
    },
    audio_url: {
      type: 'text',
      nullable: true
    },
    created_at: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP'
    }
  },
  relations: {
    users: {
      type: 'many-to-one',
      target: 'User',
      inverseSide: 'transcript',
      joinColumn: {
        name: 'user_id'
      },
      cascade: true
    }
  }
})

module.exports = Transcript
