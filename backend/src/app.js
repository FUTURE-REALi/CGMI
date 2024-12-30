
import express from 'express';
// import messageRoutes from './routes/message.routes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
// import notificationRoutes from './routes/notification.routes.js';
// import chatRoutes from './routes/chat.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/users', userRoutes);
// app.use('/notifications', notificationRoutes);
// app.use('/chats', chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;