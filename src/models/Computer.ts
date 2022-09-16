import { Schema, model } from "mongoose";
import { UserClass } from "./User";

const ComputerSchema = new Schema({
    images: [
        {
            imageUrl:{
                type: String,
            }
        }
    ],
    processor: {
        type: String,
        required: true,
    },
    videoCard: {
        type: String,
        required: true,
    },
    storage: {
        type: String,
        required: true,
    },
    memory: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    votes:{
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    imageUrl:{
        type: String,
    }
});

export default model('Computer', ComputerSchema);

export class ComputerClass {
    _id: string;
    processor: string;
    videoCard: string;
    description: string;
    value: number;
    ratings: number;
    votes: number;
    user: UserClass;
    storage: string;
    memory: string;
    imageUrl: string;
    images: [
        {
            imageUrl: string;
        }
    ]
}