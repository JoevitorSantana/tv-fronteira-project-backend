import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import {injectable, inject} from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import auth from '../../../../config/auth';


interface IRequest{
    email: string;
    password: string;   
}

interface IResponse{
    user: {
        name: string;
        lastName: string;
        email: string;
        avatarUrl: string;
        city: string;
        state: string;
        phone: string;           
    },
    token: string;
}

@injectable()
export class AuthenticateUserService{
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ){}

    async execute({email, password}:IRequest):Promise<IResponse>{
        const user = await this.usersRepository.findByEmail(email);

        const id = user._id.toString();        

        const {secret_token, expires_in_token} = auth;

        if(!user){
            throw new AppError("Email ou senha incorretos!");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new AppError("Email ou senha incorretos!");
        }

        const token = sign({}, secret_token, {
            subject: id,
            expiresIn: expires_in_token
        })

        const tokenReturn: IResponse = {
            token,
            user:{
                name: user.name,
                email: user.email,
                avatarUrl: user.avatarUrl,
                city: user.city,
                state: user.state,
                phone: user.phone,
                lastName: user.lastName
            }
        }

        return tokenReturn;
    }
}