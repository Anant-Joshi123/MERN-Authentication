# MERN Authentication System with Protected Dashboard (Material UI)

This is a full-stack MERN authentication app where users can register, login, and view a protected dashboard page containing a static table. The project uses MongoDB Atlas for database, JSON Web Tokens (JWT) for authentication, and Material UI for clean UI design.

---

## 🚀 Features

- 🔐 User Registration with hashed passwords
- 🔑 JWT-based Login Authentication
- 🧠 Save `token` and `user` info in `localStorage`
- 🛡️ Protected Routes (Dashboard is only accessible after login)
- 🗂️ Responsive Login & Register forms built with Material UI
- 📋 Dashboard with static table shown only after authentication
- ☁️ MongoDB Atlas as database
- ✅ Clean code structure with separation of backend and frontend

---

## 🛠️ Tech Stack

- **Frontend**: React.js + Vite + Material UI
- **Backend**: Node.js + Express.js + MongoDB + JWT
- **Database**: MongoDB Atlas
- **State**: LocalStorage (no Redux needed)
- **Auth**: JWT (JSON Web Token)

---

## 📁 Project Structure

mern-authentication/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ ├── .env ← NOT pushed to GitHub
│ ├── .gitignore
│
└── frontend/
├── src/
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ └── Dashboard.jsx
│ ├── api/
│ │ └── auth.js
│ ├── components/
│ │ └── ProtectedRoute.jsx
│ ├── App.jsx
│ └── main.jsx


---

## 📽️ Demo Video

🎬 You can download and view the demo video here:  
👉 [View Demo via GitHub Release](https://github.com/Anant-Joshi123/MERN-Authentication/releases/download/v1.0.0/Vite.+.React.-.Google.Chrome.2025-07-08.00-03-29.mp4)


## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Anant-Joshi123/MERN-Authentication.git
cd MERN-Authentication
2️⃣ Setup Backend
bash
Copy
Edit
cd backend
npm install
Create a .env file inside backend/ with:
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
⚠️ Do NOT push your .env to GitHub. It should be listed in .gitignore.

Start the backend server:

npm run dev
3️⃣ Setup Frontend

cd ../frontend
npm install
npm run dev
Visit frontend at:
📎 http://localhost:5173

🔐 Authentication Flow
User can register using name, dob, email, and password

On success, user data and JWT are stored in localStorage

User is redirected to /dashboard

If no token exists, user is blocked from accessing dashboard

🧾 Dashboard Page (Protected)
The dashboard page shows a static table (demo data)

Only accessible if the user is authenticated (i.e., has a valid JWT in localStorage)

You can customize the table content

🧠 Environment Variables
Create this manually in /backend/.env 


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
🧪 API Endpoints (Node.js)
✅ Register API
arduino
Copy
Edit
POST /api/auth/register
Required: name, dob, email, password

Returns: token + user

✅ Login API

POST /api/auth/login
Required: email, password

Returns: token + user


👨‍💻 Author
Anant Joshi
Frontend & Full Stack Developer
India 🇮🇳

