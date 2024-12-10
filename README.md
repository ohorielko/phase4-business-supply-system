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
git clone <repository_url>
cd <repository_folder>

### 2. Install Dependencies
Navigate to the `backend` and `frontend` folders separately and install the dependencies:

#### Backend:
cd backend
npm install

#### Frontend:
cd ../frontend
npm install

### 3. Set Up the Database
1. Import the database schema and stored procedures into your MySQL database.
mysql -u <username> -p <database_name> < schema.sql

## ii. Instructions to Run the App

### 1. Start the Backend Server
Navigate to the `backend` folder and run:
cd backend
npm start

Navigate to the `frontend` folder and run:
cd backend
npm start

The frontend application will open in your browser at http://localhost:3000.
