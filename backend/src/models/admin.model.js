import mongoose, {Schema} from 'mongoose';
const adminSchema = new Schema({
    userName :{
        type: String,
        required: true,
        trim: true,
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
    role: {
        type: String,
        enum: ["superadmin", "moderator", "editor"],
        default: "moderator",
      },
    permissions: {
        canManageUsers: { type: Boolean, default: false },
        canManageProblems: { type: Boolean, default: true },
        canManageContests: { type: Boolean, default: false },
        canAccessSiteSettings: { type: Boolean, default: false },
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});


export const admin = moongose.model('Admin',adminSchema);