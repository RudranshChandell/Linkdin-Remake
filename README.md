# Mini LinkedIn-like Community Platform

A full-stack social networking platform built with Next.js, Express.js, and an in-memory database. This project demonstrates modern web development practices with user authentication, post creation, and profile management.

## 🚀 Features

### ✅ Core Features
- **User Authentication**: Register and login with email/password
- **User Profiles**: View user profiles with bio and personal information
- **Public Post Feed**: Create and view text posts with author information
- **Profile Pages**: View individual user profiles and their posts
- **Responsive Design**: Modern, mobile-friendly UI built with Tailwind CSS

### 🎨 UI/UX Features
- Clean, modern interface inspired by LinkedIn
- Responsive design that works on all devices
- Loading states and error handling
- Form validation and user feedback
- Smooth transitions and hover effects

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **In-Memory Database** - Simple database for development
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd Linkdin-Remake
```

### 2. Backend Setup

```bash
# Navigate to server directory
cd Server

# Install dependencies
npm install

# Start the server
npm run dev
```

The server will start on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to client directory (in a new terminal)
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will start on `http://localhost:3000`

### 4. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 👥 Demo Accounts

For testing purposes, the following demo accounts are pre-configured:

| Email | Password | Role |
|-------|----------|------|
| john@demo.com | password | Software Developer |
| jane@demo.com | password | UX Designer |

## 📁 Project Structure

```
Linkdin-Remake/
├── Server/                 # Backend (Express.js)
│   ├── routes/            # API routes
│   │   ├── auth.js        # Authentication routes
│   │   ├── posts.js       # Post management routes
│   │   └── profile.js     # Profile routes
│   ├── middleware/        # Custom middleware
│   │   └── auth.js        # JWT authentication middleware
│   ├── db-simple.js      # In-memory database
│   ├── env.example       # Environment variables template
│   └── index.js          # Server entry point
├── client/                # Frontend (Next.js)
│   ├── src/app/          # App Router pages
│   │   ├── components/   # Reusable components
│   │   ├── login/        # Login page
│   │   ├── register/     # Registration page
│   │   ├── profile/      # Profile pages
│   │   └── page.js       # Home page
│   └── package.json      # Frontend dependencies
└── README.md             # This file
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Posts
- `GET /api/posts` - Get all posts with author information
- `POST /api/posts` - Create new post (requires authentication)

### Profiles
- `GET /api/profile/:userId` - Get user profile and posts

### Health Check
- `GET /api/health` - Check if server is running

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
- Connect your GitHub repository to Vercel
- Vercel will automatically detect Next.js and deploy
- Set environment variables in Vercel dashboard if needed

### Backend Deployment (Render)

1. **Create Render Account**
- Sign up at [render.com](https://render.com)

2. **Deploy Backend**
- Create new Web Service
- Connect your GitHub repository
- Set build command: `cd Server && npm install`
- Set start command: `cd Server && npm start`
- Add environment variables

### Environment Variables for Production

```env
# JWT Secret
JWT_SECRET=your_production_jwt_secret

# Frontend URL (for CORS)
FRONTEND_URL=https://your-app.vercel.app
```

## 🎯 Features Implemented

### ✅ Required Features
- [x] User Authentication (Register/Login)
- [x] User Profiles (Name, Email, Bio)
- [x] Public Post Feed
- [x] Create and Display Posts
- [x] Profile Pages with User Posts
- [x] Responsive Design

### 🎨 Extra Features
- [x] Modern UI with Tailwind CSS
- [x] Loading States and Error Handling
- [x] Form Validation
- [x] JWT Token Authentication
- [x] Password Hashing with bcrypt
- [x] Demo Accounts for Testing
- [x] Clean Code Structure
- [x] Comprehensive Documentation
- [x] In-Memory Database (No external DB required)

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Proper cross-origin resource sharing setup

## 🧪 Testing

### Manual Testing Checklist

- [x] User registration with valid data
- [x] User login with correct credentials
- [x] User login with incorrect credentials
- [x] Post creation (authenticated users)
- [x] Post creation (unauthenticated users)
- [x] Viewing public post feed
- [x] Viewing user profiles
- [x] Responsive design on mobile devices
- [x] Error handling and user feedback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is created for the CIAAN Cyber Tech Pvt Ltd internship application.

## 👨‍💻 Author

Created for Full Stack Development Internship at CIAAN Cyber Tech Pvt Ltd.

---

**Note**: This project is a demonstration of full-stack development skills and should not be used in production without proper security audits and additional features. 