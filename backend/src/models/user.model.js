import mongoose, {Schema} from 'mongoose';
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
    },
    fullname: { 
        type: String,
        required: true,
        trim: true,
        index: true
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
        required: true
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
        enum: [codeforces, codechef, leetcode, hackerrank, geeksforgeeks, codingninjas],
    },
});
export const User = mongoose.model('User', userSchema);