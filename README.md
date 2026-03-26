TRIVO Account Settings Project

This project is a small full-stack application for managing account-specific settings. The main goal is to create a reusable and adaptable form system, where new settings can be defined in code and automatically reflected in the UI.

The project is structured into two separate parts:

Frontend
Built with React, TypeScript, Material UI (MUI), and React Hook Form.
Provides a dynamic form system to manage settings per account.
Each account has its own configurable settings, stored locally or via API.
Located in the /client folder.
See /client/README.md for setup and run instructions.
Backend
Built with Node.js and Express, db.js
Provides API endpoints for accounts and account-specific settings.
Data storage can be in-memory, local JSON (mock), or a simple database.
Located in the /server folder.
