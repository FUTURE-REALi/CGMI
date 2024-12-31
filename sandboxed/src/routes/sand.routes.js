import express from 'express';
const Router = express.Router();

import {getInput} from '../controllers/input.controller.js';
import { authUser } from '../middlewares/auth.middleware.js';
import {body} from 'express-validator';

Router.post('/login', [
    body('username').custom((value, { req }) => {
        if (!value) {
            if (!req.body.email) {
                throw new Error('Either username or email is required');
            }
            return true;
        }
        return true;
    }),
    body('email').if(body('username').isEmpty()).isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
loginUser
);

Router.get('/input',authUser, getInput);

export default Router;