import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListComputersByUserService } from "./ListComputerByUserService";

export class ListComputersByUserController{
    async list(request: Request, response:Response):Promise<Response>{
        const {id: _id} = request.user;

        const listComputersByUserService = container.resolve(ListComputersByUserService);

        const computers =  await listComputersByUserService.execute(_id);

        return response.status(200).json(computers);
    }
}