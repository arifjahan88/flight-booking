# Flight Booking System

A full-stack flight booking application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This system allows users to search for flights, make bookings, and manage their travel plans.

## 🌟 Features

- User authentication and authorization
- Flight search with multiple filters
- Booking a flight
- Booking confirmation emails
- User dashboard for managing bookings
- Admin panel for flight management
- Responsive design for all devices

## 🚀 Live Demo

- Frontend Application: [Click Here](https://flight-booking-qcux.vercel.app/)
- Backend API: [Click Here](https://flight-booking-sable.vercel.app/)

## Demo Credentials

Use the following credentials to log in and explore the application:

### Admin Account

- **Email:** admin@gmail.com
- **Password:** admin

### User Account

- **Email:** user@gmail.com
- **Password:** user

## 🛠️ Technologies Used

### Frontend

- React.js
- Redux for state management
- Material-UI components
- Redux RTK Query for API requests
- React Router for navigation
- Dayjs for date and time management
- React Icons For Icons
- Redux Persist for Persist and rehydrate redux store
- React Hook Form For input validation

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Nodemailer for email notifications
- Bcrypt for password hashing

## ⚙️ Prerequisites

Before running this project locally, make sure you have the following installed:

- Node.js (v18.0 or higher)
- MongoDB
- Git

## 🔧 Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/arifjahan88/flight-booking
cd flight-booking
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file and add your environment variables
touch .env
```

Add the following variables to your `.env` file:

```env
MONGO_URL= Mongodb Url
JWT_SECRET= Secret Key
JWT_EXPIRY= Expire time
NODEMAILER_EMAIL_USER= Email
NODEMAILER_EMAIL_PASSWORD= App password
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file for frontend
touch .env
```

Add the following to your frontend `.env` file:

```env
VITE_BASE_URL=http://localhost:5000/api
```

### 4. Running the Application

Start the backend server:

```bash
# In the backend directory
npm run dev
```

Start the frontend development server:

```bash
# In the frontend directory
npm run dev
```

The application should now be running at:

- Frontend: `http://localhost:5173/`
- Backend: `http://localhost:5000`

## 📁 Project Structure

```
flight-booking/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── middleware/
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## 👥 Authors

- Md Arif Jahan - [GitHub Profile](https://github.com/arifjahan88)
