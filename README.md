# 🚀 Task Manager API (MERN Backend Project)

## 📌 Overview

This is a **Task Manager Backend API** built using **Node.js, Express, MongoDB, and JWT Authentication**.

It allows users to:

* Register & Login securely 🔐
* Create, update, delete tasks 📝
* Access only their own tasks 👤
* Filter tasks by status

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB (Atlas)**
* **Mongoose**
* **JWT (Authentication)**
* **bcrypt (Password Hashing)**

---

## 🔐 Features

### 👤 Authentication

* User Signup
* User Login
* Password hashing using bcrypt
* JWT-based authentication
* Protected routes

### 📝 Task Management

* Create Task
* Get All Tasks (User-specific)
* Get Task by ID
* Update Task
* Delete Task

### 🔍 Advanced Features

* User-based access control (only own tasks)
* Filter tasks by status
* Global error handling
* Clean MVC folder structure

---

## 📂 Project Structure

```
backend
│
├── db
│   └── db.js
│
├── models
│   ├── user.model.js
│   └── task.model.js
│
├── controllers
│   ├── auth.controller.js
│   └── task.controller.js
│
├── routes
│   ├── auth.routes.js
│   └── task.routes.js
│
├── middlewares
│   ├── auth.middleware.js
│   └── error.middleware.js
│
└── server.js
```

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```
PORT=7000
MONGO_KEY=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🚀 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint          | Description                  |
| ------ | ----------------- | ---------------------------- |
| POST   | /api/auth/signup  | Register user                |
| POST   | /api/auth/login   | Login user                   |
| GET    | /api/auth/profile | Get user profile (Protected) |

---

### 📝 Task Routes

| Method | Endpoint       | Description               |
| ------ | -------------- | ------------------------- |
| POST   | /api/tasks     | Create task (Protected)   |
| GET    | /api/tasks     | Get all tasks (User only) |
| GET    | /api/tasks/:id | Get task by ID            |
| PUT    | /api/tasks/:id | Update task               |
| DELETE | /api/tasks/:id | Delete task               |

---

## 🔑 Authentication Usage

Send token in headers:

```
Authorization: Bearer YOUR_TOKEN
```

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client

---

## 🌟 Key Learnings

* REST API design
* JWT Authentication
* Middleware handling
* MongoDB relationships
* Backend architecture (MVC)
* Error handling

---

## 📈 Future Improvements

* Pagination
* Role-based access (admin/user)
* Rate limiting
* Input validation (Joi/Zod)

---

## 👨‍💻 Author

**Rudresh Bamania**
Aspiring Full-Stack Developer 🚀

---

## ⭐ Show Your Support

If you like this project:

* ⭐ Star this repo
* 🍴 Fork it
* 📢 Share it

---
