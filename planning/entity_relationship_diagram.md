# Entity Relationship Diagram

## Overview

The On the Fly database consists of six tables that manage trips, destinations, activities, users, and the relationships between them.

## ER Diagram

```
+---------------------+          +---------------------------+
|       trips         |          |      destinations         |
|---------------------|          |---------------------------|
| id (serial) PK      |         | id (serial) PK            |
| title (varchar 100)  |         | destination (varchar 100) |
| description (varchar 500)|     | description (varchar 500) |
| img_url (text)       |         | city (varchar 100)        |
| num_days (integer)   |         | country (varchar 100)     |
| start_date (date)    |         | img_url (text)            |
| end_date (date)      |         | flag_img_url (text)       |
| total_cost (money)   |         +-------------+-------------+
+---------+-----------+                       |
          |                                   |
          |          +------------------------+
          |          |
          |    +-----+-------------------------+
          +----+ trips_destinations (join)      |
          |    |--------------------------------|
          |    | trip_id (int) PK, FK → trips   |
          |    | destination_id (int) PK, FK → destinations |
          |    +--------------------------------+
          |
          |    +--------------------------------+
          +----+ activities                     |
          |    |--------------------------------|
          |    | id (serial) PK                 |
          |    | trip_id (int) FK → trips       |
          |    | activity (varchar 100)         |
          |    | num_votes (int, default 0)     |
          |    +--------------------------------+
          |
          |          +-------------------------+
          |          |       users             |
          |          |-------------------------|
          |          | id (serial) PK          |
          |          | githubid (integer)      |
          |          | username (varchar 100)  |
          |          | avatarurl (varchar 500) |
          |          | accesstoken (varchar 500)|
          |          +------------+------------+
          |                       |
          |    +------------------+-----------+
          +----+ trips_users (join)           |
               |------------------------------|
               | trip_id (int) PK, FK → trips |
               | user_id (int) PK, FK → users |
               +------------------------------+
```

## Relationships

| Relationship | Type | Description |
|---|---|---|
| trips ↔ destinations | Many-to-Many | A trip can have many destinations; a destination can belong to many trips. Joined via `trips_destinations`. |
| trips → activities | One-to-Many | A trip can have many activities. Each activity belongs to one trip (`trip_id` FK). |
| trips ↔ users | Many-to-Many | A trip can have many users; a user can belong to many trips. Joined via `trips_users`. |

## Tables Summary

| Table | Primary Key | Foreign Keys |
|---|---|---|
| **trips** | `id` (serial) | — |
| **destinations** | `id` (serial) | — |
| **activities** | `id` (serial) | `trip_id` → `trips.id` |
| **trips_destinations** | (`trip_id`, `destination_id`) | `trip_id` → `trips.id`, `destination_id` → `destinations.id` |
| **users** | `id` (serial) | — |
| **trips_users** | (`trip_id`, `user_id`) | `trip_id` → `trips.id`, `user_id` → `users.id` |
