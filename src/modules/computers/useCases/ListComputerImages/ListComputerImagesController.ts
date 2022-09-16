import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListComputerImagesService } from "./ListComputerImagesService";

export class ListComputerImagesController{
    async handle(request: Request, response: Response):Promise<Response>{
        const { id } = request.params;

        const listComputerImagesService = container.resolve(ListComputerImagesService);        

        const computerImages = await listComputerImagesService.execute(id);

        return response.status(200).json(computerImages);
    }
}