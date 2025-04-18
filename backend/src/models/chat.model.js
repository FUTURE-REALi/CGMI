import mongoose, {Schema} from "mongoose";
const chatSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['sent', 'delivered', 'read'],
        default: 'sent',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export const Chat = mongoose.model('Chat', chatSchema);