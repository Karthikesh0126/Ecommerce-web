import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config(); // Load environment variables

const app = express();

app.use(cors());
app.use(bodyParser.json( {extended: true} ));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// Ensure DB connection before starting the server
const startServer = async () => {
    try {
        // Connect to the database
        await Connection(USERNAME, PASSWORD);
        console.log('Database connection successful');

        // Start the server only after successful DB connection
        app.listen(PORT, () => {
            console.log(`Server is running successfully on PORT ${PORT}`);
        });
        DefaultData();
    } catch (error) {
        console.error('Failed to connect to the database', error.message);
    }

  
};

startServer();