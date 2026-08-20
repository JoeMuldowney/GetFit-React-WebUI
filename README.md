# GetFit Web UI 💪

> A modern React-based fitness dashboard for tracking workouts, nutrition, and long-term health goals.

---

## 📌 Overview

GetFit Web UI is the **frontend application** for the GetFit platform. It provides an interactive, responsive interface for managing fitness and nutrition data through a FastAPI backend.

This application is built as a **single-page React app (SPA)** and communicates with a RESTful API.

---

## 🚀 Features

### 🔐 Authentication
- User login and registration
- JWT-based authentication
- Protected routes
- Persistent session handling

---

### 🏋️ Workout Tracking *(In Progress)*
- View and manage workout plans
- Track exercise history
- Log completed workouts

---

### 🥗 Nutrition Tracking *(Planned)*
- Daily food logging interface
- Macro tracking dashboard
- Nutrition history view

---

### 📊 Dashboard *(Planned)*
- Overview of fitness progress
- Goal tracking
- Summary analytics

---

## 🧠 Frontend Architecture

- React SPA (Single Page Application)
- Component-based architecture
- API service layer for backend communication
- Context-based state management
- Fully decoupled from backend

---

## 🛠 Tech Stack

- React(Vite)
- TS
- HTML5
- Tailwind css
- Shadcn
- Fetch API

---

## 📁 Project Structure

```text
src/
├── components/        # Reusable UI components (buttons, cards, etc.)
├── pages/             # Route-based pages (Dashboard, Login, etc.)
├── forms/             # Form components (login, register, workout forms)
├── services/          # API layer (fetch calls to backend)
├── utils/             # Helper functions (formatters, validators, etc.)
├── context/           # Global state (auth, user session, etc.)
├── hooks/             # Custom React hooks
├── styles/            # Global and modular styles
├── App.jsx            # Root app component
└── main.jsx           # Application entry point