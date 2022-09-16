import { ComputerClass } from "../../../models/Computer";
import { UserClass } from "../../../models/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO"
import { IGeolocationResponseDTO } from "../dtos/IGeolocationResponseDTO";
import { IUpdateRequest } from "../dtos/IUpdateUserDTO";
import { IUserReponseDTO } from "../dtos/IUsersReponseDTO";

interface IUsersRepository{
    create(data: ICreateUserDTO):Promise<void>;
    findByEmail(email: string): Promise<UserClass>;
    findById(_id: string):Promise<UserClass>;
    save(updatedUser: UserClass, _id: string):Promise<UserClass>;
    list(): Promise<IUserReponseDTO[]>;
    //show(id: string):Promise<IUserReponseDTO>;
    listComputersByUser(_id:string):Promise<ComputerClass>;
    listGeolocation():Promise<IGeolocationResponseDTO[]>;
}

export {IUsersRepository}