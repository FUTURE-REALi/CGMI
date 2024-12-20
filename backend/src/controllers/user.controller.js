import {user} from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import jwt from 'jsonwebtoken';

const registerUser = asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    try {

        if (
            [fullName, email, username, password].some((field) => field?.trim() === "")
        ) {
            throw new ApiError(400, "All fields are required")
        };

        const userExists = await User.findOne({ $or: [{email}, {username}] });
        if (userExists) return res.status(400).json({ message: 'User already exists' });
        

        const avatarLocalPath = req.files?.avatar[0]?.path;
        //const coverImageLocalPath = req.files?.coverImage[0]?.path;
    
        let coverImageLocalPath;
        if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
            coverImageLocalPath = req.files.coverImage[0].path
        }
        
    
        // if (!avatarLocalPath) {
        //     throw new ApiError(400, "Avatar file is required")
        // }
    
        // const avatar = await uploadOnCloudinary(avatarLocalPath)
        // const coverImage = await uploadOnCloudinary(coverImageLocalPath)
    
        // if (!avatar) {
        //     throw new ApiError(400, "Avatar file is required")
        // }
       
    
        const user = await User.create({
            fullName,
            avatar: avatar.url,
            coverImage: coverImage?.url || "",
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