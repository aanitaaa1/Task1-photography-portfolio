import { readFile } from 'node:fs/promises'
import { pool } from '../src/db.js'

// The data from client/src/data/photos.js, moved here
const photos = [
  { title: 'Quiet Lake', location: 'Norway', category: 'Nature', src: '/images/image-3.jpg', alt: 'Hiker with a backpack standing by a forest lake', size: 'tall' },
  { title: 'Mountain Leap', location: 'Canada', category: 'Nature', src: '/images/image-2.jpg', alt: 'Child jumping over a mountain stream', size: 'wide' },
  { title: 'Willow Garden', location: 'Kyoto', category: 'Architecture', src: '/images/image-1.jpg', alt: 'Traditional roof seen through willow branches', size: 'normal' },
  { title: 'Hidden Temple', location: 'Bali', category: 'Travel', src: '/images/image-7.jpg', alt: 'Old stone temple hidden in the jungle', size: 'normal' },
  { title: 'Last Wave', location: 'Portugal', category: 'Nature', src: '/images/image-6.jpg', alt: 'Surfer on the waves at an orange sunset', size: 'wide' },
  { title: 'Golden Arch', location: 'Rome', category: 'Architecture', src: '/images/image-5.jpg', alt: 'Ornate stone arch against a blue sky', size: 'tall' },
  { title: 'Open Road', location: 'India', category: 'Travel', src: '/images/image-4.jpg', alt: 'View through the windshield of an old jeep', size: 'wide' },
]

async function seed() {
  // 1. Create the table if it does not exist
  const schema = await readFile(new URL('./schema.sql', import.meta.url), 'utf8')
  await pool.query(schema)

  // 2. Empty the table so the seed can be run again safely
  await pool.query('TRUNCATE photos RESTART IDENTITY CASCADE')

  // 3. Insert every photo
  for (const photo of photos) {
    await pool.query(
      'INSERT INTO photos (title, location, category, src, alt, size) VALUES ($1, $2, $3, $4, $5, $6)',
      [photo.title, photo.location, photo.category, photo.src, photo.alt, photo.size]
    )
  }

  console.log(`Seeded ${photos.length} photos`)
  await pool.end()
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})