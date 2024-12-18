import mongoose, {Schema} from "mongoose";
const notificationSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['unread', 'read'],
        default: 'unread',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export const Notification = mongoose.model('Notification', notificationSchema);