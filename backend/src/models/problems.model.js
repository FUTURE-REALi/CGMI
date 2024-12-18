import mongoose, {Schema} from 'mongoose';
const problemSchema = new Schema({
    problemName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
    },
    isSolved: { 
        type: bool,
        required: true,
        trim: true,
        index: true
    },
    difficulty: {
        type: String,
        required: true,
        unique: true,
        trime: true,
        index: true,
        lowercase: true
    },
    topics: {
        type: String,
        required: true
    },
    companies: {
        type: String,
        required: true
    },
    hint: {
        type: String,
        required: true
    },
    problemStatement: {
        type: String,
        required: true
    },
    example:[
        {
            exampleno:{ type: Number,required: true},
            input:{type: String,reuired: true},
            output:{type: String,reuired: true},
            explanation:{type: String,reuired: true}
        }
    ],
    constraints: {
        type: String,
        required: true
    },
    accepted: {
        type: Number,
        required: true
    },
    submissions: {
        type: Number,
        required: true
    },
    acceptanceRate: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    dislikes: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    activeUsers: {
        type: Number,
        required: true
    },
    testCase: {
        type: String,
        required: true
    },
    testcaseHidden: {
        type: String,
        required: true,
    },
    

});
export const Problem = mongoose.model('Problem', problemSchema);