import mongoose, {Schema} from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const adminSchema = new Schema({
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
        { type: Schema.Types.ObjectId, ref: 'Problem', default: []}
    ],
    contests: [
        { type: Schema.Types.ObjectId, ref: 'Contest', default: [] }
    ],
    friends: [
        { type: Schema.Types.ObjectId, ref: 'user', default: [] }
    ],
    requests: [
        { type: Schema.Types.ObjectId, ref: 'user' }
    ],
    notifications: [
        { type: Schema.Types.ObjectId, ref: 'Notification' , default: [] }
    ],
    messages: [
        { type: Schema.Types.ObjectId, ref: 'Message' , default: [] }
    ],
    team: {
        type: Schema.Types.ObjectId, ref: 'Team'
    },
    accountLinked: {
        type: [String],
        enum: ["codeforces", "codechef", "leetcode", "hackerrank", "geeksforgeeks", "codingninjas"],
    },
});

adminSchema.methods.generateAuthToken = function() {
    return jwt.sign({_id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    }); 
};
 
adminSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    console.log('Hashed password during save:', this.password);
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

export const adminModel = mongoose.model('user', adminSchema);