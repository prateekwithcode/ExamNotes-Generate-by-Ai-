# ExamNotes AI

AI-powered study notes generator with diagram/chart support, Google authentication, credit-based usage, history tracking, and PDF export.

## Live Demo

Frontend: https://examnotesai-9t6r.onrender.com

Backend API: https://examnotesai-0li4.onrender.com

Replace both links with your deployed URLs.

## Project Structure

```text
Ai-Developer/
  client/   # React + Vite frontend
  server/   # Express + MongoDB backend
```

## Features

- Google sign-in (Firebase auth on client + JWT cookie session on server)
- AI notes generation based on topic, class level, exam type, and revision options
- Optional diagram and chart generation in notes
- Credit-based usage system
- Notes history and single-note retrieval
- Export generated notes as PDF

## Tech Stack

- Frontend: React, Vite, Redux Toolkit, React Router, Tailwind CSS, Axios, Mermaid, Recharts
- Backend: Node.js, Express, MongoDB (Mongoose), JWT, Cookie-based auth
- AI provider: NVIDIA Integrate API (`openai/gpt-oss-120b`)
- Auth provider: Firebase Google Auth

## Prerequisites

- Node.js 18+
- npm
- MongoDB Atlas (or local MongoDB)
- Firebase project (for Google auth)
- NVIDIA API key

## Environment Variables

### Frontend (`client/.env`)

```env
VITE_CLIENT_URL=http://localhost:8000
VITE_FIREBASE_APIKEY=your_firebase_web_api_key
```

### Backend (`server/.env`)

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NVIDIA_API_KEY=your_nvidia_api_key
FRONTEND_URL=http://localhost:5173
```

## Local Setup

1. Install frontend dependencies:

```bash
cd client
npm install
```

2. Install backend dependencies:

```bash
cd ../server
npm install
```

3. Add the environment files shown above.

4. Start backend:

```bash
cd server
node index.js
```

5. Start frontend:

```bash
cd client
npm run dev
```

6. Open the app at:

```text
http://localhost:5173
```

## API Overview

Base URL (local): `http://localhost:8000`

- `POST /api/auth/google` - Login/signup with Google profile payload
- `GET /api/auth/logout` - Clear auth cookie
- `GET /api/user/currentuser` - Get current authenticated user
- `POST /api/notes/generate-notes` - Generate notes (requires auth)
- `GET /api/notes/getnotes` - Get authenticated user notes history
- `GET /api/notes/:id` - Get one note by id
- `POST /api/pdf/generate-pdf` - Generate and download PDF for notes

## Notes

- The backend currently contains `npm run dev` mapped to `nodemon server.js` in `server/package.json`; the entry file in this repo is `index.js`. If `npm run dev` fails, run `node index.js` (or update the script to use `index.js`).
- For production, set secure CORS origin and secrets using environment variables in your hosting platform.
