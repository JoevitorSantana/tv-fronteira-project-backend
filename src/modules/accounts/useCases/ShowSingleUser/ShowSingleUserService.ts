import { inject, injectable } from "tsyringe";
import { UserClass } from "../../../../models/User";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserReponseDTO } from "../../dtos/IUsersReponseDTO";
import { UserMap } from "../../mapper/UserMap";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class ShowSingleUserService{

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}

    async showProfile(_id: string):Promise<IUserReponseDTO>{
        const userModel = await this.usersRepository.findById(_id);

        if(!userModel){
            throw new AppError("Usuário não encontrado!")
        }

        const {name, lastName, avatar, email, phone, state, city, avatarUrl, password, role} = userModel;

        const user = {
            name, lastName, avatar, email, phone, state, city, avatarUrl, password, role
        }

        return user;
    }
}