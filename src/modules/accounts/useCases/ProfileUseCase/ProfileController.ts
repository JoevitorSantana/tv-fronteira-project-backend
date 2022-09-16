import { Request, Response } from "express";
import {container} from 'tsyringe';
import { ProfileService } from "./ProfileService";


export class ProfileController{
    async show(request: Request, response: Response):Promise<Response>{
        const { id: _id } = request.user;
        const profileService = container.resolve(ProfileService);
        const profile = await profileService.show({
            _id
        });

        return response.status(200).json(profile);

    }

    async update(request: Request, response: Response):Promise<Response>{
        const { id: _id } = request.user;

        const updatedUser = request.body;

        const profileService = container.resolve(ProfileService);
        
        const user = await profileService.updateUser(
            updatedUser, _id
        );

        return response.status(201).json(user).send();
    }

    async updateAvatar(request: Request, response: Response):Promise<Response>{
        const {id: _id} = request.user;

        //receive file

        const avatar_file = request.file?.filename;

        const updateUserAvatarUseCase = container.resolve(ProfileService);

        await updateUserAvatarUseCase.updateAvatar({
            _id,
            avatar_file
        });

        return response.status(204);

    }
}