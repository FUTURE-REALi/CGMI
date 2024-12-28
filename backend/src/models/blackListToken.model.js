import mongoose,{Schema} from 'mongoose';

const blackListTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // Token will be removed after 24 hours (24 * 60 * 60 seconds)
    }
});

export const BlackListToken = mongoose.model('BlackListToken', blackListTokenSchema);