# DarshanEase

An **online temple ticket booking platform** designed to streamline the process of reserving darshan (sacred viewing) slots at temples. DarshanEase provides a seamless, modern experience for devotees to book their temple visits in advance while helping temples manage visitor flow efficiently.

---

## 🎯 Features

### For Devotees
- **Easy Online Booking**: Browse temples and book darshan slots at your convenience
- **Multiple Payment Options**: Secure payment processing for ticket purchases
- **Booking History**: Track all past and upcoming bookings
- **Ticket Management**: View, download, and manage digital tickets
- **Real-time Availability**: Check temple availability and visitor capacity
- **Notifications**: Get reminders and updates about your bookings

### For Temples
- **Capacity Management**: Control daily visitor limits and time slots
- **Analytics Dashboard**: Track bookings, revenue, and visitor trends
- **Automated Operations**: Streamline check-in and crowd management
- **Admin Portal**: Manage temple information, prices, and schedules

---

## 🏗️ Project Structure

```
DarshanEase/
├── frontend/                 # React + Vite + Tailwind CSS
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Express.js + MongoDB
│   ├── server.js
│   ├── seed.js
│   ├── package.json
│   └── node_modules/
├── Documentation/            # Project documentation
└── README.md
```

---

## 🚀 Tech Stack

### Frontend
- **Framework**: React 18.2
- **Build Tool**: Vite 5.1
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Lucide React (icons)
- **HTTP Client**: Axios
- **Animations**: Framer Motion
- **PDF Export**: jsPDF + html2canvas
- **Routing**: React Router DOM 6
- **Notifications**: React Hot Toast

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 4.18
- **Database**: MongoDB with Mongoose 8.4
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Middleware**: CORS, Morgan (logging)
- **Environment**: dotenv
- **Development**: Nodemon

---

## 📋 Prerequisites

Before running the project, ensure you have:
- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud instance - MongoDB Atlas)
- **Git**

---

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/loknadh006/DarshanEase.git
cd DarshanEase
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file and configure
# Add your MongoDB connection string and JWT secret
echo "MONGODB_URI=your_mongodb_connection_string" > .env
echo "JWT_SECRET=your_secret_key" >> .env
echo "PORT=5000" >> .env

# Seed the database (optional)
npm run seed

# Start the server
npm start
# For development with hot reload
npm run dev
```

The backend will be available at `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file for API endpoint
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173` (or the URL shown in terminal)

---

## 🎮 Usage

### Starting the Application

**Terminal 1 - Backend**:
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend**:
```bash
cd frontend
npm run dev
```

### Building for Production

**Backend**:
```bash
cd backend
npm start
```

**Frontend**:
```bash
cd frontend
npm run build
npm run preview
```

---

## 📝 API Documentation

The backend API provides endpoints for:

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Temples
- `GET /api/temples` - Get all temples
- `GET /api/temples/:id` - Get temple details
- `GET /api/temples/:id/availability` - Check availability

### Bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings` - Get user bookings
- `GET /api/bookings/:id` - Get booking details
- `PUT /api/bookings/:id/cancel` - Cancel a booking

### Payments
- `POST /api/payments/process` - Process payment
- `GET /api/payments/:id` - Get payment status

---

## 🗄️ Database Schema

### Core Collections
- **Users**: Stores user account information and authentication details
- **Temples**: Temple information, timings, and pricing
- **Bookings**: User bookings with status and payment information
- **Payments**: Payment transaction records
- **TimeSlots**: Available booking time slots per temple
- **Reviews**: User reviews and ratings for temples

---

## 🔐 Environment Variables

Create a `.env` file in both frontend and backend directories:

**backend/.env**:
```
MONGODB_URI=mongodb://localhost:27017/darshanease
JWT_SECRET=your_secret_key_here
PORT=5000
NODE_ENV=development
```

**frontend/.env**:
```
VITE_API_URL=http://localhost:5000/api
```

---

## 📦 Build & Deployment

### Building the Frontend
```bash
cd frontend
npm run build
```

Output is generated in `frontend/dist/` directory.

### Running Tests
```bash
# Frontend
cd frontend
npm run lint

# Backend (implement tests as needed)
```

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is currently unlicensed. For licensing information, please contact the project maintainers.

---

## 👤 Author

**Loknadh006**  
GitHub: [@loknadh006](https://github.com/loknadh006)

---

## 📧 Support & Contact

For issues, questions, or suggestions:
- Open an issue on [GitHub Issues](https://github.com/loknadh006/DarshanEase/issues)
- Contact the maintainers directly

---

## 🙏 Acknowledgments

- Built with modern web technologies and best practices
- Inspired by the need to streamline temple visit management
- Thanks to all contributors and users

---

## 📚 Additional Resources

- [Documentation](./Documentation/)
- [Frontend Setup Guide](./frontend/README.md)
- [Backend Setup Guide](./backend/README.md)

---

**Happy Booking! 🙏**
