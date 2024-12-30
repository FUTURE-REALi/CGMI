import { userModel } from '../models/user.model.js';
import { createUser } from '../services/user.service.js';
import { validationResult } from 'express-validator';
import { BlackListToken } from '../models/blackListToken.model.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, username, email, password } = req.body;

    try {
        const newUser = await createUser(fullname.firstname, fullname.lastname, username, email, password);
        const token = newUser.generateAuthToken();
        res.status(201).json({ token, newUser });
        console.log(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const loginUser = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    const { email, username, password } = req.body;

    const user = await userModel.findOne({ $or: [{ email }, { username }] }).select('+password');

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ token, user });
    console.log(token);
}

export const getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}

export const logoutUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        await BlackListToken.create({ token });
        res.clearCookie('token');
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const addFriend = async (req, res, next) => {
    const { friendUserName } = req.body;

    if (!friendUserName) {
        return res.status(400).json({ message: 'Missing friendUserName' });
    }

    const friend = await userModel.findOne({ username: friendUserName });

    const user = req.user;

    if (!friend) {
        return res.status(404).json({ message: 'User not found' });
    }


    if (user.friends.includes(friend._id)) {
        return res.status(400).json({ message: 'Already friends' });
    }

    user.friends.push(friend._id);
    friend.friends.push(user._id);

    await user.save();
    await friend.save();
    res.status(200).json({ message: 'Friend added successfully' });

}

export const getFriends = async (req, res, next) => {
    const user = req.user;
    const friends = await userModel.find({ _id: { $in: user.friends } });
    const friendUsernames = friends.map(friend => friend.username); // Extract usernames
    res.status(200).json(friendUsernames);
};
