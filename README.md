\# 📌 Issue Management System

\## 📖 Project Overview

This is a full-stack Issue Management System developed to manage and track issues similar to real-world bug tracking or ticket management systems.

The application allows users to create, view, update, delete, and filter issues efficiently.

---

\## 🛠️ Technologies Used

\### Backend

\- Java 21

\- Spring Boot

\- Spring Data JPA / Hibernate

\- MySQL

\- Maven



\### Frontend

\- Angular

\- TypeScript

\- HTML / CSS



\### Tools

\- Git \& GitHub

\- Postman

\- Eclipse / STS

\- VS Code

---

\## 🗄️ Issue Fields

\- `id` (auto-generated)

\- `title` (required)

\- `description`

\- `priority` (Low, Medium, High)

\- `status` (Open, In Progress, Resolved, Closed)

\- `createdDate`

\- `updatedDate`

\- `assignee`

---

\## 🚀 Features


\### 🔹 Backend (Spring Boot)

\- Create Issue

\- View All Issues

\- Update Issue

\- Delete Issue

\- Filter by Priority

\- Filter by Status

\- Automatic `createdDate` and `updatedDate` handling

\- Field validation support

\- Global Exception Handling

\- Proper HTTP Status Codes (200, 201, 404, etc.)

\- RESTful API design

---

\### 🔹 Frontend (Angular)

\- Create Issue Form

\- Display Issues in Table Format

\- Update Issue

\- Delete Issue

\- Filter by Priority

\- Filter by Status

\- Required Field Validation

\- Responsive UI

---

\## 🔗 API Endpoints

| Method | Endpoint | Description |

|--------|----------|------------|

| POST   | `/api/issues` | Create issue |

| GET    | `/api/issues` | Get all issues |

| PUT    | `/api/issues/{id}` | Update issue |

| DELETE | `/api/issues/{id}` | Delete issue |

| GET    | `/api/issues/priority/{priority}` | Filter by priority |

| GET    | `/api/issues/status/{status}` | Filter by status |

---

\## ⚙️ Backend Setup Instructions

1\. Open the backend project in Eclipse / STS.

2\. Configure MySQL database in `application.properties`.

3\. Create database in MySQL:


```sql

CREATE DATABASE issue\_management;


4.Run the Spring Boot application.

 Backend runs on:

 http://localhost:8080


---

\## ⚙️ Frontend Setup Instructions

Open the Angular project folder in terminal.

Run:

npm install

ng serve

Frontend runs on:

http://localhost:4200







