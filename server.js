const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.json({
        message: 'Contact Management System API is running!'
    });
});

// Contact routes
app.use('/api/contacts', contactRoutes);

// Database and server connection
const PORT = process.env.PORT || 5000;

async function startServer() {
    try {
        const connection = await db.getConnection();

        console.log('MySQL Database Connected Successfully!');

        connection.release();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error('Database Connection Failed:', error.message);
        process.exit(1);
    }
}

startServer();