import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

import connectDB from './src/config/db.js';
connectDB();

/* import routes */
import userRoutes from './src/routes/user.route.js';
import leaderboardRoutes from "./src/routes/leaderboard.js";


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', userRoutes);
app.use("/api/leaderboard",leaderboardRoutes)

export default app;