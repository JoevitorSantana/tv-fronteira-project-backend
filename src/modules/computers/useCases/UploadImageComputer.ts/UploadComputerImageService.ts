import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/container/providers/StorageProvider/IStorageProvider";
import { ComputerImagesRepository } from "../../infra/repositories/ComputerImagesRepository";

interface IRequest{
    computer: string;
    imageUrl: string[];
}

@injectable()
export class UploadComputerImageService {
    constructor(
        @inject("ComputerImagesRepository")
        private computerImagesRepository: ComputerImagesRepository,
        @inject("StorageProvider")
        private storageProvider: IStorageProvider
    ){}

    async execute({computer, imageUrl}:IRequest){
        imageUrl.map(async(image) => {            
            await this.computerImagesRepository.create(computer, imageUrl)
            await this.storageProvider.save(image, "computers");
        })
    }
}