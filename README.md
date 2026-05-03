# AI Interview Preparation Platform

A full-stack interview preparation platform built with **React + Tailwind CSS** (frontend) and **Node.js + Express + MongoDB** (backend). It helps candidates practice coding interviews, run mock interview sessions, track readiness, and visualize progress analytics.

## Features

- **Authentication**
  - JWT-based registration and login
  - Protected API routes
- **Coding Practice**
  - Curated interview problem feed (extensible)
  - Difficulty and topic tags
- **Mock Interviews**
  - AI-ready session structure for behavioral, technical, and system design rounds
- **Analytics Dashboard**
  - Weekly readiness score chart
  - KPI cards for solved problems, mock interviews, and streaks
- **Progress Tracking**
  - Persistent per-user progress in MongoDB
  - Skill breakdown across DSA, system design, behavioral

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Recharts
- React Router

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT + bcryptjs

## Project Structure

```bash
.
├── client
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   └── pages
│   └── ...
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
└── README.md
```

## Getting Started

### 1) Clone and install dependencies

```bash
git clone <your-repo-url>
cd ai-interview-preparation
npm install
npm run install:all
```

### 2) Configure environment variables

```bash
cp server/.env.example server/.env
```

Update values in `server/.env`:

- `MONGO_URI` - your MongoDB connection string
- `JWT_SECRET` - strong secret key
- `PORT` - backend port (default `5000`)

### 3) Run development servers

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Progress (Protected)
- `GET /api/progress`
- `PUT /api/progress`

### Health
- `GET /api/health`

## Roadmap

- Integrate AI interview evaluator (LLM scoring + feedback)
- Add coding editor with test-case execution sandbox
- Add calendar scheduling and reminders
- Export progress reports in PDF

## License

This project is licensed under the terms of the repository's LICENSE file.
