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


import connectDB from './src/db/db.js';
connectDB();


app.get('/', (req, res) => {
    res.send('Hello World!');
  });


export default app;