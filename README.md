# UC Transfer Chatbot

This project has:
- `backend/` (Flask API)
- `frontend/` (React + Vite app)

## Prerequisites

- Python 3.10+ (recommended)
- Node.js 18+ (or newer LTS)
- `pnpm` installed globally

If you do not have `pnpm` yet:

```bash
npm install -g pnpm
```

## 1) Install Backend Requirements

From the project root:

```bash
cd backend
pip install -r requirements.txt
```

## 2) Install Frontend Requirements

In a second terminal (or after finishing backend setup):

```bash
cd frontend
pnpm i
```

## 3) Run the Backend

From `backend/`:

```bash
python app.py
```

Backend runs at: `http://localhost:5000`

## 4) Run the Frontend

From `frontend/`:

```bash
pnpm dev
```

Frontend runs at: `http://localhost:5173`

## Quick Start (Two Terminals)

Terminal 1 (backend):

```bash
cd backend
python app.py
```

Terminal 2 (frontend):

```bash
cd frontend
pnpm dev
```
