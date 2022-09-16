import {classToClass} from "class-transformer";
import { UserClass } from "../../../models/User";
import { IUserReponseDTO } from "../dtos/IUsersReponseDTO";

class UserMap {

    static toDTO({email, name, _id, avatar, city, phone, state, geolocation, lastName}:UserClass):IUserReponseDTO{
        const user = classToClass({
            email, name, _id, avatar, city, phone, state, geolocation, lastName
        })
        return user;
    }
}

export {UserMap};