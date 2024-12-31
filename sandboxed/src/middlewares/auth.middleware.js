import { userModel } from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import {BlackListToken} from '../models/blackListToken.model.js';


export const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }


    const isBlacklisted = await BlackListToken.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        req.user = user;

        return next();

    } catch (err) {
        const BlackListToken = new BlackListToken({ token });
        return res.status(401).json({ message: 'Unauthorized' });
    }
}