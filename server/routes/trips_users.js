import express from 'express'
import TripsUsersController from '../controllers/trips_users.js'

const router = express.Router()

router.get('/', TripsUsersController.getTripsUsers)
router.get('/users/:trip_id', TripsUsersController.getAllUsers)
router.get('/trips/:user_id', TripsUsersController.getAllTrips)
router.post('/', TripsUsersController.createTripUser)

export default router
