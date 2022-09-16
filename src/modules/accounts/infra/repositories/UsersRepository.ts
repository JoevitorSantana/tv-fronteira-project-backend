import Computer, { ComputerClass } from "../../../../models/Computer";
import User, { UserClass } from "../../../../models/User";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IGeolocationResponseDTO } from "../../dtos/IGeolocationResponseDTO";
import { IUserReponseDTO } from "../../dtos/IUsersReponseDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class UsersRepository implements IUsersRepository{
    
    
    async listGeolocation(): Promise<IGeolocationResponseDTO[]> {
        const userGeolocation = await User.find({}, {'geolocation.lat':1, "geolocation.lng":1, "_id": 0});    

        return userGeolocation;
    }
    
    
    /*async show(id: string): Promise<IUserReponseDTO> {
        const user = await User.findById(id);

        if(!user) throw new AppError("Usuário não encontrado!")

        return user;
    }    */
    
    async list(): Promise<IUserReponseDTO[]> {
        const user = await User.find();

        return user;
    }
    
    
    async save(updatedUser:UserClass, _id:string): Promise<UserClass> {
        const id = _id        

        const user = await User.findByIdAndUpdate(id, updatedUser)

        return user;
    }
    
    
    async findById(_id: string): Promise<UserClass> {
        const user = await User.findById({_id});

        return user;
    }    
    
    async findByEmail(email: string): Promise<UserClass> {
        const users = await User.findOne({email});
        return users;
    }    

    async create({name, email, password}: ICreateUserDTO): Promise<void> {
        await User.create({
            name, email, password
        });            
    }

    async listComputersByUser(_id: string): Promise<ComputerClass> {
        const computers = await Computer.find({user: _id});
        return computers;
    }
}

export {UsersRepository};