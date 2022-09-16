import {inject, injectable} from 'tsyringe'
import { IGeolocationResponseDTO } from '../../dtos/IGeolocationResponseDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class ListAllGeolocationService{
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ){}

    async execute():Promise<IGeolocationResponseDTO[]>{
        const geolocations = await this.usersRepository.listGeolocation();          
        return geolocations;        

    }
}