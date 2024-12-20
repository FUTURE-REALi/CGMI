import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const registerUser = asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    try {

        if (
            [email, username, password].some((field) => field?.trim() === "")
        ) {
            throw new ApiError(400, "All fields are required")
        };

        const userExists = await User.findOne({ $or: [{email}, {username}] });
        if (userExists) return res.status(400).json({ message: 'User already exists' });
        
       
    
        const user = await User.create({
            email, 
            password,
            username: username.toLowerCase()
        })
    
        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        )
    
        if (!createdUser) {
            throw new ApiError(500, "Something went wrong while registering the user")
        }
    
        return res.status(201).json(
            new ApiResponse(200, createdUser, "User registered Successfully")
        )
        
    } catch (error) {
        console.error("Error with User.findOne:", error.message);
        res.status(500).json({ message: "Server error" });
    }
});