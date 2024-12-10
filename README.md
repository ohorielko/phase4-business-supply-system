# Business Supply Management Application

## Description
Web application we developed for Phase 4 that integrates with the SQL database to manage business supplies. Our app provides functionality to add, remove, and manage entities like businesses, locations, vans, and products.

---

## Features
- Add new businesses, locations, and other entities.
- Remove entities like vans or products.
- Manage and display records through a user-friendly interface.

---

## Prerequisites
Before setting up the app, ensure the following are installed:
- **Node.js** (v16.x or later)
- **npm** (comes with Node.js) or **yarn**
- **MySQL** (for the database)

---

## i. Instructions to Set Up the App

### 1. Clone the Repository
```
git clone <repository_url>
cd <repository_folder>
```

### 2. Install Dependencies
Navigate to the `backend` and `frontend` folders separately and install the dependencies:

#### Backend:
```
cd backend
npm install
```

#### Frontend:
```
cd ../frontend
npm install
```

### 3. Set Up the Database
1. Import the database schema and stored procedures into your MySQL database.
```
mysql -u <username> -p <database_name> < schema.sql
```

## ii. Instructions to Run the App

### 1. Start the Backend Server
Navigate to the `backend` folder and run:
```
cd backend
npm start
```

Navigate to the `frontend` folder and run:
```
cd backend
npm start
```

The frontend application will open in your browser at http://localhost:3000.

## Technologies Used

Our web application consists of frontend and backend. For frontend, we used React, JavaScript, HTML and CSS to create the UI and design of the pages. For backend, we decided to use NodeJS. Also, our procedures and views are written in SQL. We use MySQL server to run the database locally.

## Team Work

The work was distributed among all 4 team members, including the frontend UI design, backend functionality, and database integration. Here's how the work was separated and done by the team members:

1. Oleksandr Horielko: App Setup, Database Schema Verification, 14 procedures, 3 views
2. Rustam Jumazhanov: GitHub README, 3 procedures, 1 view
3. Jai Desai: 2 procedures, 1 view
4. Kaushik Sriram: 2 procedures, 1 view


