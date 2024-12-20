import express from "express"
import userRouter from './routes/user.routes.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/users", userRouter)
export {app}