import { Schema, model } from "mongoose";

const ComputerImagesSchema = new Schema({
    computer: {
        type: Schema.Types.ObjectId,
        ref: 'Computer',
    },
    imageUrl: {
        type: String,
    },
    /*formatedUrl:{
        type: String,
    },*/
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export default model('ComputerImages', ComputerImagesSchema);


export class ComputerImagesClass{
    computer: string;
    imageUrl: string;
    //formatedUrl: string
}