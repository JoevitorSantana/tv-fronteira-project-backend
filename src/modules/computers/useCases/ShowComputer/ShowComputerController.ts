import { Request, Response } from "express";
import {container} from 'tsyringe';
import { ShowComputerService } from "./ShowComputerService";

export class ShowComputerController{
    async list(request: Request, response: Response):Promise<Response>{

        const {id: _id} = request.params;
        
        const showComputerService = container.resolve(ShowComputerService);

        const computer = await showComputerService.execute(_id);

        return response.status(200).json(computer);
    };
}