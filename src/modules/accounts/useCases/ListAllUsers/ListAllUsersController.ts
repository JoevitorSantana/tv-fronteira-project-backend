import { Request, Response } from "express";
import {container} from 'tsyringe'
import { ListAllUsersService } from "./ListAllUsersService";

export class ListAllUsersController {
    async list(request: Request, response: Response):Promise<Response>{
        const listAllusersService = container.resolve(ListAllUsersService);
        const users = await listAllusersService.execute();
        return response.json(users);
    }
}