# Wireframes

## Pages in the App

1. **Home / Trip List Page** — Displays all active trips
2. **Trip Detail Page** — Shows a single trip's details, destinations, activities, and budget
3. **Create/Edit Trip Page** — Form to create or update a trip
4. **Destinations Page** — Browse all available destinations
5. **Destination Detail Page** — View a destination and all trips associated with it

---

## Wireframe 1: Home / Trip List Page

```
+----------------------------------------------------------+
|  ✈️ On the Fly                          [ + New Trip ]    |
+----------------------------------------------------------+
|                                                          |
|  +----------------+  +----------------+  +------------+  |
|  |  [Trip Image]  |  |  [Trip Image]  |  | [Trip Img] |  |
|  |                |  |                |  |            |  |
|  |  Trip Title    |  |  Trip Title    |  | Trip Title |  |
|  |  Start - End   |  |  Start - End   |  | Start-End  |  |
|  |  $Total Cost   |  |  $Total Cost   |  | $Total     |  |
|  |  Num Days      |  |  Num Days      |  | Num Days   |  |
|  |                |  |                |  |            |  |
|  |  [View Trip]   |  |  [View Trip]   |  | [View Trip]|  |
|  +----------------+  +----------------+  +------------+  |
|                                                          |
|  +----------------+  +----------------+                  |
|  |  [Trip Image]  |  |  [Trip Image]  |                  |
|  |                |  |                |                  |
|  |  Trip Title    |  |  Trip Title    |                  |
|  |  Start - End   |  |  Start - End   |                  |
|  |  $Total Cost   |  |  $Total Cost   |                  |
|  |  Num Days      |  |  Num Days      |                  |
|  |                |  |                |                  |
|  |  [View Trip]   |  |  [View Trip]   |                  |
|  +----------------+  +----------------+                  |
|                                                          |
+----------------------------------------------------------+
```

**Description:**
- Header with app name and a button to create a new trip.
- Grid of trip cards, each showing the trip image, title, date range, total cost, and number of days.
- Each card has a "View Trip" button that navigates to the Trip Detail Page.

---

## Wireframe 2: Trip Detail Page

```
+----------------------------------------------------------+
|  ✈️ On the Fly                    [Edit]  [Delete]        |
+----------------------------------------------------------+
|                                                          |
|  +------------------------------------------------------+|
|  |                   [Trip Banner Image]                 ||
|  +------------------------------------------------------+|
|                                                          |
|  Trip Title                                              |
|  ---------------------------------------------------------|
|  Description: Lorem ipsum dolor sit amet...              |
|                                                          |
|  📅 Start Date: 2026-06-01    📅 End Date: 2026-06-10   |
|  🕐 Number of Days: 10       💰 Total Cost: $2,500.00   |
|                                                          |
|  ---------------------------------------------------------|
|  DESTINATIONS                          [ + Add ]         |
|  ---------------------------------------------------------|
|  +------------------+  +------------------+              |
|  | [Dest Image]     |  | [Dest Image]     |              |
|  | Destination Name |  | Destination Name |              |
|  | City, Country    |  | City, Country    |              |
|  +------------------+  +------------------+              |
|                                                          |
|  ---------------------------------------------------------|
|  ACTIVITIES                            [ + Add ]         |
|  ---------------------------------------------------------|
|  | Activity Name              | 👍 5 votes  [Vote]  [X] ||
|  | Activity Name              | 👍 3 votes  [Vote]  [X] ||
|  | Activity Name              | 👍 1 vote   [Vote]  [X] ||
|                                                          |
+----------------------------------------------------------+
```

**Description:**
- Shows full trip details: image banner, title, description, dates, cost, and number of days.
- Lists destinations assigned to the trip with images, name, city, and country.
- Lists activities with vote counts; users can vote or delete activities.
- Edit and Delete buttons in the header for managing the trip.

---

## Wireframe 3: Create / Edit Trip Page

```
+----------------------------------------------------------+
|  ✈️ On the Fly                          [Cancel]          |
+----------------------------------------------------------+
|                                                          |
|  Create a New Trip  (or "Edit Trip")                     |
|  ---------------------------------------------------------|
|                                                          |
|  Title:                                                  |
|  +----------------------------------------------------+  |
|  |                                                    |  |
|  +----------------------------------------------------+  |
|                                                          |
|  Description:                                            |
|  +----------------------------------------------------+  |
|  |                                                    |  |
|  |                                                    |  |
|  +----------------------------------------------------+  |
|                                                          |
|  Image URL:                                              |
|  +----------------------------------------------------+  |
|  |                                                    |  |
|  +----------------------------------------------------+  |
|                                                          |
|  Number of Days:         Total Cost:                     |
|  +-------------------+   +-------------------+           |
|  |                   |   |                   |           |
|  +-------------------+   +-------------------+           |
|                                                          |
|  Start Date:             End Date:                       |
|  +-------------------+   +-------------------+           |
|  |  mm/dd/yyyy       |   |  mm/dd/yyyy       |           |
|  +-------------------+   +-------------------+           |
|                                                          |
|              [ Submit Trip ]                             |
|                                                          |
+----------------------------------------------------------+
```

**Description:**
- Form with inputs for all trip fields: title, description, image URL, number of days, total cost, start date, and end date.
- Submit button to create or update the trip.
- Cancel button returns to the previous page.
