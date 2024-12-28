import express from 'express';

const router = express.Router();
import {body} from 'express-validator';
import { getUserProfile, loginUser, registerUser, logoutUser } from '../controllers/user.controller.js';
import { authUser } from '../middlewares/auth.middelware.js';

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
registerUser
);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
loginUser
);

router.get('/profile', authUser, getUserProfile);
router.get('./logout', authUser,logoutUser);

export default router;