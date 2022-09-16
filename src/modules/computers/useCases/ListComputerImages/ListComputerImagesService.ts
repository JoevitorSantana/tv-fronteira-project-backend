import { inject, injectable } from "tsyringe";
import { ComputerImagesClass } from "../../../../models/ComputerImages";
import { AppError } from "../../../../shared/errors/AppError";
import { IComputerRepository } from "../../repositories/IComputerRepository";
import { IComputerImagesRepository } from "../../repositories/IComputersImageRepository";


@injectable()
export class ListComputerImagesService {
    constructor(
        @inject("ComputerImagesRepository")
        private computerImagesRepository: IComputerImagesRepository,  
        @inject("ComputerRepository")
        private computerRepository: IComputerRepository,       
    ){}

    async execute( id:string ):Promise<ComputerImagesClass>{

        const computer = await this.computerRepository.findById(id);

        if(!computer)throw new AppError("Este computador não existe");

        const computerImages = await this.computerImagesRepository.listById(id);

        return computerImages;
    }
}