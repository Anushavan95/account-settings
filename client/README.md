# TRIVO Account Settings - Frontend

## Overview

This is the **Frontend** for the TRIVO Account Settings application.

The frontend and backend run independently and need **separate terminals**.

### 1. Backend

Open a terminal and navigate to the backend folder:

- **Tech stack:** React, TypeScript, Material UI (MUI), React Hook Form
- **Purpose:** Manage account-specific settings dynamically
- **Dynamic Form:** All settings are defined in `settingsConfig.ts`. Adding a new setting there automatically updates the UI without additional code changes.

---

## Project Structure

client/
├── public/
├── src/
│ ├── components/ # Reusable UI components (FieldRenderer, Button, Alerts)
│ ├── config/ # Settings definition file (settingsConfig.ts)
│ ├── hooks/ # Custom hooks (useAccounts.ts)
│ ├── pages/ # Pages (AccountList, AccountSettings)
│ ├── utils/ # Helpers (validation)
│ └── App.tsx # Main app component
├── package.json
└── tsconfig.json

## Running the Frontend

### 1. Clone the repository

```bash
git clone https://github.com/Anushavan95/account-settings.git
```

## Navigate to the client folder

cd account-settings/client

## Install dependencies

npm install

## Run the development server

npm run dev
The app will start on http://localhost:3000 by default.
Open this URL in your browser to use the app.
