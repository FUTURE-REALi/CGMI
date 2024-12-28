import {userModel} from '../models/user.model.js';
import { createUser } from '../services/user.service.js';
import { validationResult } from 'express-validator';
import {BlackListToken} from '../models/blackListToken.model.js';

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

export const loginUser = async(req,res,next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()});
    }

    const {email, password} = req.body;

    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    const isMatch = await user.matchPassword (password);

    const token = user.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({token,user});
}

export const getUserProfile = async(req,res,next) => {
    res.status(200).json(req.user);
}

export const logoutUser = async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        await BlackListToken.create({token});
        res.clearCookie('token');
        res.status(200).json({message: 'Logged out successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}