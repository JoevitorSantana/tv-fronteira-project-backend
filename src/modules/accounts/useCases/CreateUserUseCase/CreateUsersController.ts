import {container} from 'tsyringe';
import { Request, Response } from "express";
import { CreateUserService } from './CreateUserService';

export class CreateUsersController{
    async create(request: Request, response: Response):Promise<Response>{
        const {name, email, password} = request.body;
        const createUserService = container.resolve(CreateUserService);
        const user = await createUserService.execute({name, email, password});
        return response.status(201).json(user).send();
    }
}