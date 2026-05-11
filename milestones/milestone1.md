# Milestone 1

## Tasks

- [x] Fork the WEB103 Final Project repository on GitHub and share it with all team members
- [x] Read and understand all required features
- [x] Understand you must implement all baseline features and two custom features
- [x] In `readme.md`: update app name to your app's name
- [x] In `readme.md`: add all group members' names
- [x] In `readme.md`: complete the Description and Purpose section
- [x] In `readme.md`: complete the Inspiration section
- [x] In `readme.md`: list a name and description for all features (minimum 6)
- [x] In `planning/user_stories.md`: add all user stories (minimum 10)
- [x] In `planning/user_stories.md`: use 1–3 unique user roles in your user stories
- [x] Complete all three questions in the Reflection section below

---

## Reflection

### 1. What was your group's process for coming up with the app idea?

We started by brainstorming pain points we personally experienced. Planning group trips, coordinating schedules, destinations, activities, and budgets across multiple people, kept coming up as something that was harder than it should be. Most people resort to group chats and spreadsheets. We wanted to build a dedicated tool that made the entire process collaborative and visual, so On the Fly was born.

### 2. What are the biggest challenges you anticipate encountering while building this app?

The biggest challenges we expect are:
1. **Managing many-to-many relationships in the UI** : linking trips to destinations and users involves join tables, and surfacing that data cleanly in the frontend (without overfetching or prop-drilling) will require careful design.
2. **Activity voting** : implementing a real-time or near-real-time vote count that feels responsive without requiring a full page reload.
3. **State management across pages** : keeping trip data in sync between the list, detail, edit, and add-destination pages without redundant API calls.

### 3. What is your group's strategy to overcome these challenges?

We plan to keep the data-fetching logic centralized in `App.jsx` and pass data down through props to avoid redundant network requests. For the join table relationships, we will design RESTful routes that return pre-joined data, a trip endpoint that includes its destinations so the frontend doesn't need to assemble relationships itself. For the voting feature, we will optimistically update the UI on button click and reconcile with the server response.
