# 📋 Todo Full Stack App

A modern, full-stack todo application featuring a beautiful clipboard-style UI. Built with React and Spring Boot, this app provides a seamless experience for managing your daily tasks.

![Tech Stack](https://img.shields.io/badge/React-18.0-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-18-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- ✅ **CRUD Operations** - Create, read, update, and delete todos
- ✅ **Task Completion** - Mark tasks as complete or incomplete
- ✅ **Modern UI** - Beautiful clipboard-themed interface
- ✅ **Responsive Design** - Works seamlessly on desktop and mobile
- ✅ **RESTful API** - Clean backend architecture
- ✅ **Real-time Updates** - Instant feedback on all operations

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom clipboard-themed styling

### Backend
- **Spring Boot 3.2** - Java framework
- **Spring Data JPA** - Database abstraction layer
- **PostgreSQL** - Relational database
- **Lombok** - Reduces boilerplate code
- **Maven** - Dependency management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Java 21+** - [Download Java](https://www.oracle.com/java/technologies/downloads/)
- **Node.js 18+** and **npm** - [Download Node.js](https://nodejs.org/)
- **PostgreSQL 18+** - [Download PostgreSQL](https://www.postgresql.org/download/)
- **Git** - [Download Git](https://git-scm.com/downloads)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/JorgeF123/FullStackToDoApp.git
cd ToDoFullStackApp
```

### 2. Backend Setup

#### Step 1: Configure Database

1. Create a PostgreSQL database:
```sql
CREATE DATABASE tododb;
```

2. Copy the example configuration file:
```bash
cd backend
cp src/main/resources/application.properties.example src/main/resources/application.properties
```

3. Edit `src/main/resources/application.properties` and update your database credentials:
```properties
spring.datasource.username=your_username
spring.datasource.password=your_password
```

#### Step 2: Run the Backend

```bash
cd backend
./mvnw spring-boot:run
```

The backend will start on `http://localhost:8080`

### 3. Frontend Setup

#### Step 1: Install Dependencies

```bash
cd frontend
npm install
```

#### Step 2: Run the Development Server

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/todos` | Get all todos |
| `GET` | `/api/todos/{id}` | Get a specific todo by ID |
| `POST` | `/api/todos` | Create a new todo |
| `PUT` | `/api/todos/{id}` | Update an existing todo |
| `DELETE` | `/api/todos/{id}` | Delete a todo |
| `GET` | `/api/todos/filter?completed=true` | Filter todos by completion status |

### Example API Request

**Create a Todo:**
```bash
curl -X POST http://localhost:8080/api/todos \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project",
    "description": "Finish the todo app",
    "completed": false
  }'
```

**Get All Todos:**
```bash
curl http://localhost:8080/api/todos
```

## 📁 Project Structure

```
ToDoFullStackApp/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/ToDo/backend/
│   │   │   │   ├── BackendApplication.java
│   │   │   │   ├── Todo.java              # Entity
│   │   │   │   ├── controller/            # REST Controllers
│   │   │   │   ├── service/               # Business Logic
│   │   │   │   └── repository/            # Data Access
│   │   │   └── resources/
│   │   │       ├── application.properties.example
│   │   │       └── application.properties # (ignored by git)
│   │   └── test/
│   ├── pom.xml
│   └── mvnw
├── frontend/
│   ├── src/
│   │   ├── components/                     # React Components
│   │   │   ├── TodoForm.jsx
│   │   │   ├── TodoItem.jsx
│   │   │   └── TodoList.jsx
│   │   ├── services/                      # API Service
│   │   │   └── todoService.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🎨 UI Features

- **Clipboard Design** - Unique clipboard-themed interface
- **Smooth Animations** - Polished user interactions
- **Cartoon Cursor** - Custom cursor for enhanced UX
- **Color Themes** - Modern blue/teal color scheme
- **Responsive Layout** - Adapts to all screen sizes

## 🔒 Security

- Database credentials are stored in `application.properties` which is **excluded from Git**
- Use `application.properties.example` as a template
- Never commit sensitive information

## 🧪 Testing

### Backend Tests
```bash
cd backend
./mvnw test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📝 Development

### Backend Development
- Hot reload is enabled with Spring Boot DevTools
- Database schema is auto-generated on startup
- H2 Console available at `http://localhost:8080/h2-console` (if using H2)

### Frontend Development
- Hot Module Replacement (HMR) enabled
- Fast refresh for React components
- ESLint for code quality

## 🚢 Deployment

### Backend Deployment
1. Build the JAR file:
```bash
cd backend
./mvnw clean package
```

2. Run the JAR:
```bash
java -jar target/backend-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment
1. Build for production:
```bash
cd frontend
npm run build
```

2. The `dist/` folder contains the production-ready files

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Jorge Flores**

- GitHub: [@JorgeF123](https://github.com/JorgeF123)
- Repository: [FullStackToDoApp](https://github.com/JorgeF123/FullStackToDoApp)

## 🙏 Acknowledgments

- Spring Boot team for the amazing framework
- React team for the powerful UI library
- All open-source contributors

---

⭐ If you like this project, please give it a star!
