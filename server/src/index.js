import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import photosRouter from './routes/photos.js'

const app = express()
const PORT = process.env.PORT || 3000

// Allow the frontend (different port/domain) to call this server
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json())

app.get('/api/health', (req, res) => res.json({ ok: true }))
app.use('/api/photos', photosRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})