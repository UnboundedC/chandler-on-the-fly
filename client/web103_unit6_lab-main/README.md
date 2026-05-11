# ✈️ On the Fly

**On the Fly** is a collaborative trip-planning web app. Users can create trips, assign destinations, add activities for the group to vote on, and track budgets — all in one place.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, React Router 7, Vite |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| Hosting | Render |

---

## Features

### Baseline Features

✅ **View all trips**
Users can browse a grid of all existing trips with title, dates, cost, and number of days.

> GIF coming soon

✅ **View trip details**
Users can click into a trip to see its full description, date range, total cost, linked destinations, and activities.

> GIF coming soon

✅ **Create a trip**
Users can fill out a form to add a new trip with a title, description, image, dates, number of days, and total cost.

> GIF coming soon

✅ **Edit a trip**
Users can update any field of an existing trip through an edit form.

> GIF coming soon

✅ **Delete a trip**
Users can delete a trip from the trip detail page.

> GIF coming soon

✅ **View all destinations**
Users can browse a list of all available destinations with name, city, country, and image.

> GIF coming soon

✅ **Add a destination to a trip**
Users can link an existing destination to a trip through the trip detail page.

> GIF coming soon

### Custom Features

✅ **Create an activity for a trip**
Users can add a new activity to any trip, which is then listed on the trip detail page.

> GIF coming soon

✅ **Vote on an activity**
Users can upvote activities on a trip to help the group decide what to do.

> GIF coming soon

---

## Setup Instructions

### Prerequisites

- Node.js (v18+)
- PostgreSQL database (local or hosted on Render)

### Environment Variables

Create a `.env` file in the `server/` directory with the following:

```
DATABASE_URL=your_postgresql_connection_string
```

### Install & Run

**Backend:**

```bash
cd server
npm install
npm start
```

> `npm start` resets the database and starts the server with nodemon.

**Frontend:**

```bash
cd client/web103_unit6_lab-main
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Database Schema

See [`planning/entity_relationship_diagram.md`](../../planning/entity_relationship_diagram.md) for the full ERD.

**Tables:** `trips`, `destinations`, `activities`, `trips_destinations`, `users`, `trips_users`

---

## Milestones

| Milestone | Description |
|-----------|-------------|
| 1 | Concept, user stories, feature list, shared GitHub repo |
| 2 | Wireframes, entity relationship diagram, pitch prep |
| 3 | Pitch, GitHub issues & project board, begin development |
| Final | Full development, deploy to Render, Demo Day prep |
| Demo Day | Live demo presentation |
