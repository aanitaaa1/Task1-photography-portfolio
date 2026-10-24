import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg

// A pool keeps a few database connections open and reuses them
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})