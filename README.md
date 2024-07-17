# Tuner API 🎧

This repository contains the backend API for the Tuner application, a music playlist manager.  The API provides CRUD operations for managing songs, along with sorting and filtering capabilities.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation and Setup](#installation-and-setup)
- [API Endpoints](#api-endpoints)
- [Validation Rules](#validation-rules)

## Features

- **Get a list of all songs:** Retrieve all songs in the database.
- **Get a specific song by ID:** Retrieve details of a single song.
- **Create a new song:** Add a new song to the database.
- **Update an existing song:** Modify song details.
- **Delete a song:** Remove a song from the database.
- **Sorting:** Retrieve songs sorted alphabetically (ascending or descending) by name.
- **Filtering:** Retrieve songs filtered by their `is_favorite` status.

## Technologies

- **Node.js:** JavaScript runtime environment
- **Express.js:** Web application framework
- **PostgreSQL:** Relational database
- **pg-promise:** PostgreSQL client for Node.js
- **CORS:** Enables Cross-Origin Resource Sharing

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/jmoncayo-pursuit/tuner-api-solution-backend.git
   cd tuner-api-solution-backend

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Database Configuration:**
   - Create a PostgreSQL database for your application (e.g., `tuner`).
   - Create a `.env` file in the root directory of the project.
   - Add your PostgreSQL connection details to the `.env` file:
     ```
     PORT=3346
     PG_HOST=localhost
     PG_PORT=5432
     PG_DATABASE=tuner
     PG_USER=postgres
     PG_PASSWORD=your_db_password 
     ```
   - Replace the placeholders with your actual credentials.

4. **Initialize and Seed the Database (Optional):**
   - If you want to set up the database schema and seed it with initial data, you can create `schema.sql` and `seed.sql` files.  
   - Run the following command to apply the schema: `psql -U your_db_user -d tuner -f schema.sql`
   - Seed the database (if you have a `seed.sql` file): `psql -U your_db_user -d tuner -f seed.sql` 

5. **Start the Server:**
   ```bash
   npm start
   ```

   The server will start on the port specified in your `.env` file (default: 3346).

## API Endpoints

**Base URL:** `http://localhost:3346` (or your specified port)

| Endpoint            | HTTP Method | Description                                       |
| ------------------- | :---------- | :------------------------------------------------ |
| `/songs`            | GET         | Get all songs (with sorting and filtering options) |
| `/songs/:id`        | GET         | Get a single song by ID                          |
| `/songs`            | POST        | Create a new song                                  |
| `/songs/:id`        | PUT         | Update an existing song by ID                      |
| `/songs/:id`        | DELETE      | Delete a song by ID                              |

## Validation Rules

- **POST `/songs` (Create Song):**
    - `name` (string, required)
    - `artist` (string, required)
    - `album` (string)
    - `time` (string)
    - `is_favorite` (boolean)
- **PUT `/songs/:id` (Update Song):**
    - At least one of the following fields is required to be updated: `name`, `artist`, `album`, `time`, `is_favorite`.
