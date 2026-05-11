# Milestone 3

## Tasks

- [x ] Pitch your idea in class
- [x ] In your repo, create at least 5 issues from the features on your feature list
- [x ] In your repo, create a project board and share it with `codepathreview`
- [x ] In your repo, update the status of issues in your project board
- [x ] In your repo, create a GitHub Milestone for each final project unit (5 total)
- [x ] Set the Milestone 3 GitHub Milestone to 100% completed before submission
- [x ] In `README.md`, check off completed features with a ✅ emoji and include a GIF under each
- [x ] Complete all five Reflection questions below

---

## GitHub Issues

The following issues have been created in the repository from the feature list:

| # | Feature | Label |
|---|---------|-------|
| 1 | View all trips (Read Trips) | baseline |
| 2 | Create a new trip (Create Trip) | baseline |
| 3 | Edit an existing trip (Update Trip) | baseline |
| 4 | Delete a trip (Delete Trip) | baseline |
| 5 | View all destinations (Read Destinations) | baseline |
| 6 | Add a destination to a trip (trips_destinations join) | baseline |
| 7 | View trip details with destinations and activities | baseline |
| 8 | Create an activity for a trip | custom |
| 9 | Vote on an activity | custom |

---

## Project Board
---

## GitHub Milestones

GitHub Milestones have been created for all five project units:

| Milestone | Unit | Status |
|-----------|------|--------|
| Milestone 1 - Unit 5 | Concept & User Stories | 100% |
| Milestone 2 - Unit 6 | Wireframes & ERD | 100% |
| Milestone 3 - Unit 7 | Pitch & Development Start | 100% |
| Final - Unit 8 | Full Development & Deploy | 0% |
| Demo Day - Unit 9 | Demo & Presentation | 0% |

---

## Completed Features

See [`README.md`](../client/web103_unit6_lab-main/README.md) for the full feature list with GIFs.

Features completed this milestone are marked with ✅ in the README.

---

## Reflection

### 1. How did the pitch go? What feedback did you receive?

The pitch went well. We received positive feedback on the collaborative trip-planning concept. Reviewers appreciated the voting system for activities as a unique differentiator. One suggestion was to make the budget tracking more visual, such as a progress bar showing how much of the total budget has been allocated.

### 2. What issues did you create, and how did you prioritize them?

We created 9 issues in total: 7 baseline features covering the core CRUD operations for trips, destinations, and the join table, and 2 custom features for creating activities and voting on them. We prioritized baseline CRUD for trips first since all other features depend on having trips in the database. Destinations and activities were scoped for later in the sprint.

### 3. How is development progressing? What have you completed so far?

Development has started on the frontend and backend. The Express server is configured with routes and controllers for all six tables. On the React side, the Read Trips and Trip Details pages are functional. The Create Trip and Edit Trip forms are partially complete.

### 4. What challenges have you encountered during development?

One challenge was connecting the frontend to the backend and handling CORS properly during local development. Another was structuring the React components to share state efficiently across pages  for example, passing trip data from the list view into the detail and edit views without redundant API calls.

### 5. What are your next steps to complete the project?

Next steps include finishing the Create/Edit Trip forms, implementing the Add Destination to Trip flow, and building out the activity creation and voting features. After core features are working, we will deploy the backend and database to Render and the frontend to a static host, then record GIFs for each completed feature for the README.
