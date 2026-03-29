# Milestone 2

## Tasks

- [x] In `planning/wireframes.md`: add wireframes for at least three pages in your web app.
  - [x] Include a list of pages in your app
- [x] In `planning/entity_relationship_diagram.md`: add the entity relationship diagram you developed for your database.
  - [x] Entity relationship diagram includes all tables in the database
- [ ] Prepare your three-minute pitch presentation

## Wireframes

Wireframes have been added to [`planning/wireframes.md`](../planning/wireframes.md) for the following pages:

1. **Home / Trip List Page** — Grid view of all active trips with cards
2. **Trip Detail Page** — Full trip info with destinations, activities, budget, and dates
3. **Create / Edit Trip Page** — Form for creating or editing a trip

Additional pages in the app:
4. Destinations Page — Browse all available destinations
5. Destination Detail Page — View a destination and its associated trips

## Entity Relationship Diagram

The full ER diagram has been added to [`planning/entity_relationship_diagram.md`](../planning/entity_relationship_diagram.md).

**Tables in the database:**
- `trips` — stores trip details (title, description, image, dates, cost)
- `destinations` — stores destination info (name, description, city, country, images)
- `activities` — stores activities linked to trips with vote counts
- `trips_destinations` — join table linking trips and destinations (many-to-many)
- `users` — stores user info (GitHub ID, username, avatar, access token)
- `trips_users` — join table linking trips and users (many-to-many)

## Pitch Presentation

**App Name:** ✈️ On the Fly

**Elevator Pitch:**
Planning group trips — like bachelor parties, graduation tours, or road trips — is complicated when balancing schedules and budgets. On the Fly is a web app that makes collaborative trip planning easy. Users can create trips, assign destinations, add activities for the group to vote on, and track the budget — all in one place.

**Key Features:**
- Create, view, update, and delete trips with cost, date, and description
- Browse and assign destinations to trips
- Add activities to trips and vote on favorites
- View all trips associated with a destination
- View a trip's complete budget, description, dates, and entertainment options

**Tech Stack:**
- Frontend: React (Create React App)
- Backend: Express.js + Node.js
- Database: PostgreSQL (hosted on Render)
- API Testing: Postman

---

## Reflection

### 1. What went well during this milestone?

Setting up the database schema and understanding the relationships between tables went smoothly. The ER diagram clearly maps out how trips, destinations, activities, and users connect through join tables. Having the schema images as a reference made it straightforward to design the wireframes around the actual data model.

### 2. What challenges did you encounter?

The main challenge was deciding how to organize the UI to present all the trip information (destinations, activities, budget, dates) without overwhelming the user. Balancing simplicity with the need to show multiple related data types on the Trip Detail page required careful layout planning in the wireframes.

### 3. What would you do differently if you could start over?

I would spend more time upfront sketching out the user flow between pages before jumping into individual wireframes. Understanding how users navigate from the trip list to trip details to adding destinations and activities would have helped me design more intuitive page layouts from the start.
