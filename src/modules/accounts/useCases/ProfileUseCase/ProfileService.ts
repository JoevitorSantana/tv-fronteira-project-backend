import { compare, hash } from 'bcrypt';
import {injectable, inject} from 'tsyringe';
import { UserClass } from '../../../../models/User';
import { IStorageProvider } from '../../../../shared/container/providers/StorageProvider/IStorageProvider';
import { AppError } from '../../../../shared/errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest{
    _id: string;    
}
interface IRequestUpload{
    _id: string;
    avatar_file: any;
}

export interface IUpdateUserRequest{
    _id: string;
    name: string;
    lastName: string;    
    password: string;
    cep: string;
    phone: string;
    city: string;
    state: string;
    geolocation: [
        {
            lat: number;
            lng: number;
        }
    ],
    old_password: string;
}



@injectable()
export class ProfileService{
    constructor(
      @inject("UsersRepository")
      private usersRepository: IUsersRepository,
      @inject("StorageProvider")
      private storageProvider: IStorageProvider,  
    ){}

    async show({_id}:IRequest):Promise<UserClass>{
        const user = await this.usersRepository.findById(_id)

        if(!user) throw new AppError("Usuário não existe"!);

        return user;
    }

    async updateUser(updatedUser:UserClass, _id: string):Promise<UserClass>{        
        const user = await this.usersRepository.findById(_id);

        if(!user){
            throw new AppError("Usuário não existe!");
        }

        return this.usersRepository.save(updatedUser, _id);

    }    

    async updateAvatar({_id, avatar_file}:IRequestUpload):Promise<void>{
        const user = await this.usersRepository.findById(_id);        

        if(user.avatar){
            await this.storageProvider.delete(user.avatar, "avatar")
        }

        await this.storageProvider.save(avatar_file, "avatar");

        user.avatar = avatar_file;
        user.avatarUrl = `http://localhost:3333/avatar/${avatar_file}`;

        await this.usersRepository.save(user, _id);
    }
}

