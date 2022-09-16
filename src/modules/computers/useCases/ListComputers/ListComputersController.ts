import { Request, Response } from "express";
import { ListComputersService } from "./ListComputersService";
import {container} from 'tsyringe';

export class ListComputersController{
    async list(request: Request, response: Response):Promise<Response>{
        
        const listComputersService = container.resolve(ListComputersService);

        const computers = await listComputersService.execute();

        return response.status(200).json(computers);
    }

    async listComputers(request: Request, response: Response):Promise<Response>{
        
        const listComputersService = container.resolve(ListComputersService);

        const computers = await listComputersService.listComputers();

        return response.status(200).json(computers);
    }
}