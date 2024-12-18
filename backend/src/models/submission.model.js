import mongoose, {Schema} from 'mongoose';
const submissionSchema = new Schema({
    language: {
        type: String,
        enum: ["C++", "Java", "Python", "JavaScript"],
        required: true,
      },
    result: {
        type: String,
        enum: ["Accepted", "Wrong Answer", "Time Limit Exceeded", "Compilation Error"],
        required: true,
      },
    submittedAt: {
        type: Date,
        default: Date.now,
      },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
    },
    problemName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
    },
});

export const submissions = moongose.model('submission',submissionSchema);