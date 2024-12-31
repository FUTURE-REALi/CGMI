import express from 'express';

const router = express.Router();
import {body} from 'express-validator';
import { getUserProfile, loginUser, registerUser, logoutUser, addFriend, getFriends} from '../controllers/user.controller.js';
import { authUser } from '../middlewares/auth.middelware.js';

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
registerUser
);

router.post('/login', [
    body('username').custom((value, { req }) => {
        if (!value) {
            if (!req.body.email) {
                throw new Error('Either username or email is required');
            }
            return true; // Email will be validated separately
        }
        return true;
    }),
    body('email').if(body('username').isEmpty()).isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
loginUser
);

router.get('/profile', authUser, getUserProfile);
router.get('/logout', authUser,logoutUser);
router.get('/getfriends', authUser, getFriends);
router.post('/addfriend', authUser, addFriend);
export default router;