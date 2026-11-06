<<<<<<< HEAD
# Contact Management System Backend

## Project Overview

The Contact Management System is a REST API-based backend application developed using Node.js, Express.js and MySQL.

It allows users to create, retrieve, update, delete and search contact information through RESTful API endpoints.

## Technologies Used

- Node.js
- Express.js
- MySQL
- MySQL2
- JavaScript
- Postman
- Git and GitHub

## Features

- Create new contacts.
- Retrieve all contacts.
- Retrieve contacts by ID.
- Update existing contacts.
- Delete contacts.
- Search contacts by name, email and phone number.
- Input validation.
- Duplicate email prevention.
- MySQL database integration.
- REST API architecture.

## Project Structure

```text
contact-management-backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── contactController.js
│
├── middleware/
│   └── validateContact.js
│
├── models/
│   └── Contact.js
│
├── routes/
│   └── contactRoutes.js
│
├── node_modules/
├── .env
├── server.js
├── package.json
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd contact-management-backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=contact_management_db
```

### 5. Create the Database

Open phpMyAdmin and create a database named:

`contact_management_db`

Create the contacts table using the SQL query provided in the project setup.

### 6. Start the Server

```bash
npm run dev
```

Server URL:

`http://localhost:5000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Check server status |
| POST | /api/contacts | Create contact |
| GET | /api/contacts | Retrieve all contacts |
| GET | /api/contacts/:id | Retrieve contact by ID |
| PUT | /api/contacts/:id | Update contact |
| DELETE | /api/contacts/:id | Delete contact |
| GET | /api/contacts/search?q=name | Search contacts |

## Sample JSON Request

```json
{
  "name": "Mohan Sai",
  "email": "mohan@gmail.com",
  "phone": "9876543210",
  "address": "Visakhapatnam, Andhra Pradesh"
}
```

## API Testing

All API endpoints are tested using Postman.

Tested operations:

- Create Contact
- Get All Contacts
- Get Contact by ID
- Update Contact
- Search Contacts
- Delete Contact
- Input Validation

## Database

Database: MySQL

Table: contacts

Fields:

- id
- name
- email
- phone
- address
- created_at
- updated_at

## Conclusion

The Contact Management System Backend provides an organized solution for managing contact information using REST APIs and a relational database.

The project demonstrates backend development, database integration, CRUD operations, API testing and input validation.
=======
# contact-management-backend
Contact Management System Backend using Node.js, Express and MySQL
>>>>>>> a46777d640535e475ae73f081be6a68d3929850a
