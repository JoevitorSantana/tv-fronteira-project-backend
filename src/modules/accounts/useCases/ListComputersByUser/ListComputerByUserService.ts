import {injectable, inject} from 'tsyringe';
import { ComputerClass } from '../../../../models/Computer';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class ListComputersByUserService{

    
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ){}

    async execute(_id:string):Promise<ComputerClass>{
        const computers = await this.usersRepository.listComputersByUser(_id);

        return computers;
    }
}