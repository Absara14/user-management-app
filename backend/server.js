// entry point of the application

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './db/config.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());

// ✅ Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// OR you can just use Express’s built-in parser:
app.use(express.json());

connectDB();

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



              















 