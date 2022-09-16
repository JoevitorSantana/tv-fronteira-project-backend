import { Request, Response } from "express";
import {container} from 'tsyringe';
import { CreateComputerService } from "./CreateComputerService";

export default class CreateComputerController{
    async create(request: Request, response: Response):Promise<Response>{
        const {id: user} = request.user
        const {processor, memory, value, storage, description, videoCard} = request.body;
        
        const imageUrl = request.file?.filename;

        const createComputerService = container.resolve(CreateComputerService);

        const computer = await createComputerService.execute({
            processor, memory, value, storage, description, videoCard, user, imageUrl
        })

        return response.status(201).json(computer);
    }
}