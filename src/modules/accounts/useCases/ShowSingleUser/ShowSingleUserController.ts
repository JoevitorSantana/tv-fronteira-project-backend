import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowSingleUserService } from "./ShowSingleUserService";

export class ShowSingleUserController{
    async show (request: Request, response: Response):Promise<Response>{
        const {id: _id} = request.params;

        const showSingleProfileService = container.resolve(ShowSingleUserService);

        const user = await showSingleProfileService.showProfile(_id);

        return response.json(user);
        
    }
}