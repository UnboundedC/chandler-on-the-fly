import { pool } from '../config/database.js'

const createTripUser = async (req, res) => {
  try {
    const { trip_id, user_id } = req.body

    const results = await pool.query(
      'INSERT INTO trips_users (trip_id, user_id) VALUES ($1, $2) RETURNING *',
      [trip_id, user_id]
    )

    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getTripsUsers = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM trips_users')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const trip_id = parseInt(req.params.trip_id)

    const results = await pool.query(
      'SELECT users.* FROM users \
      JOIN trips_users ON users.id = trips_users.user_id \
      WHERE trips_users.trip_id = $1',
      [trip_id]
    )

    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

const getAllTrips = async (req, res) => {
  try {
    const user_id = parseInt(req.params.user_id)

    const results = await pool.query(
      'SELECT trips.* FROM trips \
      JOIN trips_users ON trips.id = trips_users.trip_id \
      WHERE trips_users.user_id = $1',
      [user_id]
    )

    res.status(200).json(results.rows)
  } catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export default {
  createTripUser,
  getTripsUsers,
  getAllUsers,
  getAllTrips
}
