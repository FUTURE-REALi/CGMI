import {userModel} from '../models/user.model.js';
import { createUser } from '../services/user.service.js';
import { validationResult } from 'express-validator';

export const registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {username, email, password} = req.body;

    const hashedPassword = await userModel.hashPassword(password);

    try {
        const newUser = await createUser(username, email, hashedPassword);
        const token = newUser.generateAuthToken();
        res.status(201).json({token,newUser});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
