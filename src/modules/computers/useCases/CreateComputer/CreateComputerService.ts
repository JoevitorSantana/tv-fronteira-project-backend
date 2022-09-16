import {inject, injectable} from 'tsyringe';
import { IStorageProvider } from '../../../../shared/container/providers/StorageProvider/IStorageProvider';
import { AppError } from '../../../../shared/errors/AppError';
import { IUsersRepository } from '../../../accounts/repositories/IUsersRepository';
import { ICreateComputerDTO } from '../../dto/ICreateComputerDTO';
import { IComputerRepository } from '../../repositories/IComputerRepository';

@injectable()
export class CreateComputerService {
    
    constructor(
        @inject("ComputerRepository")
        private computerRepository: IComputerRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("StorageProvider")
        private storageProvider: IStorageProvider
    ){}

    async execute({description, memory, processor, storage, user, value, videoCard, imageUrl}:ICreateComputerDTO):Promise<void>{
        const usuario = await this.usersRepository.findById(user);

        const verifyIfUserAlreadyAddedAnComputer = await this.computerRepository.findComputerByUser(user);

        if(verifyIfUserAlreadyAddedAnComputer.user){
            throw new AppError('Você já possui um Computador cadastrado');
        }
        
        if(!usuario.city){
            throw new AppError("Insert your city to participate!");
        }

        if(!usuario.state){
            throw new AppError("Insert your state to participate!");
        }

        if(!usuario.geolocation){
            throw new AppError("Insert your geolocation to participate!");
        }

        await this.storageProvider.save(imageUrl, "computers");

        const url = `${process.env.APP_URL}/computers/${imageUrl}`

        await this.computerRepository.create({
            description, memory, processor, storage, user, value, videoCard, imageUrl: url
        })
    }
}