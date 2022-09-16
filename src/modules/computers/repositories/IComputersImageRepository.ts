import { ComputerImagesClass } from "../../../models/ComputerImages";

interface IComputerImagesRepository{
    create(computer: string, imageUrl: string[]): Promise<void>;
    listById(id: string):Promise<ComputerImagesClass>;
}

export {IComputerImagesRepository}