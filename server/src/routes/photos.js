import { Router } from 'express'
import { pool } from '../db.js'

const router = Router()

// GET /api/photos - returns all photos as JSON
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM photos ORDER BY id')
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Could not load photos' })
  }
})

export default router