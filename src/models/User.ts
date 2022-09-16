import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,        
    },
    email: {
        type: String,
        //required: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatar: {
        type: String,        
    },
    avatarUrl:{
        type: String,
    },
    cep: {
        type: String,
    },
    city:{
        type: String,
    },
    state: {
        type: String,        
    },
    geolocation: [
        {
            lat: {
                type: Number,
            },
            lng: {
                type: Number,
            },
        }
    ],
    lat: {type: Number},
    lng: {type: Number},
    createdAt: {
        type: Date,
        default: Date.now,
    },
    phone:{
        type: String,
    },
    role: {
        type: String,
        default: 'user',
    }
});

export default model('User', UserSchema);

export class UserClass{
    _id: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    avatar: string;
    avatarUrl: string;
    city: string;
    state: string;
    geolocation: [
        {
            lat: number;
        },
        {
            lng: number;
        },
    ];
    createdAt: Date;
    role: string;
    phone: string;


    constructor(){}
};