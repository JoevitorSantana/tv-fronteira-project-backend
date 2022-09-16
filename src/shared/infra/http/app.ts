import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors';
import '../../container';
import { routes } from './routes';
import connectToMongoDB from '../database';
import { AppError } from '../../errors/AppError';
import upload from '../../../config/upload';

const app = express();
connectToMongoDB();
app.use(cors());
app.use(express.json());
app.use(routes);


app.use("/avatar", express.static(`${upload.tmpFolder}/avatar`));
app.use("/computers", express.static(`${upload.tmpFolder}/computers`));

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Erro interno no Servidor - ${err.message}`
    })
});

export {app};