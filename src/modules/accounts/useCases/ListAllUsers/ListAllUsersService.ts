import {inject, injectable} from 'tsyringe';
import { UserClass } from '../../../../models/User';
import { IUserReponseDTO } from '../../dtos/IUsersReponseDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class ListAllUsersService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute():Promise<IUserReponseDTO[]>{
        const users = await this.usersRepository.list();
        return users;
    }
}