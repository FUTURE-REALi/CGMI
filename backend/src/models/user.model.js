import mongoose, {Schema} from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
    },
    fullname: {
        firstname: {type: String, required: true}, lastname: {type: String, required: true},
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        select: false,
        minlength:[6 , 'Minimum 6 characters required']
    },
    coverImage: {
        type: String,
        default: '/images/cover.jpg'
    },
    avatar: {
        type: String,
        default: '/images/avatar.png'
    },
    role: {
        type: String,
        default: 'user'
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    solvedProblems: [
        { type: Schema.Types.ObjectId, ref: 'Problem' }
    ],
    contests: [
        { type: Schema.Types.ObjectId, ref: 'Contest' }
    ],
    friends: [
        { type: Schema.Types.ObjectId, ref: 'User' }
    ],
    requests: [
        { type: Schema.Types.ObjectId, ref: 'User' }
    ],
    notifications: [
        { type: Schema.Types.ObjectId, ref: 'Notification' }
    ],
    messages: [
        { type: Schema.Types.ObjectId, ref: 'Message' }
    ],
    team: {
        type: Schema.Types.ObjectId, ref: 'Team'
    },
    accountLinked: {
        type: [String],
        enum: ["codeforces", "codechef", "leetcode", "hackerrank", "geeksforgeeks", "codingninjas"],
    },
});

userSchema.methods.generateAuthToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    }); 
};


userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
});

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};



export const userModel = mongoose.model('user', userSchema);