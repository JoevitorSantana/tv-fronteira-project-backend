import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_URI;


export default function connectToMongoDB():void{
    if(mongoURI){
        mongoose.connect(
            mongoURI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
            },
            () => console.log('Conectado ao MongoDB')
        );
    } else {
        console.log("Falha ao conectar com o MongoDB");
    }
}