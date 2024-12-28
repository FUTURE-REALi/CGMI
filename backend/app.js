import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import connectDB from './src/config/db.js';
connectDB();

/* import routes */
import userRoutes from './src/routes/user.route.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', userRoutes);

export default app;