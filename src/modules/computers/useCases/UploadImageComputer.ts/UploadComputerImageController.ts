import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadComputerImageService } from "./UploadComputerImageService";

interface IFiles{
    filename: string;
}

export class UploadComputerImageController{
    async handle(request: Request, response: Response):Promise<Response>{
        const {id} = request.params;
        const images = request.files as IFiles[];

        const uploadComputerImageService = container.resolve(UploadComputerImageService);

        const images_name = images.map((file) => file.filename);

        await uploadComputerImageService.execute({
            computer: id, imageUrl: images_name
        })

        return response.status(201).send()
    }
};