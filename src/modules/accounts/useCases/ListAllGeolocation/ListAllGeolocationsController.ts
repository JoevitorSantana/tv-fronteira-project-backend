import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllGeolocationService } from "./ListAllGeolocationService";

export class ListAllGeolocationsController{
    async list(request: Request, response: Response):Promise<Response>{
        const listAllGeolocationService = container.resolve(ListAllGeolocationService);

        const geolocations = await listAllGeolocationService.execute();

        return response.status(200).json(geolocations);
    }
}