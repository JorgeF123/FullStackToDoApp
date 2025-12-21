# Todo Full Stack App

A full-stack todo application with a modern clipboard-style UI.

## Tech Stack

**Frontend:**
- React + Vite
- Modern clipboard-themed UI design

**Backend:**
- Spring Boot (Java 21)
- PostgreSQL database
- RESTful API

## Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- Clean clipboard checklist interface
- Responsive design

## Setup

### Prerequisites
- Java 21+
- Node.js and npm
- PostgreSQL

### Backend Setup
1. Copy `backend/src/main/resources/application.properties.example` to `application.properties`
2. Update database credentials in `application.properties`
3. Create PostgreSQL database: `CREATE DATABASE tododb;`
4. Run: `cd backend && ./mvnw spring-boot:run`

### Frontend Setup
1. Install dependencies: `cd frontend && npm install`
2. Run dev server: `npm run dev`

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/{id}` - Update a todo
- `DELETE /api/todos/{id}` - Delete a todo

## License

MIT

