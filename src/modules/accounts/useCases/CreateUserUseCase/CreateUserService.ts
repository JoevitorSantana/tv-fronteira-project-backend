import { hash } from 'bcrypt';
import 'reflect-metadata';
import {inject, injectable} from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
export class CreateUserService{
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async execute({name, email, password}:ICreateUserDTO):Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);
        if(userAlreadyExists){
            throw new AppError('Usuário já existe!');
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name, email, password: passwordHash
        })
    }
}