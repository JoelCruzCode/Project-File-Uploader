
TypeScript Express & React Template

Overview

This is a full-stack TypeScript project template featuring a PostgreSQL database, an Express.js backend, and a React frontend built with Vite. It provides a solid foundation for building modern web applications with authentication, validation, and session management.

Features

Backend (Express + PostgreSQL)

User Authentication – Implemented using Passport.js with bcrypt password hashing.

Session Management – Uses express-session with connect-pg-simple to store sessions in PostgreSQL.

Input Validation – express-validator ensures clean and secure user inputs.

Flash Messages – connect-flash provides feedback messages for authentication and form submissions.

ORM Support – Integrated with Prisma for type-safe database access.

CORS Handling – Configured with cors for cross-origin requests.

Environment Variables – Managed using dotenv for easy configuration.

Frontend (React + Vite)

Fast Development – Built with Vite for optimized performance.

Component-Based UI – Organized with reusable React components.

State Management – Utilizes React's built-in state management.

Form Handling & Validation – Easily extendable for form submissions and validation.

Project Structure

/root\
  ├── /client (React Frontend)\
  │   ├── /src\
  │   │   ├── /components\
  │   │   ├── /hooks\
  │   │   ├── /pages\
  │   │   ├── main.tsx\
  │   │   ├── App.tsx\
  │   ├── /public\
  │   ├── index.html\
  │   ├── vite.config.ts\
  │   ├── tsconfig.json\
  ├── /server (Express Backend)\
  │   ├── /src\
  │   │   ├── /config (Database, Passport, Session)\
  │   │   ├── /controllers\
  │   │   ├── /middleware\
  │   │   ├── /models\
  │   │   ├── /routes\
  │   │   ├── /utils\
  │   │   ├── app.ts (Main Express app entry)\
  │   │   ├── server.ts (Starts Express server)\
  │   ├── tsconfig.json\
  │   ├── prisma/schema.prisma\
  ├── package.json (Root Scripts & Dependencies)\
  ├── tsconfig.json (Global TypeScript Config)\
  ├── README.md

Installation & Setup

Prerequisites

Node.js & npm/yarn

PostgreSQL database

Install Dependencies

# Install backend dependencies
cd server && npm install

# Install frontend dependencies
cd ../client && npm install

Environment Variables

Create a .env file in the server directory:

DATABASE_URL=your_postgres_connection_string
SESSION_SECRET=your_secret_key

Run the Project

# Start backend (from root directory)
npm run dev

# Start frontend (from client directory)
npm run dev

Scripts

"scripts": {
  "dev": "nodemon --loader ts-node/esm server/src/app.ts",
  "build": "tsc",
  "start": "nodemon dist/server/app.js"
}

License

MIT

