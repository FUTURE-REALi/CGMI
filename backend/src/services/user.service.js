import {userModel} from '../models/user.model.js';

export const createUser = async (firstname,lastname,username,email,password) => {
    if(!username || !email || !password) {
        throw new Error('All fields are required');
    }
    const newuser = userModel.create({
        fullname:{firstname,lastname},
        username,
        email,
        password
    });
    return newuser;
}