const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/temples', require('./routes/temples'));
app.use('/api/slots', require('./routes/slots'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/donations', require('./routes/donations'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/notifications', require('./routes/notifications'));

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'OK', message: 'DarshanEase API running' }));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ success: false, message: err.message || 'Server Error' });
});

// Connect DB & start server
const PORT = process.env.PORT || 5000;
const startServer = () => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};

const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

if (mongoUri) {
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log('✅ MongoDB connected');
      startServer();
    })
    .catch((err) => {
      console.error('❌ MongoDB connection failed:', err.message);
      console.log('⚠️ Starting server without MongoDB. Some routes may fail until the database is available.');
      startServer();
    });
} else {
  console.log('⚠️ No MongoDB URI provided. Starting server without database connection.');
  startServer();
}
