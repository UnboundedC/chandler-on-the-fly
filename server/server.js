import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import tripRoutes from './routes/trips.js'
import activityRoutes from './routes/activities.js'
import destinationRoutes from './routes/destinations.js'
import tripDestinationRoutes from './routes/trips_destinations.js'
import userRoutes from './routes/users.js'
import tripUserRoutes from './routes/trips_users.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/trips', tripRoutes)
app.use('/api/activities', activityRoutes)
app.use('/api/destinations', destinationRoutes)
app.use('/api/trips_destinations', tripDestinationRoutes)
app.use('/api/users', userRoutes)
app.use('/api/trips_users', tripUserRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/web103_unit6_lab-main/dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/web103_unit6_lab-main/dist', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ On the Fly API</h1>')
  })
}

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})
