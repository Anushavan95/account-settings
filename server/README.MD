# TRIVO Account Settings - Backend

## Overview

This is the **Backend** for the TRIVO Account Settings application.
The frontend and backend run independently and need **separate terminals**.

### 1. Backend

Open a terminal and navigate to the backend folder:

- **Tech stack:** Node.js, Express, TypeScript
- **Purpose:** Provide API endpoints for managing account-specific settings
- **Data storage:** JSON file (`db.json`) used as a simple database

---

## Project Structure
src/
├── db/ # Database initialization and helpers
├── routes/ # Express routes (accountsRouter)
├── types/ # TypeScript types
├── server.ts # Entry point
db.json # JSON database file
package.json
tsconfig.json

---

## Running the Backend

### 1. Clone the repository

```bash
git clone https://github.com/Anushavan95/account-settings.git
```
## Navigate to the backend folder

cd account-settings/server


## Install dependencies
npm install

## Run the server
npm run dev
he backend will run on http://localhost:5000
 by default.
API endpoint for accounts: http://localhost:5000/accounts
API endpoint for account update: http://localhost:5000/accounts/:id


## Notes

CORS is enabled for local frontend and backend development.
db.json acts as the database; make sure it has proper initial structure:
