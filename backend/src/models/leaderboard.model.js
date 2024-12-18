import mongoose,{Schema} from "mongoose";
const leaderboardSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
    },
    score: {
        type: Number,
        required: true,
    },
    rank: {
        type: Number,
        required: true,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
});
export const leaderboards = mongoose.model('leaderboard',leaderboardSchema);