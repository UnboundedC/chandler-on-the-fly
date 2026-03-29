import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import ActivityBtn from '../components/ActivityBtn'
import DestinationBtn from '../components/DestinationBtn'
import './TripDetails.css'

const TripDetails = ({ data }) => {
  const { id } = useParams()
  const [trip, setTrip] = useState({})
  const [activities, setActivities] = useState([])
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    const result = data.filter((item) => item.id === parseInt(id))[0]
    if (result) {
      setTrip(result)
    }

    const fetchActivities = async () => {
      const response = await fetch('/api/activities/' + id)
      const data = await response.json()
      setActivities(data)
    }

    const fetchDestinations = async () => {
      const response = await fetch('/api/trips_destinations/destinations/' + id)
      const data = await response.json()
      setDestinations(data)
    }

    fetchActivities()
    fetchDestinations()
  }, [data, id])

  return (
    <div className="TripDetails">
      <div className="flex-container">
        <div className="left-side">
          <h2>{trip.title}</h2>
          <p>📅 Duration: {trip.num_days} days</p>
          <p>🛫 Depart: {trip.start_date && trip.start_date.slice(0, 10)}</p>
          <p>🛬 Return: {trip.end_date && trip.end_date.slice(0, 10)}</p>
          <p>{trip.description}</p>
        </div>
        <div className="right-side" style={{ backgroundImage: `url(${trip.img_url})` }}>
        </div>
      </div>

      <div className="flex-container">
        <div className="bottom-section">
          <div className="activities">
            {activities && activities.length > 0 ? (
              activities.map((act) => (
                <ActivityBtn
                  key={act.id}
                  id={act.id}
                  activity={act.activity}
                  num_votes={act.num_votes}
                />
              ))
            ) : (
              <p></p>
            )}
          </div>
          <Link to={'/activity/create/' + id}>
            <button className="addActivityBtn">+ Add Activity</button>
          </Link>
        </div>

        <div className="bottom-section">
          <div className="destinations">
            {destinations && destinations.length > 0 ? (
              destinations.map((dest) => (
                <DestinationBtn
                  key={dest.id}
                  id={dest.id}
                  destination={dest.destination}
                />
              ))
            ) : (
              <p></p>
            )}
          </div>
          <Link to={'/destination/new/' + id}>
            <button className="addDestinationBtn">+ Add Destination</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TripDetails